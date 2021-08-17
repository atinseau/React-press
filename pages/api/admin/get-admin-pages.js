
import { NextApiRequest, NextApiResponse } from "next"
import { qfetch } from "../../../graphql"
import { getAdminPageByType, getAdminPageMetaById } from "../../../graphql/schema/query_admin"
import Ajv, {JSONSchemaType} from "ajv"

const AdminPage = {
	id: null,
	slug: null,
	domain: null,
	icons: null,
	content: null,
	editable_type: null,

	cpy () {
		const n = {...this}
		this.id = null
		this.slug = null
		this.icons = null
		this.domain = null
		this.content = null
		this.title = null
		this.editable_type = null
		return n
	},

	toJSON() {
		const {create,cpy , toJSON, valid, ...j} = this
		return j
	},
	async create (id, slug, title, content) {
		this.id = id
		this.title = title
		this.slug = slug
		this.content = content

		if (id != null) {
			const { meta_model: meta} = await qfetch(getAdminPageMetaById, { id: this.id })
			meta.forEach((e) => {
				const meta_n = e.meta_type.name
				switch (meta_n) {
					case "domain":
						this.domain = e.value
						break;
					case "icons":
						this.icons = e.value
						break
					case "editable_type":
						this.editable_type = e.value
				}
			})
		}
		return this.cpy()
	}, 
	valid () {
		const ajv = new Ajv()

		const schema = {
			type: "object",
			properties: {
				icons: {type: "string"},
				id: {type: "string"},
				slug: {type: "string"},
				domain: {type: "string"},
				content: {type: "string"},
				title: {type: "string"},
				editable_type: {type: "string"}
			},
			required: ['icons', 'id', 'slug', 'domain', 'content', 'title', 'editable_type'],
			additionalProperties: false
		}

		const validate = ajv.compile(schema)
		const e = validate(this.toJSON())
		if (!e) console.log(validate.errors)
		return e
	}
}


/**
 * 
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function getAdminPages (req, res) {
	
	let adminPages = []
	const dashboard = await AdminPage.create(null, "", "Dashboard", null)
	const settings = await AdminPage.create(null, "/settings", "Settings", null)

	dashboard.domain = "/admin"
	dashboard.icons = "home-3-line"
	settings.domain = "/admin"
	settings.icons = "settings-3-line"

	adminPages.push(dashboard)
	let types  = (await qfetch(getAdminPageByType, { type: "admin_pages" })).types[0]
	for(let i = 0; i < types.models.length; i++) {
		const model = types.models[i]
		const adminPage = await AdminPage.create(model.id, model.slug,model.title, model.content)
		if (adminPage.valid())
			adminPages.push(adminPage.toJSON())
	}
	adminPages.push(settings)
	return res.status(200).json(adminPages)
}
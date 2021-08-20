
import { NextApiRequest, NextApiResponse } from "next"
import { qfetch } from "../../../graphql/function"
import { adminMeta } from "../../../graphql/schema/query_admin"
import { createModel, getModelsByType } from "../../../graphql/schema/global"


const defaultPage = [
	{
		id: null,
		slug: "",
		content: "content",
		title: "Dashboard",
		domain: "/admin",
		online: true,
		editable_type: null,
		icons: "home-3-line"
	},
	{
		id: null,
		slug: "/settings",
		content: "content",
		title: "Settings",
		domain: "/admin",
		online: true,
		editable_type: null,
		icons: "settings-3-line"
	}
]

/**
 * 
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async function getAdminPages (req, res) {
	
	let adminPages = []
	
	adminPages.push(defaultPage[0])
	let types  = (await qfetch(getModelsByType, { type: "admin_pages" })).types[0]
	for(let i = 0; i < types.models.length; i++) {
		const model = types.models[i]
		const adminPage = await createModel(adminMeta, model)
		if(adminPage.isValid())
			adminPages.push(adminPage.toJSON())
	}
	adminPages.push(defaultPage[1])
	return res.status(200).json(adminPages)
}
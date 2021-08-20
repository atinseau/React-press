import { gql } from 'graphql-request'
import { qfetch } from "../function"
import Ajv from "ajv"


const defaultModels = `
	slug
	content
	id
	created_at
	updated_at
	type_id
	online
	title
`

/**
 * 
 * @example qfetch(this, { id: x })
 * @returns {Array} data
 */
const getMetaModelById = gql`
 query MetaModelById($id: uuid) {
	 meta_model(where: {model: {id: {_eq: $id}}}) {
		 value
		 meta_type {
			 name
		 }
	 }
 }
`

/**
 * 
 * @example qfetch(this, { type: x })
 * @returns {Array} data
 */
 const getModelsByType = gql`
 query ModelsByType($type: String) {
	 types(where: {name: {_eq: $type}}) {
		 models {
			 ${defaultModels}
		 }
	 }
 }
`

/**
 * 
 * @param {String} query 
 */
const queryToObject = (query) => {
	const array = query.split('\n').filter(e => e.length > 0).map(e => e.replace('\t', ''))
	const obj = {}
	array.map((value) => {
		obj[value] = null
	})
	return obj
}


const Model = {
	metaGetted: false,
	cpy () {
		const n = {...this}
		Object.keys(this).forEach((e) => {
			if (typeof this[e] !== "function")
				this[e] = null
		})
		this.metaGetted = false
		return n
	},
	toJSON() {
		const {cpy, fetch, isValid, toJSON, metaGetted, ...j} = this
		return j
	},
	async fetch (model) {
		Object.keys(model).map((key) => {
			if (typeof this[key] != "undefined")
				this[key] = model[key]
		})
		if (this.id != null) {
			const data = await qfetch(getMetaModelById, { id: this.id })
			if (data) {
				const { meta_model: meta } = data
				this.metaGetted = true
				meta.map((m) => {
					if (typeof this[m.meta_type.name] != "undefined")
						this[m.meta_type.name] = m.value
				})
			}
		}
		return this.cpy()
	},
	isValid() {
		if (this.metaGetted) {
			const ajv = new Ajv()
			const properties = {}
			const keys = Object.keys(this.toJSON())
			keys.map((e) => {
				properties[e] = {
					type: (typeof this[e]).toLowerCase()
				}
			})
			const schema = {
				type: "object",
				properties: properties,
				required: keys,
				additionalProperties: false
			}
			const validate = ajv.compile(schema)
			const e = validate(this.toJSON())
			if (!e) console.log(validate.errors)
			return e
		}
		return false
	}
}

const createModel = async (property, model) => {
	const m = {...Model, ...queryToObject(defaultModels + property)}

	return {
		...await m.fetch(model)
	}
}


export {
	defaultModels,
	getMetaModelById,
	getModelsByType,
	queryToObject,
	Model,
	createModel
}
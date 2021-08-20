import { gql } from 'graphql-request'

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
 * @example qfetch(this, { type: x })
 * @returns {Array} data
 */
const getMetaTypeByType = gql`
	query MetaTypeByType($type_id: uuid) {
		meta_type(where: {type_id: {_eq: $type_id}}) {
			id
			name
		}
	}
`

const getMetaByMetaTypeAndModel = gql`
	query MetaByMetaTypeAndModel($meta_type: uuid = "", $model: uuid = "") {
		meta_model(where: {meta_type_id: {_eq: $meta_type}, _and: {model_id: {_eq: $model}}}) {
			value
			id
		}
	}
`

export {
	defaultModels,
	getMetaModelById,
	getModelsByType,
	getMetaTypeByType,
	getMetaByMetaTypeAndModel
}
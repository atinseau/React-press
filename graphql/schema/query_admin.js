import { gql } from 'graphql-request'


/**
 * 
 * @example qfetch(this, { type: x })
 * @returns {Array} data
 */
const getAdminPageByType = gql`
	query getAdminPageByType($type: String) {
		types(where: {name: {_eq: $type}}) {
			models {
				slug
				content
				id
				title
			}
		}
	}
`

/**
 * 
 * @example qfetch(this, { id: x })
 * @returns {Array} data
 */
const getAdminPageMetaById = gql`
	query MyQuery($id: uuid) {
		meta_model(where: {model: {id: {_eq: $id}}}) {
			value
			meta_type {
				name
			}
		}
	}
`

export {
	getAdminPageByType,
	getAdminPageMetaById
}
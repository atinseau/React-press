import { gql } from 'graphql-request'

const getModels = gql`
	query {
		models {
			content
			id
			slug
			title
			type {
				name
				id
			}
		}
	}
`

const getModelsByType = gql`
	query ($name: String) {
		models(where: {type: {name: {_eq: $name}}}) {
			content
			id
			slug
			title
		}
	}
  
`

const updateModel = gql`
	mutation ( $id: uuid, $type_id: uuid) {
		update_models(where: {id: {_eq: $id}}, _set: {type_id: $type_id}) {
		affected_rows
		}
  	}
`

export {
	getModels,
	updateModel,
	getModelsByType
}
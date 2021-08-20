import { request } from 'graphql-request'

/**
 * 
 * @param {TemplateStringsArray} query 
 */
export const qfetch = async (query, data = null) => {
	
	const d = await request(process.env.ENDPOINT, query, data).catch(() => {
		console.log("Graph request fail")
		return null
	})
	return d
}
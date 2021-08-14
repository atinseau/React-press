import { request } from 'graphql-request'



/**
 * 
 * @param {TemplateStringsArray} query 
 */
const qfetch = async (query, data = null) => {
	const d = await request(process.env.ENDPOINT, query, data)
	return d
}

export {
	qfetch
}
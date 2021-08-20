import { NextApiRequest, NextApiResponse } from "next"
import { qfetch } from '../../../graphql/function'
import { getMetaByMetaTypeAndModel, getModelsByType } from '../../../graphql/schema/global'

/**
* 
* @param {NextApiRequest} req
* @param {NextApiResponse} res
*/
export default async function MetaByMetaTypeAndModel (req, res) {

	const { meta_type, model } = req.body

	if (meta_type == undefined || meta_type == null || model == undefined || model == null) {
		res.status(204).json({
			message: "Type is undefined"
		})
	}

	const data = (await qfetch(getMetaByMetaTypeAndModel, { meta_type, model })).meta_model[0]

	res.status(200).json(data)
}
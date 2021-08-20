import { NextApiRequest, NextApiResponse } from "next"
import { qfetch } from '../../../graphql/function'
import { getModelsByType } from '../../../graphql/schema/global'

/**
* 
* @param {NextApiRequest} req
* @param {NextApiResponse} res
*/
export default async function ModelsByType (req, res) {

	const { type } = req.body

	if (type == undefined || type == null) {
		res.status(204).json({
			message: "Type is undefined"
		})
	}

	const { models } = (await qfetch(getModelsByType, { type })).types[0]

	res.status(200).json(models)
}
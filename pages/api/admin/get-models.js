import { NextApiRequest, NextApiResponse } from "next"
import { qfetch } from '../../../graphql/function'
import { getModelsByType } from '../../../graphql/schema/global'

/**
* 
* @param {NextApiRequest} req
* @param {NextApiResponse} res
*/
export default async function getModels (req, res) {

	const { editable_type: type } = req.body

	const { models } = (await qfetch(getModelsByType, { type })).types[0]

	res.status(200).json(models)
}
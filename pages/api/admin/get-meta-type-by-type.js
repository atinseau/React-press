import { NextApiRequest, NextApiResponse } from "next"
import { qfetch } from '../../../graphql/function'
import { getMetaTypeByType } from "../../../graphql/schema/global"

/**
* 
* @param {NextApiRequest} req
* @param {NextApiResponse} res
*/
export default async function MetaTypeByType (req, res) {

	const { type } = req.body

	if (type == undefined || type == null) {
		return res.status(200).json({
			message: "Type is undefined"
		})
	}

	console.log(type)

	const { meta_type } = (await qfetch(getMetaTypeByType, { type_id: type }))

	res.status(200).json(meta_type)
}
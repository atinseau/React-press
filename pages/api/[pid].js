
import { NextApiRequest, NextApiResponse } from "next"
import { getModels, updateModel, getModelsByType, qfetch } from "../../graphql"

/**
 * 
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {

	const { pid, name } = req.query

	switch (pid) {
		case "models":
			const data = await qfetch(name ? getModelsByType : getModels, {
				name
			})
			return res.status(200).json(data)
		default:
			res.status(200).json({
				status: 404
			})
	}
}
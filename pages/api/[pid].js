
import { NextApiRequest, NextApiResponse } from "next"

/**
 * 
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */
export default async (req, res) => {

	const { pid, name } = req.query

	res.status(200).json({
		status: 404
	})

}
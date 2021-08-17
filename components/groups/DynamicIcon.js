import { useEffect, useState } from 'react'
import { renderToString } from 'react-dom/server'
import { RiErrorWarningFill, RiLoaderFill } from 'react-icons/ri'
import parse from 'html-react-parser'
import axios from 'axios'

/**
 * @param {Object} props
 * @param {String} props.name
 * @returns 
 */
const DynamicIcon = ({ name }) => {

	const [icon, setIcon] = useState(null)
	const [ready, setReady] = useState(false)

	useEffect(() => {
		if (!ready) {
			axios.get(process.env.CDN_ICON + name + ".svg").then(({data}) => {
				setIcon(data)
				setReady(true)
			}).catch(() => {
				setIcon(renderToString(<RiErrorWarningFill/>))
				setReady(true)
			})
		}
	})
	return (icon ? parse(icon) : <RiLoaderFill/>)
}

export default DynamicIcon
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
	
	useEffect(() => {
		let sub = true
		axios.get(process.env.CDN_ICON + name + ".svg").then(({data}) => {
			if(sub)
				setIcon(data)
		}).catch(() => {
			if (sub)
				setIcon(renderToString(<RiErrorWarningFill/>))
		})
		return () => sub = false
	})

	return (icon ? parse(icon) : <RiLoaderFill/>)
}

export default DynamicIcon
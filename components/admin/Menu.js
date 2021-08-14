import { Button } from "..";
import { useState, useEffect } from "react";
import { useRouter } from 'next/router'
import { RiMenu2Fill, RiErrorWarningFill } from 'react-icons/ri'

import Link from 'next/link'
import dynamic from 'next/dynamic'

/**
 * @param {Object} props
 * @param {String} props.name
 * @returns 
 */
const DynamicIcon = ({ name }) =>  {
	
	const [ready, setReady] = useState(false)
	const [Icon, setIcon] = useState(null)
	const path = name.substr(0,2).toLowerCase() + "/" + name

	useEffect(() => {
		if(!ready) {
			console.log("loaded")
			setIcon(dynamic(() => 
				import(`@react-icons/all-files/${path}.esm.js`)
				.then((module => module[name]))
				.catch(err => {
					console.log(err)
					return () => <RiErrorWarningFill/>
				})
			))
			setReady(true)
		}
	}, [ready])

	return ((Icon) ? <Icon/> : null)	
}

const AdminMenu = ({pages = [], active, setActive}) => {

	const { asPath } = useRouter()

	const isSelected = (slug) => {
		if (slug == asPath)
			return true
		return false
	}

	return (
		<nav id="admin__menu" className={(active) ? 'active' : null}>
			<div className="header">
				<h1>ReactPress</h1>
				<Button className="dropdown" onClick={() => setActive(!active)}>
					<RiMenu2Fill/>
				</Button>
			</div>
			
			<ul className={(active) ? 'active' : null}>
				{pages.map((page, i) => <Link href={page.domain + page.slug} key={i}>
					<li className={(isSelected(page.domain + page.slug) ? 'selected' : null)}>
						<DynamicIcon name={page.icons}/>
						<p>{page.name}</p>
					</li>
				</Link>)}
			</ul>
		</nav>
	)
}

AdminMenu.defaultProps = {
	pages: [
		{
			slug: '',
			domain: '/admin',
			name: "Dashboard",
			icons: "RiHome3Line"
		},
		{
			slug: '/pages',
			domain: '/admin',
			name: "Pages",
			icons: "RiPagesLine"
		},
		{
			slug: '/settings',
			domain: '/admin',
			name: "Settings",
			icons: "RiSettings4Line"
		}
	]
}



export default AdminMenu;
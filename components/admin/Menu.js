import { Button, DynamicIcon } from "..";
import React, { useState, useEffect } from "react";
import router, { useRouter } from 'next/router'
import { RiMenu2Fill } from 'react-icons/ri'
import { useStoreState, useStoreActions } from "easy-peasy";
import axios from "axios";

const AdminMenu = ({active, setActive}) => {
	
	const { asPath } = useRouter()
	const [fetching, setFetching] = useState(false)
	const pageReady = useStoreState(state => state.pageReady)
	const pages = useStoreState(state => state.pages)
	const setPages = useStoreActions(actions => actions.setPages)
	const setPageReady = useStoreActions(actions => actions.setPageReady)

	useEffect(() => {
		if(!pageReady && !fetching) {
			setFetching(true)
			axios.get('/api/admin/get-admin-pages').then(({data}) => {
				let p = []
				data.forEach(page => p.push(page))
				setPages(p)
				setPageReady(true)
				setFetching(false)
			})
		}	
	})

	return (
		<nav id="admin__menu" className={(active) ? 'active' : ''}>
			<div className="header">
				<h1>ReactPress</h1>
				<Button className="dropdown" onClick={() => setActive(!active)}>
					<RiMenu2Fill/>
				</Button>
			</div>
			
			<ul suppressHydrationWarning={true} className={(active) ? 'active' : ''}>
				{pages.map((page, i) => <li onClick={() => {
					router.push(page.domain + page.slug)
				}} className={(page.domain + page.slug == asPath ? 'selected' : '')} key={i}>
						<DynamicIcon name={page.icons}/>
						<p>{page.title}</p>
				</li>)}
			</ul>
		</nav>
	)
}


export default AdminMenu;
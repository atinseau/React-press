import axios from 'axios'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Slot = ({ page }) => {
	
	const router = useRouter()
	const pages = useStoreState(state => state.pages)
	const setPageTitle = useStoreActions(actions => actions.setPageTitle)

	const [count, setCount] = useState(0)

	useEffect(() => {
		if (pages.length != 0)
			setPageTitle(page.title)
	}, [pages])

	return (
		<section>

		</section>
	)
}

export async function getStaticPaths () {

	const data = (await axios.get(process.env.API + 'api/admin/get-admin-pages')).data

	const allowedPage = []
	data.filter(page => page.id != null).forEach(page => {
		allowedPage.push({
			params: {
				slot: page.slug.replace('/', ''),
			},
		})
	})
	return {
		paths: allowedPage, //indicates that no page needs be created at build time
		fallback: false //indicates the type of fallback
	}
}


export async function getStaticProps ({params}) {

	const data = (await axios.get(process.env.API + 'api/admin/get-admin-pages')).data
	const page = data.filter(page => page.slug.replace('/', '') == params.slot)[0]
	
	return {
		props: {
			page
		}
	}
}


export default Slot
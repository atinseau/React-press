import axios from 'axios'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Slot = ({ page }) => {
	
	const router = useRouter()
	const pages = useStoreState(state => state.pages)
	const setPageTitle = useStoreActions(actions => actions.setPageTitle)

	useEffect(() => {
		if (pages.length != 0) {
			console.log(page)
			setPageTitle(page.title)
		}
	}, [pages])



	return (
		<section id="slugged">
			
			<div className="header">
				<p>Ajouter, editer, supprimer des <strong>{page.editable_type.toUpperCase()}</strong> depuis le navigateur si dessous</p>
			</div>

			<div className="editor">
				<button className="btn add">Ajouter</button>
				<table>
					<thead>
						<tr>
							<th scope="col">
								<p>Nom</p>
							</th>
							<th scope="col">
								<p>Status</p>
							</th>
							<th scope="col">
								<p>Auteur</p>
							</th>
							<th scope="col">
								<p>Updated at</p>
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>3,000</td>
							<td>18,000</td>
							<td>3,000</td>
							<td>18,000</td>
						</tr>
					</tbody>
				</table>
			</div>
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
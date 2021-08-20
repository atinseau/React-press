import axios from 'axios'
import { useStoreActions, useStoreState } from 'easy-peasy'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { DynamicIcon } from '../../components'
import ModelEdit from '../../components/admin/ModelEdit'

const Slot = ({ page }) => {
	const router = useRouter()
	const pages = useStoreState(state => state.pages)
	const setPageTitle = useStoreActions(actions => actions.setPageTitle)
	const [models, setModels] = useState([])
	const [done, setDone] = useState(false)
	const [selectedModel, setSelectedModel] = useState(null)

	useEffect(() => {
		if (pages.length > 0)
			setPageTitle(page.title)

		const handleRouteChange = () => {
			setDone(false)
			setPageTitle(page.title)
		}
		router.events.on('routeChangeComplete', handleRouteChange)
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	})

	useEffect(async () => {
		if (!done) {
			const { data } = await axios.post("/api/admin/get-models", {
				editable_type: page.editable_type
			})
			setDone(true)
			setModels(data)
		}
	}, [done])

	const toggleModelEditor = (model) => {
		if (!selectedModel)
			setSelectedModel(model)
		else
			setSelectedModel(null)
	}	

	return (
		<section id="slugged">
			{selectedModel ? <ModelEdit model={selectedModel} toggle={toggleModelEditor}/> : ""}
			<div className="header">
				<p>Ajouter, editer, supprimer des <strong>{page.editable_type.toUpperCase()}</strong> depuis le navigateur si dessous</p>
			</div>

			<div className="editor">
				<button className="btn add">Ajouter</button>
				<div className="table">
					<div className="table__head">
						<ul>
							<li scope="col">
								<p>Nom</p>
							</li>
							<li scope="col">
								<p>Status</p>
							</li>
							<li scope="col">
								<p>Auteur</p>
							</li>
							<li scope="col">
								<p>Updated at</p>
							</li>
						</ul>
					</div>
					<div className="table__body">
						{done ? <>

							{models.map((model) => <ul key={model.id}>
								<li>{model.title}</li>
								<li>{
									model.online ? <>
										<span className="active"></span>
										Online
									</> : <>
										<span></span>
										Offline
									</>
								}</li>
								<li>{model.content}</li>
								<li>{(new Date(model.updated_at)).toISOString().substr(0, 10)}</li>
								<li>
									<ul className="controls">
										<li onClick={() => toggleModelEditor(model)}><DynamicIcon name="edit-box-line"/></li>
										<li><DynamicIcon name="delete-bin-line"/></li>
										<li><DynamicIcon name="shut-down-line"/></li>
									</ul>
								</li>
							</ul>)}
						</> : ""}
					</div>
				</div>
			</div>
		</section>
	)
}

Slot.defaultProps = {
	page: null
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
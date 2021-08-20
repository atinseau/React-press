import axios from "axios"
import { action, computed, thunk, useLocalStore } from "easy-peasy"
import { useEffect, useState } from "react"
import DynamicIcon from "../groups/DynamicIcon"


const ModelEdit = ({model, toggle}) => {
	const [door, setDoor] = useState(false)
	const [out, setOut] = useState(false)
	const [state, actions] = useLocalStore(
		() => ({
			model,
			saveCount: 0,
			meta: [],
			save: {},
			metaObject: computed((_state) => {
				const obj = {}
				_state.meta.map(m => {
					obj[m.name] = m.value
				})
				return obj
			}),
			hasDiff: computed((_state) => {
				const obj = {
					..._state.model,
					..._state.metaObject
				}
				const keys = Object.keys(_state.save);
				for(let i = 0; i < keys.length; i++) {
					if (obj[keys.at(i)] != _state.save[keys.at(i)])
						return true
				}
				return false
			}),
			changeModel: action((_state, payload) => {
				_state.model[payload.key] = payload.value
			}),
			changeMeta: action((_state, payload) => {
				_state.meta[payload.index].value = payload.value
			}),
			setMeta: action((_state, payload) => {
				_state.meta = payload
			}),
			setSave: action((_state, payload) => {
				_state.save = payload
			}),
			incrementSaveCount: action((_state) => {
				_state.saveCount++
			}),
			makeSave: thunk((actions, payload, helpers) => {
				actions.setSave({
					...helpers.getState().model,
					...helpers.getState().metaObject
				})
				actions.incrementSaveCount()
			})
		})
	)

	useEffect(() => {
		if (state.meta.length > 0 && state.saveCount == 0) {
			actions.makeSave()
		}
	}, [state.meta])

	useEffect(async () => {
		if (state.meta.length != 0)
			return
		const meta = []
		const { data: metaTypes } = await axios.post('/api/admin/get-meta-type-by-type', { type: model.type_id })
		for(let i = 0; i < metaTypes.length; i++) {
			const { data: metaModel } = await axios.post('/api/admin/get-meta-by-meta-type-and-model', {
				meta_type: metaTypes[i].id,
				model: model.id
			})
			meta.push({
				id: metaModel.id,
				name: metaTypes[i].name,
				value: metaModel.value
			})
		}
		actions.setMeta(meta)
	})


	const updateModel = () => {
		//
		console.log(state)
	}

	return (
		<section id="model__editor" className={out ? "leaving": ""}>
			<div className="sidebar">
				<div className="top">
					<span onMouseEnter={() => setDoor(true)} onMouseLeave={() => setDoor(false)} onClick={() => {
						setOut(true)
						setTimeout(() => {
							toggle()
						}, 800)
					}}>
						<DynamicIcon name={door ? "door-closed-line" : "door-open-line"}/>
					</span>
					<h3>Model editeur</h3>
				</div>
				<div className={state.hasDiff ? "save active" : "save"}>
					<p>Sauvegarder les modifications ?</p>
					<span onClick={updateModel}>
						<div className="save__status">
							<DynamicIcon name={state.hasDiff ? "check-line" : "close-line"}/>
						</div>
						<DynamicIcon name="download-2-fill"/>
					</span>
				</div>
				<div className="model__property">

					{!state.meta && !state.saveCount ? <h1>Loading...</h1> : 
					<ul>
						<li>
							<p>Slug</p>
							<input value={state.model.slug} onChange={(e) => actions.changeModel({
								key: "slug",
								value: e.target.value
							})}/>
						</li>
						<li>
							<p>Online</p>
							<input type="checkbox" checked={state.model.online} onChange={(e) => actions.changeModel({
								key: "online",
								value: e.target.checked
							})}/>
						</li>
						<li>
							<p>Title</p>
							<input value={state.model.title} onChange={(e) => actions.changeModel({
								key: "title",
								value: e.target.value
							})}/>
						</li>
						{state.meta.map((mt, i) => <li key={mt.id}>
							<p>{mt.name}</p>
							<input value={mt.value} onChange={(e) => actions.changeMeta({
								index: i,
								value: e.target.value
							})}/>
						</li>)}
					</ul>}
				</div>
			</div>
		</section>
	)
}

export default ModelEdit
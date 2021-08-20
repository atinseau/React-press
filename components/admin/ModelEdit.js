import { useState } from "react"
import DynamicIcon from "../groups/DynamicIcon"


const ModelEdit = ({model, toggle}) => {

	const [door, setDoor] = useState(false)
	const [out, setOut] = useState(false)

	console.log(model)

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

				<div className="model__property">
					<ul>
						<li>
							<p>Slug</p>
							<input value={model.slug} readOnly/>
						</li>

						<li>
							<p>Online</p>
							<input type="checkbox" checked={model.online} readOnly/>
						</li>

						<li>
							<p>Title</p>
							<input value={model.title} readOnly/>
						</li>
					</ul>
				</div>

				<div className="save">
					<p>Sauvegarder les modifications ?</p>
					<span>
						<DynamicIcon name="download-2-fill"/>
					</span>
				</div>
			</div>
		</section>
	)
}

export default ModelEdit
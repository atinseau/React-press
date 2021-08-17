import { useStoreActions, useStoreState } from 'easy-peasy';
import AdminHeader from './Header';
import AdminMenu from "./Menu"

const AdminLayout = ({ children }) => {
	const active = useStoreState(state => state.active)
	const setActive = useStoreActions(actions => actions.setActive)
	
	return (
		<section id="admin">
			<AdminMenu active={active} setActive={setActive}/>
			<main onClick={() => {
				if (active)
					setActive(!active)
			}} className={(active) ? "menu__opened": ""}>
				<AdminHeader/>
				{children}
			</main>
		</section>
	)
}

export default AdminLayout
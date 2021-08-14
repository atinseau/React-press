import { useState } from 'react'
import { StoreProvider } from 'easy-peasy';
import { store } from '../../store/admin';
import AdminMenu from "./Menu"

const AdminLayout = ({children}) => {
	const [active, setActive] = useState(false)

	const toggleMenu = function () {
		if (active)
			setActive(false)
	}

	return (
		<StoreProvider store={store}>
			<section id="admin">
				<AdminMenu setActive={setActive} active={active}/>
				<main onClick={toggleMenu} className={(active) ? "menu__opened": null}>
					{children}
				</main>
			</section>
		</StoreProvider>
		
	)
}

export default AdminLayout
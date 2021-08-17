import { useStoreState } from "easy-peasy"
import { DynamicIcon } from '..'

const AdminHeader = ({ name }) => {
	const pageTitle = useStoreState(state => state.pageTitle)

	return (
		<header>
			<h1>{pageTitle}</h1>
			<div className="account">
				<DynamicIcon name="shield-user-line"/>
			</div>
		</header>
	)
}

export default AdminHeader
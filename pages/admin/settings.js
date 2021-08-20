import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect } from "react"

const Settings = (props) => {

	const pageTitle = useStoreState(state => state.pageTitle)
	const setPageTitle = useStoreActions(actions => actions.setPageTitle)

	useEffect(() => {
		setPageTitle('Settings')
	}, [pageTitle])

	return (
		<h1>salut</h1>
	)
}

export default Settings
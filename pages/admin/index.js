import { useStoreActions, useStoreState } from "easy-peasy"
import { useEffect } from "react"

const Index = (props) => {

	const pageTitle = useStoreState(state => state.pageTitle)
	const setPageTitle = useStoreActions(actions => actions.setPageTitle)

	useEffect(() => {
		setPageTitle('Dashboard')
	}, [pageTitle])

	return (
		<>
			<h1></h1>
		</>
	)
}

export default Index
import { useStoreState } from "easy-peasy"
import { useEffect, useState } from "react"

const AdminHeader = ({ name }) => {
	const pageTitle = useStoreState(state => state.pageTitle)
	// const [title, setTitle] = useState("")

	// useEffect(() => {
	// 	setTitle(pageTitle)
	// }, [pageTitle])

	return (
		<header>
			<h1>{pageTitle}</h1>
		</header>
	)
}

export default AdminHeader
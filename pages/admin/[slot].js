import { useRouter } from 'next/router'
import { AdminLayout } from '../../components'

const AdminPage = (props) => {

	const { query } = useRouter()

	return (
		<div>Slot: {query.slot}</div>
	)
}

AdminPage.getLayout = (page) => (
	<AdminLayout children={page}/>
)


export default AdminPage
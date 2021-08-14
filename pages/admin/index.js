
import { AdminLayout } from '../../components'

const AdminHome = (props) => {

	return (
		<>
			<h1>HOME</h1>
		</>
	)
}

AdminHome.getLayout = (page) => (
	<AdminLayout children={page}/>
)

export default AdminHome
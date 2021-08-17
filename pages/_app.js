import { useRouter } from 'next/router';
import { StoreProvider } from 'easy-peasy';
import { admin } from '../store/admin';

import AdminLayout from '../components/admin/Layout';

import '../styles/global.scss'

function ReactPress({ Component, pageProps }) {

	const { pathname } = useRouter()

	if (pathname.includes('admin')) {
		return (
			<StoreProvider store={admin}>
				<AdminLayout>
					<Component {...pageProps} />
				</AdminLayout> 
			</StoreProvider>
		)
	}

	return (
		<Component {...pageProps}/>
	); 
}

export default ReactPress

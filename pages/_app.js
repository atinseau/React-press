import '../styles/global.scss'

function MyApp({ Component, pageProps }) {
	const pageLayout = Component.getLayout || ((page) => page);
	return pageLayout(
		<Component {...pageProps} />
	); 
}

MyApp.getInitialProps = async (appContext) => {
	return {...{}}
}

export default MyApp

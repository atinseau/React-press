import { createStore, action, persist } from 'easy-peasy';

const model = {
	active: false,
	pages: [],
	pageReady: false,
	pageTitle: "",

	setActive: action ((state, active) => {
		state.active = active
	}),
	setPages: action ((state, pages) => {
		state.pages = pages
	}),
	setPageReady: action((state, ready) => {
		state.pageReady = ready
	}),
	setPageTitle: action((state, title) => {
		state.pageTitle = title
	})
}

export const admin = createStore(
	persist(model, {
		deny: ['active', 'pages', 'pageReady', 'pageTitle']
	})
);

// 'pages', 'pageReady'



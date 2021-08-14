import { createStore, action } from 'easy-peasy';
// import { RiHome3Line, RiPagesLine, RiSettings5Line } from 'react-icons/ri'

export const store = createStore({
	pages: [],
	addPage: action ((state, page) => {
		state.pages.push(page)
	})
});


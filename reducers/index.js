import { combineReducers } from 'redux'

const notes = (state = [], action) => {
	switch (action.type) {
		case 'ADD_NOTE':
			return [
				...state,
				{
					id: action.id,
					tabId: action.tabId,
					text: action.text
				}
			]
		case 'EDIT_NOTE':
			return state.map(note =>
				(note.id === action.id ? 
					Object.assign({}, note, { text: action.text }) :
					note)
			);
		case 'DELETE_NOTE':
			return state.filter(note =>
		      note.id !== action.id
		    )
		default:
			return state
	}
}

const currentTab = (state = 0, action) => {
	switch (action.type) {
		case 'ADD_TAB':
			return action.id
		case 'CHANGE_TAB':
			return action.id
		default:
			return state
	}
}

const tabs = (state = [], action) => {
	switch (action.type) {
		case 'ADD_TAB':
			return [
				...state,
				{
					id: action.id,
					name: action.name
				}
			]
		case 'EDIT_TAB':
			return state.map(tab => 
				(tab.id === action.id ?
					Object.assign({}, tab, {name: action.newName}) :
					tab)
			)
		default:
			return state
	}
}

const noteApp = combineReducers({
	notes,
	currentTab,
	tabs
})

export default noteApp
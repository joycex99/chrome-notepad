import {connect} from 'react-redux'
import Tabs from '../components/Tabs'
import { addTab, changeTab, editTab } from '../actions'

const mapStateToProps = (state) => {
	state.tabs.forEach(function(tab) {
        console.log('Tab: ' + JSON.stringify(tab))
    });
	return { 
		tabs: state.tabs,
		currentTab: state.currentTab
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onNewTab: (name='Untitled') => {
			dispatch(addTab(name))
		},
		onTabClick: (currentId, targetId) => {
			if (currentId !== targetId) {
				dispatch(changeTab(targetId))
			}
		},
		onEditTab: (tabId, newName) => {
			dispatch(editTab(tabId, newName))
		}
	}
}

const TabHeader = connect(
	mapStateToProps,
	mapDispatchToProps
)(Tabs)

export default TabHeader

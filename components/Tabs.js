import React, { PropTypes } from 'react'
import Tab from './Tab'
import style from './Tabs.css'

const Tabs = ({ tabs, currentTab, onNewTab, onTabClick, onEditTab }) => (
	<ul className={style.tabs} >
		{tabs.map(tab => 
			<Tab 
				key={tab.id}
				{...tab}
				active={currentTab === tab.id}
				onTabClick={() => onTabClick(currentTab, tab.id)}
				onEditTab={(newName) => onEditTab(tab.id, newName)}
			/>
		)}
		<a href='#'
	       onClick={e => {
	            e.preventDefault()
	            onNewTab()
	        }}
	    >
	        +
	    </a>
	    <hr />
	</ul>
)

Tabs.propTypes = {
	tabs: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.number.isRequired,
		name: PropTypes.string
	}).isRequired).isRequired,
	currentTab: PropTypes.number.isRequired,
	onNewTab: PropTypes.func.isRequired,
	onTabClick: PropTypes.func.isRequired,
	onEditTab: PropTypes.func.isRequired
}

export default Tabs

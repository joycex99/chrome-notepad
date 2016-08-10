import React from 'react'
import TabHeader from '../containers/TabHeader'
import PanelContainer from '../containers/PanelContainer'
import InputFooter from '../containers/InputFooter'
import style from './App.css'


const App = () => (
    <div className={style.application}> 
    	<TabHeader />
        <PanelContainer />
        <InputFooter />
    </div>
)

export default App
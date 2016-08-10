import {connect} from 'react-redux'
import Input from '../components/Input'
import {addNote} from '../actions'

const mapStateToProps = (state) => {
    return { 
        editing: false,
        currentTab: state.currentTab
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSave: (text, tabId) => {
            if (text.length !== 0) {
                dispatch(addNote(text, tabId))
            }
        } 
    }
}

const InputFooter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Input)

export default InputFooter
import {connect} from 'react-redux'
import NotePanel from '../components/NotePanel'
import { editNote, deleteNote } from '../actions'


const getTabNotes = (notes, currentTab) => {
    console.log('CurrentTab: ' + currentTab)
    notes.forEach(function(note) {
        console.log('Note: ' + JSON.stringify(note))
    });
    return notes.filter(note => note.tabId === currentTab)
}

const mapStateToProps = (state) => {
    return { 
        notes: getTabNotes(state.notes, state.currentTab)
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onEdit: (id, text) => {
            dispatch(editNote(id, text))
        },
        onDelete: (id) => {
            dispatch(deleteNote(id))
        }
    }
}

const PanelContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(NotePanel)

export default PanelContainer
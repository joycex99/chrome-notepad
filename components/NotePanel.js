import React, {PropTypes} from 'react'
import Note from './Note'

const NotePanel = ({ notes, onEdit, onDelete }) => (
    <ul>
        {notes.map(note =>
            <Note 
                key={note.id}
                {...note} // contains text, tabId
                editNote={text => onEdit(note.id, text)}
                deleteNote={() => onDelete(note.id)}
            />
        )}
    </ul>
)

NotePanel.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        tabId: PropTypes.number.isRequired,
        text: PropTypes.string.isRequired
    }).isRequired).isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default NotePanel



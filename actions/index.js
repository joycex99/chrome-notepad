let nextNoteId = 0;
let nextTabId = 1;

export const addNote = (text, tabId) => {
    return {
        type: 'ADD_NOTE',
        id: nextNoteId++,
        tabId,
        text
    }
}

export const editNote = (id, text) => {
    return {
        type: 'EDIT_NOTE',
        id,
        text
    }
}

export const deleteNote = (id) => {
    return {
        type: 'DELETE_NOTE',
        id
    }
}

export const addTab = (name) => {
    return {
        type: 'ADD_TAB',
        id: nextTabId++,
        name
    }
}

export const changeTab = (tabId) => {
    return {
        type: 'CHANGE_TAB',
        id: tabId
    }
}

export const editTab = (tabId, newName) => {
    return {
        type: 'EDIT_TAB',
        id: tabId,
        newName
    }
}
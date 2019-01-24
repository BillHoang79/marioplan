const initState = {
    projects: [
        {id: '1', title: 'this is the title', content: 'paragraph'},
        {id: '2', title: 'this is the title two', content: 'paragraph'},
        {id: '3', title: 'this is the title three', content: 'paragraph'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer; 
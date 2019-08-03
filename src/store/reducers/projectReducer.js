/* eslint-disable default-case */
const initState = {
    projects: [
        {id: '1', title: 'help me find peach', content: 'blah blah blah'},
        {id: '2', title: 'collect all the stars', content: 'blah blah blah'},
        {id: '3', title: 'Tu vieja en tanga', content: 'blah blah blah'}
    ]
};

const projectReducer = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_PROJECT':
            console.log('project created', action.project);            
            return state;

        case 'CREATE_PROJECT_ERROR':
                console.log('error', action.err);
                return state;
        default:
            return state;
        }
};

export default projectReducer;
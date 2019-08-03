// export const createProject = (project) => {
//     return {
//         type: 'ADD_PROJECT',
//         project: project
//     }
// } forma regular

export const createProject = (project) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async code to db
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Net',
            authorLastName: 'Ninja',
            authorId: '123456',
            createdAt: new Date()
        }).then(data => {
            console.log(data);
            dispatch({type: 'CREATE_PROJECT', project});
        }).catch(err => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err});
        })
    }
};
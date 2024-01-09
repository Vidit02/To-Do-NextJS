// const ADD_TASK = 'ADD_TASK'

// function addTask(){
//     return{
//         type: ADD_TASK,
//         info : 'First redux action'
//     }
// }

//(previousState,action) => newState

// const initialState = {
//     tasks : 10
// }

// const reducer = (state = initialState,action) => {
//     switch(action.type){
//         case ADD_TASK : return {
//             tasks : state.tasks - 1
//         }
//         default : return state
//     }
// }

export const addTodo = (title,description ) => ({
    type: 'ADD_TODO',
    payload: {
        title,
        description,
    },
})

export const removeTodo = (id) => ({
    type: 'REMOVE_TODO',
    payload: {
        id,
    }
})
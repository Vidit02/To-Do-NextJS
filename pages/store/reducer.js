const initialState = {
    tasks: []
}

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {
                tasks: [
                    ...state.tasks,
                    {
                        id: state.tasks.length + 1,
                        title: action.payload.title,
                        description: action.payload.description
                    }
                ]
            }
        case 'REMOVE_TODO':
            return {
                tasks: state.tasks.filter((task) => task.id !== action.payload.id),
            }
        default:
            return state;
    }
}

export default todoReducer;
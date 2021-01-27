const APP_DATA = {
    Donors:[],
    Requests:[]
}
export default (state = APP_DATA, action) => {
    console.log('action ==>',action)
    switch (action.type) {
        case "SETDATA":
            return ({
                ...state,
                users: [...state.users,action.payload]
            })
        case "SETAD":
            return ({
                ...state,
                users: [...state.ads,action.payload]
            })
    }
    return state;
}
const APP_DATA = {
    Donors:[],
    Requests:[
    ],
    MyRequests:[],
    MyDonation:[],
    Notifications:[]
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
            case "SETREQUESTS":
                return ({
                    ...state,
                    Requests: [...state.Requests,action.payload]
                })
            case "SENDREQUEST":
                return ({
                    ...state,
                    Requests: [...state.Requests,action.payload]
                })
    }
    return state;
}
const APP_DATA = {
    Donors:[],
    Requests:[
        {
            status: "urgent",
            bloodGroup: "A+",
            patientName: "Ronald Dixen",
            patientAge: 24,
            patientGender: "Male",
        },
        {
            status: "urgent",
            bloodGroup: "B+",
               patientName: "Dixen Ronald",
            patientAge: 42,
            patientGender: "Male",
        },
        {
            status: "urgent",
            bloodGroup: "AB+",
            patientName: "Saad Sohail",
            patientAge: 15,
            patientGender: "Male",
        },
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
    }
    return state;
}
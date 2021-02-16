const INITIAL_STATE = {
    current_user:
        {
            name: "",
            dp: "assets\images\icon.png",
            gender: '',
            bloodGroup: "",
            dob: "",
            donor: false,
            email: "",
            no: "",
            height: '',
            weight: '',
            pass: ""
        }
}

export default (state = INITIAL_STATE, action) => {
    console.log('action ==>',action)
    switch (action.type) {
        case "SETPROFILE":
            return ({
                ...state,
                current_user: {
                    name: action.payload.name,
                    email: action.payload.email,
                    no: action.payload.phone,
                    donor: action.payload.donor,
                    bloodGroup: action.payload.bGroup,
                    pass: action.payload.password
                    
                }
            })
    }
    return state;
}
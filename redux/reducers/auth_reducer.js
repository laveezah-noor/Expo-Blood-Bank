const INITIAL_STATE = {
    current_user:
        {
            name: "Allan Sohail",
            dp: "assets\images\icon.png",
            gender: 'Female',
            bloodGroup: "AB+",
            dob: "01-01-01",
            email: "allan@gmail.com",
            no: "0321654987",
            height: '150',
            weight: '50'
        }
}

export default (state = INITIAL_STATE, action) => {
    console.log('action ==>',action)
    switch (action.type) {
        case "SETPROFILE":
            return ({
                ...state,
                current_user: action.payload
            })
    }
    return state;
}
import * as firebase from 'firebase'

const Add_Donor = "";
const Add_Request = "";

const set_Profile = (profile) => {
    return (dispatch) => {
        dispatch({type: "SETPROFILE", payload: profile})
    }
}


async function onFacebookButtonPress() {
  // Attempt login with permissions
  const result = await LoginManager.logInWithPermissions(['public_profile', 'email']);

  if (result.isCancelled) {
    throw 'User cancelled the login process';
  }

  // Once signed in, get the users AccesToken
  const data = await AccessToken.getCurrentAccessToken();

  if (!data) {
    throw 'Something went wrong obtaining access token';
  }

  // Create a Firebase credential with the AccessToken
  const facebookCredential = auth.FacebookAuthProvider.credential(data.accessToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(facebookCredential);
}

const set_data = () => {
    return (dispatch) => {
        dispatch({type: "SETDATA", payload:{
            name: "ghous",
            email: "ghousahmed@gmail.com"
        }})
    }
}

const set_ad = (Category,SubCategory,Details,Images) => {
    return (dispatch) => {
        let ad = {
            Category: Category,
            SubCategory:SubCategory,
            Details:Details,
            Images:Images
        }
        firebase.database().ref("/").child(`ads/`).set(ad)
        .then(()=>{
        dispatch({type: "SETAD", payload: ad})
        },
        
        )
    }
}

const facebook_login = (history) => {
    return (dispatch) => {
        var provider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            let create_user = {
                name: user.displayName,
                email: user.email,
                profile: user.photoURL,
                phoneNumber: user.phoneNumber,
                uid: user.uid
            }
            firebase.database().ref("/").child(`users/${user.uid}`).set(create_user)
            .then(()=>{
                dispatch({ type: "SETUSER", payload: create_user})
                alert("User Login Successful")
                history().push('/Sell')
            })
            console.log('user===>',create_user)
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            // var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            // var credential = error.credential;
            
            console.log(errorMessage)
          });
    console.log('Chal raha h')    
    }
}

const google_login = () => {
    return(dispatch) =>{
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
        console.log('Google Login')
    }
}

const email_sign = (email,password) =>{
    return(dispatch) =>{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((result)=>{
            console.log(result)
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
}

const email_login = (email,password) =>{
    return(dispatch) =>{
        firebase.auth().signInWithEmailAndPassword(email, password)
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
          });
    }
}



// onSignInSubmit = () => {
//     var phoneNumber = +923212024213;
//     // getPhoneNumberFromUserInput();
//     var appVerifier = window.recaptchaVerifier;
//     firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
//     .then(function (confirmationResult) {
//       // SMS sent. Prompt user to type the code from the message, then sign the
//       // user in with confirmationResult.confirm(code).
//       window.confirmationResult = confirmationResult;
//     }).catch(function (error) {
//       // Error; SMS not sent
//       // ...
//     });
// }
// const setUpRecaptcha = () => {
//     window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
//         'sign-in-button', 
//         {
//         'size': 'invisible',
//         'callback': function(response) {
//           // reCAPTCHA solved, allow signInWithPhoneNumber.
//           onSignInSubmit();
//         }
//       });
// }

const addProfile = (name, phone, email, password, bGroup, donor) => {
    return (dispatch) => {
        let profile = {
            Name: name,
            Donor: donor,
            Email: email,
            Phone: phone,
            BloodGroup: bGroup,
            Passcode: password
        }
        key = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        firebase.database().ref("/").child(`Users/${key}`).set(profile)
        .then(()=>{
        dispatch({type: "SETPROFILE", payload: [name,email,bGroup,phone,donor, password]})
        console.log("Profile Complete")
        },
        
        )
    }
}

const setRequests = (requestData) => {
    return {
        type: "SETREQUESTS",
        value: requestData
    };
}


const sendRequest = (requestData) => {
    return (dispatch) => {
        key = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
        firebase.database().ref("/").child(`Requests/${key}`).set(requestData)
        .then(()=>{
        dispatch({type: "SENDREQUEST", payload: requestData})
        console.log("Request Send");
        alert('Request Complete')
        })
        .catch((error)=>{
            alert(error)
        })
    }
}        
        
    



const fetchRequests = () => {
    return function(dispatch) {
        firebase.database().ref("/Requests").on("value", function(snapshot) {
            var requestsData = snapshot.val();
            dispatch(setRequests(requestsData));
        }, function(error) { });
    };
}

export{
    fetchRequests,
    setRequests,
    sendRequest,
    addProfile,
    Add_Donor,
    Add_Request,
    facebook_login,
    google_login,
    email_login,
    email_sign,
    set_Profile
}
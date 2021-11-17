import User from "../../../apis/User";
export const loginSubmitAction = ({ commit }, { loginForm }) => {
    commit('LOGIN_SUBMIT', { loginForm });


    console.log(loginForm);
    
    User.login(
        loginForm
    ).then((res)=>{
        console.log(res); 
        
    }).catch((error)=>{
        console.log(error); 
    })
}


export const registrationSubmitAction = ({ commit }, { registrationForm }) => {
    commit('REGISTRATION_SUBMIT', { registrationForm });

    console.log(registrationForm);
    
    User.registration(
        registrationForm
    ).then((res)=>{
        console.log(res); 
    }).catch((error)=>{
        console.log(error); 
    })
}



import Api from "./Api";

const END_POINT = 'request-otp/';
const END_POINT_REGISTRATION = 'user/';

export default {

    login(data) {
        return Api.post(END_POINT, data);
    },

    registration(data) {
        return Api.post(END_POINT_REGISTRATION, data);
    },
  
    
}
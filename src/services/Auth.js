import axios from "axios";

const FREEMENTOR_API_AUTH= "https://freementor-api.herokuapp.com/freementor/v1/user";

const token = localStorage.getItem("freeMentor_token");
const config={
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
    }
}
class AuthApi{

    async login(data){

        try {
            const res= await axios.post(FREEMENTOR_API_AUTH+"/signin",data,config);
            return res;
        } catch (error) {
            console.log(  error.response);

            return error.response;
        }

    }

    async signup(data){

        try {
            const res= await axios.post(FREEMENTOR_API_AUTH+"/signup",data,config);
            return res;
        } catch (error) {
            console.log(error);
            return error.response;
        }

    }


        
    async getAllMentors(){
        try{
const res = await axios.get(FREEMENTOR_API_AUTH+"/all/mentors",config)
return res;
        }catch(error){

            return error.response;
            
       
        }

    }


}

export default new AuthApi();
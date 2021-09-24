import axios from "axios";

const FREEMENTOR_API_SESSION = "https://freementor-api.herokuapp.com/freementor/v1/session";

const token = localStorage.getItem("freeMentor_token");
const config = {
    headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
    }
}
class SessionApis {

    async createSession(data) {

        try {
            const res = await axios.post(FREEMENTOR_API_SESSION + "/request", data, config);
            return res;
        } catch (error) {
            console.log(error);
            return error.response;
        }

    }

    async getAllSessions(id) {
        try {
            const res = await axios.get(FREEMENTOR_API_SESSION + "/all/" + id, config)
            return res;
        } catch (error) {

            return error.response;


        }

    }

    async deleteOneSession(id){
        try {
            const res = await axios.delete(FREEMENTOR_API_SESSION+"/"+id,config);
            return res;
        } catch (error) {
            return error.response;
        }
    }



}

export default new SessionApis();
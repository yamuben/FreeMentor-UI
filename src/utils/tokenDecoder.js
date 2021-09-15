import jwt from "jsonwebtoken";

const decode =(token)=>{
    return jwt.decode(token);

}
export default decode;

import Users from '../model/authModel'
import bcryptjs from "bcryptjs";

class AuthController{
    static userRegistration = async(req,res) => {
        const {username ,email ,password} = req.body;
        try{
          if(username && email && password){
            const isUser = await Users.isUser.findOne({email:email});
            if(!isUser){
                //password hashing
            const genSalt = await bcryptjs.genSalt(10);

            } else{
                return res.status(400).json({message: "Email already exists"});
            }
        } 
        else {
            return res.status(400).json({message: "Please fill all the fields"});
        }
    }
        catch(error){
            return res.status(400).json({message: error.message});
        }
        // res.send("user registration");
    };


    static userLogin = async(req,res) => {
        res.send("user login");
    };


    }


export default AuthController;
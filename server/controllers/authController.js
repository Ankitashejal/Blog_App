class AuthController{
    static userRegistration = async(req,res) => {
        res.send("user regsitration");
    };
    static userLogin = async(req,res) => {
        res.send("user login");
    };
}

export default AuthController;
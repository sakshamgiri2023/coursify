const { Router } = require("express");
const jwt = require("jsonwebtoken");
const jwt_user_password = "lickMyAss"
const { userModel } = require("../db");

const userRouter = Router();
 
userRouter.post("/signup", async (req, res)=>{
     const { email, password, firstName, lastName } = req.body;

     await userModel.create({
        email: email,
        password: password,
        firstName: firstName,
        lastName: lastName
     })


    res.json({
        message: "signup succeed"
    })
});

userRouter.post("/signin", async  (req, res)=>{
    const { email, password } = req.body;

    const user = await userModel.findOne({
        email: email,
        password: password
    })
     
    if( user ){
        const token = jwt.sign({
            id: user._id
        }, jwt_user_password);

        res.json({
            token: token
        })
    }else(
        res.status(403).json({
            message: "Incorrect credentials"
        })
    )

     
    res.json({
        message: "signin endpoint"
    })
});

userRouter.get("/purchases", (req, res)=>{
     
    res.json({
        message: "purchases endpoint"
    })
});

module.exports = {
    userRouter: userRouter
}

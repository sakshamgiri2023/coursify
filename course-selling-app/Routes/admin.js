const { Router } = require("express");
const jwt = require("jsonwebtoken");
const { jwt_admin_password } = require("../config")

const adminRouter = Router();

const { adminModel, courseModel } = require("../db");

const { adminMiddleware } = require("../middleware/admin");

 
adminRouter.post("/sigup", async (req, res)=>{

    const { email, password, firstName, lastName } = req.body;

    await adminModel.create({
       email: email,
       password: password,
       firstName: firstName,
       lastName: lastName
    })


   res.json({
       message: "signup succeed"
   })
})

adminRouter.post("/signin", async (req, res)=>{

    const { email, password } = req.body;

    const admin = await adminModel.findOne({
        email: email,
        password: password
    })
     
    if( admin ){
        const token = jwt.sign({
            id: admin._id
        },jwt_admin_password );

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
})

adminRouter.post("/courses", adminMiddleware,   async (req, res)=>{
    const adminId = req.userId;

    const { title, description, imageUrl, price } = req.body;
    
    const course = await courseModel.create({
        title: title,
        description: description,
        imageUrl:imageUrl,
        price:price
    })

    res.json({
        message: "course created",
        courseId: course._id
    })
})

adminRouter.put("/courses", adminMiddleware, (req, res)=>{
    

    res.json({
        message: "signup endpoint"
    })
})

adminRouter.get("/courses/bulk", (req, res)=>{

    res.json({
        message: "signup endpoint"
    })
})

module.exports = {
    adminRouter: adminRouter 
}
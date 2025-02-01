const { Router } = require("express");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const { adminModel, courseModel } = require("../db");

const adminRouter = Router();

const { adminMiddleware } = require("../middleware/admin");
const admin = require("../middleware/admin");
const course = require("./course");

 
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

adminRouter.put("/courses", adminMiddleware, async (req, res)=>{
    const adminId = req.userId;

    const { title, description, imageUrl, price, courseId } = req.body;

    const course = await courseModel.updateOne({
        _id: courseId,
        createId: adminId
    },{
        title: title,
        description: description,
        imageUrl: imageUrl,
        price: price
    })

    res.json({
        message: "course updated",
        courseId: course._id
    })
})

adminRouter.get("/courses/bulk", adminMiddleware, async (req, res)=>{
    const adminId = req.userId;

    const courses = await courseModel.find({
        createId: adminId
    });

    res.json({
        message: "course updated",
        course
    })
})

module.exports = {
    adminRouter: adminRouter 
}
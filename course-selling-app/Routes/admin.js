const { Router } = require("express");

const adminRouter = Router();
 
adminRouter.post("/sigup", (req, res)=>{

    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/signin", (req, res)=>{

    res.json({
        message: "signin endpoint"
    })
})

adminRouter.post("/courses", (req, res)=>{

    res.json({
        message: "signup endpoint"
    })
})

adminRouter.post("/courses", (req, res)=>{

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
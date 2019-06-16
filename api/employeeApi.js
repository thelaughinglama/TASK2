const employeeRouter=require('express').Router();
const multer=require('multer');
const employeeOperations =require("../db/dbOperations/employeeOperations");


employeeRouter.post('/add',(req,res)=>{
    employeeOperations.createEmployee(req);
})
employeeRouter.get('/getemployeeData',(req,res)=> {
    employeeOperations.FetchData(res);
});
module.exports=employeeRouter;
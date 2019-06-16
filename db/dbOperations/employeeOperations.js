const employeeModel=require('../models/employeeSchema');

const create_display_Operations = {
   createEmployee(req){
    const newEmployee = new Employee({
        firstname: req.body.name,
        lastname: req.body.lastname,
        score:req.body.score=10?'A':'B'
       
      });
      newEmployee.save((err)=>{
if(err){
    res.json({
        "msg":"Error while adding user"
    })
    
}
else{
    res.json({
        "msg":"Employee successfully added"
    })
}

      })
               
    },

    
    
    FetchData(res) {
        employeeModel.find({},(err,data)=> {
            if(err) {
                res.json({"msg":"Error while finding the data of employees"});
            }
            else {
                if(data==null){
                    res.json({"msg":"Add your first emplloyee to get started"})
                }
                else{
                res.json({"msg":"Successfully find the data","data":data});
                }
            }
        })
    }
}
module.exports=create_display_Operations;
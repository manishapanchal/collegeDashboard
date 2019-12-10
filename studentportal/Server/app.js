const express=require("express");
const courses=require("./model/course")
const studentModel=require("./model/student")
const app=express();



app.use(express.json());
app.get("/data",async function(req,res){
try{
    const course = await courses.find();
    const student = await studentModel.find();
    res.status(201).json(
                {
                    "status":"added succesfully",
                    course:course,
                    student:student
                });

}
catch(err){
          res.status(401).json({
              "status":"fail to get data",
              data:err
          })
        }
    
})


app.listen(4000,function(){
    console.log("server is listening at 4000")
})

//////////////////////
// app.post("/courses",async function(req,res){
//     try{
//         const course = await courses.create(req.body);
//         res.status(201).json(
//             {
//             "status":"added succesfully",
//             data:course
//         });
//   }
//   catch(err){
//       res.status(401).json({
//           "status":"fail to add data",
//           data:err
//       })
//     }
// })

// app.post("/student",async function(req,res){

//     try{
//         // console.log(student);
//         const student = await studentModel.create(req.body);
//         res.status(201).json(
//             {
//             "status":"added succesfully",
//             data:student
//         });
//   }
//   catch(err){
//       console.log(err);
//       res.status(401).json({
//           "status":"fail to add data",
//           data:err
//       })
//     }
// })
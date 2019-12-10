const mongoose=require("mongoose");

const DB= 
"mongodb+srv://manisha:9711965221@cluster0-p6jfb.mongodb.net/College?retryWrites=true&w=majority";
mongoose.connect(DB,{ 
    useNewUrlParser:true,
    useCreateIndex:true ,
    useUnifiedTopology:true 
})
.then(function(conn){
    // console.log(conn.connection);nt
    console.log("student");
});

var StudentSchema=new mongoose.Schema({
    Name: {type:String,required:[true,"Name is required field"]},
    Age:{type:Number,required:[true,"Age is required field"]},
    courseID:{type: mongoose.Schema.Types.ObjectId, ref: 'courses',required:[true,"Course ID is required field"]} 
})

const studentModel=mongoose.model("student",StudentSchema);
// console.log(studentModel)
module.exports=studentModel;
 



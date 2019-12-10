const mongoose=require("mongoose");

const DB= 
"mongodb+srv://manisha:9711965221@cluster0-p6jfb.mongodb.net/College?retryWrites=true&w=majority";
mongoose.connect(DB,{ 
    useNewUrlParser:true,
    useCreateIndex:true ,
    useUnifiedTopology:true 
})
.then(function(conn){
    // console.log(conn.connection);
    console.log("connected to db");
});

const courseSchema=new mongoose.Schema({
    courseName: {type:String,required:[true,"Name is required field"],unique: true },
    teacherName:{type:String,required:[true,"Teacher-Name is required field"]},
    courseCredits:{type:Number,required:true,max:100},
   
})

const courses=mongoose.model("courses",courseSchema);
module.exports=courses;


 



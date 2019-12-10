import React, { Component } from 'react';
// import { getStudent } from '../services/students';
import axios from "axios";

class College extends Component {
    state = {student:[],currentSearchQuery:""}
    

    componentDidMount(){
        axios.get("data").then(response=>{
          let allCourse=response.data.course;
          let allStu=response.data.student;
          // console.log(allCourse);
         var studArr=[]
          for(let i=0;i<allStu.length;i++){
            for(var j=0;j<1;j++){
              var id= allStu[i]["courseID"];
              studArr.push(allCourse.filter(c=>{
                if(c._id===id){
                          return c.courseName
                }
              }))
             allStu[i]["course"]=studArr[i][j]["courseName"];
             
            }   
            
          }
          // console.log(allStu);
        
          this.setState({student:[...this.state.student,...allStu]})
          // console.log("state");
          // console.log(this.state.student)
      
      })
    }
        
         
        
        
      
  
    handleSearchQuery=(e)=>{      
      console.log(e.currentTarget.value)  
        this.setState({currentSearchQuery: e.currentTarget.value})
   }

    // handleGetData=(query)=>{
      
    // }
    render() { 
        let{student,currentSearchQuery}=this.state
        let items;
        if(currentSearchQuery!=""){
            items=student.filter((m=>{
                return ((m["course"].toLowerCase().startsWith((currentSearchQuery).toLowerCase()))
                || (m["Name"].toLowerCase().startsWith((currentSearchQuery).toLowerCase())))
            }));
        }   

        else{
            items=student
        }
        
        return (
            <React.Fragment>          
            <input class="form-control" type="text" value={this.state.currentSearchQuery} placeholder="Search.." onChange={this.handleSearchQuery}></input>
            <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
            <th scope="col">Course</th>
            {/* <th scope="col">Professor</th> */}
            {/* <th scope="col">Course-Id</th>             */}
          </tr>
        </thead>
        <tbody>
            { 
            items.map((s) => {
              
                return( <tr key={s["_id"]}>             
                <td>{s["Name"]}</td>
                <td>{s["Age"]}</td>
                <td>{s["course"]}</td>               
                <td>{s["teacheName"]}</td>        
                </tr> )
            })
            }
  </tbody>
        </table>
            </React.Fragment>
    
          );
    }
}
 
export default College;
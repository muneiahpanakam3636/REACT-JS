import React from "react";
import Employee from "./Employee";
class User extends React.Component{
     UId = 101;
     UName ="Rahul"
    render (){
        return <div>
        <h2>User component</h2>
        <hr/>
       
        <Employee id={this.UId}  name={this.UName}/>
    </div>

    }

}
export default User;
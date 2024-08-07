
import React from 'react';

class Employee extends React.Component{
render(){
    return <div>
        <h2> Employee Component</h2>
        <h3>{JSON.stringify(this.props)}</h3>
        <h3>Employee Id :{this.props.id}</h3>
        <h3>Employee Name :{this.props.name}</h3>
    </div>

   }
}
export default Employee
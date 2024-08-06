// import React from 'react';
// import Message  from './Message/message'

// class App extends React.Component{
//     render(){
//         return <div>
//             <h2>GOOD EVENING</h2>
//             <hr></hr>
//             <h2>Message Component</h2>
//             <Message/>
//         </div>
//     }
// }
// export default App;
import React from 'react'
import Header from './website/Header'
import Slider from './website/Slider'
import Footer from './website/Footer'
import Movie from './Movies/Movie'
class App extends React.Component{


    render(){

        return <div>
                    <h1>App Component</h1>
                    <Movie/>
               
                </div>
    }
}
export default App
import ReactDOM from "react-dom"
import App from './App'
ReactDOM.render("Good Evening",document.getElementById('root'))
ReactDOM.render(<h1>Good Evening</h1>,document.getElementById('root'))
ReactDOM.render(<h1>Good Evening</h1>,<h2>Welcome</h2>,document.getElementById('root'))
ReactDOM.render(<App/>,document.getElementById('root'))
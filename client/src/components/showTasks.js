import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link} from "react-router-dom"
import './showTasks.css'

export default class ShowTasks extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            listtask: [],
            selectedItems:[]
           
        }
    }

    componentDidMount() {
        console.log('hi')
        axios.post('http://localhost:3000/getTasks',{user: {nameUser: this.props.user.nameUser, passwordUser: this.props.user.passwordUser}})
        .then(res => {
            console.log("in showTasks "+JSON.stringify(res))
               this.setState({ listtask: res.data.tasks })
               console.log(this.state.listtask)
    
        });
    }
    selectList=(e)=>{
        const checked=e.target.checked
        const item=e.target.parentElement.textContent

        if (checked){
            this.setState({selectedItems:this.state.selectedItems.concat([item])})
        }
        else{
            this.setState({selectedItems:this.state.selectedItems.filter(x=>x!==item)})
        }
    }

    deleteTasks = (item) => {
        axios.delete(`http://localhost:3000/deletea/${item}/${this.props.user.nameUser}`)
            .then(data => {
                console.log("hi")
            }, (error) => {
                console.log(error);
            });
            console.log(this.state.listtask)
            console.log(item)
            this.setState({listtask:this.state.listtask.filter(x=>x._id!==item)})



    }
    render() {


       
        return (
           
                 <div>
            <h3 className="header">My tasks are:</h3>
            <br></br>
            <ul>
                      {this.state.listtask.map(item=>(
                          <li key={item._id} >
                             
                              <label>
                              {item.title}
                              </label>
                              <button className="btn btn-info  btn-sm ml-2 p-0" onClick={(e) => { e.preventDefault(); this.deleteTasks(item._id) }}>delete</button>
                              
                          </li>
                      ))}
                  </ul>
                  <div className="link">
                  <Link to="/listoftasks">Add a new task </Link>
                  </div>
        </div>
    )
          
        
    }
}


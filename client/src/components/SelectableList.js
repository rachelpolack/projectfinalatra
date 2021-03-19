

import React, { Component } from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link} from "react-router-dom"
import  './SelectableList.css'



export default class SelectableList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: [],
            selectedItems: [],
            taskperso:""
        }
    }


    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/todos/?id=1&id=2&id=3&id=4&id=0&id=6&id=7&id=8&id=9&id=10&id=11')
            .then(res => {
                console.log("yes")
                this.setState({ task: res.data })

            });
    }
    addTaskk = (item) => {

        //.preventDefault();

        axios.post('http://localhost:3000/addTask', {
            user: this.props.user,
            task: item
        })
            .then(data => {
                console.log(data)
            }, (error) => {
                console.log(error);
            });
        


    }
    onChange=(value)=>{
     this.setState({taskperso:value})
    }

    addtolist1 = (item) => {
      
        console.log(item)
        axios.post('http://localhost:3000/addTaskPerso', {
            user: this.props.user,
            task: item
        }).then(data => {
               console.log("cool")
            
            }, (error) => {
                console.log(error);
            });
            this.setState({taskperso:""})

    }
    

    render() {

        return (
            <>
                 <p>{this.state.taskperso}</p>
                <h4 className="header">Hello {this.props.user.nameUser} choose your tasks:</h4>

            
                <div className="card my-3">
                    <div className="card-header">To-Do List</div>
                    <div className="card-body">
                        <form onSubmit={this.onSubmit}>
                            <div className="input">
                            <div className="form-group">
                                <label htmlFor="element">Task:</label>
                                <input type="text"
                                    className="form-control "
                                    name="element"
                                onChange={(e)=>this.onChange(e.target.value)}
                                value={this.state.taskperso}
                                // value={this.state.element}
                                />

                            </div>
                            </div>
                            <button className="btn btn-info btn-sm  " onClick={(e) => { e.preventDefault(); this.addtolist1(this.state.taskperso) }}>Add a task</button>
                        </form>
                        <div >
                        <ul >
                                {this.state.task.map(item => (
                        <li  key={item.id}>

                            <label>
                                {item.title}
                            </label>
                            <button  className="btn btn-info  btn-sm ml-2 p-0" onClick={(e) => { e.preventDefault(); this.addTaskk(item) }}>select</button>
                        </li>
                        
                    ))}
                </ul>
                </div>

                    

                    </div>
                   
                </div>
                <div className="link">
                <Link to="/ShowMyTasks" >Show my tasks</Link>
                </div>

            </>
        )
    }
}

//  <ul>
//                     {this.state.task.map(task => <li>{task.title}</li>)}
//                 </ul>


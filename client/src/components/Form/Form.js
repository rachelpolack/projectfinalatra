import axios from 'axios'
import React from 'react'
import { connect } from 'react-redux'
import { setFirstNameUser, setPassword, setMobile, setNameUser, setPasswordUser,setTasks } from '../actions'
import './Form.css'
import { useHistory } from "react-router-dom"
//import { Route, Switch, Link,useParams } from 'react-router-dom'


function mapStateToProps(state) {
    return {
        user: state.user,
        identifiedUser: state.identifiedUser
    }
}
const mapDispatchToProps = (dispatch) => ({
    setFirstName: (firstName) => dispatch(setFirstNameUser(firstName)),
    setPass: (password) => dispatch(setPassword(password)),
    setMobilee: (mobile) => dispatch(setMobile(mobile)),
    setNameUser: (nameUser) => dispatch(setNameUser(nameUser)),
    setPasswordUser: (passwordUser) => dispatch(setPasswordUser(passwordUser)),
    setTaskss: (tasks) => dispatch(setTasks(tasks))

})

export default connect(mapStateToProps, mapDispatchToProps)(function UserDetails(props) {
    let { user, identifiedUser,setTaskss, setFirstName, setPass, setMobilee, setNameUser, setPasswordUser } = props

    let history = useHistory()






    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3000/addUser', {
            name: user.name,
            password: user.password,
            mobile: user.mobile

        }).then((response) => {


            console.log(response)
            alert("now log in")


        }, (error) => {
            console.log(error);
        });
    

          
        // history.push('/listoftasks')
    }





    const verify = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3000/getUser", {
            name: identifiedUser.nameUser,
            password: identifiedUser.passwordUser
        })
            .then((response) => {
                identifiedUser=response.user
                history.push('/listoftasks')
            }, (error) => {
                console.log(JSON.stringify(error));
            });

            
    }



    return (
        <div className="bodyh">


            <h1 className="header">Tasks management</h1>
            <br></br>

            <h3 className="new">New around here? sign up....</h3>
            <br></br>
            
            <form className="col-6">

                <div className="form-group" >
                    <label> Name:</label><input className="form-control" value={user.name}
                        onChange={(e) => setFirstName(e.target.value)}></input>
                        
                        
                </div>

                <div className="form-group">
                    <label>Password:</label><input className="form-control" type="password" value={user.password}  placeholder="Password"
                        onChange={(e) => setPass(e.target.value)}></input>
                            <small className="form-text text-muted">We'll never share your password with anyone else.</small>
                </div>


                <div className="form-group">
                    <label>Mobile:</label><input  className="form-control" value={user.mobile}
                        onChange={(e) => setMobilee(e.target.value)}></input>
                </div>
              
                <button type="submit" className="btn btn-info  btn-lg ml-2 mb-3 mt-2 p-1" onClick={handleSubmit}>Sign in</button>
             
            </form>
            <br></br>

            <h3 className="new">Log in</h3>

            <form className="col-6">
                <div className="form-group">
                    <label >Name:</label>
                    <input className="form-control" value={identifiedUser.nameUser} onChange={(e) => setNameUser(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleDropdownFormPassword2">Password</label>
                    <input type="password" className="form-control" id="exampleDropdownFormPassword2" placeholder="Password" value={identifiedUser.passwordUser} onChange={(e) => setPasswordUser(e.target.value)} />
                </div>
                <div className="form-check">
                    <input type="checkbox" className="form-check-input" id="dropdownCheck2" />
                    <label className="form-check-label" htmlFor="dropdownCheck2">
                        Remember me
                 </label>
                </div>
                
                <button type="submit" className="btn btn-info  btn-lg ml-2 mb-3 mt-2 p-1" onClick={verify}>Log in</button>
    

            </form>

        </div>






    )
})





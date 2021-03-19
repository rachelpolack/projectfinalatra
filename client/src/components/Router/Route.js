import React from 'react'
import { Route, Switch, Link,useParams } from 'react-router-dom'
import { connect } from 'react-redux'
import Form from '../Form/Form'
import SelectableList from '../SelectableList'
import ShowTasks from '../showTasks'

function mapStateToProps(state) {
    return {
        user: state.user,
        identifiedUser: state.identifiedUser
    }
}
export default connect(mapStateToProps)(function Routee(props) {
    const { user, identifiedUser } = props

    return (
        <div>
           
           
            <Switch>
                
               
               <Route path='/showMyTasks'><ShowTasks user={identifiedUser}></ShowTasks></Route>
                <Route path='/listoftasks'><SelectableList user={identifiedUser}></SelectableList></Route>
                <Route path='/'><Form></Form></Route>
            </Switch>
           
        </div>
    )
})
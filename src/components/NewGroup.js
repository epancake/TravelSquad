import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";


const baseUrl = "http://localhost:3000/"
const apiUrl = "https://travelsquadback.herokuapp.com"

class NewGroup extends Component {

  componentDidMount() {
    let newID = 999999999
    this.onSubmit = this.onSubmit.bind(this);
    this.getData = this.getData.bind(this);
    this.addFormSection = this.addFormSection.bind(this);
    this.submitGroup = this.submitGroup.bind(this);
    this.submitLeader = this.submitLeader.bind(this);

    this.getData()
    this.getId()

    this.state = {
      users: [],
      groups: []
    }
  }

  addFormSection() {

  }

  getData = () => {
    fetch(apiUrl)
    .then(res => res.json())
    .then(res => {console.log('response', res); return res})
    .then(res => {
    this.setState({
      users: res.users,
      groups: res.groups
    })
        })
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', this.state))
    }

  getId = () => {
    this.newID = Math.floor(Math.random() * Math.floor(999999999));
    return this.newID
  }

  onSubmit = (event) => {
    ///submit Group
    ///submit leader
    ///redirect to GroupPage
    console.log('submitted')
    event.preventDefault()
    this.submitGroup(event)
    this.submitLeader(event)
  }

  submitGroup(event) {
    const form = event.target;
    const data = new FormData(form);
    const groupToSend = ({
      id: this.newID,
      url: apiUrl + "/" + this.newID,
      groupName: data.get('groupName')
    })
    console.log('group', groupToSend)
  }

  submitLeader(event) {
    const form = event.target;
    const data = new FormData(form);
    const mainUserToSend = ({
      email: data.get("main-email"),
      fname: data.get("main-fname"),
      lname: data.get("main-lname"),
      group_id: this.newID
      })
    console.log('user', mainUserToSend)
    // this.setState({ questions })
  }

  render() {
    const { users } = this.props
    return (
      <div>
        <div class="form">
          <p>Enter details about your group.</p>
          <form className="memberForm" onSubmit={this.onSubmit}>
            <label>Group Name:</label>
            <input type="text" name="groupName"/>
            <section className="person-entry">
              <label>Your First Name:</label>
              <input type="text" name="main-fname"/>
              <label>Your Last Name:</label>
              <input type="text" name="main-lname"/>
              <label>Your Email:</label>
              <input type="text" name="main-email"/>
            </section>
            <input className="formEnd" type="submit" value="Continue">
            </input>
          </form>
        </div>
      </div>
    )
  }
}

export default NewGroup

import React, { Component } from 'react';

const baseUrl = "https://travel-squad.firebaseapp.com"
const apiUrl = "https://travelsquadback.herokuapp.com"

class NewGroup extends Component {

  componentDidMount() {
    this.onSubmit = this.onSubmit.bind(this);
    this.getData = this.getData.bind(this);
    this.addFormSection = this.addFormSection.bind(this);
    this.submitGroup = this.submitGroup.bind(this);
    this.submitLeader = this.submitLeader.bind(this);
    this.postGroup = this.postGroup.bind(this)
    this.postLeader = this.postLeader.bind(this)

    this.getData()
    this.getId()
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
    this.newID = Math.floor(Math.random() * (999999999 - 99999999)) + 99999999;
    return this.newID
  }

  onSubmit = (event) => {
    console.log('submitted')
    event.preventDefault()
    Promise.all([
      this.submitGroup(event),
      this.submitLeader(event)
    ]).then(results => {
    window.location = baseUrl + "/" + this.newID
    })
  }

  submitGroup(event) {
    const form = event.target;
    const data = new FormData(form);
    const groupToSend = ({
      "id": this.newID,
      "url": apiUrl + "/" + this.newID,
      "name": data.get('groupName')
    })
    return this.postGroup(groupToSend)
  }

  postGroup = (group) => {
    console.log("group", group)
    let url = apiUrl + "/groups"
    console.log("url", url)
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(group),
      headers: new Headers({
        'Content-Type': 'application/json'
    })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(data => {this.setState({groups: data})})
    //
  }

  submitLeader(event) {
    const form = event.target;
    const data = new FormData(form);
    const mainUserToSend = ({
      "email": data.get("main-email"),
      "fname": data.get("main-fname"),
      "lname": data.get("main-lname"),
      "group_id": this.newID
      })
    console.log('user', mainUserToSend)
    return this.postLeader(mainUserToSend)
  }

  postLeader = (user) => {
    console.log("user", user)
    let url = apiUrl + "/users"
    console.log("url", url)
    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: new Headers({
        'Content-Type': 'application/json'
    })
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(data => {this.setState({users: data})})
  }

  render() {
    return (
      <div>
      <header className="landing-header">
          <h1>TravelSquad</h1>
      </header>
        <div className="form">
          <p className="instructions">Enter details about your group.</p>
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

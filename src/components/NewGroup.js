import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getData } from './actions'

class NewGroup extends Component {
  componentDidMount() {
    this.props.getData()
  }
  
  render() {
    const { users } = this.props
    return (
      <div>
        <form>
          <label>Group Name:</label>
          <input type='text'/>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getData,
}, dispatch);


const mapStateToProps = (state) => ({
  users: state.message.travelData.users,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewGroup);

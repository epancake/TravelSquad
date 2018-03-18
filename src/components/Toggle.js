import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { toggleMessage, getData } from './actions';

const Toggle = ({ messageVisibility, toggleMessage, getData }) => (
  <div>
    {messageVisibility &&
      <p>You will be seeing this if redux action is toggled</p>
    }
    <button onClick={toggleMessage}>
      Toggle Me
    </button>
    <button onClick={getData}>
      Load Data
    </button>
  </div>
);

const mapStateToProps = (state) => ({
  messageVisibility: state.message.messageVisibility,
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  toggleMessage,
  getData,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Toggle)

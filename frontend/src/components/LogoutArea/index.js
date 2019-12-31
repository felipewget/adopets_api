import React,
       { Component }  from 'react';
import { Button } from 'antd';

class LogoutArea extends Component {

  constructor( props )
  {
      super();

      this.state = {
        username: props.username ? props.username : null
      }
  }

  render() {

    let { funcLogout } = this.props;
    let { username } = this.state;

    return (
      <div>
          <p>{username}</p>
          <Button 
            type="primary" 
            icon="logout" 
            size="larger" 
            onClick={ () => { funcLogout(); }} />
      </div>
    );

  }
}

export default LogoutArea;
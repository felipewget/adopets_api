/**
 * This component is responsable about render logout button and details
 * 
 * @version 0.0.1
 * @author Fe Oliveira<fe.get@outlook.com>
 */

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
          
          <Button 
            className="float-right"
            type="primary" 
            icon="logout" 
            onClick={ () => { funcLogout(); }} />

          {/* If there is username prop, render name in right side of logout button */}
          <p className="float-right margin-right-15">{username}</p>

      </div>
    );

  }
}

export default LogoutArea;
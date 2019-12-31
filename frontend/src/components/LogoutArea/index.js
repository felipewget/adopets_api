import React,
       { Component }  from 'react';
import { Button } from 'antd';

class LogoutArea extends Component {

  constructor( props )
  {
      super();
  }

  render() {

    let { funcLogout } = this.props;

    return (
      <div>
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
import React,
       { Component }  from 'react';
import { Button } from 'antd';

class LogoutArea extends Component {

  constructor( props )
  {
      super();
  }

  render() {

    return (
      <div>
          <Button type="primary" icon="logout" size="larger" />
      </div>
    );

  }
}

export default LogoutArea;
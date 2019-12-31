import React,
       { Component }  from 'react';

import { Spin, Icon } from 'antd';

class Loader extends Component {

  constructor( props )
  {
      super();
  }

  render() {

    return (
      <div data-component="loader">
          <Icon type="loading" style={{ fontSize: 24 }} spin />
      </div>
    );

  }
}

export default Loader;
/**
 * This component is a loader that can used in many application places
 * 
 * @version 0.0.1
 * @author Fe Oliveira<fe.get@outlook.com>
 */

import React,
       { Component }  from 'react';

import { Icon } from 'antd';

class Loader extends Component {

  constructor( props )
  {
      super();
  }

  render() {

    return (
      <div data-component="loader">
          <Icon type="loading" spin />
      </div>
    );

  }
}

export default Loader;
/**
 * This component responsable about show loader in page beetwen the page components is loading
 * 
 * @version 0.0.1
 * @author Fe Oliveira<fe.get@outlook.com>
 */

import React,
       { Component }  from 'react';

import Loader from './../Loader';

class LandingPage extends Component {

  constructor( props )
  {
      super();
  }

  render() {

    return (
      <div data-component="landing-page">
        <Loader />
      </div>
    )

  }

}

export default LandingPage;
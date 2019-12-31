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
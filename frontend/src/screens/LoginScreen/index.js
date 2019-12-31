import React,
       { Component }  from 'react';

import FormLogin    from './../../components/FormLogin';
import LandingPage  from './../../components/LandingPage';
import Loader       from './../../components/Loader';

/**
 *  Tela de busca por um pet
 */
class LoginScreen extends Component {

  constructor()
  {

    super();
    this.state = {
        form_loading: false,
        loading: true
    };

  }

  async componentDidMount(){

    // Check Login

    this.setState({
        loading: false
    })
    
  }

  processPage()
  {

    let { form_loading } = this.state;

    return (
      <div data-page="login">
          
          <div>

            <i data-logo></i>

            {
                form_loading === true
                ? <Loader />
                : <FormLogin />
            }
            
            
          </div>

      </div>
    );

  }

  render() {

    let { loading } = this.state;

    return loading === true
        ? <LandingPage />
        : this.processPage();

  }
  
}

export default LoginScreen;
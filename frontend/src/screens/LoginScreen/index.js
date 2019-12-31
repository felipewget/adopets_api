import React,
       { Component }  from 'react';

import { notify }  from './../../utils/notificationUtil';
import {
    saveSession,
    checkSession
} from './../../utils/sessionUtil';

import {
    createSession,
    registerUser
}                   from './../../actions/authAction';

import FormLogin    from './../../components/FormLogin';
import LandingPage  from './../../components/LandingPage';
import Loader       from './../../components/Loader';

// @TODO validade email <----

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

    this.auth = this.auth.bind( this );

  }

  async auth( login, password )
  {

    this.setState({ form_loading: true })
    
    let response = await createSession();
    if( response.status === 200 && response.code === 200 ){

      let { access_key } = response.data;
      
      response = await registerUser( login, password, access_key );

      if( response.status === 200 && response.code === 200 ){

        let {
          organization_user,
          access_key
        } = response.data;

        await saveSession( organization_user.first_name, access_key );

        window.location.href="/";

      } else {

            notify("Falha no login", response.message )
            this.setState({ form_loading: false });
            // console.error("Erro ao autenticar um usuario");

      }

    } else {
        
        notify("Falha no login", "Erro ao criar uma sessao" )
        this.setState({ form_loading: false });
        // console.error("Erro ao criar uma sessao:", response );
        
    }

  }

  async componentDidMount(){

    // Check Login
    let response_check_session = await checkSession();

    if( response_check_session ){

        window.location.href="/";

    } else {

        this.setState({
            loading: false
        })

    }
    
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
                : <FormLogin 
                    funcAuth={this.auth} />
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
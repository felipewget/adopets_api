import React,
       { Component }  from 'react';

import LandingPage from './../../components/LandingPage';
import SearchBlock from './../../components/SearchBlock';
import LogoutArea from './../../components/LogoutArea';
import SearchListResults from './../../components/SearchListResults';


import { Layout } from 'antd';

import {
  createSession,
  registerUser
}                     from './../../actions/authAction';
import { searchPet }  from './../../actions/searchAction';

import {
  deleteSession,
  checkSession
} from './../../utils/sessionUtil';

/**
 *  Tela de busca por um pet
 */
class SearchScreen extends Component {

  constructor()
  {

    super();
    this.state = {
      loading: true
    };

    this.logout = this.logout.bind(this);

  }

  async componentDidMount(){

    // Check if autheticated
    let response_check_session = await checkSession();

    if( response_check_session ){

      this.setState({
        loading: false
      })

    } else {

      deleteSession();
      window.location.href="/login";

    }

  }

  async logout()
  {

    deleteSession();
    window.location.href="/login";

  }

  processPage()
  {

    const { 
      Header, 
      Footer, 
      Sider, 
      Content 
    } = Layout;

    return (
      <div className="App">

        <Header>
          
          {/* // AKI VAI FICA A LOGOMARCA */}
          <LogoutArea 
            funcLogout={this.logout} />

        </Header>

        <Content>

          <SearchBlock />
          <SearchListResults />

        </Content>

        <Footer>
          <p>Desenvolvido com muito carinho por <a>Felipe Oliveira</a></p>
        </Footer>
        
      </div>
    )

  }  

  render() {

    let { loading } = this.state;

    return loading === true
            ? <LandingPage />
            : this.processPage();

  }
}

export default SearchScreen;
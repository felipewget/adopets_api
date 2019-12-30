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

  }

  async auth()
  {

    let response = await createSession();
    if( response.status === 200 && response.code === 200 ){

      let { access_key } = response.data;
      
      response = await registerUser( "usuario-test@adopets.com", "123123", access_key );

      if( response.status === 200 && response.code === 200 ){
        console.log( response );

        let {
          organization_user,
          access_key
        } = response.data;

      } else {
        console.error("Erro ao autenticar um usuario");
      }

    } else {
      console.error("Erro ao criar uma sessao:", response );
    }

  }

  async componentDidMount(){

    // Check if autheticated
    
    this.setState({
      loading: false
    })

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
          <LogoutArea />

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
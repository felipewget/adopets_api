import React,
       { Component }  from 'react';

import LandingPage from './../../components/LandingPage';
import SearchBlock from './../../components/SearchBlock';
import LogoutArea from './../../components/LogoutArea';
import SearchListResults from './../../components/SearchListResults';

import { notify } from './../../utils/notificationUtil';

import { Layout } from 'antd';

import { searchPet }  from './../../actions/searchAction';

import {
  deleteSession,
  checkSession,
  getUsername
} from './../../utils/sessionUtil';

/**
 *  Tela de busca por um pet
 */
class SearchScreen extends Component {

  constructor()
  {

    super();
    this.state = {
      loading: true,
      loading_researching: false,
      has_more_results: false,
      page: 0,
      results: []
    };

    this.logout = this.logout.bind(this);
    this.search = this.search.bind(this);
    this.loadMore = this.loadMore.bind(this);

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

  async loadMore()
  {

    let { page } = this.state;

    ++page;

    this.search( page );

  }

  async search( page = 1 )
  {

    let self = this;

    let { results } = this.state;
    
    await this.setState({ loading_researching: true });

    let response = await searchPet( page );

    if( response.status === 200 && response.code === 200 ){

      let has_more = false;
      let {
        page,
        pages,
        result
      } = response.data

      if( page < pages ){
        has_more = true;
      }

      if( page > 1 ){

        for( let i in result ){
          results.push( result[i] );
        }

        result = results;

      }

      await this.setState({ 
        loading_researching: false,
        has_more_results: has_more,
        results: result,
        page: page
      });

      return true;

    } else {

      notify("Erro ao realizar a pesquisa", "Acesso negado");
      setTimeout( () => {
        self.logout();
      })

    }

    

  }

  processPage()
  {

    const { 
      Header, 
      Footer, 
      Sider, 
      Content 
    } = Layout;

    let {
      loading_researching,
      has_more_results,
      results,
      page
    } = this.state;

    return (
      <div className="App">

        <Header>
          
          <i data-logo></i>

          <LogoutArea 
            username={getUsername()}
            funcLogout={this.logout} />


        </Header>

        <Content>

          <SearchBlock 
            funcSearch={this.search}
            searching={loading_researching} />
            
          <SearchListResults 
            funcLoadMore={this.loadMore}
            searching={loading_researching} 
            results={results}
            page={page}
            has_more={has_more_results} />

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
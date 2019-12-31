/**
 * Search Page
 * 
 * @version 0.0.1
 * @author Fe Oliveira<fe.get@outlook.com>
 */

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

    let { 
      page,
      setting 
    } = this.state;

    ++page;

    this.search( setting, page );

  }

  async search( setting, page = 1 )
  {

    let self = this;

    let { 
      results
    } = this.state;
    
    await this.setState({ 
      loading_researching: true,
      results: page < 2 ? [] : results
    });

    let response = await searchPet( setting, page );

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
        page: page,
        setting: setting
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
      Content 
    } = Layout;

    let {
      loading_researching,
      has_more_results,
      results,
      page,
      setting
    } = this.state;

    return (
      <div data-page="search-screen">

        <Header>
          
          <i  data-logo
              className="float-left"></i>

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
            limit={setting && setting.limit && setting.limit > 0 ? setting.limit : 10 }
            has_more={has_more_results} />

        </Content>

        <Footer>
          <p>Developed with great affection by <a href="https://www.linkedin.com/in/felipe-oliveira-a85676190/" target="_blank" rel="noopener noreferrer">Felipe Oliveira</a></p>
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
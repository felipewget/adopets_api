import React,
       { Component }  from 'react';

import { Button, Card, Row } from 'antd';


class SearchListResults extends Component {

  constructor( props )
  {
      super();

      this.state = {
          searched: false,
          searching: true,
          page: 0,
          results: [],
          has_more: false,
          limit: 10
      }
  }

  makeResearchBlock()
  {
      return (
            <div data-block-detail>
                <i data-dog-research></i>
                <p>Encontre seu amigao</p>
            </div>
      )
  }

  noResultBlock()
  {
      return (
            <div data-block-detail>
                <i data-no-result></i>
                <p>Nenhum pet encontrado</p>
            </div>
      )
  }

  static getDerivedStateFromProps(props, state)
  {

    return {
        limit: props.limit ? props.limit : 10,
        searching: props.searching ? props.searching : false,
        results: props.results ? props.results : false,
        has_more: props.has_more ? props.has_more : false,
        page: props.page ? props.page : false,
        searched: state.searched === false ? props.searching : true
    }

  }

  loadingCards()
  {

    let { limit } = this.state;
    
    let arr_loading_cards = [];
    for( let i = 0; i<limit; i++ ){
        arr_loading_cards.push( true);
    }
    
    return arr_loading_cards.map( ( obj, i ) => {

        return(
            
            <div key={i}>
                <Card data-card-result loading={true}></Card>
            </div>
            
        );
    })

  }

  processResults()
  {

    let { 
        results,
        searched,
        searching
    } = this.state;

    let { Meta } = Card;
    
    return (
        <div>
            <Row>
                {
                    results && results.map( ( obj_pet, i ) => {

                        // I`m add param I because if not, give-me same image
                        let url_image = "https://source.unsplash.com/500x300/?" + obj_pet.specie.name + "&i=" + i;
                        let description_img = 'Pet Image - ' + obj_pet.id;
                        let el_img = <img src={url_image} alt={description_img} />

                        return(
                            
                                <div key={i}>
                                    <Card
                                        data-card-result
                                        cover={el_img}
                                        actions={[
                                            <p>R$ {parseFloat(obj_pet.price).toFixed(2)}</p>,
                                            <Button>Ver mais</Button>,
                                        ]} >

                                        <Meta title={obj_pet.name} />
                                        <p>{obj_pet.specie.name}</p>
                                        <p>{obj_pet.sex_key}</p>
                                        <p>{obj_pet.size_key}</p>
                                        <p>{obj_pet.age_key}</p>
                                        <p>{obj_pet.status_key}</p>
                                            
                                    </Card>
                                </div>
                            
                        );
                    })
                }

                {
                    searching
                    ? this.loadingCards()
                    : null
                }

                {
                    results.length === 0 && searching === false && searched === true
                    ? this.noResultBlock()
                    : null
                }
            </Row>
            
        </div>
    )

  }

  render() {

    let { 
        searching,
        page,
        has_more,
        searched
    } = this.state;

    let { funcLoadMore } = this.props;

    return (
        <div data-component="search-list-results">

            {
                searching === true && page < 1
                ? this.loadingCards()
                : this.processResults()
            }

            {
                searched === false
                    ? this.makeResearchBlock()
                    : null
            }

            {
                has_more && has_more === true
                    ? <Button data-load-more onClick={ () => { funcLoadMore(); }}>To Load More</Button>
                    : null
            }

        </div>
    )

  }
}

export default SearchListResults;
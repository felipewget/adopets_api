import React,
       { Component }  from 'react';

import { Skeleton, Switch, Button, Card, Meta, Icon, Avatar,Row, Col } from 'antd';


class SearchListResults extends Component {

  constructor( props )
  {
      super();

      this.state = {
          searched: false,
          loading: false,
          results: [{teste: "aodada"}]
      }
  }

  loadingCards()
  {
    
    let arr_loading_cards = [];
    for( let i = 0; i<18; i++ ){
        arr_loading_cards.push( true);
    }
    
    return (
        <Row>
            {
                arr_loading_cards.map( ( obj, i ) => {
                    console.log('chegou aki')
                    return(
                        <Col span={6} key={i}>
                            <div>
                                <Card style={{ margin: 16 }} loading={true}>
                                    osidjasiodjaosidj
                                </Card>
                            </div>
                        </Col>
                    );
                })
            }
        </Row>
    )
  }

  processResults()
  {

    let { 
        results,
        searched 
    } = this.state;


    let { Meta } = Card;

    if( results && results.length > 0 ) {

        return (
            <div>
                <Row>
                    {
                        results.map( ( obj, i ) => {
                            console.log('chegou aki')
                            return(
                                <Col span={6} key={i}>
                                    <div>
                                    <Card
                                        style={{ width: 300 }}
                                        actions={[
                                            <p>R$ 88,88</p>,
                                        <Button>Ver mais</Button>,
                                        ]} >
                                            <Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title="Buddy"
                                            />
                                            <p>Dog</p>
                                            <p>Female</p>
                                            <p>XL</p>
                                            <p>Senior</p>
                                            <p>Status disponivel</p>
                                            
                                        </Card>
                                    </div>
                                </Col>
                            );
                        })
                    }
                </Row>
                <Button>To Load More</Button>
            </div>
        )

    } else {

        return (
            <div>
                {
                    searched
                        ? "There isn`t pets with your preferences"
                        : "To make a search"
                }
            </div>
        )

    }

  }

  render() {

    let { loading } = this.state;

    return loading
            ? this.loadingCards()
            : this.processResults()

  }
}

export default SearchListResults;
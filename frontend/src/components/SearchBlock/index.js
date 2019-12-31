/**
 * Search block with form and event about research
 * 
 * @version 0.0.1
 * @author Fe Oliveira<fe.get@outlook.com>
 */

import React,
       { Component }  from 'react';

import { 
    Button,
    Radio ,
    Card,
    Row, 
    Col,
    Select
} from 'antd';

class SearchBlock extends Component {

  constructor( props )
  {
      super();

      this.state = {

          searching: false,

          gender: null,
          size  : null,
          age   : null,
          limit : 5

      }

      this.changeLimit = this.changeLimit.bind(this);

  }

  updateField( key, value )
  {

    this.setState({
        [key]: value
    })

  }

  static getDerivedStateFromProps(props, state)
  {

    return {
        searching: props.searching ? props.searching : false
    }

  }

  async search()
  {

    let { funcSearch } = this.props;
    let {
        gender,
        size,
        age,
        limit
    } = this.state;

    let setting = {
        gender: gender,
        size: size,
        age: age,
        limit: limit
    }
    
    await funcSearch( setting );

  }

  changeLimit( value )
  {
      this.setState({
          limit: value
      })
  }

  render() {

    let {
        searching
    } = this.state;

    let { Option } = Select;

    return (
        <div data-component="search-block">

            <Card
                actions={[
                    <div>

                        <Button type="primary" 
                                className="float-right margin-right-15 margin-left-15"
                                loading={searching} 
                                onClick={ () => { this.search() } } >
                            Search
                        </Button>

                        <Select defaultValue="5" 
                                onChange={this.changeLimit}
                                className="float-right" >
                            {
                                ['3','5','10'].map( ( value, i ) => {
                                    return (<Option key={i} value={value}>{value}</Option>)
                                })
                            }
                        </Select>
                        
                    </div>
                ]} >

                <Row>
                    
                    <Col span={8}>
                        <div>
                            <label data-title>Gender</label>
                            <Radio.Group defaultValue="all" buttonStyle="solid"  >
                                <Radio.Button value="all" onClick={ () => this.updateField( "gender", null ) }>All</Radio.Button>
                                {
                                    ['Female','Male'].map( ( value, i ) => {
                                        return (<Radio.Button key={i} value={value} onClick={ () => this.updateField( "gender", value ) } >{value}</Radio.Button>)
                                    })
                                }
                            </Radio.Group>
                        </div>
                    </Col>

                    <Col span={8}>
                        <div>
                            <label data-title>Size</label>
                            <Radio.Group defaultValue="all" buttonStyle="solid">
                                <Radio.Button value="all" onClick={ () => this.updateField( "size", null ) } >All</Radio.Button>
                                {
                                    ['S','M','L','XL'].map( ( value, i ) => {
                                        return (<Radio.Button key={i} value={value} onClick={ () => this.updateField( "size", value ) } >{value}</Radio.Button>)
                                    })
                                }
                            </Radio.Group>
                        </div>
                    </Col>

                    <Col span={8}>
                        <div>
                            <label data-title>Age</label>
                            <Radio.Group defaultValue="all" buttonStyle="solid">
                                <Radio.Button value="all" onClick={ () => this.updateField( "age", null ) } >All</Radio.Button>
                                {
                                    ['Baby','Young','Adult','Senior'].map( ( value, i ) => {
                                        return (<Radio.Button key={i} value={value} onClick={ () => this.updateField( "age", value ) } >{value}</Radio.Button>)
                                    })
                                }
                            </Radio.Group>
                        </div>
                    </Col>

                </Row>

            </Card>

        </div>
    );

  }
}

export default SearchBlock;
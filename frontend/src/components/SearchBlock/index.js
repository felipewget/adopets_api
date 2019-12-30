import React,
       { Component }  from 'react';

import { 
    Button,
    Radio ,
    Card
} from 'antd';

class SearchBlock extends Component {

  constructor( props )
  {
      super();

      this.state = {
          searching: false
      }
  }

  render() {

    let {
        searching
    } = this.state;

    return (
        <div>

            <Card
                actions={[
                    <Button type="primary" 
                            loading={searching} 
                            onClick={ () => { this.setState({searching: true}) } } >
                    Search
                    </Button>
                ]} >
                
                <div>
                    <label>Gender</label>
                    <Radio.Group defaultValue="a" buttonStyle="solid"  >
                        <Radio.Button value="a">All</Radio.Button>
                        <Radio.Button value="b">Female</Radio.Button>
                        <Radio.Button value="c">Male</Radio.Button>
                    </Radio.Group>
                </div>


                <div>
                    <label>Size</label>
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">S</Radio.Button>
                        <Radio.Button value="b">M</Radio.Button>
                        <Radio.Button value="c">L</Radio.Button>
                        <Radio.Button value="c">XL</Radio.Button>
                    </Radio.Group>
                </div>

                <div>
                    <label>Age</label>
                    <Radio.Group defaultValue="a" buttonStyle="solid">
                        <Radio.Button value="a">BABY</Radio.Button>
                        <Radio.Button value="a">YOUNG</Radio.Button>
                        <Radio.Button value="b">ADULT</Radio.Button>
                        <Radio.Button value="c">SENIOR</Radio.Button>
                    </Radio.Group>
                </div>

            </Card>

        </div>
    );

  }
}

export default SearchBlock;
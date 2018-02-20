import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gifts: [

      ]
    }
  }
  
  addGift = () => {
    const { gifts } = this.state;
    const newGifts = gifts.slice();
    newGifts.push({ id: 1 });
    this.setState({
      gifts: newGifts
    });
  }
  
  render() {
    return(
      <div>
        <h2>Gift Giver</h2>
        <Button className="btn-add" onClick={this.addGift}>Add Gift</Button>
      </div>
    );
  }
}
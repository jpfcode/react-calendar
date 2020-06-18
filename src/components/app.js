import React, { Component } from 'react';
import moment from 'moment';

import Header from './header';
import Footer from './footer';
import ContentWrapper from './content';

export default class App extends Component {
  constructor() {
    super();

    let currentDate = moment();

    this.state = {
      myDate: currentDate
    }

    this.handleMonthChange = this.handleMonthChange.bind(this);
  }

  handleMonthChange(direction) {
    const newDate = this.state.myDate;
    console.log('Original Date: ' + newDate.format('YYYY-MM-DD'));
    if (direction === "prev") {
      newDate.subtract(1,'months');
    } else {
      newDate.add(1, 'months');
    }
    console.log('Updated Date: ' + newDate.format('YYYY-MM-DD'));
    this.setState({
      myDate:newDate
    });

    console.log('Updated State Date: ' + this.state.myDate.format('YYYY-MM-DD'));
  }

  render() {
    return (
      <div className='app'>
        <Header month={ this.state.myDate.format('MMMM') } handleMonthChange={this.handleMonthChange} />
        <ContentWrapper date={ this.state.myDate }/>
        <Footer year={ this.state.myDate.format('YYYY')} />
      </div>
    );
  }
}

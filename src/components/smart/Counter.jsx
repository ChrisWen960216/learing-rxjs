import React, { Component } from 'react';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/scan';

import CounterDumb from '../dumb/Counter';

export default class CounterComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 1,
    };

    this.count = new Subject();
    const observer = value => this.setState({ count: value });
    this.count.scan((result, inc) => result + inc, 0).subscribe(observer);

    this.changeCount = this.changeCount.bind(this);
  }

  changeCount(type) {
    switch (type) {
      case 'add': return this.addCount();
      case 'remove': return this.removeCount();
      default: return null;
    }
  }

  addCount() {
    const { count } = this.state;
    this.setState({
      count: count + 1,
    });
  }

  removeCount() {
    const { count } = this.state;
    this.setState({
      count: count - 1,
    });
  }

  render() {
    const { count } = this.state;
    return (<CounterDumb changeCount={value => this.count.next(value)} count={count} />);
  }
}

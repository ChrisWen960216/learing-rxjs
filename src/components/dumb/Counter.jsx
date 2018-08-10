import React, { Component } from 'react';

export default class CounterDumb extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.changeCount = this.changeCount.bind(this);
  }

  changeCount(type) {
    const { changeCount } = this.props;
    return changeCount(type);
  }

  render() {
    const { count } = this.props;
    return (
      <div className="counter-dumb">
        <header>
          {count}
        </header>
        <button type="button" onClick={() => this.changeCount(1)}>
          增加
        </button>
        <button type="button" onClick={() => this.changeCount(-1)}>
          减少
        </button>
      </div>
    );
  }
}

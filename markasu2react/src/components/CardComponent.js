import React, { Component } from 'react'
import styles from './wrapper.module.css'

export class CardComponent extends Component {
  constructor() {
    super();
    this.state = {
      showInfo: false
    };
  }

  toggleInfo = () => {
    this.setState({ showInfo: !this.state.showInfo })
    console.log('state', this.state.showInfo)

  }

  render() {
    const myVar = this.props.myVar
    if (myVar === 'info' && this.state.showInfo === false) {
      this.btn = <button onClick={this.toggleInfo}>show info</button>
    } else if (myVar === 'info' && this.state.showInfo === true) {
       this.btn = <button onClick={this.toggleInfo}>hide info</button>
    }
    return (
      <div className={styles.box}>
      {this.props.myVar}
      {this.props.children}
      <br/>
      {this.state.showInfo && this.props.myInfo}
      <br/>
      {this.btn}

      </div>
    );
  }
}

export default CardComponent
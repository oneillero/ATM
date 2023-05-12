import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props){
    super(props)
    this.state = {
      balance: 0
    }
  }
  
  handleDepositClick(e) {
    e.preventDefault();
    let amount = parseInt(this.inputBox.value);
    if (isNaN(amount)) {
      alert('Please enter a dollar amount');
      this.inputBox.value = '';
      return;
    }
    let newBalance = this.state.balance + amount;
    this.setState({
      balance: newBalance
    })
    this.inputBox.value = '';
  }

  handleWithdrawClick(e) {
    e.preventDefault();
    let amount = parseInt(this.inputBox.value);
    if (isNaN(amount)) {
      alert('Please enter a dollar amount');
      this.inputBox.value = '';
      return;
    }
    let newBalance = this.state.balance - amount; // Subtract amount for withdrawal
    if(newBalance >= 0){ // Check if the balance is sufficient
      this.setState({
        balance: newBalance
      })
    } else {
      alert('Insufficient funds');
    }
    this.inputBox.value = '';
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div> {/* Show current balance */}
        <input type="text" placeholder="enter an amount" ref={(input) => this.inputBox = input} />
        <input type="button" value="Deposit" onClick={(e) => this.handleDepositClick(e)} />
        <input type="button" value="Withdraw" onClick={(e)=> this.handleWithdrawClick(e)}/>
      </div>
    )
  }
}

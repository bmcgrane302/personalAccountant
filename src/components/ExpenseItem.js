import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class ExpenseItem extends Component {
  onRowPress = () =>  {
    console.log('its working on expenses');
  }

  render () {
    return (


      <TouchableOpacity onPress={this.onRowPress.bind(this)}>
        <CardSection style={{flex: 1, flexDirection: 'row'}}>
          <CardSection style={{width: 150}}>
            <Text style={{color: 'red'}}>
              {this.props.expense.expense_description.toUpperCase()}
            </Text>
          </CardSection>
          <CardSection style={{width: 100}}>
            <Text>
              ${this.props.expense.expense_budget}
            </Text>
          </CardSection>
          <CardSection style={{width: 100}}>
            <Text>
              ${this.props.expense.expense_amount_paid}
            </Text>
          </CardSection>
        </CardSection>
      </TouchableOpacity>


    )
  }
}

export default ExpenseItem;

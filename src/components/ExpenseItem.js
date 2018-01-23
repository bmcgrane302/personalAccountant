import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class ExpenseItem extends Component {
  render () {
    return (
      <CardSection>
        <Text>
          {this.props.expense.expense_description}
        </Text>
        <Text>
          ${this.props.expense.expense_budget}
        </Text>
        <Text>
          ${this.props.expense.expense_amount_paid}
        </Text>


      </CardSection>
    )
  }
}

export default ExpenseItem;

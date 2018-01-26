import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class ExpenseItem extends Component {
  onRowPress = () =>  {
    Actions.updateExpense({
      id: this.props.expense.id,
      current: this.props.expense.expense_amount_paid,
      description: this.props.expense.expense_description,
      budget: this.props.expense.expense_budget,
    })

    //console.log('expense id is this', this.props.expense.expense_amount_paid);
  }

  render () {
    return (

     <View>
        <CardSection style={{flex: 1, flexDirection: 'row'}}>
          <CardSection style={{width: 150}}>
            <Text >
              {this.props.expense.expense_description.toUpperCase()}
            </Text>
          </CardSection>
          <CardSection style={{width: 100}}>
            <Text>
              ${this.props.expense.expense_budget}
            </Text>
          </CardSection>
        <TouchableOpacity onPress={this.onRowPress.bind(this)}>
          <CardSection style={{width: 100}}>
            <Text style={{color: 'red'}}>
              ${this.props.expense.expense_amount_paid}
            </Text>
          </CardSection>
        </TouchableOpacity>
        </CardSection>
    </View>

    )
  }
}

export default ExpenseItem;

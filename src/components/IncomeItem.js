import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { bindActionCreators } from 'redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class IncomeItem extends Component {
  onRowPress = () =>  {
    Actions.updateIncome({
      id: this.props.income.id,
      current: this.props.income.income_amount_received,
      description: this.props.income.income_description,
      budget: this.props.income.income_budget,
    })
    console.log('its working on income', this.props.income.income_amount_received);
  }

  render () {
    return (
   <View>
    <CardSection style={{flex: 1, flexDirection: 'row'}}>
        <CardSection style={{width: 150}}>
          <Text >
            {this.props.income.income_description.toUpperCase()}
          </Text>
        </CardSection>
        <CardSection style={{width: 100}}>
          <Text>
            ${this.props.income.income_budget}
          </Text>
        </CardSection>
      <TouchableOpacity onPress={this.onRowPress.bind(this)}>
        <CardSection style={{width: 100}}>
          <Text style={{color: 'green'}}>
            ${this.props.income.income_amount_received}
          </Text>
        </CardSection>
      </TouchableOpacity>
    </CardSection>
   </View>
    )
  }
}

export default IncomeItem;

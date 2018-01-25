import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class IncomeItem extends Component {
  onRowPress = () =>  {
    console.log('its working on income', this.props.income.id);
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

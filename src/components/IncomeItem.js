import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Text, View, TouchableOpacity } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class IncomeItem extends Component {
  onRowPress = () =>  {
    console.log('its working on income');
  }

  render () {
    return (

    <TouchableOpacity onPress={this.onRowPress.bind(this)}>
      <CardSection style={{flex: 1, flexDirection: 'row'}}>
        <CardSection style={{width: 150}}>
          <Text style={{color: 'green'}}>
            {this.props.income.income_description.toUpperCase()}
          </Text>
        </CardSection>
        <CardSection style={{width: 100}}>
          <Text>
            ${this.props.income.income_budget}
          </Text>
        </CardSection>
        <CardSection style={{width: 100}}>
          <Text>
            ${this.props.income.income_amount_received}
          </Text>
        </CardSection>
      </CardSection>
    </TouchableOpacity>

    )
  }
}

export default IncomeItem;

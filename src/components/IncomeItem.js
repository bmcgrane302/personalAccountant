import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class IncomeItem extends Component {
  render () {
    return (


        <CardSection>
          <Text>
            {this.props.income.income_description}
          </Text>
          <Text>
            {this.props.income.income_budget}
          </Text>
          <Text>
            {this.props.income.income_amount_received}
          </Text>

         
        </CardSection>


    )
  }
}

export default IncomeItem;

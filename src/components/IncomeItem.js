import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class IncomeItem extends Component {
  render () {
    return (


      <CardSection  >
        <CardSection >
          <Text style={{color: 'green'}}>
            {this.props.income.income_description}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            ${this.props.income.income_budget}
          </Text>
        </CardSection>
        <CardSection>
          <Text>
            ${this.props.income.income_amount_received}
          </Text>
        </CardSection>
      </CardSection>


    )
  }
}

export default IncomeItem;

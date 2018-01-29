import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text, View } from 'react-native';
import { Card, CardSection} from './common';

class ChartItem extends Component {

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
           <CardSection style={{width: 100}}>
             <Text style={{color: this.props.colorList[this.props.index]}}>
               ${this.props.expense.expense_amount_paid}
             </Text>
           </CardSection>
         </CardSection>
     </View>

    )
  }
}

export default ChartItem;

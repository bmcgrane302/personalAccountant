import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View } from 'react-native';
import { Card, CardSection} from './common';

class ChartItem extends Component {

  render () {

    let budgetTotal = this.props.expenses.reduce((acc,item)=> acc + Number(item.expense_budget),0)


    return (
      <View>
         <CardSection style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
           <CardSection style={{width: 150, borderColor: this.props.colorList[this.props.index], borderBottomWidth: 2}}>
             <Text >
               {this.props.expense.expense_description.toUpperCase()}
             </Text>
           </CardSection>
           <CardSection style={{width: 150, borderColor: this.props.colorList[this.props.index], borderBottomWidth: 2}}>
             <Text >
               ${this.props.expense.expense_budget}
             </Text>
           </CardSection>
           <CardSection style={{width: 50, borderColor: this.props.colorList[this.props.index], borderBottomWidth: 2}}>
             <Text >
               {Math.round((this.props.expense.expense_budget/budgetTotal)*100)}%
             </Text>
           </CardSection>
         </CardSection>
     </View>

    )
  }
}

function mapStateToProps(state) {
  return {
    income: state.income,
    expenses: state.expenses
  }
}

export default connect(mapStateToProps, null) (ChartItem);

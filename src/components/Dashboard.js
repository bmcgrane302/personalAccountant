import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { pingToken, getBudget, getExpenses } from '../actions/AuthActions';
import IncomeItem from './IncomeItem';
import ExpenseItem from './ExpenseItem';




class Dashboard extends Component {
  componentDidMount() {
    this.props.getBudget();
    this.props.getExpenses();
  }


  onButtonPress() {
    console.log('button working');
    this.props.pingToken();
  }



  render () {

    let incomeList = this.props.income.map(income => {
      return(
        <IncomeItem key={income.id} income={income} />
      )
    })

    let expenseList = this.props.expenses.map(expense => {
      return(
        <ExpenseItem key={expense.id} expense={expense} />
      )
    })

    return (
      <Card>

         {incomeList}
        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Ping
          </Button>
        </CardSection>
         {expenseList}

      </Card>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
      pingToken: bindActionCreators(pingToken, dispatch),
      getBudget: bindActionCreators(getBudget, dispatch),
      getExpenses: bindActionCreators(getExpenses, dispatch),
    }
  }

  function mapStateToProps(state) {
    return {
      income: state.income,
      expenses: state.expenses
    }
  }


export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);

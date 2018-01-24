import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { pingToken, getBudget, getExpenses } from '../actions/AuthActions';
import IncomeItem from './IncomeItem';
import ExpenseItem from './ExpenseItem';
import AddIncome from './AddIncome';




class Dashboard extends Component {
  state = { showIncomeModal: false };

  componentDidMount() {
    this.props.getBudget();
    this.props.getExpenses();
  }


  onButtonPress = () => {
    console.log('button working');
    this.props.pingToken();
    this.setState({ showIncomeModal: !this.state.showIncomeModal })
  }

  addExpenseButton = () => {
    console.log('expense button working');
    Actions.addExpense()
  }
  closeIncomeModal = () =>  {
    this.setState({showIncomeModal: false});
  }




  render () {

    let incomeList = this.props.income.sort((a,b)=> a.id-b.id).map(income => {
      return(
        <IncomeItem key={income.id} income={income} />
      )
    })

    let expenseList = this.props.expenses.sort((a,b)=> a.id-b.id).map(expense => {
      return(
        <ExpenseItem key={expense.id} expense={expense} />
      )
    })

    let incomeModal = this.state.showIncomeModal? <AddIncome closeIncomeModal={this.closeIncomeModal}/>:<Text></Text>;

    return (

      <ScrollView>

        <Card>
          <CardSection>
            <Text>INCOME</Text>
          </CardSection>

           {incomeList}
          <CardSection>
            <TouchableOpacity onPress={this.onButtonPress}             style={styles.buttonStyle}>
              <Text style={styles.textStyle}>
                   ADD INCOME
               </Text>
            </TouchableOpacity>
          </CardSection>
        </Card>
          {incomeModal}


        <Card>
          <CardSection>
            <Text>EXPENSES</Text>
          </CardSection>
           {expenseList}
           <CardSection>
             <TouchableOpacity onPress={this.addExpenseButton} style={styles.buttonStyle}>
                <Text style={styles.textStyle}>
                    ADD EXPENSE
                </Text>
             </TouchableOpacity>
           </CardSection>
        </Card>
      </ScrollView>
    )
  }
}

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 10,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10

  },
  buttonStyle: {

    alignSelf: 'center',
    backgroundColor: '#fff',
    marginLeft: 4,
    marginRight: 4
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

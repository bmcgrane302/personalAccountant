import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { ProgressCircle } from 'react-native-svg-charts'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { getBudget, getExpenses } from '../actions/AuthActions';
import IncomeItem from './IncomeItem';
import ExpenseItem from './ExpenseItem';
import AddIncome from './AddIncome';
import AddExpense from './AddExpense';




class Dashboard extends Component {
  state = {
    showIncomeModal: false,
    showExpenseModal: false
   };

  componentDidMount() {
    this.props.getBudget();
    this.props.getExpenses();
  }

  addIncomeButton = () => {
    console.log('button working');
    this.setState({ showIncomeModal: !this.state.showIncomeModal })
  }

  addExpenseButton = () => {
    console.log('expense button working');
    this.setState({ showExpenseModal: !this.state.showExpenseModal })

  }
  closeIncomeModal = () =>  {
    this.setState({showIncomeModal: false});
  }

  closeExpenseModal = () =>  {
    this.setState({showExpenseModal: false});
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

    let incomeModal = this.state.showIncomeModal? <AddIncome  closeIncomeModal={this.closeIncomeModal}/>:<Text></Text>;

    let expenseModal = this.state.showExpenseModal? <AddExpense  closeExpenseModal={this.closeExpenseModal}/>:<Text></Text>;

    return (

      <ScrollView>

        <Card >
         <View style={{ backgroundColor: '#fff', padding: 20, }}>
          <ProgressCircle

                style={ { height: 200 } }
                progress={ 0.7 }
                progressColor={ 'rgb(81, 173, 2)' }
                startAngle={ -Math.PI * 0.8 }
                endAngle={ Math.PI * 0.8 }
            />
         </View>
         
         <CardSection style={{ justifyContent: 'center'}}>
           <CardSection >
              <Text style={{ fontSize: 14}}>Budget: </Text>
           </CardSection>
           <CardSection >
              <Text style={{ fontSize: 14}}>Current: </Text>
              <Text style={{ fontSize: 14, color: 'red'}}></Text>
           </CardSection>
         </CardSection>
        </Card>




        <Card>
          <CardSection>
            <Text style={{color: 'green'}}>INCOME</Text>
          </CardSection>

           {incomeList}
          <CardSection>
            <TouchableOpacity onPress={this.addIncomeButton}             style={styles.buttonStyle}>
              <Text style={styles.textStyle}>
                   ADD INCOME
               </Text>
            </TouchableOpacity>
          </CardSection>
        </Card>
          {incomeModal}


        <Card>
          <CardSection>
            <Text style={{color: 'red'}}>EXPENSES</Text>
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
       {expenseModal}
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

import React, { Component } from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { ProgressCircle, PieChart } from 'react-native-svg-charts';
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

    let incomeTotal = this.props.income.reduce((acc,item)=> acc + Number(item.income_budget),0)

    let incomeReceived = this.props.income.reduce((acc,item)=> acc + Number(item.income_amount_received),0)

    let budgetTotal = this.props.expenses.reduce((acc,item)=> acc + Number(item.expense_budget),0)


    let budgetTotalSpent = this.props.expenses.reduce((acc,item)=> acc + Number(item.expense_amount_paid),0)


    let remainingDisplayColor = ((budgetTotal-budgetTotalSpent) < 1) ? "red" : 'rgb(81, 173, 2)';

    let colorList = ['#00ff01', '#0c2ff4', '#020911', '#e03b2c', '#ff00fa', '#19eadc', '#ed8312', '#10f2b6', '#10f2b6', '#8079ce', '#f2467e', '#1b5907']


    let createPieChartData = (arr) => {
        let newArray=[];
        for(let i = 0; i < arr.length; i++ ){
          newArray.push(Math.round((parseInt(arr[i].expense_budget)/budgetTotal)*100));
        }
        return newArray;
      }
    let chartData = createPieChartData(this.props.expenses)
    console.log('chartData', chartData);

    let pieData =
        chartData.map((value, index) => ({
        value,
        color: colorList[index],
        key: `pie-${index}`,
        onPress: () => Actions.budgetChart(),
        }))



    return (

      <ScrollView>

        <Card >
          <View style={{ backgroundColor: '#fff', padding: 20, }}>
            <PieChart
                  style={ { height: 200 } }
                  data={ pieData }
              />
          </View>


         <CardSection style={{ justifyContent: 'center'}}>
           <CardSection >
              <Text style={{ fontSize: 12}}>Budget: </Text>
              <Text style={{ fontSize: 12}}>${budgetTotal.toFixed(2)}</Text>
           </CardSection>
           <CardSection >
              <Text style={{ fontSize: 12}}>Spent: </Text>
              <Text style={{ fontSize: 12, color: 'red'}}>${budgetTotalSpent.toFixed(2)}</Text>
           </CardSection>
           <CardSection >
              <Text style={{ fontSize: 12}}>Remaining: </Text>
              <Text style={{ fontSize: 12, color: remainingDisplayColor}}>${(budgetTotal-budgetTotalSpent).toFixed(2)}</Text>
           </CardSection>
         </CardSection>

        </Card>


        <Card>
          <CardSection>
            <CardSection style={{ borderBottomWidth: 0 }}>
              <Text style={{color: 'green', width: 150}}>INCOME</Text>
              <Text style={{width: 100}}>PROJECTED</Text>
              <Text style={{width: 100}}>RECEIVED</Text>
            </CardSection>
          </CardSection>
           {incomeList}
          <CardSection>
            <TouchableOpacity onPress={this.addIncomeButton}   style={styles.buttonStyle}>
              <Text style={styles.textStyle}>
                   ADD INCOME
               </Text>
            </TouchableOpacity>
          </CardSection>
        </Card>
          {incomeModal}


        <Card>
          <CardSection>
            <CardSection style={{ borderBottomWidth: 0 }}>
              <Text style={{color: 'red', width: 150}}>EXPENSES</Text>
                <Text style={{width: 100}}>BUDGETED</Text>
                <Text style={{width: 100}}>PAID</Text>
            </CardSection>
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

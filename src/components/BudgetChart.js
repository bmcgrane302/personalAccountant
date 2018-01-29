import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProgressCircle, PieChart } from 'react-native-svg-charts';
import { bindActionCreators } from 'redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import ChartItem from './ChartItem';



class BudgetChart extends Component {

  colorList = ['#00ff01', '#0c2ff4', '#020911', '#e03b2c', '#ff00fa', '#19eadc', '#ed8312', '#10f2b6', '#10f2b6', '#8079ce', '#f2467e', '#1b5907']

  render () {


    let expenseList = this.props.expenses.sort((a,b)=> a.id-b.id).map((expense,i) => {
      return(
        <ChartItem colorList={this.colorList} key={expense.id} expense={expense} index={i} />
      )
    })

    let budgetTotal = this.props.expenses.reduce((acc,item)=> acc + Number(item.expense_budget),0)
    console.log('budgetTotal', budgetTotal);

    let budgetTotalSpent = this.props.expenses.reduce((acc,item)=> acc + Number(item.expense_amount_paid),0)
    console.log('budgetTotalSpent', budgetTotalSpent);



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
        color: this.colorList[index],
        key: `pie-${index}`,
        onPress: () => console.log('its working chart componet'),
        }))

    return (

      <ScrollView>

        <Card >
          <View style={{ backgroundColor: '#fff', padding: 20, }}>
            <PieChart
                  style={ { height: 275 } }
                  data={ pieData }
              />
          </View>


         <CardSection style={{ justifyContent: 'center'}}>
           <CardSection >
              <Text style={{ fontSize: 12}}>Budget: </Text>
              <Text style={{ fontSize: 12}}>$</Text>
           </CardSection>
         </CardSection>
         {expenseList}
        </Card>
      </ScrollView>

    )
  }
}

function mapStateToProps(state) {
  return {
    income: state.income,
    expenses: state.expenses
  }
}

export default connect(mapStateToProps, null) (BudgetChart);

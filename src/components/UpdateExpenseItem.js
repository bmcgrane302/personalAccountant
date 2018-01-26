import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProgressCircle } from 'react-native-svg-charts'
import { bindActionCreators } from 'redux';
import { updateExpense} from '../actions/AuthActions';
import { Text, View, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { Card, CardSection, Input } from './common';

class UpdateExpenseItem extends Component {
  state = {
    expense_amount_paid: 0,
    currentBudgetPer: 0,
    currentSpent: this.props.current
  }


  handleSubmit = () => {
    let total = Number(this.props.current) + Number(this.state.expense_amount_paid);

    this.setState({ currentSpent: total.toFixed(2) })
    this.props.updateExpense(total, this.props.id )

   }


  render () {
    let percentOfBudget = (Number(this.state.currentSpent)/Number(this.props.budget)).toFixed(2);
    

    return (

      <View  style={styles.containerStyle}>

        <Card>
          <CardSection style={{ justifyContent: 'center'}}>
            <CardSection >
               <Text style={{ fontSize: 20, color: 'red'}}>{this.props.description.toUpperCase()}</Text>
            </CardSection>
          </CardSection>
        </Card>

        <Card >
         <View style={{ backgroundColor: '#fff', padding: 20, }}>
          <ProgressCircle
                style={ { height: 200 } }
                progress={ Number(percentOfBudget) }
                progressColor={ 'rgb(81, 173, 2)' }
                startAngle={ -Math.PI * 0.8 }
                endAngle={ Math.PI * 0.8 }
            />
         </View>
         <CardSection style={{ justifyContent: 'center'}}>
           <CardSection >
              <Text style={{ fontSize: 14}}>Budget: {this.props.budget}</Text>
           </CardSection>
           <CardSection >
              <Text style={{ fontSize: 14}}>Current: </Text>
              <Text style={{ fontSize: 14, color: 'red'}}>{this.state.currentSpent}</Text>
           </CardSection>
         </CardSection>
        </Card>

        <Card>
          <CardSection>
            <Input
              label="Amount"
              placeholder="100.00"
              onChangeText={(expense_amount_paid) => this.setState({expense_amount_paid})}
              value={this.props.expense_amount_paid}
            />
          </CardSection>
          <CardSection>
            <CardSection>
              <TouchableOpacity onPress={this.handleSubmit}>
                <Text style={{color: '#007aff',  fontSize:10}}>
                     ADD
                 </Text>
              </TouchableOpacity>
            </CardSection>
          </CardSection>
        </Card>
      </View>
    )
  }
}

const styles = {
  cardSectionStyle: {
    justifyContent: 'center'
  },
  textStyle: {
    color: 'red',
    flex: 1,
    fontSize: 20,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {

    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },

};

function mapStateToProps(state) {
  return {
    expenses: state.expenses
  }
}

function mapDispatchToProps(dispatch) {
    return {

      updateExpense: bindActionCreators(updateExpense, dispatch),
    }
  }


export default connect(mapStateToProps, mapDispatchToProps) (UpdateExpenseItem);

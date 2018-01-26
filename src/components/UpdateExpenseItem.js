import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateExpense} from '../actions/AuthActions';
import { Text, View, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { Card, CardSection, Input } from './common';

class UpdateExpenseItem extends Component {
  state = {
    expense_amount_paid: 0,
  }

  handleSubmit = () => {
    let total = Number(this.props.current) + Number(this.state.expense_amount_paid);

    this.props.updateExpense(total, this.props.id )
    //console.log('total  is --------', total);
   }


  render () {

    return (

      <View  style={styles.containerStyle}>
       <Card>
        <CardSection>
          <Text style={{height: 300}}>
             CHART
          </Text>
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

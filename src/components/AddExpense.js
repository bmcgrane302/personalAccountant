import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { addExpense} from '../actions/AuthActions';
import { Text, View, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { Card, CardSection, Input } from './common';



class AddExpense extends Component {
  state = {
    expense_description: '',
    expense_budget: '',
    expense_amount_paid: '0'
  }

  handleSubmit = () => {

     this.props.addExpense(this.state)

     this.props.closeExpenseModal()
   }


  render () {

    return (
      <Modal
        transparent
        animationType="none"
        onRequestClose={() => {}}
      >
        <View style={styles.containerStyle}>
          <Card>
            <CardSection >
              <Text style={styles.textStyle}>
                EXPENSE
              </Text>
            </CardSection>

            <CardSection>
              <Input

                label="Description"
                placeholder="bill"
                onChangeText={(expense_description) => this.setState({expense_description})}
                value={this.props.expense_description}
              />
            </CardSection>

            <CardSection >
              <Input
                label="Budget"
                placeholder="1000.00"
                onChangeText={(expense_budget) => this.setState({expense_budget})}
                value={this.props.expense_budget}

              />
            </CardSection>

            <CardSection >
              <Input
                label="Paid"
                placeholder="1000.00--optional"
                onChangeText={(expense_amount_paid) => this.setState({expense_amount_paid})}
                value={this.props.expense_amount_paid}

              />
            </CardSection>

            <CardSection>
              <CardSection style={{ borderBottomWidth: 0 }}>
                <TouchableOpacity onPress={this.handleSubmit}
                  style={styles.buttonStyle}>
                  <Text style={{color: '#007aff',  fontSize:12, padding: 5}}>
                       ADD
                   </Text>
                </TouchableOpacity>
              </CardSection>
              <CardSection style={{ borderBottomWidth: 0 }}>
                <TouchableOpacity onPress={this.props.closeExpenseModal}
                  style={styles.deletButtonStyle}>
                  <Text style={{fontSize:12, padding: 5}}>
                       CLOSE
                   </Text>
                </TouchableOpacity>
              </CardSection>
            </CardSection>
          </Card>
        </View>
      </Modal>
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
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },
  buttonStyle: {

    alignSelf: 'center',
    backgroundColor: '#fff',
    marginLeft: 4,
    marginRight: 4,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    paddingLeft:8,
    paddingRight: 8
  },
  deletButtonStyle: {

    alignSelf: 'center',
    backgroundColor: '#fff',
    marginLeft: 4,
    marginRight: 4,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#000',
    paddingLeft:8,
    paddingRight: 8
  }

};

function mapDispatchToProps(dispatch) {
    return {
      addExpense: bindActionCreators(addExpense, dispatch)
    }
  }

export default connect(null, mapDispatchToProps) (AddExpense);

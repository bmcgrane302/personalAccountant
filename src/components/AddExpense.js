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
    expense_budget: ''
  }

  handleSubmit = () => {
      
     this.props.addExpense(this.state)

     this.props.closeExpenseModal()
   }


  render () {

    return (
      <Modal
        transparent
        animationType="slide"
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

            <CardSection>
              <Input
                label="Budget"
                placeholder="1000.00"
                onChangeText={(expense_budget) => this.setState({expense_budget})}
                value={this.props.expense_budget}

              />
            </CardSection>

            <CardSection>
              <CardSection>
                <TouchableOpacity onPress={this.handleSubmit}>
                  <Text>
                       ADD
                   </Text>
                </TouchableOpacity>
              </CardSection>
              <CardSection>
                <TouchableOpacity onPress={this.props.closeExpenseModal}>
                  <Text>
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
    flex: 1,
    fontSize: 15,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.85)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  },

};

function mapDispatchToProps(dispatch) {
    return {
      addExpense: bindActionCreators(addExpense, dispatch)
    }
  }

export default connect(null, mapDispatchToProps) (AddExpense);

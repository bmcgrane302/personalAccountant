import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { addIncome} from '../actions/AuthActions';
import { Text, View, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { Card, CardSection, Input } from './common';



class AddIncome extends Component {
  state = {
    income_description: '',
    income_budget: ''
  }

  handleSubmit = (e) => {
     e.preventDefault()
     this.props.addIncome(this.state)
     Actions.dash()
     this.props.closeIncomeModal()
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
                INCOME
              </Text>
            </CardSection>

            <CardSection>
              <Input
                label="Description"
                placeholder="bill"
                onChangeText={(income_description) => this.setState({income_description})}
                value={this.props.income_description}
              />
            </CardSection>

            <CardSection>
              <Input
                label="Budget"
                placeholder="1000.00"
                onChangeText={(income_budget) => this.setState({income_budget})}
                value={this.props.income_budget}

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
                <TouchableOpacity onPress={this.props.closeIncomeModal}>
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
      addIncome: bindActionCreators(addIncome, dispatch)
    }
  }

export default connect(null, mapDispatchToProps) (AddIncome);

import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { Card, CardSection, Input } from './common';



class AddIncome extends Component {
  state = {
    income_description: '',
    income_budget: ''
  }

  handleSubmit = (e) => {
     e.preventDefault()
     console.log('work', this.state);
   }


  render () {
    console.log('add income', this.state);
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
                secureTextEntry
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

export default AddIncome;

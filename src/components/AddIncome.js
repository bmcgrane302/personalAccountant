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
    income_budget: '',
    income_amount_received: '0'
  }

  handleSubmit = () => {
     this.props.addIncome(this.state)
     this.props.closeIncomeModal()
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
                INCOME
              </Text>
            </CardSection>

            <CardSection>
              <Input
                label="Description"
                placeholder="Bill"
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
              <Input
                label="Received"
                placeholder="100.00--optional"
                onChangeText={(income_amount_received) => this.setState({income_amount_received})}
                value={this.props.income_amount_received}

              />
            </CardSection>

            <CardSection>
              <CardSection>
                <TouchableOpacity onPress={this.handleSubmit}>
                  <Text style={{color: '#007aff', fontSize:10}}>
                       ADD
                   </Text>
                </TouchableOpacity>
              </CardSection>
              <CardSection>
                <TouchableOpacity onPress={this.props.closeIncomeModal}>
                  <Text style={{ fontSize:10}}>
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
    color: 'green',
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

};

function mapDispatchToProps(dispatch) {
    return {
      addIncome: bindActionCreators(addIncome, dispatch)
    }
  }

export default connect(null, mapDispatchToProps) (AddIncome);

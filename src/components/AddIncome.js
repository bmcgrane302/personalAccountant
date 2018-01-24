import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { Card, CardSection, Input } from './common';



class AddIncome extends Component {
  render () {
    return (
      <Modal
        transparent
        animationType="slide"
        onRequestClose={() => {}}
      >
        <View style={styles.containerStyle}>
          <CardSection style={styles.cardSectionStyle}>
            <Text style={styles.textStyle}>
              INCOME
            </Text>
          </CardSection>
          <CardSection>
            <TouchableOpacity onPress={this.props.closeIncomeModal}>
              <Text>
                   CLOSE
               </Text>
            </TouchableOpacity>
          </CardSection>
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
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export default AddIncome;

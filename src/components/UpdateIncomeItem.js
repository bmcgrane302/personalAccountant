import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateIncome} from '../actions/AuthActions';
import { Text, View, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { Card, CardSection, Input } from './common';

class UpdateIncomeItem extends Component {
  state = {
    income_amount_received: 0,
  }

  handleSubmit = () => {
    let total = parseInt(this.props.current) + parseInt(this.state.income_amount_received);

    this.props.updateIncome(total, this.props.id )
    console.log('total  is --------', total);
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
              onChangeText={(income_amount_received) => this.setState({income_amount_received})}
              value={this.props.income_amount_received}
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
    income: state.income
  }
}

function mapDispatchToProps(dispatch) {
    return {

      updateIncome: bindActionCreators(updateIncome, dispatch),
    }
  }

export default connect(null, mapDispatchToProps) (UpdateIncomeItem);

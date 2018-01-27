import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ProgressCircle } from 'react-native-svg-charts'
import { bindActionCreators } from 'redux';
import { updateIncome, deleteIncome} from '../actions/AuthActions';
import { Text, View, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { Card, CardSection, Input } from './common';

class UpdateIncomeItem extends Component {
  state = {
    income_amount_received: 0,
    currentBudgetPer: 0,
    currentSpent: this.props.current
  }

  handleSubmit = () => {
    let total = Number(this.props.current) + Number(this.state.income_amount_received);

    this.setState({ currentSpent: total.toFixed(2) })
    this.props.updateIncome(total, this.props.id )
   }

   handleDelete = () => {
     //console.log('delete', this.props.id);
     this.props.deleteIncome(this.props.id)
    }

  render () {
    let percentOfBudget = (Number(this.state.currentSpent)/Number(this.props.budget)).toFixed(2);
    let percentDisplay = Math.round((percentOfBudget*100));
    let displayColor = (percentOfBudget < .7) ? "red" : (percentOfBudget < 1) ? 'yellow': 'rgb(81, 173, 2)';
    console.log('color', displayColor );

    return (
      <View  style={styles.containerStyle}>

        <Card>
          <CardSection style={{ justifyContent: 'center'}}>
            <CardSection >
               <Text style={{ fontSize: 20, color: '#007aff'}}>{this.props.description.toUpperCase()}</Text>
            </CardSection>
          </CardSection>
        </Card>

        <Card >
         <View style={{ backgroundColor: '#fff', padding: 20, }}>
          <ProgressCircle
                style={ { height: 200 } }
                progress={ Number(percentOfBudget) }
                progressColor={ displayColor }
                startAngle={ -Math.PI * 0.8 }
                endAngle={ Math.PI * 0.8 }
            />
            <View style={{ alignSelf: 'center', zIndex: 10 }}>
              <Text style={{ fontSize: 30}}>{percentDisplay}%</Text>
            </View>
         </View>
         <CardSection style={{ justifyContent: 'center'}}>
           <CardSection >
              <Text style={{ fontSize: 14}}>Budget: {this.props.budget}</Text>
           </CardSection>
           <CardSection >
              <Text style={{ fontSize: 14}}>Current: </Text>
              <Text style={{ fontSize: 14, color: 'rgb(81, 173, 2)'}}>{this.state.currentSpent}</Text>
           </CardSection>
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
            <CardSection>
              <TouchableOpacity onPress={this.handleDelete}>
                <Text style={{fontSize:10}}>
                     DELETE
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
      deleteIncome: bindActionCreators(deleteIncome, dispatch),
    }
  }

export default connect(null, mapDispatchToProps) (UpdateIncomeItem);

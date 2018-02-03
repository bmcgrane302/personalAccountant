import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import { ProgressCircle } from 'react-native-svg-charts'
import { bindActionCreators } from 'redux';
import { updateIncome, deleteIncome} from '../actions/AuthActions';
import { Text, View, ScrollView, TouchableOpacity, Modal, Button } from 'react-native';
import { Card, CardSection, Input } from './common';

class UpdateIncomeItem extends Component {
  state = {
    income_amount_received: 0,
    currentBudgetPer: 0,
    currentSpent: this.props.current,
    placeHolder: '$100.00'
  }

  handleSubmit = () => {
    let total = Number(this.props.current) + Number(this.state.income_amount_received);

    this.setState({ currentSpent: total.toFixed(2) })
    this.props.updateIncome(total, this.props.id )
    this.setState({ placeHolder: '$100.00' })
   }

   handleDelete = () => {
     //console.log('delete', this.props.id);
     this.props.deleteIncome(this.props.id)
     Actions.main()
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
               <Text style={{ fontSize: 20, color: 'rgb(81, 173, 2)'}}>{this.props.description.toUpperCase()}</Text>
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
              <Text style={{ fontSize: 14}}>Budget: ${this.props.budget}</Text>
           </CardSection>
           <CardSection >
              <Text style={{ fontSize: 14}}>Current: </Text>
              <Text style={{ fontSize: 14, color: 'rgb(81, 173, 2)'}}>${this.state.currentSpent}</Text>
           </CardSection>
         </CardSection>
        </Card>


        <Card>
          <CardSection>
            <Input
              label="Amount"
              placeholder={this.state.placeHolder}
              onChangeText={(income_amount_received) => this.setState({income_amount_received})}
              value={this.props.income_amount_received}
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
              <TouchableOpacity onPress={this.handleDelete}
                style={styles.deletButtonStyle}>
                <Text style={{fontSize:12, padding: 5}}>
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

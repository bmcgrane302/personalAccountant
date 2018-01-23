import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { pingToken, getBudget } from '../actions/AuthActions';



class Dashboard extends Component {
  componentDidMount() {
    this.props.getBudget();
    console.log('income', this.props);
  }


  onButtonPress() {
    console.log('button working');
    this.props.pingToken();
  }

  render () {
    return (
      <Card>


        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Ping
          </Button>
        </CardSection>


      </Card>
    )
  }
}

function mapDispatchToProps(dispatch) {
    return {
      pingToken: bindActionCreators(pingToken, dispatch),
      getBudget: bindActionCreators(getBudget, dispatch)

    }
  }

  function mapStateToProps(state) {
    return {
      income: state.income
    }
  }


export default connect(mapStateToProps, mapDispatchToProps) (Dashboard);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Text, View } from 'react-native';
import { Card, CardSection, Input, Button } from './common';
import { pingToken } from '../actions/AuthActions';



class Dashboard extends Component {
  componentDidMount() {
    //this.props.getBudget();

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
      pingToken: bindActionCreators(pingToken, dispatch)
    }
  }

export default connect(null, mapDispatchToProps) (Dashboard);

import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardSection, Input, Button } from './common';

class Register extends Component {
  state = {
    username: '',
    password: ''
  }

  handleSubmit = () => {
     console.log('registration working', this.state);

   }

  render () {

    return (
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={(username) => this.setState({username})}
            value={this.props.username}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={(password) => this.setState({password})}
            value={this.props.password}
          />
        </CardSection>



        <CardSection>
          <Button onPress={this.handleSubmit}>
             Register
          </Button>
        </CardSection>



      </Card>
    )
  }
}

export default Register;

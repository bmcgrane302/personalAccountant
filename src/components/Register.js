import React, { Component } from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardSection, Input, Button } from './common';


class Register extends Component {
  state = {
    username: '',
    password: '',
    checkPassword: 'z@76t6g82efv'
  }

  handleSubmit = () => {

     console.log('registration working', this.state);
   }

  render () {
    let renderButton = (this.state.password === this.state.checkPassword) ? <CardSection>
      <Button
         onPress={this.handleSubmit}>
         Register
      </Button>
    </CardSection> : <Text></Text>;

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
          <Input
            secureTextEntry
            label="Verify"
            placeholder=" verify password"
            onChangeText={(checkPassword) => this.setState({checkPassword})}
            value={this.props.checkPassword}
          />
        </CardSection>

       {renderButton}

      </Card>
    )
  }
}

export default Register;

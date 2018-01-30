import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser } from '../actions/AuthActions';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Card, CardSection, Input, Button } from './common';


class Register extends Component {
  state = {
    username: '',
    password: '',
    checkPassword: 'z@76t6g82efv'
  }

  handleSubmit = () => {
     this.props.addUser({
       username: this.state.username.toLowerCase(),
       password: this.state.password
     })
     console.log('registration working', this.state);
   }

  render () {
    let renderButton = (this.state.password === this.state.checkPassword) ? <CardSection style={{borderColor: '#fff'}}>
      <Button
         onPress={this.handleSubmit}>
         Register
      </Button>
    </CardSection> : <Text></Text>;

    return (
    <View style={{ backgroundColor: '#fff', flex: 3, paddingTop: 50, paddingLeft: 5, paddingRight: 5 }}>

        <CardSection style={{borderColor: '#000'}}>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={(username) => this.setState({username})}
            value={this.props.username}
          />
        </CardSection>

        <CardSection style={{borderColor: '#000'}}>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={(password) => this.setState({password})}
            value={this.props.password}
          />
        </CardSection>

        <CardSection style={{borderColor: '#000'}}>
          <Input
            secureTextEntry
            label="Verify"
            placeholder=" verify password"
            onChangeText={(checkPassword) => this.setState({checkPassword})}
            value={this.props.checkPassword}
          />
        </CardSection>

       {renderButton}


    </View>
    )
  }
}


function mapDispatchToProps(dispatch) {
    return {

      addUser: bindActionCreators(addUser, dispatch)
    }
  }

export default connect(null, mapDispatchToProps) (Register);

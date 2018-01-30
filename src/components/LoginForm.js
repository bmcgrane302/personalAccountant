import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import {
  emailChanged,
  passwordChanged,
  loginUser
 } from '../actions/AuthActions';
import { Text, Modal, View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner, Confirm } from './common';

class LoginForm extends Component {
  state = { showModal: false };

  onEmailChange = (text) => {
    //console.log('email---',text);
     this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    //console.log('pass---',text);
      this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props.authUser;
    console.log("email", email);
    console.log("password", password);
    console.log("props", this.props);
    this.props.loginUser({ email, password });

     //console.log('test', this.props);
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }
    return (
      <Button onPress={this.onButtonPress.bind(this)}>
        Login
      </Button>
    );
  }

  onRegisterPress = () => {
    Actions.register()
  }


  render() {
    console.log('props', this.props);
    return (
      <View style={{ backgroundColor: '#fff', flex: 3, paddingTop: 50, paddingLeft: 5, paddingRight: 5 }}>

          <CardSection style={{borderColor: '#000'}}>
            <Input
              label="Email"
              placeholder="email@gmail.com"
              onChangeText={this.onEmailChange.bind(this)}
              value={this.props.email}
            />
          </CardSection>

          <CardSection style={{borderColor: '#fff'}}>
            <Input
              secureTextEntry
              label="Password"
              placeholder="password"
              onChangeText={this.onPasswordChange.bind(this)}
              value={this.props.password}
            />
          </CardSection>

          <CardSection style={{borderColor: '#fff'}}>
            {this.renderButton()}
          </CardSection>
          <CardSection style={{borderColor: '#fff'}}>
            <Button onPress={this.onRegisterPress}>
               Register
            </Button>
          </CardSection>

      </View>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

function mapStateToProps(state, props) {
  console.log('state', state);
   return {
      authUser: state.authUser
   }
}

function mapDispatchToProps(dispatch) {
    return {
      emailChanged: bindActionCreators(emailChanged, dispatch),
      passwordChanged: bindActionCreators(passwordChanged, dispatch),
      loginUser: bindActionCreators(loginUser, dispatch)
    }
  }



export default connect(mapStateToProps, mapDispatchToProps) (LoginForm);

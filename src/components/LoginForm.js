import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { Scene, Router, Actions } from 'react-native-router-flux';
import {
  emailChanged,
  passwordChanged,
  loginUser
 } from '../actions/AuthActions';
import { Text, Modal } from 'react-native';
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
      <Card>
        <CardSection>
          <Input
            label="Email"
            placeholder="email@gmail.com"
            onChangeText={this.onEmailChange.bind(this)}
            value={this.props.email}
          />
        </CardSection>

        <CardSection>
          <Input
            secureTextEntry
            label="Password"
            placeholder="password"
            onChangeText={this.onPasswordChange.bind(this)}
            value={this.props.password}
          />
        </CardSection>

        <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

        <CardSection >
          {this.renderButton()}
        </CardSection>

        <CardSection>
          <Button onPress={this.onRegisterPress}>
             Register
          </Button>
        </CardSection>



      </Card>
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

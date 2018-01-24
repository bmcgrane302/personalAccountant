import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';


const RouterComponent = () => {
  return (
    <Router>

      <Scene key='root' hideNavBar>
        <Scene key='auth' >
          <Scene key='login' component={LoginForm}  title='Please Login' initial  />
        </Scene>

        <Scene key='main'>
          <Scene key='dash' component={Dashboard} title='BUDGET'  />
          <Scene key='addExpense' component={AddExpense} title='EXPENSE'  />
        </Scene>
      </Scene>





    </Router>

  );
};

export default RouterComponent;

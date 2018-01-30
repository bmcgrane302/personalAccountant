import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import Dashboard from './components/Dashboard';
import AddExpense from './components/AddExpense';
import UpdateExpenseItem from './components/UpdateExpenseItem';
import UpdateIncomeItem from './components/UpdateIncomeItem';
import BudgetChart from './components/BudgetChart';
import Register from './components/Register';


const RouterComponent = () => {
  return (
    <Router>

      <Scene key='root' hideNavBar>
        <Scene key='auth' >
          <Scene key='login' component={LoginForm}  title='Personal Accountant' initial  />
          <Scene key='register' component={Register} title='Register'  />
        </Scene>

        <Scene key='main'>
          <Scene key='dash' component={Dashboard} title='BUDGET'  />
          <Scene key='updateExpense' component={UpdateExpenseItem} title='UPDATE EXPENSE'  />
          <Scene key='updateIncome' component={UpdateIncomeItem} title='UPDATE INCOME'  />
          <Scene key='budgetChart' component={BudgetChart} title=''  />
        </Scene>
      </Scene>





    </Router>

  );
};

export default RouterComponent;

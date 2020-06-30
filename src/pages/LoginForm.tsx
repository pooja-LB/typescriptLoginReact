/* eslint-disable no-unused-expressions */
import React, {useState, Dispatch} from 'react';
import 'devextreme-react/text-area';
import notify from 'devextreme/ui/notify';
import service from '../data/user.data';
import { createBrowserHistory } from 'history';
import { Redirect } from 'react-router-dom';



import Form, {
    ButtonItem,
    GroupItem,
    SimpleItem,
    Label,
    CompareRule,
    EmailRule,
    PatternRule,
    RangeRule,
    RequiredRule,
    StringLengthRule,
    AsyncRule
  } from 'devextreme-react/form';
import userData from '../data/user.data';
import { Link } from 'react-router-dom';

interface State { 
        email: string;
        password: string;
        firstName?: string;
        submitted?: boolean
};

export const LoginForm = (state:State) => {
   const rules = { 'X': /[02-9]/ };
   let currentUserData:State;

  const [formData, setForm] = useState({
    email: '',
    password: '',
  });
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: '',
  });
  const [redirect, setRedirect] = useState(false);
  const history = createBrowserHistory();

   const buttonOptions = {
    text: 'Login',
    type: 'success',
    useSubmitBehavior: true
  };

   const employee = service.getEmployee();
    const validationRules = {
        Email: [
        { type: 'required', message: 'Email is required.' },
      ],
      Password: [
        { type: 'required', message: 'Password is required.' }
      ]
    };
    const passwordOptions =  {
      mode: 'password'
    };
    const validateForm = (e:any) => {
        e.component.validate();
      };
    
    const handleSubmit = (e:any) => {
      if(localStorage.hasOwnProperty('user')){
       const user = JSON.parse(localStorage.getItem('user')!);
        
            user.map((item : any) =>{
               return currentUserData = {
                    email: item.email,
                    password:item.password,
                    firstName: item.firstName
                }
            })
          } 
        if(currentUserData && currentUserData.email == formData.email && currentUserData.password == formData.password){

            localStorage.setItem('currentuser', JSON.stringify(currentUserData));

            notify({
                message: 'You Logged in',
                position: {
                  my: 'center top',
                  at: 'center top'
                }
              }, 'success', 3000);
            setRedirect(true)   
        }else{
            notify({
                message: 'Email Password not registerd',
                position: {
                  my: 'center top',
                  at: 'center top'
                }
            }, 'warning', 3000);
            console.log('login');
            history.push('/');
        }
        
        e.preventDefault();
    }

     const formFieldDataChanged = (e:any) =>{
        const updatedField = e.dataField;
        const newValue = e.value;
        updatedField == 'Password' ? setForm({ ...formData, password: newValue }) : setForm({ ...formData, email: newValue })
    }
      

  return (
    <React.Fragment>
        {redirect ? (<Redirect push to="/home"/>) : null}
        <form  onSubmit={handleSubmit}>
        
            <Form
                onContentReady={validateForm}
                onFieldDataChanged={formFieldDataChanged}
                colCount={1}
                id ="form"
                formData={employee}>
                    <GroupItem caption="Login">
                <SimpleItem dataField="Email"  editorType="dxTextBox">
                    <RequiredRule message="Email is required" />
                    <EmailRule message="Email is invalid" />
                </SimpleItem>
                <SimpleItem dataField="Password" editorType="dxTextBox" editorOptions={passwordOptions} validationRules={validationRules.Password}>
                <RequiredRule message="Password is required" />
                    </SimpleItem>
                </GroupItem>

                <ButtonItem horizontalAlignment="right"
              buttonOptions={buttonOptions}/>
            </Form>

            </form>
            <div>Not a member? <Link to='/signup'>Signup</Link></div>
  </React.Fragment>
  );
}

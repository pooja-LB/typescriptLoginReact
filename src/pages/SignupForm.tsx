import React, {useState} from 'react';
import 'devextreme-react/text-area';
import notify from 'devextreme/ui/notify';
import service from '../data/user.data';
import { Link } from 'react-router-dom';

import Form, {
  ButtonItem,
  GroupItem,
  Item,
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

interface UserProfile {
  firstName: string;
  lastName: string;
  email: string,
  password: string,
  gender: string,
  Dob: string,
  address: string,
  phone: string
}

export const SignupForm = (props: any) => {
   const rules = { 'X': /[02-9]/ };
   const [formData, setForm] = useState({
  });
  const [userArray, setUserArray ] = useState([{}]);

   const employee = service.getEmployee();
    const gender = service.getGender();
    const validationRules = {
      Email: [
        { type: 'required', message: 'Email is required.' },
      ],
      FirstName: [
        { type: 'required', message: 'Firstname is required.' },
      ],
      Password: [
        { type: 'required', message: 'Password is required.' }
      ]
    };

    const validateForm = (e:any) => {
        e.component.validate();
      };
      const buttonOptions = {
        text: 'Register',
        type: 'success',
        useSubmitBehavior: true
      };
      const passwordOptions =  {
        mode: 'password'
      };
    
      const handleSubmit = (e:any) => {

        setUserArray([...userArray,formData]);
        if(userArray!=null && userArray.length > 0){
          localStorage.setItem('user', JSON.stringify(userArray));
          notify({
            message: 'You have submitted the form',
            position: {
              my: 'center top',
              at: 'center top'
            }
          }, 'success', 3000);
        }else{
          notify({
            message: 'Cannot Submit the form',
            position: {
              my: 'center top',
              at: 'center top'
            }
          }, 'danger', 3000);
        }
        e.preventDefault();
      }

      const formFieldDataChanged = (e:any) =>{
        const updatedField = e.dataField;
        const newValue = e.value;

        switch(updatedField){
          case 'FirstName': { 
            setForm({ ...formData, firstName: newValue })
            break; 
         } 
          case 'LastName': { 
            setForm({ ...formData, lastName: newValue })
            break; 
         } 
          case 'Gender': { 
            setForm({ ...formData, gender: newValue })
            break; 
         } 
          case 'BirthDate': { 
            setForm({ ...formData, Dob: newValue })
            break; 
         } 
          case 'Phone': { 
            setForm({ ...formData, phone: newValue })
            break; 
         } 
          case 'Password':{
            setForm({ ...formData, password: newValue })
            break; 
          }
          case 'Email':{
            setForm({ ...formData, email: newValue })
            break; 
          }
          case 'Address':{
            setForm({ ...formData, address: newValue })
            break; 
          }
          default: { 
           return formData
         } 

        }
    }
    
  return (
    <React.Fragment>
          <form onSubmit={handleSubmit}>
            <Form
                onContentReady={validateForm}
                onFieldDataChanged={formFieldDataChanged}
                colCount={2}
                id="form"
                formData={employee}>
                    <GroupItem caption="Signup">
                <Item dataField="FirstName" validationRules={validationRules.FirstName} />
                <Item dataField="LastName" />
                <Item dataField="Gender" editorType="dxSelectBox" editorOptions={{ items: gender, searchEnabled: true }} />
                <Item dataField="BirthDate" editorType="dxDateBox" editorOptions={{ width: '100%'}} />
                <Item dataField="Address" />
                <Item dataField="Phone" editorOptions={{ mask: '+91 X00 000-0000', maskRules: rules }} />
                <SimpleItem dataField="Email"  editorType="dxTextBox">
                    <RequiredRule message="Email is required" />
                    <EmailRule message="Email is invalid" />
                </SimpleItem>
                <SimpleItem dataField="Password" editorOptions={passwordOptions}   editorType="dxTextBox">
                    <RequiredRule message="Password is required" />
                </SimpleItem>
                <ButtonItem horizontalAlignment="right"
              buttonOptions={buttonOptions}/>
                </GroupItem>
            </Form>
          </form>
          <div>Already a member? <Link to='/'>Login</Link></div>
           
  </React.Fragment>
  );
}

const employee = {
    ID: '',
    FirstName: '',
    LastName: '',
    Position: '',
    BirthDate: '',
    Address: '',
    Phone: '',
    Email: '',
    Password : ''
  };
  
  const positions = [
    'HR Manager',
    'IT Manager',
    'CEO',
    'Controller',
    'Sales Manager',
    'Support Manager',
    'Shipping Manager'
  ];
  const gender = [
    'Female',
    'Male',
    'Others',
  ];
  
  export default {
    getEmployee() {
      return employee;
    },
    getPositions() {
      return positions;
    },
    getGender() {
      return gender;
    }
  };
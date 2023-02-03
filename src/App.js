import React from 'react';
import './App.css';
// import Form from './Form';
import FormTask from './FormTask'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
 

  return (
    <div className="App">
      {/* <Form /> */}
      <FormTask />
      <ToastContainer />
    </div>
  );
}

export default App;

import React from 'react'
import AllFormInOneStep from './components/AllFormInOneStep.js';
import 'antd/dist/antd.css';
import './App.css'
import { Form } from 'antd';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep.js';
import ThirdStep from './components/ThirdStep.js';
import StructuredForm from './components/StructuredForm.js';
import StepsForm from './components/StepsForm'
import MultiStep from './components/MultiStep.js';

function App() {
  const steps = [
    {
      step: 1,
      title: "Personal Details",
      content: <FirstStep/>
    },
    {
      step: 2,
      title: "Address",
      content: <SecondStep/>
    },
    {
      step: 3,
      title: "Health And Fitness Regime",
      content: <ThirdStep/>
    }
  ]

  function onFinish(e){
    console.log("Hogaya na", e)
  }
  return (
    <div>
      <AllFormInOneStep steps={steps}/>
      {/* <MultiStep/> */}
      {/* <StepsForm/> */}
      {/* <Form name="basic" labelCol={{ span: 5 }} wrapperCol={{ span: 10 }} initialValues={{ remember: true, }} onFinish={onFinish}autoComplete="off"> */}
        {/* <StructuredForm steps={steps}/> */}
  {/* </Form> */}
    </div>
  )
}

export default App
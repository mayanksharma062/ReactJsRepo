import React from 'react'
import AllFormInOneStep from './components/AllFormInOneStep.js';
import 'antd/dist/antd.css';
import './App.css'
import { Form } from 'antd';
import FirstStep from './components/FirstStep';
import SecondStep from './components/SecondStep.js';
import ThirdStep from './components/ThirdStep.js';
import StructuredForm from './components/StructuredForm.js';

function App() {
  const steps = [
    {
      step: 1,
      title: "Step 1",
      content: <FirstStep/>
    },
    {
      step: 2,
      title: "step 2",
      content: <SecondStep/>
    },
    {
      step: 3,
      title: "step 3",
      content: <ThirdStep/>
    }
  ]
  return (
    <div>
      <AllFormInOneStep/>
      {/* <Form name="basic" labelCol={{ span: 10 }} initialValues={{ remember: true, }} autoComplete="off">
        <StructuredForm steps={steps}/>
  </Form>*/}
    </div>
  )
}

export default App
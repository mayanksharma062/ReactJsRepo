import React, { useState, useEffect } from 'react';
import 'antd/dist/antd.css';

import { Form, Input, Button, Checkbox, DatePicker, Radio, InputNumber, Steps, TimePicker } from 'antd';

const AllFormInOneStep = (props)=> {
    const { Step } = Steps;
    const [wholeData, setWholeData] = useState([]);
    // const { Step } = Steps;
    const [current, setCurrent] = useState(0);

    function next(e) {
      const nextStep = current + 1;
      setCurrent(nextStep);
      setWholeData([...wholeData, e])
    }
  
    function prev() {
      const prevStep = current - 1;
      setCurrent(prevStep);
    }
    const onChangeCurrent = cur => {
      console.log('onChange:', current);
      setCurrent(cur);
    };

    return (
        <>
            <Steps current={current} onChange={onChangeCurrent}>
      {props.steps.map(item => (
        <Step key={item.title} title={item.title} />
      ))}
    </Steps>
    {current === 3? "Thank You": <Form name="basic" labelCol={{span: 3 }} wrapperCol={{ offset: 0, span: 5 }} initialValues={{ remember: true, }} onSubmit={(e)=>e.preventDefault()} onFinish={next}><div className="steps-content">
        {props.steps[current].content}
        </div>
    <div className="steps-action">

      {current < props.steps.length - 1 && (
        <Button type="primary" htmlType="submit" >
          Next
        </Button>
      )}
      {current === props.steps.length - 1 && (
        <Button type="primary" htmlType="submit">
          Done
        </Button>
      )}
      {current > 0 && (
        <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
          Previous
        </Button>
      )}
      </div>
      </Form>}
        
        </>

    )
}

export default AllFormInOneStep;

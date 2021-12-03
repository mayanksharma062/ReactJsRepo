import React, {useState} from 'react'
import 'antd/dist/antd.css';
import { Button, Steps } from 'antd';

function StructuredForm(props) {
  const { Step } = Steps;
    const [current, setCurrent] = useState(0);

    function next() {
      const nextStep = current + 1;
      setCurrent(nextStep);
    }
  
    function prev() {
      const prevStep = current - 1;
      setCurrent(prevStep);
    }
    return (
    // <>
    //     <Steps current={activeStep} style={{ width: 400 }}>
    //     {props.steps.map((item) => (
    //       <Steps.Step />
    //     ))}
    //   </Steps>
    //   {props.steps.map((item) => (
    //     <div
    //       className={`steps-content ${
    //         item.step !== activeStep + 1 && "hidden"
    //       }`}
    //     >
    //       {item.content}
    //     </div>
    //   ))}
    //   <div className="steps-action">
    //     {activeStep < props.steps.length - 1 && (
    //       <Button type="primary" onClick={() => next()}>
    //         Next
    //       </Button>
    //     )}
    //     {activeStep === props.steps.length - 1 && (
    //       <Button type="primary" htmlType="submit">
    //         Submit
    //       </Button>
    //     )}
    //     {activeStep > 0 && (
    //       <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
    //         Previous
    //       </Button>
    //     )}
    //   </div>
    // </>
    <>
    <Steps current={current}>
      {props.steps.map(item => (
        <Step key={item.title} title={item.title} />
      ))}
    </Steps>
    <div className="steps-content">{props.steps[current].content}</div>
    <div className="steps-action">
      {current < props.steps.length - 1 && (
        <Button type="primary" onClick={() => next()}>
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
  </>
    )
}

export default StructuredForm


// onClick={() => message.success('Processing complete!')}
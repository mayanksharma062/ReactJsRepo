import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Form, Input, Button, Checkbox, DatePicker, Radio, InputNumber, Steps } from 'antd';

function FirstStep() {
    const { Step } = Steps;
    const [secondStep, setSecondStep] = useState(false);
    const [firstStep, setFirstStep] = useState(true);
    const [thirdStep, setThirdStep] = useState(false);
    const [submitButton, setSubmitButton] = useState(false);
    // const [wholeData, setWholeData] = useState([{}, {}, {}]);
    function onFinishFirst(e) {
        // e.preventDefault();
        setSecondStep(true);
        setFirstStep(false);
        setThirdStep(false);
        setSubmitButton(false);
    }
    function onFinishSecond(e) {
        setSecondStep(false);
        setThirdStep(true);
        setFirstStep(false);
        setSubmitButton(true);
    }
    function prevThird() {
        setSecondStep(true);
        setFirstStep(false);
        setThirdStep(false);
        setSubmitButton(false);
    }
    function prevSecond() {
        setSecondStep(false);
        setFirstStep(true);
        setThirdStep(false);
        setSubmitButton(false);
    }
    // const [stepForm] = Form.useForm()
    function onFinishThird(e) {
        console.log(e)
    }

    return (
        <div className="container">
            <div className="container my-3">
                {firstStep ? <>
                    <Steps current={1} status="error">
                        <Step title="In Process" description="This is a description" />
                        <Step title="Waiting" description="This is a description" />
                        <Step title="Waiting" description="This is a description" />
                    </Steps>
                </> : null}
                {secondStep ?
                    <>
                        <Steps current={2} status="error">
                            <Step title="Finished" description="This is a description" />
                            <Step title="In Process" description="This is a description" />
                            <Step title="Waiting" description="This is a description" />
                        </Steps>
                    </> : null}
                {thirdStep ?
                    <>
                        <Steps current={3} status="error">
                            <Step title="Finished" description="This is a description" />
                            <Step title="Finished" description="This is a description" />
                            <Step title="In Process" description="This is a description" />
                        </Steps>
                    </> : null}
            </div>
            {/* <Step title="In Process" description="This is a description" /> */}
            {/* <Steps current={1} status="error"> */}
            {/* <Form name="basic" labelCol={{ span: 10 }} initialValues={{ remember: true, }} autoComplete="off" OnFinish={onFinishForm}> */}
            {firstStep ?
                <>
                    <Form name="basic" labelCol={{ span: 10 }} initialValues={{ remember: true, }} autoComplete="off" onFinish={onFinishFirst}>
                        <h1>Personal Details</h1>
                        <Form.Item label="Creation Date And Time">
                            <DatePicker />
                        </Form.Item>
                        <Form.Item label="First Name" wrapperCol={{ span: 10 }} name="firstname" rules={[{ required: true, message: 'Please input your First Name!', },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Last Name" wrapperCol={{ span: 10 }} name="lastname" rules={[{ required: true, message: 'Please input your Last Name!', },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item name="email" wrapperCol={{ span: 10 }} label="Email" rules={[{ required: 'true', type: 'email', },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Gender" name="Gender" rules={[{ required: "true" }]}>
                            <Radio.Group>
                                <Radio value="Female">Female</Radio>
                                <Radio value="Male">Male</Radio>
                                <Radio value="Undifferentiated">Undifferentiated</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name="Age" label="Age">
                            <InputNumber />
                        </Form.Item>
                        <Form.Item name="Mode Of Transportation" label="Mode Of Transportation">
                            <Checkbox> Car </Checkbox>
                            <Checkbox> Motorbike </Checkbox>
                            <Checkbox> Bicycle </Checkbox>
                            <Checkbox> Boat </Checkbox>
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 10 }} labelCol={{ span: 8 }}>
                            <Button type="primary" htmlType="button">
                                Prev
                            </Button>
                            <Button className="mx-5" type="primary" htmlType="submit">
                                Next
                            </Button>
                        </Form.Item>
                    </Form>
                </>
                : null}
            {secondStep ?
                <>
                    {/* <Step title="Finished" description="This is a description" /> */}
                    <Form labelCol={{ span: 8 }} onFinish={onFinishSecond}>
                        <h3>Address</h3>
                        <Form.Item label="Address Line 1" wrapperCol={{ span: 6, }} name="Address Line 1" rules={[{ required: true, message: 'Please input your Address!', },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Address Line 2" wrapperCol={{ span: 6, }} name="Address Line 2" >
                            <Input />
                        </Form.Item>
                        <Form.Item label="City" wrapperCol={{ span: 6, }} name="city" rules={[{ required: true, message: 'Please input your City!', },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="State" wrapperCol={{ span: 6, }} name="state" rules={[{ required: true, message: 'Please input your State!', },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Country" wrapperCol={{ span: 6, }} name="country" rules={[{ required: true, message: 'Please input your Country!', },]}>
                            <Input />
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 10 }} labelCol={{ span: 8 }}>
                            <Button className="mx-5" type="primary" onClick={prevSecond} htmlType="button">
                                Prev
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Next
                            </Button>
                        </Form.Item>
                    </Form>
                </> : null
            }
            {thirdStep ?
                <>

                    <Form onFinish={onFinishThird}>
                        <h3>Health and Fitness Regime:</h3>
                        <Form.Item label="Alcohol Use" wrapperCol={{ span: 6, }} name="alcohol use" rules={[{ required: "true" }]} >
                            <Radio.Group>
                                <Radio value="No">No</Radio>
                                <Radio value="Yes">Yes</Radio>
                                <Radio value="Not Anymore">Not Anymore</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item label="Smoking" wrapperCol={{ span: 6, }} name="smoking" >
                            <Radio.Group>
                                <Radio value="No">No</Radio>
                                <Radio value="Yes">Yes</Radio>
                                <Radio value="Not Anymore">Not Anymore</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name="exercise" label="Exercise">
                            <Checkbox> Running/Jogging </Checkbox>
                            <Checkbox> Cardio </Checkbox>
                            <Checkbox> Strength Training </Checkbox>
                            <Checkbox> Idle or No Exercise </Checkbox>
                        </Form.Item>
                        <Form.Item wrapperCol={{ span: 10 }} labelCol={{ span: 8 }}>
                            <Button type="primary" onClick={prevThird} htmlType="button">
                                Prev
                            </Button>
                            <Button className="mx-5" type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </> : null}
            {/* {submitButton ? 
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item> : null} */}

            {/* </Form> */}
            {/* </Steps> */}
            {/* {submitButton? {wholeData} :null} */}
        </div>
    )
}

export default FirstStep

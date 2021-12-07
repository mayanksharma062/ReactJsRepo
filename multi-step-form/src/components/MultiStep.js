import React, { useState } from 'react';
import 'antd/dist/antd.css';
import moment from 'moment';
import {
    Form,
    Input,
    InputNumber,
    Radio,
    Checkbox,
    Button,
    DatePicker,
    TimePicker,
    Steps
} from 'antd';
const { Step } = Steps;

const MultiStep = () => {

    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const dateFormat = 'YYYY/MM/DD';
    const timeFormat = 'HH:mm:ss';
    
    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <div>
                        <h3>Personal Details : </h3>
                        <Form.Item label="Select Date">
                            <DatePicker defaultValue={moment()} format={dateFormat} placeholder="YYYY/MM/DD" />
                        </Form.Item>
                        <Form.Item label="Select Time">
                            <TimePicker defaultValue={moment()} format={timeFormat} />
                        </Form.Item>
                        <Form.Item label="First Name" name="fname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your first name!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item label="Last Name" name="lname"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your last name!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="email" label="Email"
                            rules={[
                                {
                                    type: 'email',
                                    required: true,
                                    message: 'Please input your email!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>

                        <Form.Item name="gender" label="Gender"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select a gender!',
                                },
                            ]}>
                            <Radio.Group>
                                <Radio value="F">Female</Radio>
                                <Radio value="M">Male</Radio>
                                <Radio value="O">Undifferentiated</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name="age" label="Age"
                            rules={[
                                {
                                    type: 'number',
                                    min: 0,
                                    max: 110,
                                },
                            ]}>
                            <InputNumber />
                        </Form.Item>
                        <Form.Item name="transportation" label="Mode of transportation">
                            <Checkbox.Group>
                                <Checkbox value="Car"
                                    style={{
                                        lineHeight: '32px',
                                    }}>
                                    Car
                                </Checkbox>
                                <Checkbox value="Motorbike"
                                    style={{
                                        lineHeight: '32px',
                                    }}>
                                    Motorbike
                                </Checkbox>
                                <Checkbox value="Bicycle"
                                    style={{
                                        lineHeight: '32px',
                                    }}>
                                    Bicycle
                                </Checkbox>
                                <Checkbox value="Boat"
                                    style={{
                                        lineHeight: '32px',
                                    }}>
                                    Boat
                                </Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                        {/* <Form.Item
                            wrapperCol={{
                                offset: 3,
                                span: 16,
                            }}>
                            <Button type="primary">
                                Next
                            </Button>
                        </Form.Item> */}
                    </div>
                )

            case 1:
                return (
                    <div>
                        <h3>Address : </h3>
                        <Form.Item label="Address Line 1" name="addL1"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your address!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Address Line 2" name="addL2">
                            <Input />
                        </Form.Item>
                        <Form.Item label="City" name="city"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your city!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="State" name="state"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your state!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                        <Form.Item label="Country" name="country"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your country!',
                                },
                            ]}>
                            <Input />
                        </Form.Item>
                        {/* <Form.Item wrapperCol={{ offset: 3, span: 16 }}>
                            <Button type="primary" style={{ marginRight: "10px" }}>
                                Prev
                            </Button>
                            <Button type="primary">
                                Next
                            </Button>
                        </Form.Item> */}
                    </div>
                )
            case 2:
                return (
                    <div>
                        <h3>Health and Fitness Regime : </h3>
                        <Form.Item name="alcohol" label="Alcohol Use">
                            <Radio.Group>
                                <Radio value="No">No</Radio>
                                <Radio value="Yes">Yes</Radio>
                                <Radio value="Not Anymore">Not Anymore</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name="smoke" label="Smoking">
                            <Radio.Group>
                                <Radio value="No">No</Radio>
                                <Radio value="Yes">Yes</Radio>
                                <Radio value="Not Anymore">Not Anymore</Radio>
                            </Radio.Group>
                        </Form.Item>
                        <Form.Item name="exercise" label="Exercise Type"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please select exercise type!',
                                },
                            ]}>
                            <Checkbox.Group>
                                <Checkbox value="running/jogging"
                                    style={{
                                        lineHeight: '32px',
                                    }}>
                                    running/jogging
                                </Checkbox>
                                <Checkbox value="cardio"
                                    style={{
                                        lineHeight: '32px',
                                    }}>
                                    cardio
                                </Checkbox>
                                <Checkbox value="strength training"
                                    style={{
                                        lineHeight: '32px',
                                    }}>
                                    strength training
                                </Checkbox>
                                <Checkbox value="idle or no exercise"
                                    style={{
                                        lineHeight: '32px',
                                    }}>
                                    idle or no exercise
                                </Checkbox>
                            </Checkbox.Group>
                        </Form.Item>
                        {/* <Form.Item wrapperCol={{ offset: 3, span: 16 }}>
                            <Button type="primary" style={{ marginRight: "10px" }}>
                                Prev
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item> */}
                    </div>
                )
            default:
                return "Unknown Step"
        }
    }

    const [activeStep, setActiveStep] = useState(0);
    const steps = [
        {
            step: 1,
            title: "Personal Details"
        },
        {
            step: 2,
            title: "Address"
        },
        {
            step: 3,
            title: "Health And Fitness Regime"
        }
    ]

    const handleNext = (e) => {
        setActiveStep((prevVal) => activeStep + 1);
    }

    const handleBack = () => {
        setActiveStep((prevVal) => activeStep - 1);
    };

    return (

        <div>
            <Steps current={activeStep} onChange={(curr) => setActiveStep(curr)}>
                {steps.map((item) => (
                    <Step key={item.title} title={item.title} />
                ))}
            </Steps>
            <br />
            <Form onFinish={onFinish} onFinishFailed={onFinishFailed}>{getStepContent(activeStep)}
                {activeStep > 0 && (
                    <Button style={{ margin: '0 8px' }} onClick={handleBack}>
                        Previous
                    </Button>
                )}
                {activeStep < steps.length - 1 && (
                    <Button type="primary" onClick={handleNext} >
                        Next
                    </Button>
                )}
                {activeStep === steps.length - 1 && (
                    <Button type="primary" htmlType="submit">
                        Done
                    </Button>
                )}
            </Form>
        </div>
    )
}

export default MultiStep
import React from 'react'
import 'antd/dist/antd.css';
import { Form, Checkbox, Radio } from 'antd';

function ThirdStep() {
    return (
        <>
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
            {/* <Form.Item wrapperCol={{ span: 10 }} labelCol={{ span: 8 }}>
                <Button type="primary" onClick={<SecondStep/>} htmlType="button">
                    Prev
                </Button>
            </Form.Item> */}
</>
    )
}

export default ThirdStep

import React from 'react'
import 'antd/dist/antd.css';
import { Form, Input } from 'antd';

function SecondStep() {
    return (
        <>
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
            {/* <Form.Item wrapperCol={{ span: 10 }} labelCol={{ span: 8 }}>
                <Button className="mx-5" type="primary" onClick={<FirstStep/>} htmlType="button">
                    Prev
                </Button>
                <Button type="primary" htmlType="button" onClick={<ThirdStep/>}>
                    Next
                </Button>
            </Form.Item> */}
        </>
    )
}

export default SecondStep

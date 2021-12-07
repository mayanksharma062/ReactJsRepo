import React from 'react'
import 'antd/dist/antd.css';
import debounce from 'lodash.debounce'
import moment from 'moment'
import 'moment/locale/zh-cn';
import { Form, Input, Checkbox, DatePicker, Radio, InputNumber } from 'antd';

function FirstStep() {
    return (
        <>
                <h1>Personal Details</h1>
                    <Form.Item label="Creation Date And Time">
                        <DatePicker defaultValue={moment()} format="YYYY-MM-DD"/>
                    </Form.Item>
                    <Form.Item label="First Name" name="firstname" rules={[{ required: true, message: 'Please input your First Name!', },]}>
                        <Input />
                    </Form.Item>
                    <Form.Item label="Last Name" name="lastname" rules={[{ required: true, message: 'Please input your Last Name!', },]}>
                        <Input />
                    </Form.Item>
                    <Form.Item name="email"  label="Email" rules={[{ required: 'true', type: 'email', },]}>
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
                    {/* <Form.Item wrapperCol={{ span: 10 }} labelCol={{ span: 8 }}>
                        <Button type="primary" htmlType="button">
                            Prev
                        </Button>
                        <Button className="mx-5" type="primary" htmlType="button" onClick={<SecondStep/>}>
                            Next
                        </Button>
                    </Form.Item> */}
        </>
    )
}

export default FirstStep

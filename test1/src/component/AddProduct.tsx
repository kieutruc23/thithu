
import { Button, Form, Input } from 'antd';
import { useAppDispatch } from '../store/hooks';
import { useNavigate } from "react-router-dom"
import { Iproduct, addProduct } from '../action/Product';

const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    name?: string;
    price?: number;
    dec?: string;
};

const AddProduct = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const onFinish = (values: Iproduct) => {
        dispatch(addProduct(values))
        alert("thm sp thành công")
        navigate("/")
    };

    return (
        <div>
            <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label="name"
                    name="name"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item<FieldType>
                    label="price"
                    name="price"
                    rules={[
                        { required: true, message: 'Please input the price!' },
                        {
                            validator: async (_, value) => {
                                if (isNaN(value)) {
                                    return Promise.reject('Price must be a valid number!');
                                }
                                return Promise.resolve();
                            },
                        },
                    ]}
                >
                    <Input type="number" />
                </Form.Item>









                <Form.Item<FieldType>
                    label="dec"
                    name="dec"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>




                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        thêm sản phẩm
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddProduct
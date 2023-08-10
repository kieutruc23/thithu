
import { Button, Form, Input } from 'antd';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { useNavigate, useParams } from "react-router-dom"
import { updateProduct } from '../action/Product';
import { useEffect } from "react"
const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
};

type FieldType = {
    name?: string;
    price?: string;
    dec?: string;
};

const EditProduct = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { id } = useParams()
    const [form] = Form.useForm()
    const { products } = useAppSelector(state => state.products)
    const newData = products?.data.find((item: any) => item.id == id)

    useEffect(() => {
        form.setFieldsValue({
            id: newData.id,
            name: newData.name,
            price: newData.price,
            dec: newData.dec,
        })
    }, [])
    const onFinish = (values: any) => {
        dispatch(updateProduct({ id: id, ...values }))
        alert("edit thành công")
        navigate("/")
    };

    return (
        <div>
            <Form
                form={form}
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

export default EditProduct
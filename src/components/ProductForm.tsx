import React from 'react';
import { Form, Input, Button, InputNumber } from 'antd';
import { useMutation } from '@apollo/client';
import { ADD_PRODUCT, GET_PRODUCTS } from '../graphql/queries';

interface FormValues {
  name: string;
  stock: number;
  price: number;
}

const ProductForm: React.FC = () => {
  const [form] = Form.useForm<FormValues>(); // Create a form instance
  const [addProduct] = useMutation(ADD_PRODUCT, {
    refetchQueries: [{ query: GET_PRODUCTS }],
  });

  const onFinish = async (values: FormValues) => {
    try {
      await addProduct({
        variables: {
          name: values.name,
          stock: values.stock,
          price: values.price,
        },
      });
      form.resetFields(); // Reset the form fields on successful submission
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Form<FormValues>
      form={form} // Set the form instance
      onFinish={onFinish} // Callback when the form is submitted
    >
      <Form.Item
        label="Name"
        name="name"
        rules={[{ required: true, message: 'Please enter the product name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Stock"
        name="stock"
        rules={[{ required: true, message: 'Please enter the stock quantity!' }]}
      >
        <InputNumber style={{ width: '100%' }} min={0} />
      </Form.Item>
      <Form.Item
        label="Price"
        name="price"
        rules={[{ required: true, message: 'Please enter the product price!' }]}
      >
        <InputNumber style={{ width: '100%' }} min={0} />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add Product
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;

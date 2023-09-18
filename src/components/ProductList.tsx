import React from 'react';
import { useQuery } from '@apollo/client';
import { Table } from 'antd';
import { GET_PRODUCTS } from '../graphql/queries';

interface Product {
  key: string;
  name: string;
  stock: number;
  price: number;
}

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Stock',
    dataIndex: 'stock',
    key: 'stock',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
];

const ProductList: React.FC = () => {

  interface QueryData {
    products: Product[];
  }


  const { loading, error, data } = useQuery<QueryData>(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const products = data?.products || [];

  // Calculate total value
  const totalValue = products?.reduce((acc: any, product: any) => {
    return acc + product?.price * product?.stock;
  }, 0);

  return (
    <div>
      <Table columns={columns} dataSource={products} />
      <p>Total Value of Inventory: ${totalValue?.toFixed(2)}</p>
    </div>
  );
};

export default ProductList;

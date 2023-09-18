import React, { useState } from 'react';
import './App.css';

import { Layout, Typography, Row, Col, Divider } from 'antd';

import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from '@apollo/client';
import ProductForm from './components/ProductForm';
import ProductList from './components/ProductList';


const { Header, Content } = Layout;
const { Title } = Typography;

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: 'http://localhost:8080/v1/graphql',
    }),
    cache: new InMemoryCache(),
  });
};

function App() {

  const [client] = useState(createApolloClient());

  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Layout style={{ height: '100vh' }}>
          <Header style={{ display: 'flex', alignItems: 'center' }}>
            <Title style={{ color: 'white', margin: 0, textAlign: 'left' }}>Inventory App</Title>
          </Header>
          <Content style={{ padding: '1em' }}>
            <Row gutter={16}>
              <Col span={12}>
                <Title>Add Product</Title>
              </Col>
              <Col span={12} style={{ textAlign: 'right' }}>
                <ProductForm />
              </Col>
            </Row>
            <Divider />
            <Title>List of Products</Title>
            <ProductList />
          </Content>
        </Layout>
      </div>
    </ApolloProvider>
  );
}

export default App;

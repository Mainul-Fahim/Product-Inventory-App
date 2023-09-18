// src/graphql/queries.ts
import { gql } from '@apollo/client';

export const GET_PRODUCTS = gql`
  query GetProducts {
    products {
      id
      name
      stock
      price
    }
  }
`;

export const ADD_PRODUCT = gql`
  mutation AddProduct($name: String!, $stock: Int!, $price: Float!) {
    insert_products(objects: { name: $name, stock: $stock, price: $price }) {
      affected_rows
    }
  }
`;

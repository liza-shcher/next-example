import React from 'react';
import Layout from '../components/Layout/Layout';
import ProductList from '../components/ProductList/ProductList';
import { getProducts } from '../services/productService';

export default function Index(props) {
  return (
      <Layout pageTitle="Post List">
        <ProductList products={ props.products }/>
      </Layout>
  );
}

export async function getServerSideProps() {
  return {
    props: {
      products: getProducts()
    }
  };
}


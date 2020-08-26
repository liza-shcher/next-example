import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import ProductList from '../components/ProductList/ProductList';
import products from '../data/products';
import { getProducts } from '../services/productService';
import styles from '../styles/Home.module.css';

export default function Index(props) {
  return (
      <div className={ styles.container }>
        <Head>
          <title>Create Next App</title>
        </Head>

        <main className={ styles.main }>
          <div>
            <Link href="/">
              <a>Products</a>
            </Link>
            <Link href="/posts">
              <a>Posts</a>
            </Link>
          </div>
          <ProductList products={ props.products }/>
        </main>
      </div>
  );
}

export async function getStaticProps() {
  return {
    props: {
      products: getProducts()
    }
  };
}

import '../styles/globals.css';
import '../components/ProductListItem/producListItem.css';
import '../components/ProductList/producList.css';
import React from 'react';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

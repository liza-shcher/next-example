import Head from 'next/head';
import React from 'react';

function HtmlPageHead({pageTitle}) {
  return(
      <Head>
        <title>{pageTitle}</title>
      </Head>
  )
}

export default HtmlPageHead;

import React from 'react';
import styles from '../../styles/Home.module.css';
import HtmlPageHead from '../Head/Head';
import Navigation from '../Navigation/Navigation';

function Layout({ children, pageTitle }) {
  return(
      <div className={ styles.container }>
        <HtmlPageHead pageTitle={pageTitle}/>
        <main className={ styles.main }>
          <Navigation/>
          { children }
        </main>
      </div>
  );
}

export default Layout;

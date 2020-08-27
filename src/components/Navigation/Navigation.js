import Link from 'next/link';
import React from 'react';
import { useRouter } from 'next/router';

function Navigation() {
  const router = useRouter();

  return(
      <div>
        <div>
          <Link href="/">
            <a className={router.pathname === '/' ? 'active': ''}>Products</a>
          </Link>
          <Link href="/posts">
            <a className={router.pathname === '/posts' ? 'active': ''}>Posts</a>
          </Link>
        </div>
      </div>
  )
}

export default Navigation;

import '../styles/global.scss';

import App from 'next/app';
import Head from 'next/head';
import {AnimateSharedLayout} from 'framer-motion';
export default class __App extends App {
  render() {
    const {Component, pageProps, router} = this.props;
    return (
      <>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=0, initial-scale=1.0 , width=device-width"
          />
        </Head>

        <AnimateSharedLayout type="crossfade">
          <Component {...pageProps} key={router.route} />
        </AnimateSharedLayout>
      </>
    );
  }
}

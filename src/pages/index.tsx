import React from 'react';
import MainScreen from '../features/MainScreen';
import Head from 'next/head';

const Index: React.FC = () => {
  return (
    <>
      <Head>
        <title>Seasonal</title>
        <meta name="description" content="Seasonal" />
      </Head>
      <MainScreen />
    </>
  );
};

export default Index;

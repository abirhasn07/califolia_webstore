import React from 'react';
import Hero from '../components/Hero';
import Nav from '../components/Nav';
import { client } from '../lib/client';
 const index = ({products, bannerData}) => {

  return (
    <div>
<Nav/>
      <Hero bannerData={bannerData}/>
      <main>
        <div>product categories</div>
        <div>best selling products</div>
        <div>best selling products</div>
<div>search products</div>
<div>newsletters</div>
      </main>
      <footer>footer</footer>
    </div>
  )
}

export default index


export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData }
  }
}
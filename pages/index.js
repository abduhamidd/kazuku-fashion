import Meta from './../components/Meta/index';
import Layout from './../Layout/index';
import Grid from './../components/Grid/index';
import Card from '../components/Card';
import {useRef, useState} from 'react';
import Image from 'next/image';

import axios from 'axios';
export default function Home({collections}) {
  const mostPopularCollection = collections.find(
    ({mostPopular}) => mostPopular
  );
  const mostPopularRef = useRef();
  return (
    <>
      <Meta
        titleShort="kazuku"
        titleLong="kazuku.Women's Clothing Collections"
        description="Collections of women's clothing.Best women's clothing 2021-2022. KAZUKU live store"
        keywords="kazuku, Women's Clothing Collections, kazuku live store, Best women's clothing 2021-2022, Moda 2021, 2022"
      ></Meta>
      <Layout>
        <section className="header-section">
          <div className="header-section__logo"></div>
          <h2>
            <span>CREATIVE FASHION </span> <span>STREETWEAR DESIGN</span>
          </h2>
          <h1>
            <span className="word" dur="0.95">
              KAZUKU
            </span>
            <span className="italic">
              <span className="word" dur="0.65">
                and
              </span>
            </span>
            <br />
            <span className="word" dur="0.5">
              CONTEMPORARY
            </span>
            <span className="word" dur="0.45">
              APPEAL-
            </span>
            <br />
            <span className="italic">
              <span className="word" dur="0.3">
                for
              </span>
            </span>
            <span className="word" dur="0.25">
              EVERY
            </span>
            <span className="word" dur="0.35">
              WOMAN
            </span>
          </h1>
        </section>
        <div id="deadline"></div>
        <section id="most-popular-collection" ref={mostPopularRef}>
          <header className="filter">
            <div>Most Popular</div>
            <div>ホワイトベール</div>
          </header>
          <Grid>
            <Card
              key={mostPopularCollection.id}
              HREF="/collection/[id]"
              AS={`/collection/${mostPopularCollection.id}`}
              SRC={mostPopularCollection.coverImg}
              ALT={`${mostPopularCollection.titleEng},by ${mostPopularCollection.by}`}
              engCL={mostPopularCollection.titleENG}
              jpCL={mostPopularCollection.titleJPN}
              YEAR={mostPopularCollection.year}
            />
            <div className="most-popular-about">
              <div className="most-popular-about__header">
                <div className="most-popular-about__header-content">
                  <section>
                    <h4>{mostPopularCollection.by}</h4>
                    <p>{mostPopularCollection.smallInfo}</p>
                    <p>
                      Ut enim ad minim veniam, quis nostrud exercitation ullamco
                      laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </section>
                  <div className="img">
                    <Image
                      width={460}
                      height={250}
                      src="/data/mostPopular/mostPopular.png"
                      alt=" girl"
                    />
                  </div>
                </div>
              </div>
              <div className="space"></div>
            </div>
          </Grid>
        </section>
        <section>
          <header className="filter">
            <div>Most Popular</div>
            <div>ホワイトベール</div>
          </header>
          <Grid>
            {collections
              .filter(({mostPopular}) => !mostPopular)
              .filter(({year}) => year === '2021')
              .map((collection) => {
                return (
                  <Card
                    key={collection.id}
                    HREF="/collection/[id]"
                    AS={`/collection/${collection.id}`}
                    SRC={collection.coverImg}
                    ALT={`${collection.titleEng},by ${collection.by}`}
                    engCL={collection.titleENG}
                    jpCL={collection.titleJPN}
                    YEAR={collection.year}
                  />
                );
              })}
          </Grid>
        </section>
        <section>
          <header className="filter">
            <div>Most Popular</div>
            <div>ホワイトベール</div>
          </header>
          <Grid>
            {collections
              .filter(({mostPopular}) => !mostPopular)
              .filter(({year}) => year === '2022')
              .map((collection) => {
                return (
                  <Card
                    key={collection.id}
                    HREF="/collection/[id]"
                    AS={`/collection/${collection.id}`}
                    SRC={collection.coverImg}
                    ALT={`${collection.titleEng},by ${collection.by}`}
                    engCL={collection.titleENG}
                    jpCL={collection.titleJPN}
                    YEAR={collection.year}
                  />
                );
              })}
          </Grid>
        </section>
      </Layout>
    </>
  );
}

export const getStaticProps = async (ctx) => {
  const res = await axios.get(
    `${process.env.API_URL}/api/v.1.0/get-collections`
  );
  const {collections} = res.data;

  return {
    props: {
      collections,
    },
  };
};

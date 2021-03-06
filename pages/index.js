import Meta from './../components/Meta/index';
import Layout from './../Layout/index';
import Grid from './../components/Grid/index';
import Card from '../components/Card';
import {useRef, useState, useEffect} from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import {ScrollTrigger} from 'gsap/dist/ScrollTrigger';
import axios from 'axios';

gsap.registerPlugin(ScrollTrigger);
gsap.core.globals('ScrollTrigger', ScrollTrigger);

export default function Home({collections}) {
  const mostPopularCollection = collections.find(
    ({mostPopular}) => mostPopular
  );
  const mostPopularRef = useRef();
  useEffect(() => {
    {
      ScrollTrigger.refresh();
      const targets = document.querySelectorAll('.header-section .word');

      const width = window.innerWidth;
      const start = width > 500 ? 300 : 200;

      const typeDevice = width >= 700 ? 'Desktop' : 'Mobile';
      const valuesForTransform = ['-10', '20', '-10', '20', '-20', '2.5', '25'];

      targets.forEach((target, i) => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            id: 'trigger3',
            trigger: target,
            start: `top top+=${start}`,
            scrub: true,
          },
        });

        if (typeDevice === 'Desktop') {
          timeline.fromTo(
            target,
            {
              opacity: 1,
              transitionDuration: target.attributes.dur.nodeValue / 2,
            },
            {
              opacity: 0,
              transitionDuration: target.attributes.dur.nodeValue / 2,
            }
          );
        } else if (typeDevice === 'Mobile') {
          timeline.fromTo(
            target,
            {
              opacity: 1,
              transitionDuration: target.attributes.dur.nodeValue / 2,
              translateX: 0,
            },
            {
              opacity: 0,
              transitionDuration: target.attributes.dur.nodeValue / 2,
              translateX: valuesForTransform[i],
            }
          );
        }
      });
    }
    {
      const height = window.innerHeight;
      const width = window.innerWidth;

      const PC_ADAPTIVE = height > 1000 ? height / 3 : height / 4.5;

      if (width > 500) {
        const timeline = gsap.timeline({
          scrollTrigger: {
            id: 'trigger3',
            trigger: mostPopularRef.current,
            start: `top bottom-=${PC_ADAPTIVE}`,
            end: `center-=400`,
            scrub: true,
          },
        });

        timeline.fromTo(
          mostPopularRef.current,
          {opacity: 0, transitionDuration: 0.9},
          {opacity: 1, transitionDuration: 1}
        );
      } else {
        console.log('GSAP OFF');
      }
    }
  }, []);
  return (
    <>
      <Meta
        titleShort="KAZUKI"
        titleLong="kazukI.Women's Clothing Collections"
        description="Collections of women's clothing.Best women's clothing 2021-2022. KAZUKU live store"
        keywords="kazuki, Women's Clothing Collections, kazuku live store, Best women's clothing 2021-2022, Moda 2021, 2022"
      ></Meta>
      <Layout>
        <section className="header-section">
          <div className="header-section__logo"></div>
          <h2>
            <span>CREATIVE FASHION </span> <span>STREETWEAR DESIGN</span>
          </h2>
          <h1>
            <span className="word" dur="0.95">
              KAZUKI
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
            <div>?????????????????????</div>
          </header>
          <Grid>
            <Card
              key={mostPopularCollection.id}
              HREF={`/collection/${encodeURIComponent(
                mostPopularCollection.id
              )}`}
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
                    <img src="/data/mostPopular/mostPopular.png" alt=" girl" />
                  </div>
                </div>
              </div>
              <div className="space"></div>
            </div>
          </Grid>
        </section>
        <section>
          <header className="filter">
            <div>2021</div>
            <div>?????????????????????</div>
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
            <div>2022</div>
            <div>?????????????????????</div>
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
  const {collections} = await res.data;

  return {
    props: {
      collections,
    },
  };
};

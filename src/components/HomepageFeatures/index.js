import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Extensive by Design',
    description: (
      <>
        TBA
      </>
    ),
  },
  {
    title: 'Made to be Modular',
    description: (
      <>
        TBA
      </>
    ),
  },
  {
    title: 'Powered by Laravel 9',
    description: (
      <>
        TBA
      </>
    ),
  },
];

function Feature({title, description}) {
  return (
    <div className={clsx('col col--4 my-4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

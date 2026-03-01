import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function CodeBlock() {
  return (
    <div className={styles.codeBlock}>
      <pre>
        <code>{`use println from "crux:io";
use Vec from "crux:vector";

fn main() {
    let v = Vec(3, [1.0, 2.0, 3.0])?;
    let normalized = v.normalize()?;
    
    println("Vector: " + string(v));
    println("Normalized: " + string(normalized));
}

main();`}</code>
      </pre>
    </div>
  );
}

function Feature({ title, description, link }: { title: string; description: string; link: string }) {
  return (
    <div className={styles.feature}>
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={link}>Learn more →</Link>
    </div>
  );
}

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
        
        <CodeBlock />
        
        <div className={styles.heroButtons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started">
            Get Started
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/examples">
            View Examples
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  const features = [
    {
      title: 'Fast & Efficient',
      description: 'Built with performance in mind. Generate images, run computations, and more with speed.',
      link: '/docs/language-tour',
    },
    {
      title: 'Rich Standard Library',
      description: 'Vectors, matrices, file I/O, math, and more built-in. No external dependencies needed.',
      link: '/docs/core',
    },
    {
      title: 'Simple Syntax',
      description: 'Clean, readable code with familiar constructs. Functions, structs, and pattern matching.',
      link: '/docs/language-tour',
    },
  ];

  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresGrid}>
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

function HomepageStats(): ReactNode {
  return (
    <section className={styles.stats}>
      <div className="container">
        <div className={styles.statsGrid}>
          <div className={styles.stat}>
            <span className={styles.statNumber}>18+</span>
            <span className={styles.statLabel}>Standard Library Modules</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Platforms Supported</span>
          </div>
          <div className={styles.stat}>
            <span className={styles.statNumber}>Open</span>
            <span className={styles.statLabel}>Source</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Crux Programming Language"
      description="A fast, efficient programming language with a rich standard library">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <HomepageStats />
      </main>
    </Layout>
  );
}

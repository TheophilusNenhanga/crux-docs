import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function CodeBlock() {
  return (
    <div className={styles.codeBlock}>
      <pre>
        <code>{`
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

function Feature({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
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
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>

        <CodeBlock />

        <div className={styles.heroButtons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/getting-started"
          >
            Get Started
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/docs/examples"
          >
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
      title: "Full of Potential",
      description:
        "Vectors, matrices, file I/O, math, and more built-in. No external dependencies needed.",
      link: "/docs/core",
    },
    {
      title: "Simple and Elegant",
      description: "Simplicity and elegance are at the core of Crux's design.",
      link: "/docs/language-tour",
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

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title="Crux Programming Language"
      description="A small but mighty programming language"
    >
      <HomepageHeader />
      <main>
        <p style={{ textAlign: "center", color: "gray", marginBottom: "2rem" }}>
          This documentation is still a work in progress
        </p>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}

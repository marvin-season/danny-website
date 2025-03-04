import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    return (
        <header className={clsx("hero hero--primary", styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className={clsx("hero__subtitle", styles.subtitle)}>
                    {siteConfig.tagline}
                </p>
                <div className={styles.buttons}>
                    <Link
                        className={clsx(
                            "button button--secondary button--lg",
                            styles.linkButton,
                        )}
                        to="/docs/intro"
                    >
                        Get Started
                    </Link>
                    <Link
                        className={clsx(
                            "button button--secondary button--lg",
                            styles.linkAIButton,
                        )}
                        to="http://ai.fuelstack.icu"
                    >
                        Your Editor
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): ReactNode {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout
            title={`Hello from ${siteConfig.title}`}
            description="Description will go into a meta tag in <head />"
        >
            <HomepageHeader />
            <main>
                <HomepageFeatures />
            </main>
        </Layout>
    );
}

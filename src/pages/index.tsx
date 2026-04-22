import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

const GET_STARTED = [
  { href: '/docs/first-agent',   title: 'Building your first Agent',       desc: 'Build your first agent in Akabot Studio' },
  { href: '/docs/connect-center',title: 'Connect Agent to Akabot Center',  desc: 'Register and orchestrate agents from one place' },
  { href: '/docs/schedule',      title: 'Schedule time to run Agent',      desc: 'Automate runs on a schedule or on demand' },
];

const POPULAR = [
  { href: '/docs/studio-tutorials', title: 'Studio tutorials',   desc: 'Build your first automations step by step' },
  { href: '/release-notes',         title: 'Release notes',      desc: "What's changed in the latest Akabot releases" },
  { href: '/docs/activities',       title: 'Activities reference', desc: 'Full catalog of built-in activities' },
];

const WHATS_NEW = [
  { href: '/blog/akabot-agent-ga',  title: 'Akabot Agent is now GA',      desc: 'Bring agentic behavior and cognitive capabilities to your desktop' },
  { href: '/blog/autopilot-center', title: 'Autopilot for Akabot Center', desc: 'Turn natural-language prompts into orchestrated workflows' },
  { href: '/blog/canvas',           title: 'Canvas for agent design',     desc: 'Design your agent faster and easier' },
];

const PRODUCTS = [
  { href: '/docs/studio',    label: 'Akabot Studio',   icon: '🖥️' },
  { href: '/docs/center',    label: 'Akabot Center',   icon: '🏢' },
  { href: '/docs/agent',     label: 'Akabot Agent',    icon: '🤖' },
  { href: '/docs/activities',label: 'Activities',      icon: '⚡' },
  { href: '/docs/data',      label: 'Data Service',    icon: '🗄️' },
  { href: '/docs/vision',    label: 'Akabot Vision',   icon: '👁️' },
  { href: '/docs/insight',  label: 'Akabot Insight', icon: '📊' },
  { href: '/docs/hub',  label: 'Akabot Hub', icon: '🌐' },
  { href: '/docs/integration-service',  label: 'Integration Service', icon: '🔌' },
];

function LinkCard({ title, icon, items }: { title: string; icon: string; items: { href: string; title: string; desc: string }[] }) {
  return (
    <article className={styles.card}>
      <h2 className={styles.cardTitle}><span className={styles.cardIcon}>{icon}</span>{title}</h2>
      <ul className={styles.linklist}>
        {items.map((it) => (
          <li key={it.href}>
            <Link className={styles.linklistTitle} to={it.href}>{it.title}</Link>
            <p className={styles.linklistDesc}>{it.desc}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default function Home(): React.ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Learn about agentic automation and orchestration with Akabot"
    >
      <main className={styles.page}>
        <h1 className={styles.heroTitle}>
          Learn about agentic automation and orchestration with Akabot
        </h1>

        <section className={styles.cards}>
          <LinkCard title="Get started with Akabot" icon="🚀" items={GET_STARTED} />
          <LinkCard title="Popular topics"          icon="⭐" items={POPULAR} />
          <LinkCard title="What's new"              icon="📣" items={WHATS_NEW} />
        </section>

        <section className={styles.platform}>
          <h3 className={styles.platformTitle}>Explore the Platform Modules</h3>
          <div className={styles.platformGrid}>
            {PRODUCTS.map((p) => (
              <Link key={p.href} to={p.href} className={styles.tile}>
                <span className={styles.tileIcon}>{p.icon}</span>{p.label}
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.tagline}>
          <div className={styles.taglineInner}>
            <h4 className={styles.taglineLede}>Automate with intelligence.</h4>
            <p className={styles.taglineBody}>
              Akabot empowers enterprises to orchestrate work across people, bots, and agents.
              We deliver a complete agentic automation platform — from capturing knowledge to
              running end-to-end processes — so teams can focus on what only humans can do.
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}

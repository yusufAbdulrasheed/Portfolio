import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Abdulrasheed Yusuf</h1>
        <div className={styles.subtitle}>Software Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey!👋👋 I&apos;m a software developer from Kogi State, Nigeria. I primarily
              work with JavaScript / TypeScript and the React ecosystem.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on backend development with Node.js, Express and MongoDB, 
              you&apos;ll also find me working with React.js, Next.js and Tailwind CSS
              for frontend development.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Dawn Khapeta</span> as
              Backend Developer 2, working with a lean team of 4 frontend
              developer to build ground breaking softwares.
            </p>
            <p className={styles.paragraph}>
              I&apos;ve been part the development efforts for bringing
              collaborative solutions live.
            </p>
          </section>

          {/* <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of writing for some amazing
              publications like{' '}
              <span className={styles.highlight}>100ms Blog</span>,{' '}
              <span className={styles.highlight}>LogRocket Blog</span>,{' '}
              <span className={styles.highlight}>DEV.to</span> and more as a
              freelance technical author.
            </p>
          </section> */}

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming, I love to listen to music, watch movies and cartoons.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;

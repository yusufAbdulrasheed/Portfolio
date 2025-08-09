import Skills from '@/components/SkillsCode';
import styles from '@/styles/SkillSection.module.css';

const SkillsPage = () => {
  return (
    <div className={styles.layout}>
      {/* <h1 className={styles.pageTitle}>My Skills</h1> */}
      <p className={styles.pageSubtitle}>
        These are the technologies and tools I work with across frontend, backend, and other areas.
      </p>
      <div className={styles.container}>
        <Skills />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Skills' },
  };
}

export default SkillsPage;

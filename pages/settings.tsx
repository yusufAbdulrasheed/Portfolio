import ThemeInfo from '@/components/ThemeInfo';

import styles from '@/styles/SettingsPage.module.css';

const SettingsPage = () => {
  return (
    <div className={styles.layout}>
      <div className={styles.container}>
        <ThemeInfo
          name="GitHub Dark"
          icon="/themes/github-dark.png"
          publisher="GitHub"
          theme="github-dark"
        />
        <ThemeInfo
          name="Dracula"
          icon="/themes/dracula.png"
          publisher="Dracula Theme"
          theme="electric-purple"
        />
        <ThemeInfo
          name="Ayu Dark"
          icon="/themes/ayu.png"
          publisher="teabyii"
          theme="neon-blue"
        />
        <ThemeInfo
          name="Ayu Mirage"
          icon="/themes/ayu.png"
          publisher="teabyii"
          theme="sunset-glow"
        />
        <ThemeInfo
          name="Nord"
          icon="/themes/nord.png"
          publisher="arcticicestudio"
          theme="emerald-glow"
        />
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'Settings' },
  };
}

export default SettingsPage;

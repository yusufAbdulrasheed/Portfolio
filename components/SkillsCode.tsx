import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDocker, FaAws, FaFigma } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiNextdotjs, SiMongodb, SiExpress, SiPostman, SiPostgresql, SiMysql, SiCanva } from 'react-icons/si';
import styles from '@/styles/SkillSection.module.css';

const SkillsSection = () => {
  const frontendSkills = [
    { icon: <FaHtml5 />, name: 'HTML5' },
    { icon: <FaCss3Alt />, name: 'CSS3' },
    { icon: <SiJavascript />, name: 'JavaScript' },
    { icon: <SiTypescript />, name: 'TypeScript' },
    { icon: <FaReact />, name: 'React' },
    { icon: <SiNextdotjs />, name: 'Next.js' },
  ];

  const backendSkills = [
    { icon: <FaNodeJs />, name: 'Node.js' },
    { icon: <SiExpress />, name: 'Express.js' },
    { icon: <SiMongodb />, name: 'MongoDB' },
    { icon: <SiPostgresql />, name: 'PostgreSQL'},
    { icon: <SiMysql />, name: 'MySQL'}
  ];

  const techTools = [
    { icon: <FaDocker />, name: 'Docker' },
    { icon: <FaAws />, name: 'AWS' },
    { icon: <SiPostman />, name: 'Postman' },
    { icon: <FaFigma />, name: 'Figma' },
    { icon: <SiCanva />, name: 'Canva' }
  ];

  return (
    <section className={styles.skillsSection}>
      {/* <h2 className={styles.sectionTitle}>Skills</h2> */}

      <div className={styles.skillsGroup}>
        <h3 className={styles.groupTitle}>Frontend</h3>
        <div className={styles.iconGrid}>
          {frontendSkills.map((skill, index) => (
            <div key={index} className={styles.iconWrapper} title={skill.name}>
              {skill.icon}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.skillsGroup}>
        <h3 className={styles.groupTitle}>Backend</h3>
        <div className={styles.iconGrid}>
          {backendSkills.map((skill, index) => (
            <div key={index} className={styles.iconWrapper} title={skill.name}>
              {skill.icon}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.skillsGroup}>
        <h3 className={styles.groupTitle}>Tech Tools</h3>
        <div className={styles.iconGrid}>
          {techTools.map((skill, index) => (
            <div key={index} className={styles.iconWrapper} title={skill.name}>
              {skill.icon}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

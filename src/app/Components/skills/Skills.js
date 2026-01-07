'use client';
import { motion } from 'framer-motion';
import styles from './skills.module.css';

const skills = [
  { name: 'HTML', level: 100 },
  { name: 'CSS', level: 99 },
  { name: 'Tailwind CSS', level: 99 },
  { name: 'Javascript', level: 99 },
  { name: 'Python', level: 95 },
];

const Skills = () => {
  return (
    <div className={styles.skillsSection}>
      {skills.map((skill, index) => (
        <div key={index} className={styles.skill}>
          <div className='flex gap-10'>
          <div className='text-white'>{skill.name}</div>
          <div className='text-white'>{skill.level}%</div>

          </div>
          <div className={styles.bar}>
            <motion.div
              className={styles.fill}
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;

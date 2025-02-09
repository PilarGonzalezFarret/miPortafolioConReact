import styles from "./Skills.module.css";


function Skills() {
  return (
    <div  className={styles.skills}>
      <h2>My Skills</h2>
     <ul>
      <li>React</li>
      <li>JavaScript</li>
      <li>CSS</li>
      <li>HTML</li>
      <li>Bootstrap</li>
      <li>TypeScript</li>
     </ul>

      <img src="/planta-separadora2.png" alt="Rama pequeña de una planta" />
    </div>
  );
}

export default Skills;
import styles from "./Home.module.css";

function Home() {
  return (
    <div  className={styles.home}>
      <h1>Pili's Portfolio!!</h1>
      <h4>Hi!! I'm happy toshare my portfolio with you!!</h4>
      <br />
      <p>Here, you'll find a showcase of my work, personal projects, and the things that inspire me most. Whether you're here to explore my professional journey, learn about my creative endeavors, or just get to know me better, I hope you find something that resonates with you.</p>
      <br />
      <p>Feel free to browse through this app and discover my skills, passions, and achievements. Don't hesitate to reach out if you'd like to collaborate, ask questions, or simply connect!</p>
      <br />
      <p>Thank you for stopping by—happy exploring!</p>
    </div>
  );
}

export default Home;
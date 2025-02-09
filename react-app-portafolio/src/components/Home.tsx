import styles from "./Home.module.css";


function Home() {
  return (
    <div  className={styles.home}>
      <h1>Pilar González-Farret</h1>
      <h5>From biologist to programmer, 
        exploring the world of web development with curiosity and creativity.</h5>
      <p>Hi!! I'm happy toshare my portfolio with you!!</p>
      <br />     
      <p>Thank you for stopping by—happy exploring!</p>
      <img src="/planta-separadora2.png" alt="Rama pequeña de una planta" />
    </div>
  );
}

export default Home;
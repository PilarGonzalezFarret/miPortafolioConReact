import { Link } from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>Home pili's</h1>
      <h1>Pili's Portfolio!!</h1>
      <h4>Hi!! I'm happy toshare my portfolio with you!!</h4>
      <p>Please feel free to browse through this app to learn more about my work and other interests.</p>
      <Link to="/about">About</Link>
    </div>
  );
}

export default Home;
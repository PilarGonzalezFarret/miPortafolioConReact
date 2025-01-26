import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <h1>About Page</h1>
      <p>Welcome to the About page!</p>
      <Link to="/">Home</Link>
    </div>
  );
}

export default About;

import Navbar from '../../components/Navbar';
import Hero from './Hero';

export default function Home() {
  return (
    <div className="home-wrapper">
      <Navbar />
      <main>
        <Hero />
      </main>
    </div>
  );
}
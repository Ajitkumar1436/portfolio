import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TechStack } from './components/TechStack';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Experience } from './components/Experience';
import { Stats } from './components/Stats';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-primary-foreground">
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <FeaturedProjects />
        <Experience />
        <Stats />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

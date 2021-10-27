import AboutSection from './components/AboutSection';
import CompanySection from './components/CompaniesSection';
import Footer from './components/Footer';
import ProductScreen from './components/ProductSection';
import Testimonials from './components/Testimonials';
import HomeScreen from './pages/Home/HomeScreen';

function App() {
  return (
    <div className="App">
      <HomeScreen />
      <ProductScreen />
      <CompanySection />
      <AboutSection />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;

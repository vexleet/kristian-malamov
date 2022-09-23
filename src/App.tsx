import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import SectionLayout from './layouts/SectionLayout';
import AboutMe from './components/AboutMe/AboutMe';
import ContactForm from './components/ContactForm/ContactForm';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <SectionLayout title="About me" subTitle="Get to know me">
        <AboutMe />
      </SectionLayout>
      <SectionLayout title="Get in touch" subTitle="Feel free to contact me anytime">
        <ContactForm />
      </SectionLayout>
    </>
  );
}

export default App;

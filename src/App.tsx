import './App.css';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import SectionLayout from './layouts/SectionLayout';
import AboutMe from './components/AboutMe/AboutMe';

function App() {
  return (
    <>
      <Navigation />
      <Header />
      <SectionLayout title="About me" subTitle="Get to know me">
        <AboutMe />
      </SectionLayout>
    </>
  );
}

export default App;

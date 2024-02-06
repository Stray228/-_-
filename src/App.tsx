import { ThemeProvider } from './components/context';

import HeaderTop from './components/HeaderTop';
import HeaderMain from './components/HeaderMain';
import Banner from './components/Banner';
import Article from './components/Article';
import Footer from './components/Footer';
import Social from './components/Social';

import './App.scss';

function App() {

  return (
    <>
      <ThemeProvider>
        <HeaderTop />
        <Social />
        <div className="container">
          <HeaderMain />
          <Banner />
          <Article />
        </div>
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App

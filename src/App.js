import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/header';
import Footer from './components/footer';
import Content from './components/content';
import Read from './components/read';
import Create from './components/create';


function App() {
  return (
    <Router>
      {/*render navigation bar*/}
      <NavigationBar />
      <Routes>
        {/*get routes page and render component*/}
        <Route path="/" element={<Content />} />
        <Route path="/read" element={<Read></Read>} />
        <Route path="/create" element={<Create></Create>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
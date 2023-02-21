import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './components/home';
import FooterNav from './components/footerNav';
import NewsDetail from './components/newsDetail';
import NewsList from './components/newsList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/home' element={<Home />}/>
        <Route path='/newsList' element={<NewsList />}/>
        <Route path='/newsDetail' element={<NewsDetail />}/>
      </Routes>
      <FooterNav/>
      <h1>News</h1>
    </div>
  );
}

export default App;

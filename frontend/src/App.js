import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './home/Header'; // Header 컴포넌트 import

// 각 페이지에 대한 컴포넌트 import
import Home from './home/Home';
import Category from './pages/Category';
import MyPage from './pages/MyPage';
import Search from './pages/Search';
import Footer from './home/Footer';
import Login from './pages/Login';
import Join from './pages/Join';

function App() {
  const isLoggedIn = false; // 로그인 여부 상태

  return (
    <div className="App">
      <BrowserRouter>
        <div className="flex flex-col h-screen">
          <div className="flex-1">
            <Header isLoggedIn={isLoggedIn} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/category" element={<Category />} />
              <Route path="/search" element={<Search />} />
              <Route path="/login" element={<Login />} />
              <Route path="/join" element={<Join />} />
              <Route path="/mypage" element={<MyPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

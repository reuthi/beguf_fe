import Home from './page/Home';
// import Signup from './page/Signup';
// import Signin from './page/Signin';
import { Navigate, BrowserRouter as Router } from 'react-router-dom';
import { Routes, Route, } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './theme';
import Navigation from './components/Navigation';
import { useSelector } from 'react-redux';
import { IRootState } from './store';
import SearchCategories from './page/SearchCategories';
import { SearchCategory } from './page/SearchCategory';
import { SearchItem } from './page/SearchItem';
import React, { Component } from 'react';

const PrivateRoute = ({ children }: { children: any }) => {
  const { user } = useSelector((state: IRootState) => state.auth)

  return user ? children : <Navigate to="/signin" />;
};

function App() {
  const { user } = useSelector((state: IRootState) => state.auth)

  return (
    <Router>
      {user ? <Navigation /> : <></>}
      <div>
        <ThemeProvider theme={theme}>
          <section>
            <Routes>
              {/* <Route path="/signup" element={<Signup />} />
              <Route path="/signin" element={<Signin />} /> */}
              <Route path="/home" element={
                <PrivateRoute><Home /></PrivateRoute>
              }
              />
              <Route path='/search' element={
                <PrivateRoute>
                  <SearchCategories />
                </PrivateRoute>
              } />
              <Route path='/search/category/:category' element={
                <PrivateRoute>
                  <SearchCategory />
                </PrivateRoute>
              } />
              <Route path='/search/item/:id' element={
                <PrivateRoute>
                  <SearchItem />
                </PrivateRoute>
              } />
            </Routes>
          </section>
        </ThemeProvider>
      </div>
    </Router>
  );
}

export default App;
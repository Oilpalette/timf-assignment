import './App.css';
import styled from 'styled-components';
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import DeliveryAreaSearch from './components/DeliveryAreaSearch';
import Subpage from './pages/Subpage';
import Nav from './components/Nav';

export const Features = styled.section`
  padding-top: 60px;
`;

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main className="view">
          <Nav />
          <Features>
            <Routes>
              <Fragment>
                <Route path="/" element={<Home />} />
                <Route path="/deliveryAreaSearch" element={<DeliveryAreaSearch />} />
                <Route path="*" element={<Subpage />} />
              </Fragment>
            </Routes>
          </Features>
        </main>
      </div>
    </BrowserRouter>
  );
}


import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import Footer from './components/Footer.js/Footer';
import Store from './Store'



function App() {
    return (
        <div className="allPage">
            <Store>
                <Header/>
                <Content/>
            </Store>    
          <Footer/>
        </div> 
  );
}

export default App;

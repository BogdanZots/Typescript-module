import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header/Header";
import { BrowserRouter, Route } from "react-router-dom";
import { Loader } from "./components/Loader/Loader";

const FIlmsContainet = React.lazy(() =>
  import("./components/FilmsContainer/FIlmsContainet").then(
    ({ FIlmsContainet }) => ({ default: FIlmsContainet })
  )
);

function App() {  
  return (
    <div className='App'>
      <BrowserRouter>
        <Header />
        <Route path='/' exact>
          <Suspense fallback={<Loader />}>
            <FIlmsContainet />
          </Suspense>
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { ErrorBoundary } from "react-error-boundary";

const Dummy = React.lazy(() => import("app1/DummyComponent"));
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <ErrorBoundary
          FallbackComponent={({ error }) => (
            <div role="alert">
              There was an error:{" "}
              <pre style={{ whiteSpace: "normal" }}>{error.message}</pre>
            </div>
          )}
        >
          <React.Suspense fallback={<div>Loading...</div>}>
            <Dummy />
          </React.Suspense>
        </ErrorBoundary>
      </div>
    </div>
  );
}

export default App;

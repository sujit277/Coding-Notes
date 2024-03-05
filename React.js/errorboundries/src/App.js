import logo from "./logo.svg";
import "./App.css";
import Hero from "./Hero";
import ErrorBoundary from "./ErrorBoundry";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Hero heroName={"Batman"} />
        <Hero heroName={"Superman"} />
        <Hero heroName={"Joker"} />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName={"Batman"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Superman"} />
      </ErrorBoundary>
      <ErrorBoundary>
        <Hero heroName={"Joker"} />
      </ErrorBoundary>
    </>
  );
}

export default App;

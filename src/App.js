import "./App.css";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <Form heading="Enter Text Here" />
      </div>
    </>
  );
}

export default App;

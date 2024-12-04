
import { Routes, Route } from 'react-router-dom';
import './App.css'
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>HomePage</h1>}></Route>
        <Route path="/counter" element={<h1>Counter</h1>}></Route>
        <Route path="/stopwatch" element={<h1>Stopwatch</h1>}></Route>
        <Route path="*" element={<h1>No Page Available</h1>}></Route>
      </Routes>
    </>
  );
}

export default App

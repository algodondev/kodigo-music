import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import SingleSong from "./pages/SingleSong";

function App() {
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Router>
      <div className="min-h-screen bg-black px-6 py-8 flex flex-col">
        <Header
          onToggleSidebar={() => setShowMobileSidebar(!showMobileSidebar)}
          showMobileFilter={true}
          onSearch={setSearchTerm}
        />
        <Routes>
          <Route 
            path="/" 
            element={
              <Home 
                showMobileSidebar={showMobileSidebar}
                onToggleSidebar={() => setShowMobileSidebar(!showMobileSidebar)}
                searchTerm={searchTerm}
              />
            } 
          />
          <Route path="/song/:id" element={<SingleSong />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedBackList from "./Components/FeedBackList";
import FeedBackData from "./Data/FeedBackData";
import { useState } from "react";
import "./index.css";
import FeedBackStates from "./Components/FeedBackStates";
import FeedBackForm from "./Components/FeedBackForm";
import AboutPage from "./pages/AboutPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import AboutIconLink from "./Components/AboutIconLink";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);

  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedBackForm />
                  <FeedBackStates />
                  <FeedBackList />
                </>
              }
            ></Route>

            <Route exact path="/about" element={<AboutPage />} />
            <Route path="/*" element={<NotFound />}>
              <NotFound />
            </Route>
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;

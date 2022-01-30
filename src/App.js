import Header from "./Components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FeedBackList from "./Components/FeedBackList";
import FeedBackData from "./Data/FeedBackData";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./index.css";
import FeedBackStates from "./Components/FeedBackStates";
import FeedBackForm from "./Components/FeedBackForm";
import AboutPage from "./pages/AboutPage.jsx";
import NotFound from "./pages/NotFound.jsx";
import AboutIconLink from "./Components/AboutIconLink";
function App() {
  const [feedback, setFeedback] = useState(FeedBackData);

  const addFeedback = (newFeedBack) => {
    newFeedBack.id = uuidv4();
    console.log(newFeedBack);
    setFeedback([newFeedBack, ...feedback]);
  };

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <FeedBackForm handleAdd={addFeedback} />
                <FeedBackStates feedback={feedback} />
                <FeedBackList
                  feedback={feedback}
                  handleDelete={deleteFeedback}
                />
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
  );
}

export default App;

import Header from "./Components/Header";
import FeedBackList from "./Components/FeedBackList";
import FeedBackData from "./Data/FeedBackData";

import { useState } from "react";
import "./index.css";
import FeedBackStates from "./Components/FeedBackStates";

function App() {
  const [feedback, setFeedback] = useState(FeedBackData);

  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />

      <div className="container">
        <FeedBackStates feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;

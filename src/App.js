import Header from "./Components/Header";
import FeedBackList from "./Components/FeedBackList";
import FeedBackData from "./Data/FeedBackData";

import { useState } from "react";
import "./index.css";

function App() {
  const [feedBack, setFeedback] = useState(FeedBackData);
  const deleteFeedback = (id) => {
    if (window.confirm("Are you sure you want to delete")) {
      setFeedback(feedBack.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Header />

      <div>
        <FeedBackList feedBack={feedBack} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;

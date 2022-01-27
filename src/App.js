import Header from "./Components/Header";
import FeedBackList from "./Components/FeedBackList";
import FeedBackData from "./Data/FeedBackData";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./index.css";
import FeedBackStates from "./Components/FeedBackStates";
import FeedBackForm from "./Components/FeedBackForm";

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
    <>
      <Header />

      <div className="container">
        <FeedBackForm handleAdd={addFeedback} />
        <FeedBackStates feedback={feedback} />
        <FeedBackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
}

export default App;

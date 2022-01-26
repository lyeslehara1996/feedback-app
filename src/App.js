import Header from "./Components/Header";
import FeedBackList from "./Components/FeedBackList";
import FeedBackData from "./Data/FeedBackData";

import { useState } from "react";
import "./index.css";

function App() {
  const [feedBack, setFeedback] = useState(FeedBackData);
  return (
    <>
      <Header />

      <div>
        <FeedBackList feedBack={feedBack} />
      </div>
    </>
  );
}

export default App;

import { motion, AnimatePresence } from "framer-motion";
import FeedBackItem from "./FeedBackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "./shared/Spinner";
import { useContext } from "react";
function FeedBackList() {
  const { feedback, isLoading } = useContext(FeedbackContext);

  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <h2>No feedBack yet</h2>;
  }

  //With Animation in list added

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FeedBackItem key={item.id} item={item} />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );

  //without Animation in list add

  // return <div className="feedback-list">
  //     {feedback.map((item)=>(
  //         <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
  //     ))}
  // </div>
}

export default FeedBackList;

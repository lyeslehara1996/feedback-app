import FeedBackItem from "./FeedBackItem";
import PropTypes from 'prop-types'
function FeedBackList ({feedback,handleDelete}){
   if(!feedback || feedback.length === 0){
      return <h2>No feedBack yet</h2>
   }
   
    return <div className="feedback-list">
        {feedback.map((item)=>(
            <FeedBackItem key={item.id} item={item} handleDelete={handleDelete} />
        ))}
    </div>
}

FeedBackList.propTypes={
    feedback: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            Text: PropTypes.string.isRequired,
            rating: PropTypes.number.isRequired,
        })
    ),
  
} 

export default FeedBackList;
import FeedBackItem from "./FeedBackItem";
import PropTypes from 'prop-types'
function FeedBackList ({feedBack}){
   if(!feedBack || feedBack.length === 0){
      return <h2>No feedBack yet</h2>
   }
   
    return <div className="feedback-list">
        {feedBack.map((item)=>(
            <FeedBackItem key={item.id} item={item} handleDelete={(id)=>console.log(id)} />
        ))}
    </div>
}

FeedBackList.propTypes={
    feedBack: PropTypes.arrayOf({
        id:PropTypes.number,
        rating:PropTypes.number,
        text:PropTypes.text
    })
}

export default FeedBackList;
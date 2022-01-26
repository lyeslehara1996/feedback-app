import FeedBackItem from "./FeedBackItem";

function FeedBackList ({feedBack}){
   if(!feedBack || feedBack.length === 0){
      return <h2>No feedBack yet</h2>
   }
   
    return <div className="feedback-list">
        {feedBack.map((item)=>(
            <FeedBackItem key={item.id} item={item} />
        ))}
    </div>
}

export default FeedBackList;
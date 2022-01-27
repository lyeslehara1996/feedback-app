import React,{useState} from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import FeedBackSelect from './FeedBackSelect';
const FeedBackForm = ({handleAdd}) => {

    const [text,setText] = useState('')
    const [btnDisabled,setBtnDisabled] = useState(true)
    const [rating,setRating] = useState(10)
    const [message,setMessage] = useState('')

    const handleTextChange = (e) =>{
            if(text === ''){
                setBtnDisabled(true)
                setMessage(null)
            }else if( text !== '' && text.trim().length <= 10 ) {
                setMessage('Text must be at least 10 charcteres')
                 setBtnDisabled(true)
            }else{
                setMessage(null)
                setBtnDisabled(false)
            }
            setText(e.target.value)
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if(text.trim().length > 10 ){
            const newFeedBack ={
                text,
                rating
            }
            handleAdd(newFeedBack)
            setText('')
        }
    }
    return (
        <Card>
            <form onSubmit={handleSubmit}> 
                <h2>How would you rate your service with us ?</h2>
                  <FeedBackSelect select={(rating) => setRating(rating)} />
                 <div className="input-group">
                    <input onChange= {handleTextChange} type="text " placeholder='write a review'  value={text}/>
                    <Button type="submit" isDisabled ={btnDisabled} >Send</Button> 
                 </div>
                    {message && <div className='message'> { message } </div>}
            
            
            </form>

        </Card>
    );
};

export default FeedBackForm;
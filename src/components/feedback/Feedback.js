import PropTypes from 'prop-types';
import { Button } from './Feedback.styled';

export const FeedbackOptions = ({options, onLeaveFeedback }) => {
    
    return (
    <div>
        
            {options.map((item, idx) => {
                return (
                        <Button type="button" key={idx} onClick={() =>onLeaveFeedback(item)}>{item}</Button>
                    );
        })}
    </div>
    )
}

FeedbackOptions.propTypes = {
    options: PropTypes.array.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
} 
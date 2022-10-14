import PropTypes from 'prop-types';
import { Item } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivFeedback }) => {
    return (
     
    <>
     
        <ul>
            <Item>Good: {good}</Item>
            <Item>Neutral: {neutral}</Item>
            <Item>Bad: {bad}</Item>
            <Item>Total: {total} </Item>
            <Item>Positiv feedback: {positivFeedback}%</Item>
        </ul>
    </>
    
 )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral:PropTypes.number.isRequired,
    bad:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
    positivFeedback:PropTypes.number.isRequired,
}
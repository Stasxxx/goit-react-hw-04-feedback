

export const Statistics = ({ good, neutral, bad, total, positivFeedback }) => {
    return (
     
    <>
     
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total} </li>
            <li>Posotiv feedback: {positivFeedback}%</li>
        </ul>
    </>
    
 )
}
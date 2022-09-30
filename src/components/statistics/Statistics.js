

export const Statistics = ({ good, neutral, bad, total, positivFeedback }) => {
    return (
     
    <section>
     <h2>Statistics</h2>
        <ul>
            <li>Good: {good}</li>
            <li>Neutral: {neutral}</li>
            <li>Bad: {bad}</li>
            <li>Total: {total} </li>
            <li>Posotiv feedback: {positivFeedback}%</li>
        </ul>
    </section>
    
 )
}
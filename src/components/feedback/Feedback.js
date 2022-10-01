
export const FeedbackOptions = ({options, onLeaveFeedback }) => {
    // console.log(options)
    return (
    <>
        
            {options.map((item, idx) => {
                return (
                        <button type="button" key={idx} onClick={() =>onLeaveFeedback(item)}>{item}</button>
                    );
        })}
    </>
    )
}
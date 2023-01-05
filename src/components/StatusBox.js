const StatusBox = ({displayText}) => {   
    return(
        <div className="border-4 rounded-2xl border-darkGreen w-full p-5">
            <h2>Name: {displayText.name}</h2>
            <h2>Location: {displayText.address}</h2>
            <a href={displayText.googleMapsURL}>Open with Google Maps Navigation</a>
        </div>
    )
}
export default StatusBox;
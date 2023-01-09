const StatusCircle = ({ usage }) => {

    return (
        <div className="hidden md:block">
            <div className="circle circle-green-color text-xl">
                {usage === 1 ? 'Not full' : null}
                {usage === 2 ? 'Almost full' : null}
                {usage === 3 ? 'Completely full' : null}
            </div>
        </div>
    );
};

export default StatusCircle;
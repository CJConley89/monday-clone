const StatusDisplay = ({status}) => {
    
    const getColor = (status) => {
        let color;
        switch(status) {
            case 'done':
                color = 'rgb(79, 165, 79)';
                break;
            case 'in progress':
                color = 'rgba(216, 216, 38, 0.8)';
                break;
            case 'stuck':
                color = 'rgb(204, 51, 51)';
                break;
            case 'ready':
                color = 'rgb(63, 63, 191)';
                break;
            default:
                color = 'rgb(43, 43, 63)';
        }
        return color;
    }
    
    return (
        <div className="status-display" style={{ backgroundColor: getColor(status)}}>
            {status}
        </div>
    )
};

export default StatusDisplay;
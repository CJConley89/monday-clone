import {useState, useEffect , useContext} from 'react';
import TicketCard from '../components/TicketCard';
import axios from 'axios';
import CategoriesContext from '../context';

const Dashboard = () => {
    const [tickets, setTickets] = useState(null);
    const {cagetories, setCategories } = useContext(CategoriesContext);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get('http://localhost:8000/tickets');
            const dataObject = response.data.data;

            const arrayOfKeys = Object.keys(dataObject);
            const arrayOfData = Object.keys(dataObject).map((key) => dataObject[key]);
            const formattedDataArray = [];
            arrayOfKeys.forEach((key, index) => {
                const formattedData = {...arrayOfData[index]};
                formattedData['documentId'] = key;
                formattedDataArray.push(formattedData);
            });
            setTickets(formattedDataArray);
        }
        fetchData();
    }, []);

    useEffect(() => {
        setCategories([...new Set(tickets?.map(({category}) => category))])
    },[tickets]);

    const colors = [
        '#77dd77',
        '#836953',
        '#89cff0',
        '#99c5c4',
        '#9adedb',
        '#aa9499',
        '#aaf0d1',
        '#b2fba5',
        '#b39eb5',
        '#bdb0d0',
        '#bee7a5',
        '#befd73',
        '#c1c6fc',
        '#c6a4a4',
        '#cb99c9',
        '#fdfd96',
        '#ff6961',
        '#ff694f',
        '#ff9899',
        '#ffb7ce',
        '#ca9bf7'
    ]

    const uniqueCategories = [
        ...new Set(tickets?.map(({category}) => category))
    ]
    
    const sortedCategories = uniqueCategories.sort(function (a,b) {
        return a.localeCompare(b);
    })
    

    return (
        <div className="dashboard">
            <h1>My Projects</h1>
            <div className="ticket-container">
                {tickets && sortedCategories?.map((uniqueCategory, categoryIndex) => (
                    <div key={categoryIndex}>
                        <h3 key={categoryIndex}>{uniqueCategory}</h3>
                        {tickets.filter(ticket => ticket.category === uniqueCategory)
                            .map((filteredTicket, _index) => (
                                <TicketCard 
                                    id={_index}
                                    key={_index}
                                    color={colors[categoryIndex] || colors[0]}
                                    ticket={filteredTicket}
                                />
                            ))
                        }
                    </div>
                ))}

            </div>
        </div>
    )
};

export default Dashboard;
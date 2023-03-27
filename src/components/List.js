import { Series } from './Series';
import { useEffect, useState } from 'react';

export function List() {
    const [allSeries, setAllSeries] = useState([]);

    useEffect(() => {
        fetch(process.env.REACT_APP_API_BASE_URL + '/series')
            .then((response) => response.json())
            .then((data) => {
                setAllSeries(data);
            })
            .catch((err) => console.error(err));
    }, []);

    return (
        <section id='list'>
            <div className='container'>
                {allSeries &&
                    allSeries.map((series) => {
                        return <Series series={series} key={series.id} />;
                    })}
            </div>
        </section>
    );
}

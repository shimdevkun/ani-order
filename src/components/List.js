import { Series } from './Series';
import { useEffect, useState } from 'react';

export function List() {
    const [allSeries, setAllSeries] = useState([]);

    useEffect(() => {
        fetch('https://api.npoint.io/880057e1e7ba67d2c1f6')
            .then((response) => response.json())
            .then((data) => setAllSeries(data))
            .catch((err) => console.error(err));
    });

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

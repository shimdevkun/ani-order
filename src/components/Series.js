import { Project } from './Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

export function Series() {
    const expandSeries = (e) => {
        const expandBtn = e.target.closest('button');
        expandBtn.classList.add('hidden');
        expandBtn.nextSibling.classList.remove('hidden');
        const seriesHead = expandBtn.parentElement;
        seriesHead.classList.remove('collapsed');
        seriesHead.nextSibling.classList.remove('hidden');
    };

    const collapseSeries = (e) => {
        const collapseBtn = e.target.closest('button');
        collapseBtn.classList.add('hidden');
        collapseBtn.previousSibling.classList.remove('hidden');
        const seriesHead = collapseBtn.parentElement;
        seriesHead.classList.add('collapsed');
        seriesHead.nextSibling.classList.add('hidden');
    };

    return (
        <div className='series'>
            <div className='series__head collapsed'>
                <h2>Anime Series Title Goes Here</h2>
                <button
                    className='toggle-series expand-series'
                    onClick={(e) => expandSeries(e)}
                >
                    <FontAwesomeIcon icon={faAngleDown} />
                </button>
                <button className='toggle-series collapse-series hidden'>
                    <FontAwesomeIcon
                        icon={faAngleUp}
                        onClick={(e) => collapseSeries(e)}
                    />
                </button>
            </div>
            <div className='series__body hidden'>
                <div className='projects'>
                    <Project
                        watchOrder='1'
                        projectTitle="Anime series' project goes here"
                        format='TV'
                    />
                    <Project
                        watchOrder='2'
                        projectTitle="Anime series' project goes here"
                        format='Movie'
                    />
                    <Project
                        watchOrder='3'
                        projectTitle="Anime series' project goes here"
                        format='OVA'
                    />
                </div>
                <div className='series__info'>
                    <a href='www.google.com' className='series-order-source'>
                        www.google.com
                    </a>
                    <a className='edit-series'>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </a>
                </div>
            </div>
        </div>
    );
}

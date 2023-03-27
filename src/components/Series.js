import { Link } from 'react-router-dom';
import { Project } from './Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faPenToSquare,
    faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

export function Series({ series }) {
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
                <h2>{series.seriesName}</h2>
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
                    {series.projects.map((project, index) => {
                        return (
                            <Project
                                watchOrder={index + 1}
                                projectTitle={project.projectName}
                                link={project.link}
                                format={project.format}
                                key={index + 1}
                            />
                        );
                    })}
                </div>
                <div className='series__info'>
                    <a
                        href={series.orderSource}
                        target='_blank'
                        className='series-order-source'
                        rel='noreferrer'
                    >
                        {series.orderSource}&nbsp;&nbsp;
                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            size='2xs'
                        />
                    </a>
                    <Link to={'/edit/' + series.id} className='edit-series'>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

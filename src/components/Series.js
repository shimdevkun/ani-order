import { Project } from './Project';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faAngleDown,
    faAngleUp,
    faPenToSquare,
} from '@fortawesome/free-solid-svg-icons';

export function Series() {
    return (
        <div className='series'>
            <div className='series__head'>
                <h2>Anime Series Title Goes Here</h2>
                <div className='toggle-series'>
                    <FontAwesomeIcon icon={faAngleDown} />
                </div>
            </div>
            <div className='series__body'>
                <Project
                    watchOrder='1'
                    projectTitle="Anime series' project goes here"
                    format='tv'
                />
                <Project
                    watchOrder='2'
                    projectTitle="Anime series' project goes here"
                    format='movie'
                />
                <Project
                    watchOrder='3'
                    projectTitle="Anime series' project goes here"
                    format='ova'
                />
                <div>
                    <a href='www.google.com' className='series-order-source'>
                        www.google.com
                    </a>
                    <div className='edit-series'>
                        <FontAwesomeIcon icon={faPenToSquare} />
                    </div>
                </div>
            </div>
        </div>
    );
}

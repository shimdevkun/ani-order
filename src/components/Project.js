import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTv,
    faClapperboard,
    faCompactDisc,
    faArrowUpRightFromSquare,
} from '@fortawesome/free-solid-svg-icons';

export function Project({ watchOrder, projectTitle, link, format }) {
    const formatMap = { TV: faTv, Movie: faClapperboard, OVA: faCompactDisc };

    return (
        <div className='project'>
            <div className='project__main'>
                <p className='watch-order'>{watchOrder}</p>
                <p className='project-title'>
                    <a href={link} target='_blank' className='project-link'>
                        {projectTitle}&nbsp;&nbsp;
                        <FontAwesomeIcon
                            icon={faArrowUpRightFromSquare}
                            size='2xs'
                        />
                    </a>
                </p>
            </div>
            <span title={format}>
                <FontAwesomeIcon icon={formatMap[format]} />
            </span>
        </div>
    );
}

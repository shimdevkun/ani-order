import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTv,
    faClapperboard,
    faCompactDisc,
} from '@fortawesome/free-solid-svg-icons';

export function Project({ watchOrder, projectTitle, format }) {
    const formatMap = { TV: faTv, Movie: faClapperboard, OVA: faCompactDisc };

    return (
        <div className='project'>
            <div className='project__main'>
                <p className='watch-order'>{watchOrder}</p>
                <p className='project-title'>{projectTitle}</p>
            </div>
            <span title={format}>
                <FontAwesomeIcon icon={formatMap[format]} />
            </span>
        </div>
    );
}

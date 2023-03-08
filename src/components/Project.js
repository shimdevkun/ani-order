import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTv,
    faClapperboard,
    faCompactDisc,
} from '@fortawesome/free-solid-svg-icons';

export function Project({ watchOrder, projectTitle, format }) {
    const formatMap = { tv: faTv, movie: faClapperboard, ova: faCompactDisc };

    return (
        <div className='project'>
            <p className='watch-order'>{watchOrder}</p>
            <p className='project-title'>{projectTitle}</p>
            <FontAwesomeIcon icon={formatMap[format]} />
        </div>
    );
}

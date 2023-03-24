import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus as farSquarePlus } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom';

export function Header({ showActions }) {
    return (
        <header>
            <div className='center'>
                <Link to='/' className='logo'>
                    Ani-Order
                </Link>
            </div>
            {showActions && (
                <Link to='/edit' id='add-series'>
                    <FontAwesomeIcon icon={farSquarePlus} />
                </Link>
            )}
        </header>
    );
}

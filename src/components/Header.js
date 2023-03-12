import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquarePlus as farSquarePlus } from '@fortawesome/free-regular-svg-icons';
export function Header() {
    return (
        <header>
            <div className='center'>
                <div className='logo'>Ani-Order</div>
            </div>
            <a id='add-series'>
                <FontAwesomeIcon icon={farSquarePlus} />
            </a>
        </header>
    );
}

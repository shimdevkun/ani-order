import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons';

export function ProjectEdit({
    order,
    projectName,
    link,
    format,
    onHandleChange,
    onDeleteProject,
}) {
    return (
        <div className='edit-project'>
            <button id='delete-project' onClick={onDeleteProject}>
                <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <div className='field-edit'>
                <label htmlFor='project-name'>Name</label>
                <input
                    name='projectName'
                    type='text'
                    value={projectName}
                    onChange={onHandleChange}
                />
            </div>
            <div className='field-edit'>
                {' '}
                <label htmlFor='link'>Link</label>
                <input
                    name='link'
                    type='text'
                    value={link}
                    onChange={onHandleChange}
                />
            </div>
            <div className='field-edit'>
                <label htmlFor='format'>Format</label>
                <select name='format' value={format} onChange={onHandleChange}>
                    <option value=''></option>
                    <option value='TV'>TV</option>
                    <option value='Movie'>Movie</option>
                    <option value='OVA'>OVA</option>
                </select>
            </div>
            <input name='order' type='number' value={order} readOnly hidden />
        </div>
    );
}

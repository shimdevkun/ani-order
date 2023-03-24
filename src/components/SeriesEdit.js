import { ProjectEdit } from './ProjectEdit';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SeriesEdit() {
    const navigate = useNavigate();

    const [series, setSeries] = useState({
        seriesName: '',
        orderSource: '',
        projects: [
            {
                projectName: '',
                link: '',
                format: '',
            },
            {
                projectName: "Anime series' goes here",
                link: 'www.google.com',
                format: 'TV',
            },
        ],
    });

    function handleChange(event) {
        const { name, value } = event.target;

        setSeries((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    function handleProjectChange(event) {
        const { name, value } = event.target;
        const orderInput = event.target
            .closest('.edit-project')
            .querySelector('input[name="order"]');

        const index = orderInput.value - 1;
        const projects = [...series.projects];
        projects[index] = { ...projects[index], [name]: value };

        setSeries((prevData) => ({
            ...prevData,
            projects: projects,
        }));
    }

    function addProject() {
        const newProject = {
            projectName: '',
            link: '',
            format: '',
        };

        const projects = [...series.projects];
        projects.push(newProject);
        setSeries((prevData) => ({
            ...prevData,
            projects: projects,
        }));
    }

    function deleteProject(event) {
        const orderInput = event.target
            .closest('.edit-project')
            .querySelector('input[name="order"]');

        const index = orderInput.value - 1;
        const projects = [...series.projects];
        projects.splice(index, 1);

        setSeries((prevData) => ({
            ...prevData,
            projects: projects,
        }));
    }

    function editSeries() {
        navigate('/');
    }

    return (
        <section id='edit'>
            <div className='container'>
                <h2>New Anime Series</h2>
                <div className='basic-info'>
                    <h3>Basic Info</h3>
                    <div className='field-edit'>
                        <label htmlFor='series-name'>Name</label>
                        <input
                            name='series-name'
                            type='text'
                            onChange={handleChange}
                        />
                    </div>

                    <div className='field-edit'>
                        <label htmlFor='order-source'>Source</label>
                        <input
                            name='order-source'
                            type='text'
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className='projects'>
                    <h3>Projects</h3>
                    {series.projects.map((project, i) => {
                        return (
                            <ProjectEdit
                                key={i}
                                order={i + 1}
                                projectName={project.projectName}
                                link={project.link}
                                format={project.format}
                                onHandleChange={(e) => handleProjectChange(e)}
                                onDeleteProject={(e) => deleteProject(e)}
                            />
                        );
                    })}
                    <div className='btn-wrapper'>
                        <button id='add-project' onClick={addProject}>
                            Add Project
                        </button>
                    </div>
                </div>
                <button id='edit-series' onClick={editSeries}>
                    Create
                </button>
            </div>
        </section>
    );
}

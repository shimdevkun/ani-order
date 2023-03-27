import { ProjectEdit } from './ProjectEdit';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useParams } from 'react-router-dom';

export function SeriesEdit({ seriesToEdit }) {
    const navigate = useNavigate();
    const { seriesId } = useParams();
    const [series, setSeries] = useState({
        id: '',
        seriesName: '',
        orderSource: '',
        projects: [
            {
                projectName: '',
                link: '',
                format: '',
            },
        ],
    });

    useEffect(() => {
        if (seriesId) {
            fetch(process.env.REACT_APP_API_BASE_URL + '/series/' + seriesId)
                .then((response) => response.json())
                .then((data) => {
                    setSeries(data);
                })
                .catch((err) => console.error(err));
        }
    }, [seriesId]);

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

    async function editSeries() {
        //let updatedSeries = data;
        const postUrl = process.env.REACT_APP_API_BASE_URL + '/series';
        if (seriesId) {
            await fetch(postUrl + '/' + seriesId, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(series),
            });
        } else {
            await fetch(postUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(series),
            });
        }
        navigate('/');
    }

    return (
        <section id='edit'>
            <div className='container'>
                <h2>New Anime Series</h2>
                <div className='basic-info'>
                    <h3>Basic Info</h3>
                    <div className='field-edit'>
                        <label htmlFor='seriesName'>Name</label>
                        <input
                            name='seriesName'
                            type='text'
                            value={series.seriesName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='field-edit'>
                        <label htmlFor='orderSource'>Source</label>
                        <input
                            name='orderSource'
                            type='text'
                            value={series.orderSource}
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

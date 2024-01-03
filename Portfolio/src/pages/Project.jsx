import React, { useEffect, useState } from 'react';
import data from '../utils/projects.json';

const Project = () => {
    return (
        <div className="card-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
            {data?.projects?.map((project) => (
                <div key={project.id} className="card" style={{ width: '18rem', marginBottom: '20px' }}>
                    <img src={project.src} className="card-img-top" alt={project.title} />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <a href={project.githubLink} className="btn btn-warning" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Project;







import React, { useEffect, useState } from 'react';
import data from '../utils/projects.json';

const Project = () => {
    return (
        <div>
            {data?.projects?.map((project) => (
                <div key={project.id} className="card" style={{ width: '18rem' }}>
                    <img src={project.src} className="card-img-top" alt={project.title} />
                    <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <a href={project.githubLink} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
                            Github
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Project;







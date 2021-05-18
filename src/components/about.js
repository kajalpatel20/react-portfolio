import React from 'react';
import Avatar from '../assets/images/kajal-image.png';
import '../App.css';

const About = () => {
    return (
        <React.Fragment>
            <div className='container'>
                <div className='row'>
                    <div className='col'>
                        <div className='card'>

                            <div className='card-body'>
                                <div className="row abstract-back ">
                                    <img className='avatar' src={Avatar} />
                                </div>
                            </div>

                            <div className='card-body'>
                                <div className="row">
                                    <p className='p-about'>
                                        Software Engineer with a demonstrated history of working on production web and mobile applications. Deep
                                        understanding and technical expertise in Computer Science fundamentals, Javascript, ReactJS, MySqual, NodeJS, MongoDB, CSS,
                                        HTML and other technologies.
                                    </p>
                                </div>
                            </div>

                            <div className="modal-footer" />

                            <div className='card-body'>
                                <h2 className='edu'>Education</h2>
                                <br />

                                <div className='grid-container-profile'>
                                    <div className='grid-item'>
                                        <div className='title-uni'>University Of Pennsylvania, LPS -Bootcamp</div>
                                        <div className='title-concentration'>Full Stack Web Development</div>
                                    </div>
                                    <div className="grid-item">
                                        <div className='title-uni'>Indira Gandhi National Open University</div>
                                        <div className='title-concentration'>Postgraduate Degree, Early Childhood Education and Teaching</div>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>Gujarat Institute of technologies</div>
                                        <div className='title-concentration'>Master of Science in Medical Technology</div>
                                    </div>

                                    <div className="grid-item">
                                        <div className='title-uni'>M. S. University</div>
                                        <div className='title-concentration'>Bachelor of Science in Food and Nutrition</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default About;

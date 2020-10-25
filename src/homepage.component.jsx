import React from 'react';

import './homepage.styles.scss';

const HomePage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Title 1</h1>
                    <span className='subtitle'>Subtitle</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Title 2</h1>
                    <span className='subtitle'>Subtitle</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Title 3</h1>
                    <span className='subtitle'>Subtitle</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Title 4</h1>
                    <span className='subtitle'>Subtitle</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Title 5</h1>
                    <span className='subtitle'>Subtitle</span>
                </div>
            </div>
        </div>
    </div>
);

export default HomePage;
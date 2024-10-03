import React, { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import './Switch.css'; 

const ThemedComponent = () => {
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    
    return (
        <div className='head' style={{ background: isDarkTheme ? '#333' : '#FFF', color: isDarkTheme ? '#FFF' : '#000', padding: '20px' }}>
            <h1>{isDarkTheme ? 'Темная Тема' : 'Светлая Тема'}</h1>
            <label className="switch">
                <input type="checkbox" className="input__check" checked={isDarkTheme} onChange={toggleTheme} />
                <span className="slider"></span>
            </label>
        </div>
    );
};

export default ThemedComponent;
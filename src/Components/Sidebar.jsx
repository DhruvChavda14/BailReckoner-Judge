import React from 'react';
import './Sidebar.css';

const Sidebar = ({ onCaseSelect }) => {
    return (
        <div className="sidebar">
            <h2>Profile</h2>
            <ul>
                <li>Cases ▲</li>
                <li><a href="#" onClick={() => onCaseSelect(1)}>Case 1</a></li>
                <li><a href="#" onClick={() => onCaseSelect(2)}>Case 2</a></li>
                <li><a href="#" onClick={() => onCaseSelect(3)}>Case 3</a></li>
            </ul>
            <button className="logout">Logout</button>
        </div>
    );
};

export default Sidebar;

import React, { useState } from "react";
import "./SettingsCard.css";

const SettingsCard = ({ selectedSetting, isCardOpen }) => {
    const [radius, setRadius] = useState('');

    const handleRadiusChange = (event) => {
        setRadius(event.target.value);
    };

    const handleRadiusSubmit = async () => {

        const response = await fetch(`/api/updateRadius`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ radius }),
        });
        const data = await response.json();
        alert(`Radius updated: ${data.radius}`); // Display confirmation to the user
    };

    const renderSettingDetails = () => {
        switch (selectedSetting) {
            case "Account":
                return (
                    <div>
                        <h3>Account Settings</h3>
                        <div className="settings-input-group">
                            <label htmlFor="radius">Store Search Radius (meters):</label>
                            <input type="number" id="radius" value={radius} onChange={handleRadiusChange} />
                            <button onClick={handleRadiusSubmit}>Update Radius</button>
                        </div>
                        <div className="settings-input-group">
                            <label htmlFor="email">Email Address:</label>
                            <input type="email" id="email" placeholder="Update email" />
                        </div>
                        <div className="settings-input-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" id="password" placeholder="New password" />
                        </div>
                    </div>
                );
            case "Notification":
                return (
                    <div>
                        <h3>Notification Settings</h3>
                        <div className="settings-input-group">
                            <div className="checkbox-group">
                                <label>Email Notifications:</label>
                                Enable <input type="checkbox" /> 
                            </div>
                        </div>
                        <div className="settings-input-group">
                            <div className="checkbox-group">
                                <label>Push Notifications:</label>
                                Enable <input type="checkbox" /> 
                            </div>
                        </div>
                    </div>
                );
            case "Privacy":
                return (
                    <div>
                        <h3>Privacy Settings</h3>
                        <div className="settings-input-group">
                            <label>Profile Visibility:</label>
                            <select>
                                <option>Public</option>
                                <option>Friends Only</option>
                                <option>Private</option>
                            </select>
                        </div>
                        <div className="settings-input-group">
                            <div className="checkbox-group">
                                <label>Search Engine Indexing:</label>
                                Allow <input type="checkbox" /> 
                            </div>
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className={`settings-card ${isCardOpen ? 'open' : ''}`}>
            <h2>{selectedSetting}</h2>
            {renderSettingDetails()}
        </div>
    );
};

export default SettingsCard;

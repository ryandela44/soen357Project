import React from "react";
import "./LeftColumn.css";

const LeftColumn = ({ selectedSetting, onSettingSelect }) => {
    const settings = ["Account", "Notification", "Privacy"];

    return (
        <div className="left-column">
            <h2 className="font-bold text-2xl mb-5">Settings</h2>
            <ul>
                {settings.map((setting) => (
                    <li
                        key={setting}
                        className={selectedSetting === setting ? "selected" : ""}
                        onClick={() => onSettingSelect(setting)} // Use passed handler
                    >
                        {setting}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeftColumn;
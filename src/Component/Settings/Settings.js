import React, { useState } from "react";
import LeftColumn from "../LeftColumn/LeftColumn";
import SettingsCard from "../SettingsCard/SettingsCard";
import Header from "../Header/Header";
import "./Settings.css";

const Settings = () => {
    const [selectedSetting, setSelectedSetting] = useState("Account");
    const [isCardOpen, setIsCardOpen] = useState(false);

    const handleSettingClick = (setting) => {
        setSelectedSetting(setting);
        setIsCardOpen(true); // Open the card when a setting is clicked
    };

    return (
        <div className="settings-container">
            <Header />
            <div className="settings-page">
                <LeftColumn
                    selectedSetting={selectedSetting}
                    onSettingSelect={handleSettingClick} // Rename to clarify it's a handler
                />
                <SettingsCard
                    selectedSetting={selectedSetting}
                    isCardOpen={isCardOpen}
                />
            </div>
        </div>
    );
};

export default Settings;

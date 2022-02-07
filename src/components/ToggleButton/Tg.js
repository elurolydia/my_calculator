import React, {useState} from "react";
import "./Tg.css";


const ToggleSwitch = ({ label, ToggleClick, className, themeClassname, switchClassname }) => {





return (
		<div className="container">
        <div className={themeClassname}> 
        {label}{"  "}
        </div>
	<div className="toggle-switch">
		<input type="checkbox" className="checkbox"
			name={label} id={label} />
		<label className="label" htmlFor={label}>
		<span className={className} onClick= {ToggleClick}/>
		<span className={switchClassname} onClick= {ToggleClick}/>
		</label>
	</div>
	</div>
);
};

export default ToggleSwitch;

import BandPic from "../img/epk/crimson-devils-truck.png";
import BandLogo from "../img/epk/crimson-devils-logo-hi-res.png";
import "../styles/band-section.scss";
import React from "react";

function BandSection() {
    const memberInfo = [
        {
            name: "Patrick Pascucci",
            duty: "Drums"
        },
        {
            name: "Jake Unruh",
            duty: "Guitars - Vocals"
        },
        {
            name: "Curt Christenson",
            duty: "Bass"
        }
    ];
    const renderMember = (member) => {
        return (
            <li key={member.name.toString()}>
                <h3>{member.name}</h3>
                <p>{member.duty}</p>
            </li>
        );
    };
    return (
        <ul>
            {memberInfo.map(renderMember)}
            <p><a href={BandPic} target="_blank" rel="noreferrer">Hi-Res Band Photo</a></p>
            <p><a href={BandLogo} target="_blank" rel="noreferrer">Hi-Res Band Logo</a></p>
        </ul>
    );
};

export default BandSection

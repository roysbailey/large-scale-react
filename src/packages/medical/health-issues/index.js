import React from 'react';
import { DisplayMenu } from "./components/display-menu";
import { Body } from './components/body'

export const HealthIssues = () => {
    return (
        <div>
            <h2>Health issues</h2>
            <DisplayMenu />
            <Body type="front" />
            <Body type="back" />
        </div>
    )
}
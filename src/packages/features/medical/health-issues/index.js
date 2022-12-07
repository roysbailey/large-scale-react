import React from 'react';
import { DisplayMenu } from "./components/display-menu";
import { Body } from './components/body'

export const HealthIssues = () => {
    return (
        <div>
            <h2>Health issues</h2>
            This page is composed via a set of, erm... well.... components.  As the components it uses are sepcific to this area, their code within same folder as the page.  So everything is stored neatly together!
            <DisplayMenu />
            The following rendered via a component, where <i>front</i> is passed to the component as a param
            <Body type="front" />
            The following is also rendered via the SAME component, where <i>back</i> is now passed to the component as a param
            <Body type="back" />
        </div>
    )
}
import React from 'react';
import Namecard from '../NameCard/NameCard';
import './Resultscontainer.css';

const ResultContainer = ({ suggestedNames }) => {

    const suggestedNamesJsx = suggestedNames.map(suggestedName => {
        return <Namecard key={suggestedName} suggestedName={suggestedName} />;
    })

    return (
        <div className="results-container">
            {

                suggestedNamesJsx

            }
        </div>
    );

}

export default ResultContainer;
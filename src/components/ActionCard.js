import React from 'react';

const ActionCard = ({ title, children }) => {
    return (
        <div className="action-card">
            <h3>{title}</h3>
            {children}
        </div>
    );
};

export default ActionCard;
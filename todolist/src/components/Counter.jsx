import React from 'react';

function Counter() {
    const count = 3;
    return(
        <div className="main-container">
            <div className="heading">
                <h1>Not yet completed</h1>
            </div>
            <div>
                <p>You have</p>
                <p>{count} things</p>
                <p>not yet completed.</p>
            </div>
        </div>
    );
}

export default Counter;
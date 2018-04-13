import React from 'react';
const Title = props =>
    <div>
        <h1>{props.title}</h1>
        <h2>Tasks list: {props.length}</h2>
    </div>;
export default Title;

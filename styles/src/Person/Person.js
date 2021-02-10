import React from 'react';
// import for styles (installed with npm install --save styled-components)
import styled from 'styled-components';

// import './Person.css'; -> no need

// instead we use:
const StyleDiv = styled.div`
width: 60%;
margin: 16px auto;
border: 1px solid #eee;
box-shadow: 0 2px 3px #ccc;
padding: 16px;
text-align: center;

// responsive
@media (min-width: 500px) {
    width: 450px;
}`

const person = (props) => {
    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
};

export default person;
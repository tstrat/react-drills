import React from 'react';
import Todo from './Todo';
import './App.css';

export default function List(props) {
    const list = props.list.map((el, i) => <Todo key={i} item={el} />);
    return ( <div>
            {list}
        </div>
    )
}

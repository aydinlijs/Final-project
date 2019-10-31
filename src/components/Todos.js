import React from 'react';
import Form from './Form';
import DoneTodos from './DoneTodos';
import NotDoneTodos from './NotDoneTodos';

class Todos extends React.Component{
    render(){
        return(
            <div>
                <Form/>
                <DoneTodos/>
                <NotDoneTodos/>
            </div>
        )
    }
}

export default Todos;
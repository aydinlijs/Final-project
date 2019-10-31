import React from 'react';
import Form from './Form';
import List from './List';

class Todos extends React.Component{
    render(){
        return(
            <div>
                <Form/>
                <List done={true}/>
                <List done={false}/>
            </div>
        )
    }
}

export default Todos;
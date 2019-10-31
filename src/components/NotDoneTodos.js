import React from 'react';
import List from './List';

class NotDoneTodos extends React.Component{
    render(){
        return(
            <div>
                <h2>Not done</h2>
                <List done={false}/>
            </div>
        )
    }
}

export default NotDoneTodos;
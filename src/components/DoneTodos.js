import React from 'react';
import List from './List';

class DoneTodos extends React.Component{
    render(){
        return(
            <div>
                <h2>Done</h2>
                <List done={true}/>
            </div>
        )
    }
}

export default DoneTodos;
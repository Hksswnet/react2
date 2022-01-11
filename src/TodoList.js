import React, {Component, Fragment} from 'react';

class TodoList extends Component{

    constructor (props) {
        super(props);
        this.state = {
            inputValue: 'BX',
            list : []
        }
    }

render(){
    return (
<Fragment>
        <div>
            <input value={this.state.inputValue}/>
            <button>提交</button>  </div>
            <ul>
                <li>chinese</li>
                <li>english</li>
            </ul>
            </Fragment>
          
    )
}

}

export default TodoList;
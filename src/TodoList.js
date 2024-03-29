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
            <input 
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
            />
            <button>提交</button>  </div>
            <ul>
                <li>chinese</li>
                <li>english</li>
            </ul>
            </Fragment>
          
    )
}

handleInputChange(e){   
    this.setState({
        inputValue:  e.target.value
    }) 
}

}

export default TodoList;
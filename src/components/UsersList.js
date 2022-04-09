import React, { PureComponent } from 'react';
import AsyncSelect from "react-select/async";
class UsersList extends PureComponent {
    state={selectedUsers:[]}
    
    onChange = selectedUsers =>{
        this.setState({
            selectedUsers:selectedUsers||[]
        })
    }
    loadOptions = async(inputText,callback)=>{
       debugger;
        const response = await fetch(`https://www.livenewscafe.xyz/php-react-category/category-dropdown.php?label_like=${inputText}`);
        const json = await response.json()

      callback(json.map(i=>({label:i.label,value:i.value,avatar:i.imgsrc})));
    }

    renderEveryUser=user=>{
     debugger;
        return <img src={user.avatar} alt="user avatar"/>
    }

    render() {
        return (
            <div className='users'>
            <div className='avatars' style={{width:100,height:50,display:'flex'}}>
                {this.state.selectedUsers.map(this.renderEveryUser)}
            </div>
<AsyncSelect
isMulti
value={this.state.selectedUsers}
onChange={this.onChange}
placeholder={'type something...'}
loadOptions={this.loadOptions}
/>
            </div>

        )
    }
}



export default UsersList;
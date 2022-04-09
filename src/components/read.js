import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://www.livenewscafe.xyz/php-react-post-list/all-users.php`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);
    const styleObject = {
      "font-size" : "1px",
      "height" : "100px",
      "width" : "100%"
}
    const setData = (data) => {
        
      let { id, CategoryName, subCategoryName,PostDetails, PostTitle, PostUrl,PostList,PostPosition,Status,subPostTitle } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('Category Name', CategoryName);
        localStorage.setItem('SubCategory Name', subCategoryName);
        localStorage.setItem('PostDetails', PostDetails);
        localStorage.setItem('PostList', PostList);
        localStorage.setItem('PostTitle', PostTitle);
        localStorage.setItem('subPostTitle', subPostTitle);
        localStorage.setItem('PostUrl', PostUrl);
        localStorage.setItem('PostPosition', PostPosition);
        localStorage.setItem('Status', Status);
    }

    const getData = () => {
      debugger; 
      axios.get(`https://www.livenewscafe.xyz/php-react-post-list/all-users.php`)
            .then((getData) => {
                console.log(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://www.livenewscafe.xyz/php-react-post-list/delete-user.php?id=${id}`)
        .then((resp) => {
          console.log(resp);
        })
    }
    const { logout, isAuthenticated } = useAuth0();
    return (
  
  <>
 <table><tr><Link to="/create">Create</Link></tr></table>     
      
  <div class="table-responsive">
          <Table>
 
  <thead>
    <tr>
      <th>Category Name</th>
      <th>SubCategory Name</th>
      <th>PostDetails</th>
      <th>PostTitle</th>
      <th>SubPostTitle</th>
      <th>PostUrl</th>
      <th>PostList</th>
      <th>PostPosition</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {APIData.map((data) => {
                        return (
    <tr>
     
      <td>{data.CategoryName}</td>
      <td>{data.subCategoryName}</td>
      <td>{data.PostDetails}</td>
      <td>{data.PostTitle}</td>
      <td>{data.subPostTitle}</td>
      <td ><div style={styleObject} className="urldiv">{data.PostUrl}</div></td>
      <td>{data.PostList}</td>
      <td>{data.PostPosition}</td>
      <td >  <Link to='/update'><Button onClick={() => setData(data)}>Update</Button></Link></td>
      <td><Button onClick={() => onDelete(data.id)}>Delete</Button></td>
    </tr>
                        )   
})}
  </tbody>
</Table>
        </div></>
    )
}

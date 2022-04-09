import React, { useState, useEffect } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Update() {
    let history = useHistory();
    const [id, setID] = useState('');
    const [CategoryName, setCategoryName] = useState('');
    const [subCategoryName, setsubCategoryName] = useState('');
    const [PostList, setPostList] = useState('');
    const [Categoryid, setCategoryid] = useState('');
    const [subCategoryid, setsubCategoryid] = useState('');
    const [PostDetails, setPostDetails] = useState('');
    const [PostTitle, setPostTitle] = useState('');
    const [subPostTitle, setsubPostTitle] = useState('');
    const [PostUrl, setPostUrl] = useState('');
    const [categories,setCategories] = useState([]);
    const [subcategories,setsubCategories] = useState([]);
    const [cat,setcat] = useState('');
    const [subcat,setsubcat] = useState('');
    const [Status, setStatus] = useState('');
    const [PostPosition, setPostPosition] = useState('');

    useEffect(() => {
      
        setID(localStorage.getItem('ID'))
        setCategoryName(localStorage.getItem('CategoryId'));
        setsubCategoryName(localStorage.getItem('subCategoryid'));
        setPostDetails(localStorage.getItem('PostDetails'));
        setPostTitle(localStorage.getItem('PostTitle'));
        setsubPostTitle(localStorage.getItem('subPostTitle'));
        setPostUrl(localStorage.getItem('PostUrl'));
        setPostList(localStorage.getItem('PostList'));
        setPostPosition(localStorage.getItem('PostPosition'));
        setStatus(localStorage.getItem('Status'));
        axios.get('https://www.livenewscafe.xyz/php-react-category/category-dropdown.php')
    .then(response=>setCategories(response.data))
    .then(error=>console.log(error))
  
    axios.get('https://www.livenewscafe.xyz/php-react-subcategory/all-users.php')
   
    .then(response=>setsubCategories(response.data.users))
    .then(error=>console.log(error))
       
    }, []);
    const onddlChange=(e)=>{
        // alert(e.target.value);
     
        setcat(e.target.value);
      
    }
    const onddlChangesubcat=(e)=>{
        // alert(e.target.value);
     
        setsubcat(e.target.value);
      
    } 
    const updateAPIData = () => {
       debugger;
        axios.put(`https://www.livenewscafe.xyz/php-react-post-list/update-latest-news-tblposts.php`, {
        id:id,    
        PostTitle:PostTitle,
        subPostTitle:subPostTitle,
        CategoryId:cat,
        SubCategoryId:subcat,
        PostDetails:PostDetails,
        PostList:PostList,
        PostUrl:PostUrl,
        PostPosition:PostPosition,
        Status:Status
        }).then(() => {
            history.push('/read')
        })
        .catch(error => {
            console.log(error);
        });
    }
    return (
        <div>
            {/* <Form className="create-form">
                <Form.Field>
                    <label>Category Name</label>
                    <input placeholder='Category Name' value={CategoryId} onChange={(e) => setCategoryName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>Sub Category Name</label>
                    <input placeholder='SubCategory Name' value={subCategoryid} onChange={(e) => setsubCategoryid(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                   
                </Form.Field>
                <Button type='submit' onClick={updateAPIData}>Update</Button>
            </Form> */}
       {/* copied create code */}
     
       <Form className="create-form">
       <div className="row">
           <div className="col">
                <Form.Field>
                    <label>PostTitle</label>
                 
                    <textarea value={PostTitle} onChange={(e) => setPostTitle(e.target.value)}>
  Hello there, this is some text in a text area
</textarea>
                </Form.Field>
                <Form.Field>
                    <label>SubPostTitle</label>
                    <input placeholder='subPostTitle' value={subPostTitle} onChange={(e) => setsubPostTitle(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>PostDetails</label>
                    <input placeholder='PostDetails' value={PostDetails} onChange={(e) => setPostDetails(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>PostList</label>
                    <input placeholder='PostList' value={PostList} onChange={(e) => setPostList(e.target.value)}/>
                </Form.Field>
               <Form.Field>
               {Categoryid}
              <label>Category Id</label>
                <select className="form-control col-md-3" onChange={onddlChange}>
     <option value="0">--Select User--</option>
        {categories.map((category)=>(
<option defaultValue={category.label} value={category.value}>{category.label}</option>
))}
    
    </select>
    
    </Form.Field>
    </div>
               <div className="col">
    <Form.Field>
              <label>Sub Category Id</label>
                <select className="form-control col-md-3" onChange={onddlChangesubcat}>
     <option vlaue="0">--Select User--</option>
        {subcategories.map((subcategory)=>(
<option value={subcategory.id}>{subcategory.Subcategory}</option>
            ))}
    </select>
    {subcat}

    </Form.Field>          
    
    <Form.Field>
                    <label>Status</label>
                    <input placeholder='Status' value={Status}  onChange={(e) => setStatus(e.target.value)}/>
                </Form.Field>
<Form.Field>
                    <label>PostUrl</label>
                    <input placeholder='PostUrl' value={PostUrl} onChange={(e) => setPostUrl(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label>PostPosition</label>
                    <input placeholder='PostPosition' value={PostPosition} onChange={(e) => setPostPosition(e.target.value)}/>
                </Form.Field></div> 
                <Button type='submit' onClick={updateAPIData}>Update</Button>
                </div>
            </Form>
           
{/* copied create code */}
        </div>
    )
}

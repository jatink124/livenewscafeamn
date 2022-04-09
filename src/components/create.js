import React, { useState,useEffect } from 'react';

import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useHistory } from 'react-router';
import Select from 'react-select';
import { tsConstructorType } from '@babel/types';
import DropDown from './dropdown';
export default function Create() {
    let history = useHistory();
    const [PostTitle, setPostTitle] = useState('');
    const [PostDetails, setPostDetails] = useState('');
    const [PostList, setPostList] = useState('');
    const [SubPostTitle, setSubPostTitle] = useState('');
    const [Categoryid, setCategoryid] = useState('');
    const [subCategoryid, setsubCategoryid] = useState('');
    const [subCategoryName, setsubCategoryName] = useState('');
    const [Status, setStatus] = useState('');
    const [PostUrl, setPostUrl] = useState('');
    const [PostPosition, setPostPosition] = useState('');
    

    //    this.handleChange = this.handleChange.bind(this);
   
    const handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
        this.setState({ddval: selectedOption.value});
        this.setState({ddvalname:selectedOption.label});
      };
      
      const postData = () => {
      debugger;
        axios.post(`https://www.livenewscafe.xyz/php-react-post-list/add_post.php`, {
            PostTitle:PostTitle,
            SubPostTitle:SubPostTitle,
            PostDetails:PostDetails,
            PostList:PostList,
            Categoryid:cat,
            subCategoryid:subcat,
            PostPosition:PostPosition,
            subCategoryName:subCategoryName,
            PostUrl:PostUrl,
            value:Status
           
        }).then(() => {
          console.log(PostPosition+"UIII");
            history.push('/read')
        })
    }

    const [categories,setCategories] = useState([]);
    const [subcategories,setsubCategories] = useState([]);
    const [cat,setcat] = useState('');
    const [subcat,setsubcat] = useState('');
useEffect(function(){
    axios.get('https://www.livenewscafe.xyz/php-react-category/category-dropdown.php')
    .then(response=>setCategories(response.data))
    .then(error=>console.log(error))
    axios.get('https://www.livenewscafe.xyz/php-react-subcategory/all-users.php')
    .then(response=>setsubCategories(response.data.users))
    .then(error=>console.log(error))
},[]);

const onddlChange=(e)=>{
    // alert(e.target.value);
 
    setcat(e.target.value);
  
}
const onddlChangesubcat=(e)=>{
    // alert(e.target.value);
 
    setsubcat(e.target.value);
  
} 
// const { selectedOption } = this.state;
    // const options=this.state.dd;
    return (
        
        <div>
            <Form className="create-form">
        <div class="container">
                <div class="row">
              <div class="col-md-4">
                <Form.Field>
                    <label>PostTitle</label>
                    <textarea placeholder='PostTitle' onChange={(e) => setPostTitle(e.target.value)}/>
                </Form.Field>
                </div>
                <div class="col-md-4">
                <Form.Field>
                    <label>SubPostTitle</label>
                    <input placeholder='SubPostTitle' onChange={(e) => setSubPostTitle(e.target.value)}/>
                </Form.Field></div>
                <div class="col-md-4">
                <Form.Field>
                    <label>PostDetails</label>
                    <textarea placeholder='PostDetails' onChange={(e) => setPostDetails(e.target.value)}/>
                </Form.Field></div></div>
              <div class="row">
                <div class="col-md-4">
                <Form.Field>
                    <label>PostList</label>
                    <input placeholder='PostList' onChange={(e) => setPostList(e.target.value)}/>
                </Form.Field></div>
                <div class="col-md-4">
                <Form.Field>
              <label>Category Id</label>
                <select className="form-control col-md-3" onChange={onddlChange}>
     <option vlaue="0">--Select User--</option>
        {categories.map((category)=>(
<option value={category.value}>{category.label}</option>
            ))}
    </select>
    </Form.Field></div>
    <div class="col-md-4">
    <Form.Field>
              <label>Sub Category Id</label>
                <select className="form-control col-md-3" onChange={onddlChangesubcat}>
     <option valaue="0">--Select User--</option>
        {subcategories.map((subcategory)=>(
<option value={subcategory.id}>{subcategory.Subcategory}</option>
            ))}
    </select>
    {subcat}
    </Form.Field></div></div>          
   <div class="row">
    <div class="col-md-4">
    <Form.Field>
                    <label>Status</label>
                    <input placeholder='Status' onChange={(e) => setStatus(e.target.value)}/>
                </Form.Field></div>
                <div class="col-md-4">
<Form.Field>
                    <label>PostUrl</label>
                    <input placeholder='PostUrl' onChange={(e) => setPostUrl(e.target.value)}/>
                </Form.Field></div>
                <div class="col-md-4">
                <Form.Field>
                    <label>PostPosition</label>
                    <input placeholder='PostPosition' onChange={(e) => setPostPosition(e.target.value)}/>
                </Form.Field> </div> 
                </div>
                </div>               
                <Button onClick={postData} type='submit'>Submit</Button>
            </Form>
            </div>
    
    )
}

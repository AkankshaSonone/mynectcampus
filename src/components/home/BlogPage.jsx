import React from 'react'
 import { useParams } from 'react-router';
import { blog } from '../../dummydata';

const BlogPage = () => {
    const { id } = useParams();
    const selectedBlog = blog.find(val => val.id === parseInt(id));

  return (
    <div className='container mb-5' key={id}>
   {
    selectedBlog ? (
        <> <h1 className=' my-5 '>{selectedBlog.title}</h1>
        <div className='w-100 flex '> 
    <img className='w-50 my-3 mx-auto' src= {selectedBlog.cover}  alt="" />
    </div>
      {
        selectedBlog.content.map((val)=>(
            <p  className='mb-3 text-justify' key={val.id}>{val.para}</p>
        ))
      }
      </>
    ):
    (
        <p>Blog not found</p>
      )
   }
      
    </div>
  )
}

export default BlogPage;

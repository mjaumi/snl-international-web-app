import React from 'react';

const BlogCard = ({ blog }) => {
    // destructuring the blog object here
    const { id, imageUrl } = blog || {};

    // rendering blog card component here
    return (
        <div className='border-2 border-primary shadow-snl cursor-pointer hover:scale-110 duration-300'>
            <img src={imageUrl} alt={`blog ${id}`} loading='lazy' width={3024} height={4032} title={`blog ${id}`} />
        </div>
    );
};

export default BlogCard;
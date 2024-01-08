import React, { useEffect, useState } from 'react';
import PageTitle from '../../components/PageTItle/PageTitle';
import PageTopBanner from '../../components/PageTopBanner/PageTopBanner';
import BlogCard from '../../components/BlogCard/BlogCard';

const Blogs = () => {
    // declaration of react hooks here
    const [blogs, setBlogs] = useState([]);

    //scroll to the top on render
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(blogs => setBlogs(blogs));
    }, []);

    console.log(blogs);

    // rendering blogs page here
    return (
        <section>
            <PageTitle title={'Blogs'} description={'Blogs page of SNL International. Here, user can get to know about all the blogs of SNL International.'} canonical={process.env.NODE_ENV === 'development' ? 'http://localhost:3000/blogs' : 'http://snlbd.com/blogs'} />

            <PageTopBanner bgImage={'bg-banner-4-img'} titleText={'Our Blogs'} />

            <div className='w-[95%] md:w-4/5 lg:w-3/4 grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 mx-auto py-20'>
                {
                    blogs.map(blog => <BlogCard key={blog.id} blog={blog} />)
                }
            </div>
        </section>
    );
};

export default Blogs;
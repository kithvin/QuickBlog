import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const { title, description, category, image, _id } = blog;
    const navigate = useNavigate();

    return (
        // Card container, clickable to navigate to blog details page
        <div
            onClick={() => navigate(`/blog/${_id}`)}
            className='w-full rounded-lg overflow-hidden shadow hover:scale-[1.02] hover:shadow-primary/25 duration-300 cursor-pointer'
        >
        {/* Blog image */}
            <img src={image} alt={title} className='w-full aspect-video object-cover' />

        {/* Category badge */}
            <div className='text-center'>
                <span className='mt-3 px-2 py-1 inline-block bg-primary/20 rounded-full text-primary text-xs sm:text-sm'>
                    {category}
                </span>
            </div>
        {/* Title and description preview */}
            <div className='p-4 sm:p-5'>
                <h5 className='mb-2 font-medium text-gray-900 text-sm sm:text-base text-center'>
                    {title}
                </h5>
            {/* Blog description preview - limited to 80 chars, rendered as HTML */}
                <p
                    className='mb-3 text-xs text-gray-600 text-center'
                    dangerouslySetInnerHTML={{
                        __html: description.slice(0, 80) + (description.length > 80 ? '...' : ''),
                    }}
                ></p>
            </div>
        </div>
    );
};

export default BlogCard;
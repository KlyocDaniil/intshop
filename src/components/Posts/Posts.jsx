import React, { useState } from 'react';
import { PostsContainer, ListProductsName } from './styledPostsList.ts'
import PostList from "../PostList/PostList";
const Posts = ( {title} ) => {

    return (
        <PostsContainer>
            <ListProductsName >
                { title }
            </ListProductsName>
            <PostList/>
        </PostsContainer>
    );
};

export default Posts;

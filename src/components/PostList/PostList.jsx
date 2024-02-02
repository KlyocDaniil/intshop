import React, {useEffect, useState} from "react"
import PostItem from "../PostItem/PostItem"
import { PostsContainer } from "./styledList.ts"

const PostList = () =>{

    const [posts, setPosts] = useState(localStorage.getItem('products') == null
            ? []
            : (JSON.parse(localStorage.getItem('products')))
    );



    useEffect(() => {
        // Получаем товары из localStorage при загрузке компонента
        setPosts(JSON.parse(localStorage.getItem('products')) || []);
    },[]);
    //posts
    //что поставить в deps чтобы при изменении setPosts отрабатывал UseEffect?

    if (!posts.length) {
        return (
            <h1 style={{textAlign: 'center'}}>
                Посты не найдены!
            </h1>
        )
    }

    return (
        <PostsContainer>
            <>
                {
                    posts.map((product, index) =>
                    <PostItem  number = {index + 1} product = {product} />
                )}
            </>
        </PostsContainer>
    );
};

export default PostList;
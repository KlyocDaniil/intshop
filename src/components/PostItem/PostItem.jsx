import React, {useState} from 'react';
import '../../styles/App.css'
import { Button, Tooltip } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { PostItemContainer, PostItemContent, ButtonsContainer, PostButtons } from './styledPostItem.ts'

const PostItem = ( props ) => {
    const [count, setCount ] = useState(0);

    function increment () {
        setCount(count + 1)
    }

    function decrement () {
        if (count !== 0) {
            setCount(count - 1)
        }
    }

    if (!props.product) return undefined;

    return (

        <PostItemContainer>
                <PostItemContent>
                        <div >
                            <p>Name: {props.product.title}</p>
                            <p>Price: {props.product.price}</p>
                        </div>
                </PostItemContent>
                <PostButtons>
                    <ButtonsContainer>
                        <Tooltip title='Убрать'>
                            <Button onClick={decrement} type="primary" icon={<MinusOutlined />} />
                        </Tooltip>
                        <h1>{count}</h1>
                        <Tooltip title="Купить">
                            <Button onClick={increment} type="primary" icon={<PlusOutlined />} />
                        </Tooltip>
                    </ButtonsContainer>
                    <Button>Купить</Button>
                </PostButtons>
        </PostItemContainer>
    );
};

export default PostItem;

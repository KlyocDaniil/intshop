import React, {useContext, useEffect, useState} from 'react';
import {Button, notification, Tooltip, Space } from "antd";
import { ForwardOutlined } from "@ant-design/icons";
import { InputAdminForm, ClearInput, InputEnter } from "./style.ts"
import Notification from "../Notifications/Notification";
const AdminAddItem = () => {

    const [product, setProduct] = useState({title: '',  price: ''});
    const [items, setItems] = useState([])
    const [api, contextHolder] = notification.useNotification();

    const context = React.useContext(Context);

    //контекст

    const fetchProducts = () => {
        const localStorageItems = JSON.parse(localStorage.getItem('products'));

        if (localStorageItems) {
            setItems(localStorageItems);
        }
    }

    useEffect(() => {
        fetchProducts()
    }, []);

    const addNewProduct = () => {

        const newProduct = {
            title: product.title,
            price: product.price
        };

        const updatedItems = [...items, newProduct]

        localStorage.setItem('products', JSON.stringify(updatedItems));
        setItems(updatedItems)

        setProduct({ title: '', price: ''})
        fetchProducts()
    }



    const openNotificationWithIcon = (type) => {
        if (type === 'success'){
            api["success"]({
                message: 'Успех!',
                description:
                    'Товар успешно добавлен, обновите страницу',
            })
        } if (type === 'error') {
            api["error"]({
                message: 'Заполните поля!',
                description:
                    'Форма не до конца заполнена',
            }
            );
        }
    };

    const sendForm = () => {
        if (product.title && product.price){
            addNewProduct()
            openNotificationWithIcon('success')
        } else {
            openNotificationWithIcon('error')
        }
    }

    return (
        <InputAdminForm>
                <InputEnter>
                    <ClearInput
                        type='text'
                        value={product.title}
                        placeholder='Название товра'
                        onChange = {e => setProduct({...product, title:e.target.value})}
                    />
                    <ClearInput
                        type='text'
                        value={product.price}
                        placeholder='Цена'
                        onChange={e => setProduct({...product, price:e.target.value})}
                    />
                    <Tooltip title="Добавить">
                        {contextHolder}
                        <Button
                            icon={<ForwardOutlined />}
                            onClick={() => sendForm()}
                        />
                    </Tooltip>
                </InputEnter>
        </InputAdminForm>
    );
};

export default AdminAddItem;


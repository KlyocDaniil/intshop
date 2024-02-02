import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { ClearInput } from '../AdminInput/style.ts'
const RegModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Button type="primary" onClick={showModal}>
                Регистрация
            </Button>
            <Modal title="Регистрация" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
                <ClearInput
                    type='text'
                    placeholder='Логин'
                />
                <ClearInput
                    type='text'
                    placeholder='Пароль'
                />
            </Modal>
        </>
    );
};
export default RegModal;
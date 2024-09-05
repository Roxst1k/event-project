'use client'

import React, {useState} from 'react';
import style from './modal.module.css';
import Button from '@/app/components/button/button';
import {useRouter} from "next/navigation";
import {deleteEventByID} from "@/services/api";

const Modal = ({id, setShowModal}) => {
    const router = useRouter()

    const closeModal = () => {
        setShowModal(false)
    }

    const handlerDelete = async (id) => {
        await deleteEventByID(id)
        router.refresh()
        setShowModal(false)
    }

    return (
        <div className={style.modalWrapper} onClick={closeModal}>
            <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
                <h2 className={style.title}>Delete event</h2>
                <h2>Are you sure?</h2>
                <div className={style.btnWrapper}>
                    <Button handler={() => handlerDelete(id)}>Yes 👌</Button>
                    <Button handler={closeModal}>No 🚫</Button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
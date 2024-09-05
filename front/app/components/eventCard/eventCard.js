'use client'

import React, {useState} from 'react';
import styles from './eventCard.module.css';
import Button from "@/app/components/button/button";
import Modal from "@/app/components/modal/modal"
import Link from "next/link";

const EventCard = ({event, id}) => {
    const {title, description} = event;
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(true)
    }

    return (
        <div>
            {showModal && <Modal
                setShowModal={setShowModal}
                id={id}
            />}
            <div className={styles.card}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
                <Button size='small' handler={() => openModal()}>✘</Button>
                <div className={styles.buttonWrapper}>
                    <Link href={`/${id}`}>
                        <Button>More...</Button>
                    </Link>
                    <Link href={`/${id}/register`}>
                        <Button>Register</Button>
                    </Link>
                </div>
            </div>
        </div>
    )

};

export default EventCard;
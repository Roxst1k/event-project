'use client'

import Button from "@/app/components/button/button";
import styles from "./registerPage.module.css";
import {updateViewersEventByID} from "@/services/api";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import BigLoader from "@/app/components/loaders/bigLoader";
import SmallLoader from "@/app/components/loaders/smallLoader";

export default function RegisterPage({params}) {
    const {eventId} = params;
    const router = useRouter();
    const [isSaving, setIsSaving] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false)
    }, []);

    const registerFormSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const name = formData.get("name");
        const lastName = formData.get("lastName");
        const email = formData.get("email");

        console.log(name, lastName, email);

        try {
            await updateViewersEventByID(eventId, name, lastName, email);
            router.push(`/${eventId}`);
            router.refresh()
        } catch (err) {
            console.log('Error:', err);
        } finally {
            setIsSaving(true)
        }
    }

    if (isLoading) {
        return <BigLoader/>;
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={(e) => registerFormSubmit(e)}>
                <label className={styles.label}>
                    Name:
                    <input
                        type="text"
                        className={styles.input}
                        name={'name'}
                        required
                    />
                </label>
                <label className={styles.label}>
                    Lastname:
                    <input
                        type="text"
                        className={styles.input}
                        name={'lastName'}
                        required
                    />
                </label>
                <label className={styles.label}>
                    Email:
                    <input
                        type="email"
                        className={styles.input}
                        name={'email'}
                        required
                    />
                </label>
                <div className={styles.wrapperBtn}>
                    <Button>{isSaving ? (
                        <div className="flex gap-3 items-center content-center">
                            <span>Saving...</span>
                            <SmallLoader/>
                        </div>
                    ) : ('Save new viewers')}</Button>
                </div>
            </form>
        </div>
    )
}
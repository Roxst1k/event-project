'use client'

import styles from './newEvent.module.css';
import Button from "@/app/components/button/button";
import {useRouter} from "next/navigation";
import {addNewEvent} from "@/services/api";
import {useEffect, useState} from "react";
import SmallLoader from "@/app/components/loaders/smallLoader"
import BigLoader from "@/app/components/loaders/bigLoader";


export default function NewEventPage() {
    // await new Promise(resolve => setTimeout(resolve, 3000));
    const [isLoading, setIsLoading] = useState(true);
    const [isSaving, setIsSaving] = useState(false);
    const router = useRouter();

    useEffect(() => {
        setIsLoading(false)
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const title = formData.get("title");
        const description = formData.get("description");


        try {
            await addNewEvent(title, description);
            router.push("/");
            router.refresh()
        } catch (err) {
            console.log('Error:', err);
        } finally {
            setIsSaving(true)
        }
    }

    const closeForm = () => {
        router.push('/');
    }

    if(isLoading) return(<BigLoader/>)


    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <div className={styles.formHeader}>
                    <h2 className={styles.formTitle}>Add new event</h2>
                    <Button size='small' handler={closeForm}>◄ Back</Button>
                </div>
                <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
                    <label className={styles.formLabel}>
                        Your title
                        <input
                            type="text"
                            className={styles.formInput}
                            placeholder="Your title"
                            name="title"
                        />
                    </label>
                    <label className={styles.formLabel}>
                        Description
                        <textarea
                            className={styles.formInput}
                            rows="4"
                            cols="50"
                            placeholder="Enter your description"
                            name="description"
                            maxLength={150}
                        />
                    </label>
                    <Button
                        type="submit"
                    >
                        {isSaving ? (
                            <div className="flex justify-center items-center gap-2">
                                <span>Saving...</span>
                                <SmallLoader/>
                            </div>
                            ) : 'Add new (event)'}
                    </Button>
                </form>
            </div>
        </div>
    )
}
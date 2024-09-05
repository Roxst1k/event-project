'use client';

import styles from "@/app/(event)/[eventId]/edit/editPage.module.css";
import Button from "@/app/components/button/button";
import {getEventByID} from "@/services/api";
import {useEffect, useRef, useState} from "react";
import BigLoader from "@/app/components/loaders/bigLoader";
import {updateEventByID} from "@/services/api"
import {useRouter} from "next/navigation";

export default function EditPage({params}) {
    const {eventId} = params;
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [views, setViews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const inputRef = useRef(null)
    const router = useRouter();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const {title, description, views} = await getEventByID(eventId);
                setTitle(title);
                setDescription(description);
                setViews(views);
                setIsLoading(false)
                if (inputRef.current) {
                    inputRef.current.focus();
                }
            } catch (e) {
                console.log(e)
            }
        }

        fetchData()

    }, [])


    const handleChange = (e) => {
        if (e.target.name === 'title') {
            setTitle(e.target.value)
        } else if (e.target.name === 'description') {
            setDescription(e.target.value)
        }
    }

    const saveChange = async (e) => {
        e.preventDefault()

        try {
            await updateEventByID(eventId, title, description);
        } catch (err) {
            console.error("Update error:", err);
        }

        router.push(`/${eventId}`)
        router.refresh();
    }


    if (isLoading) return <BigLoader/>


    return (

        <div className={styles.wrapper}>
            <h1 className={styles.title}>Edit your event:</h1>
            <form onSubmit={(e) => saveChange(e)}>
                <input
                    type="text"
                    placeholder="New title"
                    className={styles.input}
                    ref={inputRef}
                    value={title}
                    name={'title'}
                    onChange={(e) => handleChange(e)}
                />
                <textarea
                    rows="4"
                    cols="50"
                    placeholder="New description"
                    name="description"
                    maxLength={150}
                    className={styles.input}
                    value={description}
                    onChange={(e) => handleChange(e)}
                />
                <div className={styles.saveButton}>
                    <Button>Save your change 💾</Button>
                </div>
                <h2 className={styles.title}>Viewers:</h2>
                <div className={styles.viewsWrapper}>
                    {views.length > 0 ? (
                        views.map((view) => (
                            <div key={view._id} className={styles.view}>
                                <p className={styles.name}>{view.name}</p>
                                <p className={styles.name}>{view.lastName}</p>
                                <p>{view.email}</p>
                            </div>
                        ))
                    ) : <p className={styles.description}>No viewers yet...</p>}
                </div>
            </form>
        </div>
    )

}
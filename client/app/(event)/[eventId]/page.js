import {getEventByID} from "@/services/api";
import styles from "./eventPage.module.css";
import Link from "next/link";
import Button from "@/app/components/button/button";

export default async function eventPage({params}) {
    const id = params.eventId;

    const {title, description, views} = await getEventByID(id)


    return (
        <div className={styles.wrapper}>
            <Link href={`/${id}/edit`} passHref className={styles.edit}>
                <Button>&#9997;</Button>
            </Link>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.description}>{description}</p>
            <h2 className={styles.title}>Views:</h2>
            <div className={styles.viewsWrapper}>
                {views.length > 0 ? (
                    views.map((view) => (
                            <div key={view._id} className={styles.view}>
                                <p className={styles.name}>{view.name}</p>
                                <p className={styles.name}>{view.lastName}</p>
                                <p>{view.email}</p>
                            </div>
                        ))
                ): <p className={styles.description}>No views yet...</p>}
            </div>
        </div>
    )
}
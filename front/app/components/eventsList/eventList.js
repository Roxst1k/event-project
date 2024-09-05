import React from 'react';
import styles from "./eventList.module.css";
import EventCard from "@/app/components/eventCard/eventCard";
import {getAllEvents} from "@/services/api";

const EventList = async ({showModal}) => {
    const events = await getAllEvents();

    return (
        <div className={styles.container}>
            {events.length > 0 ? (
                <div>
                    <ul className={styles.cardsWrapper}>
                        {events.map((event) => (
                            <li key={event._id} className={styles.li}>
                                <EventCard
                                    event={event}
                                    id={event._id}
                                    showModal={showModal}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            ) : null}

        </div>
    );
};

export default EventList;
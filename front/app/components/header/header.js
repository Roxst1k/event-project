import React from 'react';
import styles from "./header.module.css";
import Button from "@/app/components/button/button";
import Link from "next/link";



const Header = () => {
    return (
        <header className={styles.eventsHeader}>
            <Link href={'/'}>
                <h1 className={styles.eventsTitle}>Events</h1>
            </Link>
            <Link href={'./new-event'} passHref>
                <Button>New event &#128235;</Button>
            </Link>
        </header>
    );
};

export default Header;
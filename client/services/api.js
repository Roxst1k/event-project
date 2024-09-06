import {unstable_noStore as noStore} from "next/dist/server/web/spec-extension/unstable-no-store";


export const getAllEvents = async () => {
    noStore()
    const response = await fetch('https://event-project-app.vercel.app/events', );
    if (!response.ok) throw new Error('Error fetching posts');
    return await response.json();
}


export const getEventByID = async (id) => {
    noStore()
    try {
        const response = await fetch(`https://event-project-app.vercel.app/events/${id}`);
        if (!response.ok) {
            throw new Error('Error deleting (event)');
        }

        return await response.json();
    } catch (error) {
        console.error('Error:', error);
    }
}


export const deleteEventByID = async (id) => {
    try {
        const response = await fetch(`https://event-project-app.vercel.app/events/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({id}),
        }, );


        if (!response.ok) {
            throw new Error('Error deleting (event)');
        }

        const data = await response.json();
        // console.log('Event deleted:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

export const updateEventByID = async (id, title, description) => {
    noStore()
    try {
        const response = await fetch(`https://event-project-app.vercel.app/events/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    title,
                    description
                }
            ),
        })

        if (!response.ok) {
            throw new Error('Error deleting (event)');
        }

        const data = await response.json();
        // console.log('Event updated:', data);

    } catch (e) {
        console.log( e)
    }
}

export const addNewEvent = async (title, description) => {
    try {
        const response = await fetch('https://event-project-app.vercel.app/events', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title,
                description,
            }),
        });

        const data = await response.json();
        // console.log(data);
    } catch (err) {
        console.log(err)
    }
}


export const updateViewersEventByID = async (id, name, lastName, email) => {
    noStore()
    try {
        const response = await fetch(`https://event-project-app.vercel.app/events/${id}/viewers`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    name,
                    lastName,
                    email
                }
            ),
        })

        if (!response.ok) {
            throw new Error('Error deleting (event)');
        }

        const data = await response.json();
        // console.log('Add viewers:', data);


    } catch (e) {
        console.log( e)
    }
}
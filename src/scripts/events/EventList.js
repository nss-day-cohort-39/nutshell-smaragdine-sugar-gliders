/* This file was written by Parker. This file renders the list of Events to the DOM*/

import { useEvents, deleteEvent } from "./eventsProvider.js"
import { EventHTML } from "./Event.js"

const eventHub = document.querySelector('#container')
const contentTarget = document.querySelector('.eventsContainer')

const render = () => {
    const events = useEvents()

    const eventHTML = events.map(event => EventHTML(event)).join("")
    return eventHTML
}

export const EventsList = () => {
    contentTarget.innerHTML = `
    ${render()}
    <button id="addEvent">Add Event</button>
    `
}

contentTarget.addEventListener("click", event => {
    if(event.target.id === "addEvent") {
        const showEventForm = new CustomEvent ("addEventButtonClicked")
        eventHub.dispatchEvent(showEventForm)
    }
})

contentTarget.addEventListener("click", event => {
    if(event.target.id.includes("deleteEvent--")) {
        const eventToDelte = parseInt(event.target.id.split('--')[1])

        deleteEvent(eventToDelte)
    }
})

eventHub.addEventListener("eventStateChanged", event => {
    EventsList()
})
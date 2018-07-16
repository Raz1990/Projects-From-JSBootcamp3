import {delay} from "./helpers";

const baseUrl = 'http://localhost:4000';

export async function getAllContacts(): Promise<Contact[]> {
    return get('/users');
}

function get(url) {
    return fetch(baseUrl + url)
        .then(res => res.json());
}

export async function updateContact(contact: Contact) {
    await delay(2500);
    // throw new Error(`Contact ${contact.id} does not exist`);
}

export interface Contact {
    id: number;
    name: string;
}

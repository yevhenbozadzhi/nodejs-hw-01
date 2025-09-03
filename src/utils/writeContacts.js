
import { PATH_DB } from '../constants/contacts.js';
import { readContacts } from './readContacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    const data = await readContacts();
    const transformData = [...data, ...updatedContacts];
    await fs.writeFile(PATH_DB, JSON.stringify(transformData, null, 2), { encoding: 'utf-8' });
};
writeContacts().catch(error => console.error(error));
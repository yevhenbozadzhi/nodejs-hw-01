
import { PATH_DB } from '../constants/contacts.js';
import fs from 'node:fs/promises';

export const writeContacts = async (updatedContacts) => {
    
    try {
        await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), { encoding: 'utf-8' });
        console.log("Done");
    }
       catch (error) {
        console.error("error", error);
    }
};
   
writeContacts().catch(error => console.error(error));
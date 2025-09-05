import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';


const generateContacts = async (number) => {
    try {
        const oldContacts = await readContacts();
        const newContacts = Array.from({ length: number }, () => createFakeContact());
        const allContacts = [...oldContacts, ...newContacts];
        await writeContacts(allContacts);
        console.log(`${number}, done!`);
    }
    catch (error) {
        console.error("Error, mb you should check something :3", error);
    }
   
};

generateContacts(5);

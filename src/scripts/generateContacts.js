import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';


const generateContacts = async (number) => {
    try {
    const newContacts = Array.from({ length: number }, () => createFakeContact());
        await writeContacts(newContacts);
        console.log(`${number}, done!`);
    }
    catch (error) {
        console.error("Error, mb you should check something :3", error);
    }
   
};

generateContacts(5);

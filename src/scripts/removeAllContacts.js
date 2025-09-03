import { writeContacts } from "../utils/writeContacts";

export const removeAllContacts = async () => {
    try {
     await writeContacts([]);
        console.log('deleted');
    }
    catch (error) {
        console.error("error", error);
    }
};

removeAllContacts();
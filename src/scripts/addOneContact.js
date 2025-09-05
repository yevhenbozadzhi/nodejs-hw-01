import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const oldContacts = await readContacts();
        const oneContact = createFakeContact();
        const addOneContact = [...oldContacts, oneContact];
        await writeContacts(addOneContact);
        console.log("new one contact added", oneContact);

  }
    catch (error) {
        console.error("error", error);
}
};

addOneContact();

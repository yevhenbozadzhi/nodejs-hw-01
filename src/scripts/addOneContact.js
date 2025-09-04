import { createFakeContact } from "../utils/createFakeContact.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const oneContact = createFakeContact();
        await writeContacts(oneContact);
        console.log("new one contact added", oneContact);

  }
    catch (error) {
        console.error("error", error);
}
};

addOneContact();

import { createFakeContact } from "../utils/createFakeContact.js";
import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";

export const addOneContact = async () => {
    try {
        const data = await readContacts();
        const oneContact = createFakeContact();
        const updatedContacts = [...data, ...oneContact];
        await writeContacts(updatedContacts);
        console.log("new one contact added", oneContact);

  }
    catch (error) {
        console.error("error", error);
}
};

addOneContact();

import { readContacts } from "../utils/readContacts";

export const getAllContacts = async () => {
    try {
        const data = await readContacts();
        console.log("all contacts", data);
        return data;
    }
    catch (error) {
        console.error("Some error", error);
        
    }
};

console.log(await getAllContacts());

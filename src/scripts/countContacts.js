import { readContacts } from "../utils/readContacts";

export const countContacts = async () => {
    try {
        const data = await readContacts();
        return data.length;
    }
    catch (error) {
        console.error("Some error", error);
        
    }
};

console.log(await countContacts());

const fs = require('fs').promises;
const path = require('path');
const uuid = require('uuid');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

async function listContacts() {
    const dataString = await fs.readFile(contactsPath, 'utf8');
    const data = JSON.parse(dataString);
    return (data);
}

async function getContactById(contactId) {
    const type = (typeof contactId)
    const allContacts = await listContacts();
    allContacts.map(contact => {
        const typeId = typeof contact.id
        if(typeId !== type){
            contactId = String(contactId)
        }
    });
    const contact = allContacts.find(contact => contact.id === contactId)
    return contact ? contact : null;
}

async function addContact(name, email, phone) {
    const newContact = {
        id: uuid.v4(),
        name: name,
        email: email,
        phone: phone,
    }
    const allContacts = await listContacts();
    allContacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts));
    console.log(allContacts)
}

async function removeContact(contactId) {
    const type = (typeof contactId)
    const allNewContacts = await listContacts();
    const contactIndexType = allNewContacts.find(contact => {
        contact.id
        const typeId = typeof contact.id
        if(typeId !== type){
            contactId = String(contactId)
        }
    });

    const contactIndex = allNewContacts.findIndex(contact => contact.id === contactId);
    if (contactIndex !== -1) { 
        allNewContacts.splice(contactIndex,1)
        await fs.writeFile(contactsPath, JSON.stringify(allNewContacts));
    }    
    console.log(allNewContacts)
}



module.exports = {
    listContacts, getContactById, addContact, removeContact
}

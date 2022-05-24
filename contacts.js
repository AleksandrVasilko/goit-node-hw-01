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
    console.log(contactId)
    const allContacts = await listContacts();
    const contact = allContacts.find(contact => contact.id === contactId);
    console.log(contact)
    return contact ? contact : null;
}


async function removeContact(contactId) {
    const allNewContacts = await listContacts();
    const dataString = await fs.readFile(contactsPath, 'utf8');
    const data = JSON.parse(dataString);
    const idRemove = data.map(el => el.id)
    const indexDel = idRemove.indexOf(contactId)
    console.log(indexDel)
    if (indexDel !== -1) { 
        allNewContacts.splice(indexDel, 1)
    }
    console.log(data);
    await fs.writeFile(contactsPath, JSON.stringify(allNewContacts));
}

async function addContact(name, email, phone) {
    const newContact = {
        id: uuid(),
        name: name,
        email: email,
        phone: phone,
    }
    const allContacts = await listContacts();
    allContacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(allContacts));
}

module.exports = {
    listContacts, getContactById, removeContact, addContact
}

//getContactById("5");
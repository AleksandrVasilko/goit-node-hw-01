const operations = require('./contacts');
const argv = require("yargs").argv;

// TODO: рефакторить
const  invokeAction = async({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      // ...
          const data = await operations.getAll()
        console.log('getAll', data)
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}


invokeAction(argv);

/*
const invoke = async ({ action, contactId, name, email, phone }) => { 
switch (action) { 
        
    case 'listContacts':
        const data = await operations.getAll()
        console.log('getAll', data)
    break;
        
    case 'getContactById':
        const contact = await operations.getContactById(contactId);
        console.log('getContactById', contact);
    break;
        
    case 'addContact':
        await operations.addContact(name, email, phone);
    break;
        
    case 'removeContact':
        await operations.removeContact(contactId);
        break;
    default:
        console.log('I do not know')
    }
}

invoke({
    action: 'addContact',
    name: "Vasya",
    email: "fdsf@vdvd",
    phone: '5456465'
    
});


invoke({
    action: 'getContactById',
    contactId: "5"   
});

invoke({
    action: 'removeContact',
    contactId: "1"  
});

*/
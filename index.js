const cntMetod = require("./contacts");
const { program } = require("commander");

program
  .option("-a, --action <type>")
  .option("-i, --id <type>")
  .option("-n, --name <type>")
  .option("-e, --email <type>")
  .option("-p, --phone <type>");

program.parse();
const options = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "read":
      const allContacts = await cntMetod.listContacts();
      return console.log(allContacts);
    case "get":
      const contact = await cntMetod.getContactById(id);
      return console.log(contact);
    case "add":
      const newContact = await cntMetod.addContact(name, email, phone);
      return console.log(newContact);
    case "remove":
      const removedContact = await cntMetod.removeContact(id);
      return console.log(removedContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(options);

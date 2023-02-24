const fs = require("fs").promises;
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "/db/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath);
  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const data = await listContacts();
  const result = data.find((contact) => contact.id === contactId);
  return result || null;
};

const addContact = async (newContact) => {
  const data = await listContacts();
  const contact = {
    id: nanoid(),
    ...newContact,
  };
  data.push(contact);
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return contact;
};

const removeContact = async (contactId) => {
  const data = await listContacts();
  const idx = data.findIndex((contact) => contact.id === contactId);
  if (idx === -1) {
    return null;
  }
  const [result] = data.splice(idx, 1);
  await fs.writeFile(contactsPath, JSON.stringify(data, null, 2));
  return result;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};


const Bank = require('../schemas/contacts')

class ContactsRepository {
  constructor() {
    this.model = Bank
  }

  async listContacts() {
   
    const result = await this.model.find()
    
    return result
  }

  async getContactById(id) {
    const result = await this.model.findOne({ _id: id})
  
    return result
  }

  async addContact(body) {
    const newContact = await this.model.create({ ...body})

    return newContact
  }

  async updateContact( id, body) {
    const updatedClient = await this.model.findByIdAndUpdate(
      { _id: id},
      { ...body },
      { new: true }
    )
    return updatedClient
  }

  async removeContact(id) {
    const removedClient = await this.model.findByIdAndRemove({ _id: id },
    )
    return removedClient
  }

  // async updateStatusContact(userId, id, body) {
  //   const updatedClient = await this.model.findByIdAndUpdate({ _id: id, owner: userId },
  //     { ...body },
  //     { new: true }
  //   )
  //   return updatedClient
  // }
}

module.exports = ContactsRepository

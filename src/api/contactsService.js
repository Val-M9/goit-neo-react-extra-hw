import axios from 'axios'

class ContactsService {
  #api
  constructor() {
    this.#api = axios.create({
      baseURL: 'https://6831ed17c3f2222a8cb0e21a.mockapi.io/',
    })
  }

  async getContacts() {
    const response = await this.#api.get('contacts')
    return response.data
  }

  async createContact(newContact) {
    const response = await this.#api.post('contacts', newContact)
    return response.data
  }

  async deleteContact(contactId) {
    const response = await this.#api.delete(`contacts/${contactId}`)
    return response.data
  }
}

export const contactsService = new ContactsService()

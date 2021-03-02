const {Schema, model } = require('mongoose')

const Affiliatechema = new Schema({
    affiliateName: { type: String, required: true,},
    cpf: { type: String, required: true }, 
    rg: { type: String, required: true }, 
    email: { type: String, required: true }, 
    yearEntered: { type: Number, required: true }, 
    birthdate: { type: Date, required: true }, 
    address: { type: String, required: true }, 
    addressComplement: { type: String, required: true }, 
    district: { type: String, required: true }, 
    city: { type: String, required: true }, 
    phoneNumber: { type: String, required: true }, 
    whatsappNumber: { type: String }, 
    dadOrMom: { type: String, required: true }, 
    axeTempleName: { type: String, required: true }, 
    observation: { type: String, required: true }, 
    contactName: { type: String }, 
    contactNumber: { type: String }, 

    maritalStatusId: { type: Number, required: true }, 
    maritalStatus: { type: String, required: true },
    
    affiliateTypeId: { type: Number, required: true }, 
    affiliateType: { type: String, required: true },
    
    priestlyHierarchyId: { type: Number, required: true }, 
    priestlyHierarchy: { type: String, required: true },

    userId: { type: String, required: true },
    
    createdAt: { type: Date,  default: Date.now }
})

module.exports = model('Affiliate', Affiliatechema)
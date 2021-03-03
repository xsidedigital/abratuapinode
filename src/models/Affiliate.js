const {Schema, model } = require('mongoose')

const Affiliatechema = new Schema({
    affiliateName: { type: String},
    cpf: { type: String }, 
    cnpj: { type: String }, 
    rg: { type: String }, 
    email: { type: String }, 
    cep: { type: String }, 
    yearEntered: { type: String }, 
    birthdate: { type: String }, 
    registerDate: { type: String }, 
    address: { type: String }, 
    addressComplement: { type: String }, 
    addressHouseBorn: { type: String }, 
    addressTemple: { type: String }, 
    district: { type: String }, 
    muchTime: { type: String }, 
    city: { type: String }, 
    phoneNumber: { type: String }, 
    whatsappNumber: { type: String }, 
    openHouse: { type: String }, 
    whatsappNumber: { type: String }, 
    dadOrMom: { type: String }, 
    dadOrMomPhone: { type: String }, 
    axeTempleName: { type: String }, 
    observation: { type: String }, 
    contactName: { type: String }, 
    state: { type: String }, 
    voterRegistration: { type: String }, 
    contactNumber: { type: String }, 
    whichNationId: { type: String }, 

    maritalStatusId: { type: String}, 
    religiosityId: { type: String}, 
    regularized: { type: String}, 
    maritalStatus: { type: String },
    
    affiliateTypeId: { type: String}, 
    affiliateType: { type: String },
    
    priestlyHierarchyId: { type: String }, 
    priestlyHierarchy: { type: String},

    userId: { type: String },
    
    createdAt: { type: Date,  default: Date.now }
})

module.exports = model('Affiliate', Affiliatechema)
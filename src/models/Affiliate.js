const {Schema, model } = require('mongoose')

const Affiliatechema = new Schema({



    
    affiliateName: { type: String, required: true,},
    cpf: { type: String, required: true }, 
    cnpj: { type: String, required: true }, 
    rg: { type: String, required: true }, 
    email: { type: String, required: true }, 
    cep: { type: String, required: true }, 
    yearEntered: { type: Number, required: true }, 
    birthdate: { type: Date, required: true }, 
    registerDate: { type: Date, required: true }, 
    address: { type: String, required: true }, 
    addressComplement: { type: String }, 
    addressHouseBorn: { type: String, required: true }, 
    addressTemple: { type: String, required: true }, 
    district: { type: String, required: true }, 
    muchTime: { type: String, required: true }, 
    city: { type: String, required: true }, 
    phoneNumber: { type: String, required: true }, 
    whatsappNumber: { type: String, required: true }, 
    openHouse: { type: String, required: true }, 
    whatsappNumber: { type: String }, 
    dadOrMom: { type: String, required: true }, 
    dadOrMomPhone: { type: String, required: true }, 
    axeTempleName: { type: String, required: true }, 
    observation: { type: String, required: true }, 
    contactName: { type: String }, 
    state: { type: String }, 
    voterRegistration: { type: String }, 
    contactNumber: { type: String }, 
    whichNationId: { type: String }, 

    maritalStatusId: { type: Number}, 
    religiosityId: { type: Number}, 
    regularized: { type: Number}, 
    maritalStatus: { type: String, required: true },
    
    affiliateTypeId: { type: Number}, 
    affiliateType: { type: String },
    
    priestlyHierarchyId: { type: Number, required: true }, 
    priestlyHierarchy: { type: String},

    userId: { type: String, required: true },
    
    createdAt: { type: Date,  default: Date.now }
})

module.exports = model('Affiliate', Affiliatechema)
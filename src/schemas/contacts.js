
const mongoose = require('mongoose')
const { Schema, SchemaTypes, model } = mongoose


const bankSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Bank name is required'],
      min: 1,
      max: 24,
    },
    interestRate: {
      type: Number,
      required: [true, 'Interest rate is required'],
    },
    maxLoan: {
      type: Number,
      required: [true, 'Maximum Loan is required'],
      
    },
    minDownPay: {
      type: Number,
      required: [true, 'Minimum down payment is required'],
    },
    loanTerm: {
      type: Number,
      required: [true, 'Loan term is required'],
    }
  },
  { versionKey: false, timestamps: true }
)


const Bank = model('bank', bankSchema)

module.exports = Bank

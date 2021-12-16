import dotenv from 'dotenv';
dotenv.config();

//  Env variables
export const PORT = process.env.PORT || 5000;

export const PDF_DUMMY_DATA = {
  primaryColor: '#4a7f9e',
  companyLogo: 'http://myqcab.com/img/logo.svg',
  companyData: {
    companyName: '[COMPANY NAME]',
    salesPersonName: '[SALESPERSON NAME]',
    companyAddress1: '[COMPANY ADDRESS LINE 1]',
    companyAddress2: '[COMPANY ADDRESS LINE 2]',
    companyAddress3: '[COMPANY ADDRESS LINE 3]',
    date: '[DATE]',
    configurationName: '[CONFIGURATION NAME]',
    poNumber: '[PO NUMBER]',
  },
  metadata: {
    projectName: 'New Elevator',
    orderNumber: '12345678',
  },
  heading: 'New Elevator',
  userData: {
    name: 'Bob Oasis',
    address: '123 Metcalf St - Apt 421, Ottawa ON',
    contact: 'Alice',
    phone: '(613) 555-1234',
    email: 'boasis@email.com',
  },
  table: [
    {
      description: 'Item 1',
      quantity: 1,
      price: 200,
    },
    {
      description: 'Item 2',
      quantity: 4,
      price: 100,
    },
    {
      description: 'Item 3',
      quantity: 1,
      price: 400,
    },
  ],
};

export const THREEKIT_CONFIG = {
  TEMPLATE_ID: 21921196,
  ATTACHMENT_NAME: 'MSA PDF.pdf',
  THREEKIT_ENV: process.env.THREEKIT_ENV || 'https://preview.threekit.com',
  THREEKIT_AUTH_TOKEN:
    process.env.THREEKIT_AUTH_TOKEN || 'e8d26c36-e722-41ef-917b-bab77f0cea99',
  THREEKIT_ORG_ID:
    process.env.REACT_APP_ORG_ID || 'eb6756f4-8c6e-417b-8926-8ad4b1ed6895',
  THREEKIT_ASSET_ID: '6b7bdb94-44eb-4713-b192-91c78c2dd967',
};

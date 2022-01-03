//const authToken =
//  process.env.REACT_APP_PUBLIC_TOKEN || 'e8d26c36-e722-41ef-917b-bab77f0cea99';
const orgId =
  process.env.REACT_APP_ORG_ID || 'eb6756f4-8c6e-417b-8926-8ad4b1ed6895';

export default {
  // Admin
  // authToken: '9378a658-b95f-4acc-a715-75cbcd535b04',
  // Staging
  // authToken: 'f026609b-7611-4a0a-aae0-8f36e3208393',
  // Local
  
  authToken: window.location.hostname == 'msasafety' ? 'dd4c07cd-f7e0-4668-b52d-e9f54b3decb2' : 'e8d26c36-e722-41ef-917b-bab77f0cea99',
  assetId: '6b7bdb94-44eb-4713-b192-91c78c2dd967',
  orgId,
};

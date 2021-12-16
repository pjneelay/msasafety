import axios from 'axios';

const HOST = process.env.REACT_APP_BASE_URL || 'http://localhost:5000';

export const pdfService = async (pdfJson, snapshotModel, gearSelected) => {
  await axios
    .post(`${HOST}/pdf/MSA/3/`, {
      pdfJson: JSON.stringify(pdfJson),
      snapshotModel,
      gearSelected,
    })
    .then((res) => {
      return true;
    })
    .catch((error) => {
      return false;
    });
};

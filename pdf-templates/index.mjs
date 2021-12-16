import { getTemplate, generateHtml, htmlToPdf } from './utils.mjs';
import { sendPostmarkRequest, snapshot } from './../server/utils.mjs';
const templates = ['template1', 'template2', 'template3'];

export default (data, templateIdx = 0, pdfJson = null, snapshotModel = null, gearSelected = null) => {
  return new Promise(async resolve => {
    const htmlTemplate = await getTemplate(templates[templateIdx]);
    const html = generateHtml(data, htmlTemplate, pdfJson, snapshotModel, gearSelected);
    const pdf = await htmlToPdf(html);

    await sendPostmarkRequest(
      {name:pdfJson.firstName + ' '+ pdfJson.lastName , email:pdfJson.recipientEmail},
      pdf.toString('base64')
      );
    
    resolve(pdf);
  });
};

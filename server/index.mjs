import express from 'express';
import cors from 'cors';
import path from 'path';
import morgan from 'morgan';
import multer from 'multer';
import bodyParser from 'body-parser';
import { PORT, PDF_DUMMY_DATA } from './constants.mjs';

import generatePdf from '../pdf-templates/index.mjs';

// import {
//   populateTemplate,
//   htmlToPdf,
//   sendPostmarkRequest,
//   savePdf,
//   saveOrderToThreekit,
// } from './utils.mjs';

const app = express();
const upload = multer();

const __dirname = path.dirname(new URL(import.meta.url).pathname);
app.use(morgan('tiny'));
app.use(cors());
app.use(express.static(path.join(__dirname, '../build')));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(
  bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
    parameterLimit: 50000,
  })
);

app.get('/pdf', async (req, res) => {
  const html = await generatePdf(PDF_DUMMY_DATA, 0);
  res.set({
    // 'Content-Disposition': 'attachment;filename=elevator-configurator.pdf',
    'Content-type': 'application/pdf',
  });
  res.end(html);
});

app.get('/pdf/:id', async (req, res) => {
  const html = await generatePdf(
    PDF_DUMMY_DATA,
    parseInt(req.params.id) ? parseInt(req.params.id) - 1 : 0
  );
  res.set({
    // 'Content-Disposition': 'attachment;filename=elevator-configurator.pdf',
    'Content-type': 'application/pdf',
  });
  res.end(html);
});

app.get('/pdf/MSA/:id', async (req, res) => {
  let pdfJson = JSON.parse(req.query.pdfJson);
  let snapshotAthletix = req.query.snapshotAthletix;

  const html = await generatePdf(
    PDF_DUMMY_DATA,
    parseInt(req.params.id) ? parseInt(req.params.id) - 1 : 0,
    pdfJson,
    snapshotAthletix
  );
  res.set({
    // 'Content-Disposition': 'attachment;filename=elevator-configurator.pdf',
    'Content-type': 'application/pdf',
  });
  res.end(html);
});

app.post('/pdf/MSA/:id', async (req, res) => {
  let pdfJson = JSON.parse(req.body.pdfJson);
  let snapshotModel = req.body.snapshotModel;
  let gearSelected = req.body.gearSelected;

  const html = await generatePdf(
    PDF_DUMMY_DATA,
    parseInt(req.params.id) ? parseInt(req.params.id) - 1 : 0,
    pdfJson,
    snapshotModel,
    gearSelected
  );
  res.set({
    // 'Content-Disposition': 'attachment;filename=elevator-configurator.pdf',
    'Content-type': 'application/pdf',
  });
  res.end(html);
  // res.send(true);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// app.post('/pdf', upload.single('thumbnail'), async (req, res) => {
// const { thumbnail, storeName } = req.body;
// const userData = JSON.parse(req.body.userData);
// const configuration = JSON.parse(req.body.configuration);
// const uiConfiguration = JSON.parse(req.body.uiConfiguration);

//   // if (!configuration || Object.keys(configuration).length === 0)
//   //   return res.status(422).send();

//   const htmlTemplate = fs.readFileSync(
//     path.join(__dirname, './templates', 'pdf.html'),
//     'utf8'
//   );

//   const tableTemplate = fs.readFileSync(
//     path.join(__dirname, './templates', 'table-row.html'),
//     'utf8'
//   );

//   const html = populateTemplate(
//     { ...userData, thumbnail, configuration: uiConfiguration },
//     htmlTemplate,
//     tableTemplate
//   );
//   const pdfData = await htmlToPdf(html);

//   res.send(true);

//   const pdfUrl = await savePdf(pdfData);
//   await saveOrderToThreekit({ ...userData, pdfUrl }, configuration, storeName);
// });

app.listen(PORT, () => console.log('listening on port: ', PORT));

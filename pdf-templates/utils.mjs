import fs from 'fs';
import path from 'path';
import puppeteer from 'puppeteer';
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// const __dirname = 'D:/WORK/ThreeKit/implementation-services/pdf-templates';
let gearTitle = '';
let existGearTitle = [];

export const getTemplate = templateId => {
  return new Promise(resolve => {
    if (!templateId) reject();
    const html = fs.readFileSync(
      path.join(__dirname, `/${templateId}`, 'pdf.html'),
      'utf8'
    );

    resolve(html);
  });
};

const generateItems = itemType => content => {
  const generateItem = val =>
    Array.isArray(val)
      ? `<div class="${itemType}-object-item"><div>${val[0]}</div><div>${val[1]}</div></div>`
      : `<div class="${itemType}-array-item">${val}</div>`;

  return Array.isArray(content)
    ? content.reduce((output, item) => {
      output += generateItem(item);
      return output;
    }, '')
    : Object.entries(content).reduce((output, item) => {
      output += generateItem(item);
      return output;
    }, '');
};


const generateCompanySection = data => {
  let f = new Date();
  if (!data) return new Error('missing  data');
  let companySection = `<div class="data-block">
  <p><label>QUOTED BY:</label><span>${data.companyName}</span></p>
  <p><label>PREPARED BY:</label><span>${data.firstName + ' ' + data.lastName}</span></p>
  <p>
    <label>ADDRESS:</label>
    <span class="group-data">
      <span>${data.streetAddress}</span>
      <span>${''}</span>
      <span>${''}</span>
    </span>
  </p>
  <p><label>DATE:</label><span>${((f.getMonth() + 1) + "/" + f.getDate() + "/" + f.getFullYear())}</span></p>
  <p><label>CONFIGURATION NAME:</label><span>${''}</span></p>
  <p><label>PO NUMBER:</label><span>${data.poNumber}</span></p>
</div>`;

  return companySection;
};

const generateProductNumberSection = data => {
  if (!data) return new Error('missing  data');
  let finalStructure = ``;
  const contentCompanySection = (product, quantity) =>
    `<div class="data-block">
  <p><label>PRODUCT:</label><span>${product}</span></p>
  <p><label>QTY REQUESTED:</label><span>${quantity}</span></p>
</div>`;

  if (data.productQuantityJacket) {
    finalStructure += contentCompanySection(
      "Jacket",
      data.productQuantityJacket,
    )
  }
  if (data.productQuantityPants) {
    finalStructure += contentCompanySection(
      "Pants",
      data.productQuantityPants,
    )
  }

  return finalStructure;
};

const generateSpecificationSection = data => {
  if (!data) return new Error('missing  data');
  let finalStructure = ``;
  const contentSpecification = (group, number, type, description, gear) =>
    `${generateGearTitle(gear)}<div class="option-group">
    <div class="option-title"><b>${group}</b></div>
    <div class="option-data">
    <span class="option option-number">${number}</span>
      <span class="option option-type">${type}</span>
      <span class="option option-description">${description}</span>
    </div>
  </div>`;

  data.specifications.forEach(
    specification =>
    (finalStructure += contentSpecification(
      specification.optionGroup,
      specification.optionNumber,
      specification.optionType,
      specification.optionDescription,
      specification.gear
    ))
  );
  return finalStructure;
};

const generateGearTitle = item => {
  let finalStructure = ``;

  if (item !== null) {
    if (gearTitle === '') {
      finalStructure = `<div class="gear-title"><b>${ucword(item)}</b></div>`;

    } else if (item !== gearTitle) {
      finalStructure = `<div class="gear-title"><b>${ucword(item)}</b></div>`;

    }
    gearTitle = item.gear;
  }

  if (existGearTitle.length === 0) {
    existGearTitle.push({ gear: ucword(item) });
    return finalStructure;
  } else if (ifExistGearTitle(ucword(item)) === false) {
    existGearTitle.push({ gear: ucword(item) });
    return finalStructure;
  } else {
    return ``;
  }
};

const ifExistGearTitle = (gear) => {
  for (var i = 0; i < existGearTitle.length; i++) {
    if (existGearTitle[i].gear === gear) {
      return true;
    }
  }
  return false;
};

const ucword = (str) => {
  str = str.toLowerCase().replace(/(^([a-zA-Z\p{M}]))|([ -][a-zA-Z\p{M}])/g, function (replace_latter) {
    return replace_latter.toUpperCase();
  });  //Can use also /\b[a-z]/g
  return str;  //First letter capital in each word
}

const generateLetteringSection = data => {
  if (!data) return new Error('missing  data');
  let finalStructure = ``;
  const contentLettering = (description, value) =>
    `<div class="option-data">
  <span class="option option-number">${description}:</span>
  <span class="option option-type">${value}</span>
  </div>`;

  data.letterings.forEach(
    lettering =>
    (finalStructure += contentLettering(
      lettering.letteringGroup,
      lettering.letteringText,
    ))
  );
  return finalStructure;
};

const generateCompanyLogo = data => {
  let logo = `<img class="msa-logo" src="${data.logo}" alt="qcab"  width="200" />`;
  return logo;
};

const generateSnapshot = (data, gear) => {
  let snapshot = ``;
  if (gear === 'Athletix') {
    snapshot = `<img class="snapshotAthletix" src="${data.athletixfront}" alt="qcab" />`;
  }
  if (gear === 'Jacket') {
    snapshot = `<img class="snapshotAthletix" src="${data.front}" alt="qcab" />`;
  }
  if (gear === 'Pants') {
    snapshot = `<img class="snapshotAthletix" src="${data.front}" alt="qcab" />`;
  }
  // let snapshot = `<img class="snapshotAthletix" src="${data}" alt="qcab" />`;
  return snapshot;
};

const generateUserDataHtml = generateItems('user-data');
const generateCompanyDataHtml = generateItems('company-data');
const generateMetadataHtml = generateItems('metadata');

const generateTableHtml = rows => {
  if (!rows) return new Error('missing rows data');

  let tableHeader = `<table>
      <tr>
        <th>Description</th>
        <th style="text-align: center;">Price</th>
        <th style="text-align: center;">Quantity</th>
        <th style="text-align: center;">Total</th>
      </tr>`;
  let tableFooter = `</table>`;

  const generateTableRow = (description, price, quantity) => `<tr>
  <td>${description}</td>
  <td style="text-align: center;">$${price}</td>
  <td style="text-align: center;">${quantity}</td>
  <td style="text-align: center;">$${price * quantity}</td>
</tr>`;

  rows.forEach(
    row =>
    (tableHeader += generateTableRow(
      row.description,
      row.price,
      row.quantity
    ))
  );

  return tableHeader + tableFooter;
};

const generateContentImages = (rows, gear) => {
  if (!rows) return new Error('missing rows data');
  let imagesSection = ``;
  if (gear === 'Athletix') {
    imagesSection = `<div class="jacket-preview">
    <span class="head-4"> JACKET</span>
    <div class="image-group">
      <div class="jacket-front">
        <img class="snapshotAthletix" src="${rows.jacketFront}" alt="qcab" />
      </div>
      <div class="jacket-back">
      <img class="snapshotAthletix" src="${rows.jacketBack}" alt="qcab" />
      </div>
    </div>
  </div>
     <div class="pants-preview">
  <span class="head-5">PANTS</span>
  <div class="image-group">
    <div class="pants-front">
    <img class="snapshotAthletix" src="${rows.pantsFront}" alt="qcab" />
    </div>
    <div class="pants-back">
    <img class="snapshotAthletix" src="${rows.pantsBack}" alt="qcab" />
    </div>
  </div>
</div>`
  };

  if (gear === 'Jacket') {
    imagesSection = `<div class="jacket-preview">
    <span class="head-4"> JACKET</span>
    <div class="image-group">
      <div class="jacket-front">
        <img class="snapshotAthletix" src="${rows.front}" alt="qcab" />
      </div>
      <div class="jacket-back">
      <img class="snapshotAthletix" src="${rows.back}" alt="qcab" />
      </div>
    </div>
  </div>`
  }

  if (gear === 'Pants') {
    imagesSection = ` <div class="pants-preview">
    <span class="head-5">PANTS</span>
    <div class="image-group">
      <div class="pants-front">
      <img class="snapshotAthletix" src="${rows.front}" alt="qcab" />
      </div>
      <div class="pants-back">
      <img class="snapshotAthletix" src="${rows.back}" alt="qcab" />
      </div>
    </div>
  </div>`
  }

  return imagesSection;
}

export const generateHtml = (data, pageTemplate, pdfJson, snapshotModel, gearSelected) => {
  if (!data) new Error('data missing');
  let html = pageTemplate;
  const companyData = generateCompanyDataHtml(data.companyData);
  const metadata = generateMetadataHtml(data.metadata);
  const userData = generateUserDataHtml(data.userData);
  const table = generateTableHtml(data.table);
  const tableStyle = '<style></style>';
  const companySection = generateCompanySection(pdfJson);
  const companyProductNumberSection = generateProductNumberSection(pdfJson);
  const specificationSection = generateSpecificationSection(pdfJson);
  const letteringSection = generateLetteringSection(pdfJson);
  const companyLogo = generateCompanyLogo(pdfJson);
  const snapshot = generateSnapshot(snapshotModel, gearSelected);
  const contentImages = generateContentImages(snapshotModel, gearSelected);

  Object.entries({
    ...data,
    metadata,
    companyData,
    userData,
    table,
    tableStyle,
    companySection,
    companyProductNumberSection,
    specificationSection,
    letteringSection,
    companyLogo,
    snapshot,
    contentImages
  }).forEach(([key, val]) => {
    const re = new RegExp(`{{ ${key} }}`, 'g');
    html = html.replace(re, val);
  });
  return html;
};

export const htmlToPdf = htmlContent => {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
      const page = await browser.newPage();
      await page.setContent(htmlContent, { waitUntil: 'networkidle0' });
      await page.emulateMediaType('print');

      const byteArray = await page.pdf({
        format: 'A4',
        printBackground: true,
      });

      const buffer = Buffer.from(byteArray, 'binary');
      browser.close();
      resolve(buffer);
    } catch (err) {
      reject(err);
    }
  });
};

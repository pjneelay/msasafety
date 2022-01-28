import React from 'react';
import { Templates } from '../toolkit';

import templateData from '../Gxtremeconfig/template';
import sectionsData from '../Gxtremeconfig/sections';
import inputsData from '../Gxtremeconfig/inputs';
import threekitConfig from '../Gxtremeconfig/threekitConfig';

const GxtremeHome = () => {
    return (
      <Templates
        template={templateData}
        sections={sectionsData}
        inputs={inputsData}
        threekitConfig={threekitConfig}
      />
    );
  };
  
  export default GxtremeHome;
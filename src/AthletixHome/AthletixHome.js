import React from 'react';
import { Templates } from '../toolkit';

import templateData from '../Athletixconfig/template';
import sectionsData from '../Athletixconfig/sections';
import inputsData from '../Athletixconfig/inputs';
import threekitConfig from '../Athletixconfig/threekitConfig';

const AthletixHome = () => {
    return (
      <Templates
        template={templateData}
        sections={sectionsData}
        inputs={inputsData}
        threekitConfig={threekitConfig}
      />
    );
  };
  
  export default AthletixHome;
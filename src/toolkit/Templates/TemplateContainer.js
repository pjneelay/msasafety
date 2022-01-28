import React, { useState, useEffect } from 'react';
import {
  handleAddToCart,
  handleInputSelect,
} from '../../Athletixconfig/eventListeners';
import toolkit from '../toolkit';

const TemplateContainer = ({
  template: Template,
  title,
  subtitle,
  sections,
  inputs,
  threekitConfig,
}) => {
  const [controller, setController] = useState([]);
  const [configuration, setConfiguration] = useState(null);

  useEffect(() => {
    (() => {
      toolkit.player.initializePlayer({
        el: document.getElementById('player-root'),
        ...threekitConfig,
        onPreload: async () => {
          const templateData = await toolkit.template.prepTemplate(
            sections,
            inputs
          );

          setController(templateData);
        },
      });
    })();
  }, []);

  const handleSetAttribute = async (config) => {
    if (!localStorage.getItem('gearSelected')) {
      localStorage.setItem('gearSelected', 'Athletix');
    }

    if (
      config['GEAR_VISIBILITY'] &&
      localStorage.getItem('isClickEvent') === 'false'
    ) {
      config['GEAR_VISIBILITY'] =
        config['GEAR_VISIBILITY'].charAt(0).toUpperCase() +
        config['GEAR_VISIBILITY'].slice(1).split(' ')[0];
      if (
        config['GEAR_VISIBILITY'] === 'Athletix' ||
        config['GEAR_VISIBILITY'] === 'Summary'
      ) {
        config['GEAR_VISIBILITY'] = localStorage.getItem('gearSelected');
      }
    }

    await toolkit.player.setConfiguration(config);

    const updatedConfiguration = toolkit.player.getConfiguration();
    const updatedController = await toolkit.template.prepTemplate(
      sections,
      inputs
    );
    setConfiguration(updatedConfiguration);
    setController(updatedController);

    const configOutput = await toolkit.player.getConfigurationOutput();

    handleInputSelect(config, configOutput);
  };

  const addToCart = async () => {
    const configOutput = await toolkit.player.getConfigurationOutput();
    handleAddToCart(configOutput);
  };

  return (
    <Template
      title={title}
      subtitle={subtitle}
      controller={controller}
      configuration={configuration}
      handleSetAttribute={handleSetAttribute}
    />
  );
};

export default TemplateContainer;

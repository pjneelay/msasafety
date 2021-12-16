import { validate as isUuid } from 'uuid';

const compileAttributesData = async (metadataMap = {}) => {
  if (!window.threekitApi || !window.threekitApi.configurator)
    throw new Error('threekitApi not setup');
  const output = {};
  const attributes = window.threekitApi.configurator.getAttributes();
  await Promise.all(
    attributes.map(async (attr) => {
      if (!['Asset', 'String'].includes(attr.type)) return output;
      output[attr.name] = {
        type: attr.type,
        label: attr.name,
      };

      if (attr.type === 'String') {
        output[attr.name].values = attr.values.map((val) => ({
          id: val.toLowerCase().replace(' ', '-'),
          value: val,
          label: val,
        }));
      } else {
        output[attr.name].values = await Promise.all(
          attr.values.map(async (val) => {
            if (!val || !val.assetId) return;
            const opt = {
              id: val.name.toLowerCase().replace(' ', '-'),
              value: val.assetId,
              label: val.name,
            };

            const dependency = new RegExp(/^_dependency/);
            const re = new RegExp(/^_/);
            const sceneApi = window.threekitApi.api.scene;
            let node = sceneApi.get({ id: val.assetId });
            if (!node) {
              await sceneApi.fetch(val.assetId);
              node = sceneApi.get({ id: val.assetId });
            }
            node.configurator.metadata.forEach((metadata) => {
              if (
                dependency.test(metadata.name) &&
                JSON.parse(metadata.defaultValue)
              )
                opt.dependencies = opt.dependencies
                  ? opt.dependencies.push(JSON.parse(metadata.defaultValue))
                  : [JSON.parse(metadata.defaultValue)];
              else if (metadata.name in metadataMap)
                opt[metadataMap[metadata.name]] = metadata.defaultValue;
              else if (re.test(metadata.name))
                opt[metadata.name.substring(1, metadata.name.length)] =
                  metadata.defaultValue;
            });
            return opt;
          })
        );
      }
    })
  );
  return output;
};

export const getConfigurationOutput = async () => {
  if (!window.threekitApi) return;
  const configuration = window.threekitApi.configurator.getConfiguration();
  const attributes = await compileAttributesData();

  return Object.entries(configuration).reduce((output, [key, val]) => {
    if (!(key in attributes)) return output;

    const selected = attributes[key].values.find(
      (el) => (typeof val === 'object' ? val.assetId : val) === el.value
    );

    output[key] = {
      type: attributes[key].type,
      value: val,
      label: selected?.label,
      sku: selected?.sku,
    };
    return output;
  }, {});
};

/**
 * @desc To initialize the player we have to pass in an object
 *    with the the domain speicfic auth token, the assetId
 *    for the asset we're hoping to embed as well as the html
 *    div where the player is to be embedded.
 * @param object $initialSettings - object passed directly to threekitPlayer()
 * @return Promise - success or failure
 */
const initializePlayer = (initialSettings) => {
  return new Promise(async (resolve, reject) => {
    if (!window.threekitPlayer)
      reject('window.threekitPlayer object is missing threekitPlayer api');
    if (!initialSettings.authToken)
      reject('intialSettings object is missing the authToken');
    if (!initialSettings.assetId)
      reject('intialSettings object is missing the assetId');
    if (!initialSettings.orgId)
      reject('intialSettings object is missing the orgId');
    if (!initialSettings.el) reject('intialSettings object is missing the el');

    const threekitConfg = {
      el: initialSettings.el,
      authToken: initialSettings.authToken,
      assetId: initialSettings.assetId,
      orgId: initialSettings.orgId
    };

    const threekitApi = await window.threekitPlayer({
      //   authToken: '01234567-89ab-cdef-0123-456789abcdef',
      //   el: document.getElementById('player-root'),
      //   stageId: '27b9cd7e-2bb2-4a18-b788-160743eb4b33',
      //   assetId: 'e12a45f7-8b39-cd06-e12a-45f78b39cd06',
      //   showConfigurator: true,
      //   showAR: true,
      //   initialConfiguration: {},
      //   showShare: true,
      showLoadingThumbnail: true,
      ...threekitConfg,
    });

    if (!window.threekitPlayer) reject('Error initializing player');

    /***** API SETUP START ***************************************************************/
    //  Enables access to the threekit store api
    threekitApi.enableApi('store');

    //  Enables access to the threekit player api
    const player = threekitApi.enableApi('player');
    window.threekitApi = {
      api: threekitApi,
      player,
    };
    /***** API SETUP END *****************************************************************/

    /***** PLAYER TOOLS START ************************************************************/
    //  The functional interactions with the player can be removed
    //  either individually or as an array

    //  threekitApi.tools.removeTool('zoom');

    //  threekitApi.tools.removeTool(['pan', 'zoom']);
    /***** PLAYER TOOLS END **************************************************************/

    /***** PLAYER LIFECYCLE LISTENSERS START *********************************************/
    //  We add listeners to be triggered during the player's
    //  lifecycle events: PRELOADED, LOADED and RENDERED

    threekitApi.on(threekitApi.scene.PHASES.LOADED, async () => {
      //    Assigns default configurator to window object
      window.threekitApi.configurator = await threekitApi.getConfigurator();
      initialSettings.onPreload
        ? initialSettings.onPreload()
        : console.log('Player has preloaded data');
    });

    // threekitApi.on(threekitApi.scene.PHASES.LOADED, () => {
    //  initialSettings.onLoad ? initialSettings.onLoad() : console.log('Player has loaded all data');
    // });

    //  threekitApi.on(threekitApi.scene.PHASES.RENDERED, () => {
    //      initialSettings.onRender ? initialSettings.onRender() : console.log('Player has rendered the default asset')
    //  });
    /***** PLAYER LIFECYCLE LISTENSERS END ***********************************************/

    localStorage.setItem('menuSelected', 'materials-0');
    localStorage.setItem('gearSelected', 'Athletix');
    //document.getElementById('footerContainer').style.display = 'block';

    resolve(true);
  });
};

const setConfiguration = async (config) => {
  if (!config || !window.threekitApi) return;

  if (typeof config !== 'object') return;

  const updateConfig = Object.entries(config).reduce(
    (output, [attribute, value]) =>
      Object.assign(output, {
        [attribute]: isUuid(value) ? { assetId: value } : value,
      }),
    {}
  );

  let keys = Object.keys(config);
  if (!keys[0].includes('Lettering')) {
    document.getElementById('loader-container').style.display = 'block';
  }
  await window.threekitApi.configurator.setConfiguration(updateConfig);
};

const getConfiguration = () => {
  if (!window.threekitApi) return;
  return window.threekitApi.configurator.getConfiguration();
};

const getSnapshot = async (config) => {
  if (!window.threekitApi) return;
  const { api } = window.threekitApi;
  switch (config.GEAR_VISIBILITY) { 
    case 'Athletix':
      let athletixCameraNames = {
        athletixfront: 'Athletix-Front',
        jacketFront: 'Jacket-Front',
        jacketBack: 'Jacket-Back',
        pantsFront: 'Pants-Front',
        pantsBack: 'Pants-Back',
      };
      let athletixSnapshots = {};
      for (var key in athletixCameraNames) {
        athletixCameraNames[key] === 'Jacket-Front' || athletixCameraNames[key] === 'Jacket-Back'
          ? await setConfiguration({ GEAR_VISIBILITY: 'Jacket' })
          : athletixCameraNames[key] === 'Pants-Front' || athletixCameraNames[key] === 'Pants-Back'
          ? await setConfiguration({ GEAR_VISIBILITY: 'Pants' })
          : await setConfiguration({ GEAR_VISIBILITY: 'Athletix' });
        await setConfiguration({ ACTIVE_CAMERA: athletixCameraNames[key] });
        athletixSnapshots[key] = await api.snapshotAsync({
          size: { width: 350, height: 430 },
        });
      }
      await setConfiguration({ GEAR_VISIBILITY: 'Athletix' });
      await setConfiguration({ ACTIVE_CAMERA: 'Athletix-Front' });
      return athletixSnapshots;
    case 'Jacket':
      document.getElementById('loader-container').style.display = 'block';
      let jacketCameraNames = { front: 'Jacket-Front', back: 'Jacket-Back' };
      let jacketSnapshots = {};

      await setConfiguration(config);
      for (var key in jacketCameraNames) {
        await setConfiguration({ ACTIVE_CAMERA: jacketCameraNames[key] });
        jacketSnapshots[key] = await api.snapshotAsync({
          size: { width: 350, height: 430 },
        });
      }
      await setConfiguration({ ACTIVE_CAMERA: 'Athletix-Front' });
      return jacketSnapshots;
    case 'Pants':
      let pantsCameraNames = { front: 'Pants-Front', back: 'Pants-Back' };
      let pantsSnapshots = {};

      await setConfiguration(config);
      for (var key in pantsCameraNames) {
        await setConfiguration({ ACTIVE_CAMERA: pantsCameraNames[key] });
        pantsSnapshots[key] = await api.snapshotAsync({
          size: { width: 350, height: 430 },
        });
      }

      await setConfiguration({ ACTIVE_CAMERA: 'Athletix-Front' });
      return pantsSnapshots;
  }
};

export default {
  initializePlayer,
  compileAttributesData,
  setConfiguration,
  getConfiguration,
  getConfigurationOutput,
  getSnapshot,
};

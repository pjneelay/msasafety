export default {
  /**************************************************
    *************** Material Options *****************
    **************************************************/
  GEAR_VISIBILITY: {
    label: 'Gear',
    attribute: 'GEAR_VISIBILITY',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      Athletix: 'A/B',
      Jacket: 'A',
      Pants: 'B'
    },
    optionGroup: {
      Athletix: 'NA',
      Jacket: 'NA',
      Pants: 'NA',
    },
    optionType: {
      Athletix: 'NA',
      Jacket: 'NA',
      Pants: 'NA',
    },
    gear: 'athletix',
  },

  OUTER_SHELL: {
    label: 'Materials',
    attribute: 'MATERIALS',
    type: 'radioButtons',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      'PBI Stretch': '42'
    },
    optionGroup: {
      'PBI Stretch': 'NA',
    },
    optionType: {
      'PBI Stretch': 'NA',
    },
    gear: 'athletix'
  },

  COLOR: {
    label: 'Color',
    attribute: 'Color',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      Black: '01',
      Gold: '10'
    },
    optionGroup: {
      Black: 'NA',
      Gold: 'NA'
    },
    optionType: {
      Black: 'NA',
      Gold: 'NA'
    },
    gear: 'athletix'
  },

  THERMAL_LINER: {
    label: 'Thermal Liner',
    attribute: 'THERMAL LINER',
    type: 'radioButtons',
    data: 'tk-platform',
    cssClass: 'active',
    selected: true,
    optionNumber: {
      'Titanium™ with Nomex Nano': 'N3',
      'Caldura Elite Nomex Nano':'N2',
    },
    optionGroup: {
      'Titanium™ with Nomex Nano': 'NA',
      'Caldura Elite Nomex Nano':'NA',
    },
    optionType: {
      'Titanium™ with Nomex Nano': 'NA',
      'Caldura Elite Nomex Nano':'NA',
    },
    gear: 'athletix'
  },

  MOISTURE_BARRIER: {
    label: 'Moisture Barrier',
    attribute: 'MOISTURE BARRIER',
    type: 'radioButtons',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      'Gore Crosstech Black': 'G',
    },
    optionGroup: {
      'Gore Crosstech Black': 'NA',
    },
    optionType: {
      'Gore Crosstech Black': 'NA',
    },
    gear: 'athletix'
  },

  /**************************************************
   *************** trim Options *****************
   **************************************************/
  trim_type: {
    label: 'Trim Type',
    attribute: 'TRIM TYPE',
    type: 'radioButtons',
    data: 'tk-platform',
    selected: true,
    cssClass: 'active',
    optionNumber: {
      NFPAB: 'NA',
      NYC: 'NA',
    },
    optionGroup: {
      NFPAB: 'NA',
      NYC: 'NA',
    },
    optionType: {
      NFPAB: 'NFPAB',
      NYC: 'NYC',
    },
    gear: 'athletix'
  },

  trim_color: {
    label: 'Trim Color',
    attribute: 'TRIM COLOR',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      Orange: '2',
      Lime: '4',
    },
    optionGroup: {
      Orange: 'NA',
      Lime: 'NA',
    },
    optionType: {
      Orange: 'NA',
      Lime: 'NA',
    },
    gear: 'athletix'
  },

  COAT_TRIM_TYPE: {
    label: 'Coat Trim Type',
    attribute: 'COAT TRIM TYPE',
    type: 'radioButtons',
    data: 'tk-platform',
    selected: true,
    cssClass: 'active',
    optionNumber: {
      NFPAB: '17C783',
      NYC: '17C703',
    },
    optionGroup: {
      NFPAB: 'NA',
      NYC: 'NA',
    },
    optionType: {
      NFPAB: 'NFPAB',
      NYC: 'NYC',
    },
    gear: 'athletix'
  },

  COAT_TRIM_COLOR: {
    label: 'Coat Trim Color',
    attribute: 'COAT TRIM COLOR',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      Orange: 'R/O',
      Yellow: 'L/Y',
    },
    optionGroup: {
      Orange: 'NA',
      Yellow: 'NA',
    },
    optionType: {
      Orange: 'NA',
      Yellow: 'NA',
    },
    gear: 'athletix'
  },

  PANTS_TRIM_TYPE: {
    label: 'Pant Trim Type',
    attribute: 'PANTS TRIM TYPE',
    type: 'radioButtons',
    data: 'tk-platform',
    selected: true,
    cssClass: 'active',
    optionNumber: {
      '3" AROUND CUFFS': '27C03',
    },
    optionGroup: {
      NFPAB: 'NA',
      NYC: 'NA',
    },
    optionType: {
      NFPAB: 'NFPAB',
      NYC: 'NYC',
    },
    gear: 'athletix'
  },

  PANTS_TRIM_COLOR: {
    label: 'Pant Trim Color',
    attribute: 'PANTS TRIM COLOR',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      Orange: 'R/O',
      Yellow: 'L/Y',
    },
    optionGroup: {
      Orange: 'NA',
      Yellow: 'NA',
    },
    optionType: {
      Orange: 'NA',
      Yellow: 'NA',
    },
    gear: 'athletix'
  },
  /**************************************************
   *************** JACKET Options *****************
   **************************************************/

  /*************** FRONT **********************/
  JACKET_FRONT_STORMFLAP_CLOSURE: {
    label: 'Closure',
    attribute: 'JACKET_FRONT_STORMFLAP_CLOSURE',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'VISLON ZIPPER IN VELCRO OUT': 'N1STCL03',
    },
    optionGroup: {
      'VISLON ZIPPER IN VELCRO OUT': 'CLOS',
    },
    optionType: {
      'VISLON ZIPPER IN VELCRO OUT': 'ZIPV',
    },
    gear: 'Jacket'
  },

  JACKET_FRONT_STORMFLAP_ZIPPER_PULL: {
    label: 'ZIPPER PULL',
    attribute: 'JACKET_FRONT_STORMFLAP_ZIPPER_PULL',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      ZIPGRIP: 'ZIPGRIP',
    },
    optionGroup: {
      ZIPGRIP: 'CLOS',
    },
    optionType: {
      ZIPGRIP: 'OTHER',
    },
    gear: 'Jacket'
  },

  JACKET_FRONT_HOLDER_STORMFLAP: {
    label: 'HOLDER - STORMFLAP',
    attribute: 'FRONT HOLDERS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'HANG STRAP WITH D-RING': '1942590S',
      'HELMET SNAP W/SLF STRAP': 'N142190S',
      'MICROPHONE STRAP 1X3': '1942564S',
    },
    optionGroup: {
      'HANG STRAP WITH D-RING': 'HOLDER',
      'HELMET SNAP W/SLF STRAP': 'HOLDER',
      'MICROPHONE STRAP 1X3': 'HOLDER',
    },
    optionType: {
      'HANG STRAP WITH D-RING': 'D-RING',
      'HELMET SNAP W/SLF STRAP': 'HELMET SNAP',
      'MICROPHONE STRAP 1X3': 'MICROPHONE',
    },
    gear: 'Jacket'
  },

  JACKET_FRONT_HOLDER_ABOVE_TRIM: {
    label: 'HOLDER - ABOVE TRIM',
    attribute: 'FRONT HOLDERS ABOVE TRIM',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'MICROPHONE STRAP 1X3': '1942564S',
    },
    optionGroup: {
      'MICROPHONE STRAP 1X3': 'HOLDER',
    },
    optionType: {
      'MICROPHONE STRAP 1X3': 'MICROPHONE',
    },
    gear: 'Jacket'
  },

  RIGHT_TOP_COLLAR: {
    label: 'Right Top Collar',
    attribute: 'RIGHT TOP COLLAR',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'MICROPHONE STRAP 1X3': '1942564C',
    },
    optionGroup: {
      'MICROPHONE STRAP 1X3': 'HOLDER',
    },
    optionType: {
      'MICROPHONE STRAP 1X3': 'MICROPHONE',
    },
    gear: 'Jacket'
  },

  LEFT_TOP_COLLAR: {
    label: 'Left Top Collar',
    attribute: 'LEFT TOP COLLAR',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'MICROPHONE STRAP 1X3': '1942564C',
    },
    optionGroup: {
      'MICROPHONE STRAP 1X3': 'HOLDER',
    },
    optionType: {
      'MICROPHONE STRAP 1X3': 'MICROPHONE',
    },
    gear: 'Jacket'
  },

  SIZE_AND_TYPE: {
    label: 'Size and Type',
    attribute: 'SIZE AND TYPE',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'EXPPKT 2X8X8 W/FLC HANDWARMER': 'N1STPK03',
    },
    optionGroup: {
      'EXPPKT 2X8X8 W/FLC HANDWARMER': 'PCKT',
    },
    optionType: {
      'EXPPKT 2X8X8 W/FLC HANDWARMER': 'EXPANSION',
    },
    gear: 'Jacket'
  },

  OUTSIDE_REINFORCEMENTS: {
    label: 'Outside Reinforcements',
    attribute: 'OUTSIDE REINFORCEMENTS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'DRAGONHIDE FRONT EXPANSION POCKET 2X8X8': '19428DH',
    },
    optionGroup: {
      'DRAGONHIDE FRONT EXPANSION POCKET 2X8X8': 'REINFORCEMENT',
    },
    optionType: {
      'DRAGONHIDE FRONT EXPANSION POCKET 2X8X8': 'POCKET',
    },
    gear: 'Jacket'
  },

  INSIDE_REINFORCEMENTS: {
    label: 'Inside Reinforcements',
    attribute: 'INSIDE REINFORCEMENTS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'KEV POUCH HANDWARMER 2X8X8': 'N1STPRA1',
    },
    optionGroup: {
      'KEV POUCH HANDWARMER 2X8X8': 'REINFORCEMENT',
    },
    optionType: {
      'KEV POUCH HANDWARMER 2X8X8': 'POCKET',
    },
    gear: 'Jacket'
  },

  PULL_TAB: {
    label: 'Pull Tab',
    attribute: 'PULL TAB',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'BLK ARASHIELD POCKET PULL TAB': 'N1STPTA1',
    },
    optionGroup: {
      'BLK ARASHIELD POCKET PULL TAB': 'PCKT',
    },
    optionType: {
      'BLK ARASHIELD POCKET PULL TAB': 'OTHER',
    },
    gear: 'Jacket'
  },

   /*************** RIGHT CHEST **********************/
  RIGHT_SIDE_POCKET_DIVIDER: {
    label: 'Right Side Pocket Divider',
    attribute: 'RIGHT SIDE POCKET DIVIDER',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'DIVIDER KEVLAR EXP/SEMI 8" HIGH': '19KT1208',
    },
    optionGroup: {
      'DIVIDER KEVLAR EXP/SEMI 8" HIGH': 'PCKT',
    },
    optionType: {
      'DIVIDER KEVLAR EXP/SEMI 8" HIGH': 'DVDR',
    },
    gear: 'Jacket'
  },

  LEFT_SIDE_POCKET_DIVIDER: {
    label: 'Left Side Pocket Divider',
    attribute: 'LEFT SIDE POCKET DIVIDER',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'DIVIDER KEVLAR EXP/SEMI 8" HIGH': '19KT1208',
    },
    optionGroup: {
      'DIVIDER KEVLAR EXP/SEMI 8" HIGH': 'PCKT',
    },
    optionType: {
      'DIVIDER KEVLAR EXP/SEMI 8" HIGH': 'DVDR',
    },
    gear: 'Jacket'
  },

  RIGHT_CHESTSF_POCKETS: {
    label: 'Pockets',
    attribute: 'RIGHT POCKETS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'RADIO POCKET 3X3.5X9': '1942413B',
      'RADIO POCKET 2X3.5X8': '1942413C',
      'RADIO POCKET 3X2.5X7': '1942413D',
    },
    optionGroup: {
      'RADIO POCKET 3X3.5X9': 'PCKT',
      'RADIO POCKET 2X3.5X8': 'PCKT',
      'RADIO POCKET 3X2.5X7': 'PCKT',
    },
    optionType: {
      'RADIO POCKET 3X3.5X9': 'RADIO',
      'RADIO POCKET 2X3.5X8': 'RADIO',
      'RADIO POCKET 3X2.5X7': 'RADIO',
    },
    gear: 'Jacket'
  },

  RIGHT_CHESTSF_TRIM_OVER_POCKET: {
    label: 'Trim Over Pocket',
    attribute: 'TRIM OVER POCKET',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: 'NA',
    optionGroup: 'PCKT',
    optionType: 'RADIO'
  },

  RIGHT_CHESTSF_MIC: {
    label: 'Holder Michrophone',
    attribute: 'RIGHT CHEST MIC',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'MICROPHONE STRAP 1X3': '1942564'
    },
    optionGroup: {
      'MICROPHONE STRAP 1X3': 'HOLDER'
    },
    optionType: {
      'MICROPHONE STRAP 1X3': 'MICROPHONE'
    },
    gear: 'Jacket'
  },

  RIGHT_CHESTSF_HOLDERS_STORMFLAP: {
    label: 'Holder',
    attribute: 'RIGHT CHEST HOLDERS STORMFLAP',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'MICROPHONE STRAP 1X3': '1942564',
      'HANGING STRAP WITH D-RING': '1942590H',
      'STRAP 1X12 W/1X4 VELCRO': 'N142109',
      'HELMET SNAP W/SLF &VLC STRAP': 'N142187',
      'SELF HSNP/MIC/2.5X9': 'N142267',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'N142298',
      'HELMET SNAP W/SLF STRAP': 'N142190',
      'SURVIVOR STRAP': '1942548',
      'SUNLANCE W/SLF HELMET SNAP ABOVE': '1942546C',
    },
    optionGroup: {
      'MICROPHONE STRAP 1X3': 'HOLDER',
      'HANGING STRAP WITH D-RING': 'HOLDER',
      'STRAP 1X12 W/1X4 VELCRO': 'HOLDER',
      'HELMET SNAP W/SLF &VLC STRAP': 'HOLDER',
      'SELF HSNP/MIC/2.5X9': 'HOLDER',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'HOLDER',
      'HELMET SNAP W/SLF STRAP': 'HOLDER',
      'SURVIVOR STRAP': 'HOLDER',
      'SUNLANCE W/SLF HELMET SNAP ABOVE': 'HOLDER',
    },
    optionType: {
      'MICROPHONE STRAP 1X3': 'MICROPHONE',
      'HANGING STRAP WITH D-RING': 'D-RING',
      'STRAP 1X12 W/1X4 VELCRO': 'FLASHLIGHT',
      'HELMET SNAP W/SLF &VLC STRAP': 'FLASHLIGHT',
      'SELF HSNP/MIC/2.5X9': 'FLASHLIGHT',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'FLASHLIGHT',
      'HELMET SNAP W/SLF STRAP': 'HELMET SNAP',
      'SURVIVOR STRAP': 'SRVR',
      'SUNLANCE W/SLF HELMET SNAP ABOVE': 'SUNL',
    },
    gear: 'Jacket'
  },

  RIGHT_CHESTSF_ANTENNA_NOTCH: {
    label: 'Antenna Notch',
    attribute: 'ANTENNA NOTCH',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'RADIO FLAP DUAL NOTCH TAB 3': 'N142505',
      'RADIO FLAP NOTCH TAB 3': 'N1425035',
    },
    optionGroup: {
      'RADIO FLAP DUAL NOTCH TAB 3': 'PCKT',
      'RADIO FLAP NOTCH TAB 3': 'PCKT',
    },
    optionType: {
      'RADIO FLAP DUAL NOTCH TAB 3': 'FLAP',
      'RADIO FLAP NOTCH TAB 3': 'RADIO',
    },
    gear: 'Jacket'
  },

  rightChestSleeveHolders: {
    label: 'Pockets',
    attribute: 'RIGHT TWD SLEEVE HOLDERS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'MICROPHONE STRAP 1X3': '1942564',
      'HANGING STRAP WITH D-RING': '1942590H',
      'STRAP 1X12 W/1X4 VELCRO': 'N142109',
      'HELMET SNAP W/SLF &VLC STRAP': 'N142187',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'N142298',
      'HANGING STRAP WITH D-RING': 'N142190',
    },
    optionGroup: {
      'MICROPHONE STRAP 1X3': 'HOLDER',
      'HANGING STRAP WITH D-RING': 'HOLDER',
      'STRAP 1X12 W/1X4 VELCRO': 'HOLDER',
      'HELMET SNAP W/SLF &VLC STRAP': 'HOLDER',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'HOLDER',
      'HANGING STRAP WITH D-RING': 'HOLDER',
    },
    optionType: {
      'MICROPHONE STRAP 1X3': 'MICROPHONE',
      'HANGING STRAP WITH D-RING': 'D-RING',
      'STRAP 1X12 W/1X4 VELCRO': 'FLASHLIGHT',
      'HELMET SNAP W/SLF &VLC STRAP': 'FLASHLIGHT',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'FLASHLIGHT',
      'HANGING STRAP WITH D-RING': 'HELMET SNAP',
    },
    gear: 'Jacket'
  },

  LEFT_CHESTSF_POCKETS: {
    label: 'Pockets',
    attribute: 'LEFT POCKETS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'RADIO POCKET 3X3.5X9': '1942413B',
      'RADIO POCKET 2X3.5X8': '1942413C',
      'RADIO POCKET 3X2.5X7': '1942413D',
    },
    optionGroup: {
      'RADIO POCKET 3X3.5X9': 'PCKT',
      'RADIO POCKET 2X3.5X8': 'PCKT',
      'RADIO POCKET 3X2.5X7': 'PCKT',
    },
    optionType: {
      'RADIO POCKET 3X3.5X9': 'RADIO',
      'RADIO POCKET 2X3.5X8': 'RADIO',
      'RADIO POCKET 3X2.5X7': 'RADIO',
    },
    gear: 'Jacket'
  },

  LEFT_CHESTSF_TRIM_OVER_POCKET: {
    label: 'Trim Over Pocket',
    attribute: 'LEFT TRIM OVER POCKET',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: 'NA',
    optionGroup: 'NA',
    optionType: 'NA'
  },

  LEFT_CHESTSF_MIC: {
    label: 'Holder Michrophone',
    attribute: 'LEFT CHEST MIC',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'MICROPHONE STRAP 1X3': '1942564'
    },
    optionGroup: {
      'MICROPHONE STRAP 1X3': 'HOLDER'
    },
    optionType: {
      'MICROPHONE STRAP 1X3': 'MICROPHONE'
    },
    gear: 'Jacket'
  },

  LEFT_CHESTSF_ANTENNA_NOTCH: {
    label: 'Antenna Notch',
    attribute: 'LEFT ANTENNA NOTCH',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'RADIO FLAP DUAL NOTCH TAB 3': 'N142505',
      'RADIO FLAP NOTCH TAB 3': 'N1425035',
    },
    optionGroup: {
      'RADIO FLAP DUAL NOTCH TAB 3': 'PCKT',
      'RADIO FLAP NOTCH TAB 3': 'PCKT',
    },
    optionType: {
      'RADIO FLAP DUAL NOTCH TAB 3': 'FLAP',
      'RADIO FLAP NOTCH TAB 3': 'FLAP',
    },
    gear: 'Jacket'
  },

  leftChestSleeveHolders: {
    label: 'Pockets',
    attribute: 'LEFT TWD SLEEVE HOLDERS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'MICROPHONE STRAP 1X3': '1942564',
      'HANGING STRAP WITH D-RING': '1942590H',
      'STRAP 1X12 W/1X4 VELCRO': 'N142109',
      'HELMET SNAP W/SLF &VLC STRAP': 'N142187',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'N142298',
      'SURVIVOR STRAP': '1942548',
    },
    optionGroup: {
      'MICROPHONE STRAP 1X3': 'HOLDER',
      'HANGING STRAP WITH D-RING': 'HOLDER',
      'STRAP 1X12 W/1X4 VELCRO': 'HOLDER',
      'HELMET SNAP W/SLF &VLC STRAP': 'HOLDER',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'HOLDER',
      'SURVIVOR STRAP': 'HOLDER',
    },
    optionType: {
      'MICROPHONE STRAP 1X3': 'MICROPHONE',
      'HANGING STRAP WITH D-RING': 'D-RING',
      'STRAP 1X12 W/1X4 VELCRO': 'FLASHLIGHT',
      'HELMET SNAP W/SLF &VLC STRAP': 'FLASHLIGHT',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'FLASHLIGHT',
      'SURVIVOR STRAP': 'SRVR',
    },
    gear: 'Jacket'
  },

  LEFT_CHESTSF_HOLDERS_STORMFLAP: {
    label: 'Holders',
    attribute: 'LEFT HOLDERS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'MICROPHONE STRAP 1X3': '1942564',
      'HANGING STRAP WITH D-RING': '1942590H',
      'STRAP 1X12 W/1X4 VELCRO': 'N142109',
      'HELMET SNAP W/SLF &VLC STRAP': 'N142187',
      'SELF HSNP/MIC/2.5X9': 'N142267',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'N142298',
      'HELMET SNAP W/SLF STRAP': 'N142190',
      'SURVIVOR STRAP': '1942548',
      'SUNLANCE FLASHLIGHT HOLDER': '1942546',
      'SUNLANCE W/SLF HELMET SNAP ABOVE': '1942546C',
    },
    optionGroup: {
      'MICROPHONE STRAP 1X3': 'HOLDER',
      'HANGING STRAP WITH D-RING': 'HOLDER',
      'STRAP 1X12 W/1X4 VELCRO': 'HOLDER',
      'HELMET SNAP W/SLF &VLC STRAP': 'HOLDER',
      'SELF HSNP/MIC/2.5X9': 'HOLDER',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'HOLDER',
      'HELMET SNAP W/SLF STRAP': 'HOLDER',
      'SURVIVOR STRAP': 'HOLDER',
      'SUNLANCE FLASHLIGHT HOLDER': 'HOLDER',
      'SUNLANCE W/SLF HELMET SNAP ABOVE': 'HOLDER',
    },
    optionType: {
      'MICROPHONE STRAP 1X3': 'MICROPHONE',
      'HANGING STRAP WITH D-RING': 'D-RING',
      'STRAP 1X12 W/1X4 VELCRO': 'FLASHLIGHT',
      'HELMET SNAP W/SLF &VLC STRAP': 'FLASHLIGHT',
      'SELF HSNP/MIC/2.5X9': 'FLASHLIGHT',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'FLASHLIGHT',
      'HELMET SNAP W/SLF STRAP': 'HELMET SNAP',
      'SURVIVOR STRAP': 'SRVR',
      'SUNLANCE FLASHLIGHT HOLDER': 'SUNL',
      'SUNLANCE W/SLF HELMET SNAP ABOVE': 'SUNL',
    },
    gear: 'Jacket'
  },

  RIGHT_EMBROIDERY: {
    label: 'CUSTOM PATCHES',
    attribute: 'RIGHT EMBROIDERY PATCHES',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
     'CUSTOM SILVER PRINT PATCH SLEEVE': 'CPPS',
     'CUSTOM BLACK PRINT PATCH SLEEVE': 'CPPSBLK',
     'CUSTOM GOLD PRINT PATCH SLEEVE': 'CPPSGLD',
     'CUSTOM YELLOW PRINT PATCH SLEEVE': 'CPPSYEL'
    },
    optionGroup: {
     'CUSTOM SILVER PRINT PATCH SLEEVE': 'PATCH',
     'CUSTOM BLACK PRINT PATCH SLEEVE': 'PATCH',
     'CUSTOM GOLD PRINT PATCH SLEEVE': 'PATCH',
     'CUSTOM YELLOW PRINT PATCH SLEEVE': 'PATCH'
    },
    optionType: {
     'CUSTOM SILVER PRINT PATCH SLEEVE': 'PRNT',
     'CUSTOM BLACK PRINT PATCH SLEEVE': 'PRNT',
     'CUSTOM GOLD PRINT PATCH SLEEVE': 'PRNT',
     'CUSTOM YELLOW PRINT PATCH SLEEVE': 'PRNT'
    },
    gear: 'Jacket'
   },
   RIGHT_FLAGS: {
    label: 'FLAGS',
    attribute: 'RIGHT FLAGS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
     'U.S. FLAG EMBROIDERY RIGHT SLEEVE': 'N100107E'
    },
    optionGroup: {
     'U.S. FLAG EMBROIDERY RIGHT SLEEVE': 'MISCELLANEOUS'
    },
    optionType: {
     'U.S. FLAG EMBROIDERY RIGHT SLEEVE': 'FLAG'
    },
    gear: 'Jacket'
   },

   RIGHT_EMBROIDERY_PADDING: {
    label: 'CUSTOM PRINTED PATCH PADDING',
    attribute: 'RIGHT EMBROIDERY PADDING',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'RSLV CPPS': '1975R615',
    },
    optionGroup: {
      'RSLV CPPS': 'REINFORCEMENT',
    },
    optionType: {
      'RSLV CPPS': 'PADD',
    },
    gear: 'Jacket'
  },

  LEFT_EMBROIDERY: {
    label: 'CUSTOM PATCHES',
    attribute: 'LEFT EMBROIDERY PATCHES',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
     'CUSTOM SILVER PRINT PATCH SLEEVE': 'CPPS',
     'CUSTOM BLACK PRINT PATCH SLEEVE': 'CPPSBLK',
     'CUSTOM GOLD PRINT PATCH SLEEVE': 'CPPSGLD',
     'CUSTOM YELLOW PRINT PATCH SLEEVE': 'CPPSYEL'
    },
    optionGroup: {
     'CUSTOM SILVER PRINT PATCH SLEEVE': 'PATCH',
     'CUSTOM BLACK PRINT PATCH SLEEVE': 'PATCH',
     'CUSTOM GOLD PRINT PATCH SLEEVE': 'PATCH',
     'CUSTOM YELLOW PRINT PATCH SLEEVE': 'PATCH'
    },
    optionType: {
     'CUSTOM SILVER PRINT PATCH SLEEVE': 'PRNT',
     'CUSTOM BLACK PRINT PATCH SLEEVE': 'PRNT',
     'CUSTOM GOLD PRINT PATCH SLEEVE': 'PRNT',
     'CUSTOM YELLOW PRINT PATCH SLEEVE': 'PRNT'
    },
    gear: 'Jacket'
   },
   LEFT_FLAGS: {
    label: 'FLAGS',
    attribute: 'LEFT FLAGS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
     'U.S. FLAG EMBROIDERY LEFT SLEEVE': 'N100107L'
    },
    optionGroup: {
     'U.S. FLAG EMBROIDERY LEFT SLEEVE': 'MISCELLANEOUS'
    },
    optionType: {
     'U.S. FLAG EMBROIDERY LEFT SLEEVE': 'FLAG'
    },
    gear: 'Jacket'
   },

   LEFT_EMBROIDERY_PADDING: {
    label: 'CUSTOM PRINTED PATCH PADDING',
    attribute: 'LEFT EMBROIDERY PADDING',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'LSLV CPPS': '1975L615',
    },
    optionGroup: {
      'LSLV CPPS': 'REINFORCEMENT',
    },
    optionType: {
      'LSLV CPPS': 'PADD',
    },
    gear: 'Jacket'
  },

  RIGHT_FRONT_NEXTSF_HOLDERS: {
    label: 'Holders',
    attribute: 'RIGHT FRONT NEXT TO STORMFLAP',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'HELMET SNAP W/SLF STRAP': 'N142190',
      'HANGING STRAP WITH D-RING': '1942590H',
    },
    optionGroup: {
      'HELMET SNAP W/SLF STRAP': 'HOLDER',
      'HANGING STRAP WITH D-RING': 'HOLDER',
    },
    optionType: {
      'HELMET SNAP W/SLF STRAP': 'HELMET SNAP',
      'HANGING STRAP WITH D-RING': 'D-RING',
    },
    gear: 'Jacket'
  },

  LEFT_FRONT_NEXTSF_HOLDERS: {
    label: 'holders',
    attribute: 'LEFT FRONT NEXT TO STORMFLAP',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'HELMET SNAP W/SLF STRAP': 'N142190',
      'HANGING STRAP WITH D-RING': '1942590H',
    },
    optionGroup: {
      'HELMET SNAP W/SLF STRAP': 'HOLDER',
      'HANGING STRAP WITH D-RING': 'HOLDER',
    },
    optionType: {
      'HELMET SNAP W/SLF STRAP': 'HELMET SNAP',
      'HANGING STRAP WITH D-RING': 'D-RING',
    },
    gear: 'Jacket'
  },

  /* LETTERING */
  LETTERS_A_TEXT: {
    label: 'A Letters Text',
    attribute: 'Row A Lettering Input',
    type: 'textInput',
    data: 'tk-platform',
  },
  LETTER_A_SIZE: {
    label: 'Letters Size',
    attribute: 'Row A Size Input',
    type: 'radioButtons',
    data: 'tk-platform',
  },
  LETTERS_A_COLOR: {
    label: 'Letters Color',
    attribute: 'Row A Color Input',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
  },

  LETTER_B_SIZE: {
    label: 'B Letters Size',
    attribute: 'Row B Size Input',
    type: 'radioButtons',
    data: 'tk-platform',
  },

  LETTERS_B_COLOR: {
    label: 'B Letters Color',
    attribute: 'Row B Color Input',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
  },

  LETTERS_B_TEXT: {
    label: 'B Letters Text',
    attribute: 'Row B Lettering Input',
    type: 'textInput',
    data: 'tk-platform',
  },

  LETTER_C_SIZE: {
    label: 'C Letters Size',
    attribute: 'Row C Size Input',
    type: 'radioButtons',
    data: 'tk-platform',
  },

  LETTERS_C_COLOR: {
    label: 'C Letters Color',
    attribute: 'Row C Color Input',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
  },

  LETTERS_C_TEXT: {
    label: 'C Letters Text',
    attribute: 'Row C Lettering Input',
    type: 'textInput',
    data: 'tk-platform',
  },

  LETTER_D_SIZE: {
    label: 'D Letters Size',
    attribute: 'Row D Size Input',
    type: 'radioButtons',
    data: 'tk-platform',
  },

  // LETTERS_D_COLOR: {
  //   label: 'D Letters Color',
  //   attribute: 'Row D Color Input',
  //   type: 'radioButtons',
  //   data: 'tk-platform',
  // },

  // LETTERS_D_TEXT: {
  //   label: 'D Letters Text',
  //   attribute: 'Row D Lettering Input',
  //   type: 'textInput',
  //   data: 'tk-platform',

  // },

  LETTER_E_SIZE: {
    label: 'E Letters Size',
    attribute: 'Row E Size Input',
    type: 'radioButtons',
    data: 'tk-platform',
  },

  LETTERS_E_COLOR: {
    label: 'E Letters Color',
    attribute: 'Row E Color Input',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
  },

  LETTERS_E_TEXT: {
    label: 'E Letters Text',
    attribute: 'Row E Lettering Input',
    type: 'textInput',
    data: 'tk-platform',

  },


  LETTER_F_SIZE: {
    label: 'F Letters Size',
    attribute: 'Row F Size Input',
    type: 'radioButtons',
    data: 'tk-platform',
  },

  LETTERS_F_COLOR: {
    label: 'F Letters Color',
    attribute: 'Row F Color Input',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
  },

  LETTERS_F_TEXT: {
    label: 'F Letters Text',
    attribute: 'Row F Lettering Input',
    type: 'textInput',
    data: 'tk-platform',
  },
  /*
    letterGSize: {
      label: 'G Letters Size',
      attribute: 'G LETTERS SIZE',
      type: 'radioButtons',
      data: 'tk-platform',
      optionNumber: '00005',
      optionGroup:'Group3',
      optionType:'Type 1'
    },
  
    lettersGColor: {
      label: 'G Letters Color',
      attribute: 'G LETTERS COLOR',
      type: 'radioButtons',
      data: 'tk-platform',
      optionNumber: '00006',
      optionGroup:'Group3',
      optionType:'Type 1'
    },
  
    lettersGText: {
      label: 'G Letters Text',
      attribute: 'G LETTERS TEXT',
      type: 'radioButtons',
      data: 'tk-platform',
      optionNumber: '00006',
      optionGroup:'Group3',
      optionType:'Type 1'
    },
  */
  LETTER_PATCH: {
    label: 'PATCH',
    attribute: 'HANGING LETTER PATCH',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'LETTER PATCH SNP/VLC HANG 5X20': 'N142132',
    },
    optionGroup: {
      'LETTER PATCH SNP/VLC HANG 5X20': 'PATCH',
    },
    optionType: {
      'LETTER PATCH SNP/VLC HANG 5X20': 'LETTER',
    },
    gear: 'Jacket'
  },

  LETTER_SIZE: {
    label: 'Letters Size',
    attribute: 'Patch Lettering Size Input',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      '2" SCOTCHLITE LETTERS SEWN': '19720',
      '3" SCOTCHLITE LETTERS SEWN': '19721'
    },
    optionGroup: {
      '2" SCOTCHLITE LETTERS SEWN': 'LTRG',
      '3" SCOTCHLITE LETTERS SEWN': 'LTRG'
    },
    optionType: {
      '2" SCOTCHLITE LETTERS SEWN': '2IN',
      '3" SCOTCHLITE LETTERS SEWN': '3IN'
    },
    gear: 'Jacket'
  },

  LETTERS_COLOR: {
    label: 'Letters Color',
    attribute: 'Patch Lettering Color Input',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
    optionNumber: {
      'Lime/Yellow': 'NA',
      'Red/Orange': 'NA',
    },
    optionGroup: {
      'Lime/Yellow': 'NA',
      'Red/Orange': 'NA',
    },
    optionType: {
      'Lime/Yellow': 'NA',
      'Red/Orange': 'NA',
    },
    gear: 'Jacket'
  },

  LETTERS_TEXT: {
    label: 'Letters Text',
    attribute: 'Patch Lettering Input',
    type: 'textInput',
    data: 'tk-platform',
    optionNumber: 'NA',
    optionGroup: 'NA',
    optionType: 'NA'
  },

  SLEEVE_WELL: {
    label: 'Sleeve Well',
    attribute: 'SLEEVE WELL',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'SLVWL W/GRYNMX WRISTER ATX': 'N1STWRA1',
    },
    optionGroup: {
      'SLVWL W/GRYNMX WRISTER ATX': 'SLVW',
    },
    optionType: {
      'SLVWL W/GRYNMX WRISTER ATX': 'WRISTER',
    },
    gear: 'Jacket'
  },

  WRISTER_LINER: {
    label: 'Wrister Liner',
    attribute: 'WRISTER (LINER)',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'GRY NOMEX WRISTER LINER': 'N1STWLA1',
      'GRY NOMEX HAND AND WRIST GUARD LINER': '1905G9NL'
    },
    optionGroup: {
      'GRY NOMEX WRISTER LINER': 'SLVW',
      'GRY NOMEX HAND AND WRIST GUARD LINER': 'SLVW'
    },
    optionType: {
      'GRY NOMEX WRISTER LINER': 'WRISTER',
      'GRY NOMEX HAND AND WRIST GUARD LINER': ' HAND AND WRIST GUARD'
    },
    gear: 'Jacket'
  },

  WRISTER_LINER_THUMB_HOLE_LOOP: {
    label: 'WRISTER_LINER_THUMB_HOLE_LOOP',
    attribute: 'WRISTER (LINER) THUMB HOLE LOOP',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'THUMB HOLE LOOP LINER': 'N100321L',
    },
    optionGroup: {
      'THUMB HOLE LOOP LINER': 'MISCELLANEOUS',
    },
    optionType: {
      'THUMB HOLE LOOP LINER': 'OTHER',
    },
    gear: 'Jacket'
  },

  SLEEVE_CUFFS: {
    label: 'Sleeve Cuffs',
    attribute: 'SLEEVE CUFFS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'CUFF REINFORCEMENT DRAGONHIDE': 'N1STCRA1',
      'CUFF REINFORCEMENT ARASHIELD': '1988507'
    },
    optionGroup: {
      'CUFF REINFORCEMENT DRAGONHIDE': 'REINFORCEMENT',
      'CUFF REINFORCEMENT ARASHIELD': 'REINFORCEMENT'
    },
    optionType: {
      'CUFF REINFORCEMENT DRAGONHIDE': 'CUFF',
      'CUFF REINFORCEMENT ARASHIELD': 'CUFF'
    },
    gear: 'Jacket'
  },

  SHOULDER_PADDING: {
    label: 'Shoulder Padding',
    attribute: 'SHOULDER PADDING',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'TH SHOULDER 2LYR ATX': 'N1STCCHA',
    },
    optionGroup: {
      'TH SHOULDER 2LYR ATX': 'REINFORCEMENT',
    },
    optionType: {
      'TH SHOULDER 2LYR ATX': 'PADD',
    },
    gear: 'Jacket'
  },

  GLOBE_GUARD: {
    label: 'Globeguard',
    attribute: 'GLOBEGUARD',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'COAT GLOBEGUARD GMB': 'N100GGG',
      'COAT GLOBEGUARD NEOP': 'N100GGN'
    },
    optionGroup: {
      'COAT GLOBEGUARD GMB': 'MISCELLANEOUS',
      'COAT GLOBEGUARD NEOP': 'MISCELLANEOUS'
    },
    optionType: {
      'COAT GLOBEGUARD GMB': 'OTHER',
      'COAT GLOBEGUARD NEOP': 'OTHER'
    },
    gear: 'Jacket'
  },

  NECK_HANGER_LOOP: {
    label: 'Neck Hanger Loop',
    attribute: 'NECK HANGER LOOP',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'CLR LOOP': 'N1STCH01',
    },
    optionGroup: {
      'CLR LOOP': 'MISCELLANEOUS',
    },
    optionType: {
      'CLR LOOP': 'OTHER',
    },
    gear: 'Jacket'
  },

  HEM_SNAP_TABS_SELL: {
    label: 'Hem Snap Tabs (Shell)',
    attribute: 'HEM SNAP TABS (SHELL)',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'HEM SNAP TABS ATX (2)': 'N100140A',
      'HEM SNAP TABS (3) SHELL': '190625'
    },
    optionGroup: {
      'HEM SNAP TABS ATX (2)': 'MISCELLANEOUS',
      'HEM SNAP TABS (3) SHELL': 'MISCELLANEOUS'
    },
    optionType: {
      'HEM SNAP TABS ATX (2)': 'OTHER',
      'HEM SNAP TABS (3) SHELL': 'OTHER'
    },
    gear: 'Jacket'
  },

  HEM_SNAP_TABS_LINER: {
    label: 'Hem Snap Tabs (Liner)',
    attribute: 'HEM SNAP TABS (LINER)',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'HEM SNAP TABS ATX (2) LINER': 'N100L40A',
      'HEM SNAP TABS (3) LINER': '190L25'
    },
    optionGroup: {
      'HEM SNAP TABS ATX (2) LINER': 'MISCELLANEOUS',
      'HEM SNAP TABS (3) LINER': 'MISCELLANEOUS'
    },
    optionType: {
      'HEM SNAP TABS ATX (2) LINER': 'OTHER',
      'HEM SNAP TABS (3) LINER': 'OTHER'
    },
    gear: 'Jacket'
  },

  THERMAL_LINER_POCKET: {
    label: 'Thermal Liner Pocket',
    attribute: 'THERMAL LINER POCKET',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'TH SQUARE POCKET': 'N1STLP02',
    },
    optionGroup: {
      'TH SQUARE POCKET': 'PCKT',
    },
    optionType: {
      'TH SQUARE POCKET': 'THRML',
    },
    gear: 'Jacket'
  },

  LINER_ATTACHMENT_SHELL: {
    label: 'Liner Attachment (Shell)',
    attribute: 'LINER ATTACHMENT (SHELL)',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NECK SNAPS COLLAR': 'N1STNSS1',
    },
    optionGroup: {
      'NECK SNAPS COLLAR': 'MISCELLANEOUS',
    },
    optionType: {
      'NECK SNAPS COLLAR': 'OTHER',
    },
    gear: 'Jacket'
  },

  LINER_ATTACHMENT_LINER: {
    label: 'Liner Attachment (Liner)',
    attribute: 'LINER ATTACHMENT (LINER)',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NECK SNAPS LINER': 'N1STNSL1',
    },
    optionGroup: {
      'NECK SNAPS LINER': 'MISCELLANEOUS',
    },
    optionType: {
      'NECK SNAPS LINER': 'OTHER',
    },
    gear: 'Jacket'
  },

  DRD_STRAP: {
    label: 'Drd Strap',
    attribute: 'DRD STRAP',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'DRD': 'N1STDRD',
    },
    optionGroup: {
      'DRD': 'MISCELLANEOUS',
    },
    optionType: {
      'DRD': 'OTHER',
    },
    gear: 'Jacket'
  },

  DELETE_PIPING: {
    label: 'Piping',
    attribute: 'PIPING',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'Show Piping': 'N100DPIP',
      'Hide Piping': 'N100DPIP'
    },
    optionGroup: {
      'Show Piping': 'TRIM',
      'Hide Piping': 'TRIM'
    },
    optionType: {
      'Show Piping': 'OTHER',
      'Hide Piping': 'OTHER'
    },
    gear: 'Jacket'
  },

  /**************************************************
   *************** Pants Options ********************
   **************************************************/

  /*************** FRONT ****************************/
  PANT_FRONT_FRONTCLOSURE_CLOSURE: {
    label: 'Closure',
    attribute: 'PANT_FRONT_FRONTCLOSURE_CLOSURE',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'BLTLPS WIDE ATX': 'N2STWC09',
    },
    optionGroup: {
      'BLTLPS WIDE ATX': 'MISCELLANEOUS',
    },
    optionType: {
      'BLTLPS WIDE ATX': 'LOOP',
    },
    gear: 'Pants'
  },

  PANT_FRONT_FRONTCLOSURE_BELT_LOOPS: {
    label: 'Belt Loops',
    attribute: 'PANT_FRONT_FRONTCLOSURE_BELT_LOOPS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'BLTLPS WIDE ATX': 'N2STWC09',
    },
    optionGroup: {
      'BLTLPS WIDE ATX': 'MISCELLANEOUS',
    },
    optionType: {
      'BLTLPS WIDE ATX': 'LOOP',
    },
    gear: 'Pants'
  },

  PANT_FRONT_FRONTCLOSURE_BELT: {
    label: 'Belt',
    attribute: 'PANT_FRONT_FRONTCLOSURE_BELT',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'BLK NOMEX BELT': 'N2STWC02',
      'ESCAPE BELT': 'N200301',
      'SERIES 1 BUCKLE': 'N200289',
      'ERIES 2 HOOK AND DEE': 'N200285D',
    },
    optionGroup: {
      'BLK NOMEX BELT': 'CLOS',
      'ESCAPE BELT': 'MISCELLANEOUS',
      'SERIES 1 BUCKLE': 'MISCELLANEOUS',
      'ERIES 2 HOOK AND DEE': 'MISCELLANEOUS',
    },
    optionType: {
      'BLK NOMEX BELT': 'OTHER',
      'ESCAPE BELT': 'OTHER',
      'SERIES 1 BUCKLE': 'HARNESS',
      'ERIES 2 HOOK AND DEE': 'HARNESS',
    },
    gear: 'Pants'
  },

  PANT_FRONT_FRONTCLOSURE_CARABINER: {
    label: 'Carabiner',
    attribute: 'PANT_FRONT_FRONTCLOSURE_CARABINER',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'CMC CARABINER': 'N2CBCMC',
      'YATES CARABINER': 'N2CBYATE',
    },
    optionGroup: {
      'CMC CARABINER': 'MISCELLANEOUS',
      'YATES CARABINER': 'MISCELLANEOUS',
    },
    optionType: {
      'CMC CARABINER': 'HARNESS',
      'YATES CARABINER': 'HARNESS',
    },
    gear: 'Pants'
  },

  PANT_FRONT_FRONTCLOSURE_RAPPELLING: {
    label: 'Rappelling Loops',
    attribute: 'PANT_FRONT_FRONTCLOSURE_RAPPELLING LOOPS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      '9 ARASHIELD RAPLPS': '2988602V',
    },
    optionGroup: {
      '9 ARASHIELD RAPLPS': 'MISCELLANEOUS',
    },
    optionType: {
      '9 ARASHIELD RAPLPS': 'LOOP',
    },
    gear: 'Pants'
  },

  /*************** SIDE POCKETS RIGHT **********************/
  PANT_SIDE_POCKETS_RIGHT_SIZE_TYPE: {
    label: 'Size and Type',
    attribute: 'PANT_SIDE_POCKETS_RIGHT_SIZE_TYPE',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'SLNT EXPANSION POCKET 2x10x8/11': 'N2STPKA1',
      'ESCAPE SYSTEM POCKET CROSBY 2X7X8 RPKT': 'N242285',
      'ESCAPE SYSTEM POCKET CMC 2X8X9 RPKT': 'N242389R',
    },
    optionGroup: {
      'SLNT EXPANSION POCKET 2x10x8/11': 'PCKT',
      'ESCAPE SYSTEM POCKET CROSBY 2X7X8 RPKT': 'PCKT',
      'ESCAPE SYSTEM POCKET CMC 2X8X9 RPKT': 'PCKT',
    },
    optionType: {
      'SLNT EXPANSION POCKET 2x10x8/11': 'EXPANSION',
      'ESCAPE SYSTEM POCKET CROSBY 2X7X8 RPKT': 'ESCAPE SYSTEM POCKET',
      'ESCAPE SYSTEM POCKET CMC 2X8X9 RPKT': 'ESCAPE SYSTEM POCKET',
    },
    gear: 'Pants'
  },

  PANT_SIDE_POCKETS_RIGHT_INSIDE_REINFORCEMENT: {
    label: 'Inside Reinforcement',
    attribute: 'PANT_SIDE_POCKETS_RIGHT_INSIDE_REINFORCEMENT',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'KEV POUCH EXPANSION SLANT POCKET': 'N2STPRA1',
      'KEV POUCH 2x7x8': 'N2KT334',
      'KEV POUCH 2x8x9': 'N2KT389',
    },
    optionGroup: {
      'KEV POUCH EXPANSION SLANT POCKET': 'REINFORCEMENT',
      'KEV POUCH 2x7x8': 'REINFORCEMENT',
      'KEV POUCH 2x8x9': 'REINFORCEMENT',
    },
    optionType: {
      'KEV POUCH EXPANSION SLANT POCKET': 'POCKET',
      'KEV POUCH 2x7x8': 'POCKET',
      'KEV POUCH 2x8x9': 'POCKET',
    },
    gear: 'Pants'
  },

  PANT_SIDE_POCKETS_RIGHT_OUTSITE_REINFORCEMENT: {
    label: 'Outside Reinforcement',
    attribute: 'PANT_SIDE_POCKETS_RIGHT_OUTSITE_REINFORCEMENT',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: '294SLDH',
    optionGroup: 'REINFORCEMENT',
    optionType: 'POCKET'
  },

  PANT_SIDE_POCKETS_RIGHT_PULL_TAB: {
    label: 'Pull Tab',
    attribute: 'PANT_SIDE_POCKETS_RIGHT_PULL_TAB',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'BLK ARASHIELD POCKET PULL TAB': 'N1STPTA1',
    },
    optionGroup: {
      'BLK ARASHIELD POCKET PULL TAB': 'PCKT',
    },
    optionType: {
      'BLK ARASHIELD POCKET PULL TAB': 'OTHER',
    },
    gear: 'Pants'
  },

  PANT_SIDE_POCKETS_RIGHT_POCKET_DIVIDER: {
    label: 'Pocket Divider',
    attribute: 'PANT_SIDE_POCKETS_RIGHT_POCKET_DIVIDER',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      ' DIVIDER KEVLAR EXP/SEMI 9" HIGH': 'N2KT239',
    },
    optionGroup: {
      ' DIVIDER KEVLAR EXP/SEMI 9" HIGH': 'PCKT',
    },
    optionType: {
      ' DIVIDER KEVLAR EXP/SEMI 9" HIGH': 'DVDR',
    },
    gear: 'Pants'
  },

  PANT_SIDE_POCKETS_RIGHT_TOOL_COMPARTMENT: {
    label: 'Tool Compartment',
    attribute: 'PANT_SIDE_POCKETS_RIGHT_TOOL_COMPARTMENT',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'ARASHIELD TOOL 6 COMPARTMENT 2X10X10': 'N288267',
    },
    optionGroup: {
      'ARASHIELD TOOL 6 COMPARTMENT 2X10X10': 'PCKT',
    },
    optionType: {
      'ARASHIELD TOOL 6 COMPARTMENT 2X10X10': 'SPECIAL',
    },
    gear: 'Pants'
  },

  /*************** SIDE POCKETS LEFT **********************/
  PANT_SIDE_POCKETS_LEFT_OUTSIDE_REINFORCEMENT: {
    label: 'Outside Reinforcement',
    attribute: 'PANT_SIDE_POCKETS_LEFT_OUTSIDE_REINFORCEMENT',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'DRAGONHIDE FRONT EXPANSION 2X10X8/11': '294SLDH',
    },
    optionGroup: {
      'DRAGONHIDE FRONT EXPANSION 2X10X8/11': 'REINFORCEMENT',
    },
    optionType: {
      'DRAGONHIDE FRONT EXPANSION 2X10X8/11': 'POCKET',
    },
    gear: 'Pants'
  },

  PANT_SIDE_POCKETS_LEFT_SIZE_TYPE: {
    label: 'Size and Type',
    attribute: 'PANT_SIDE_POCKETS_LEFT_SIZE_TYPE',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'SLNT EXPANSION POCKET 2X10X8/11': 'N2STPKA1',
      'ESCAPE SYSTEM POCKET CROSBY 2X7X8 LPKT': 'N242285L',
      'ESCAPE SYSTEM POCKET CMC 2X8X9 LPKT': 'N242389',
    },
    optionGroup: {
      'SLNT EXPANSION POCKET 2X10X8/11': 'PCKT',
      'ESCAPE SYSTEM POCKET CROSBY 2X7X8 LPKT': 'PCKT',
      'ESCAPE SYSTEM POCKET CMC 2X8X9 LPKT': 'PCKT',
    },
    optionType: {
      'SLNT EXPANSION POCKET 2X10X8/11': 'EXPANSION',
      'ESCAPE SYSTEM POCKET CROSBY 2X7X8 LPKT': 'ESCAPE SYSTEM POCKET',
      'ESCAPE SYSTEM POCKET CMC 2X8X9 LPKT': 'ESCAPE SYSTEM POCKET',
    },
    gear: 'Pants'
  },

  PANT_SIDE_POCKETS_LEFT_OUTSITE_REINFORCEMENT: {
    label: 'Outside Reinforcement',
    attribute: 'PANT_SIDE_POCKETS_RIGHT_OUTSITE_REINFORCEMENT',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'DRAGONHIDE FRONT EXPANSION 2X10X8/11': '294SLDH',
    },
    optionGroup: {
      'DRAGONHIDE FRONT EXPANSION 2X10X8/11': 'REINFORCEMENT',
    },
    optionType: {
      'DRAGONHIDE FRONT EXPANSION 2X10X8/11': 'POCKET',
    },
    gear: 'Pants'

  },

  PANT_SIDE_POCKETS_LEFT_INSIDE_REINFORCEMENT: {
    label: 'Inside Reinforcement',
    attribute: 'PANT_SIDE_POCKETS_LEFT_INSIDE_REINFORCEMENT',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'KEV POUCH EXPANSION SLANT POCKET': 'N2STPRA1',
      'KEV POUCH 2x7x8': 'N2KT334',
      'KEV POUCH 2x8x9': 'N2KT389',
    },
    optionGroup: {
      'KEV POUCH EXPANSION SLANT POCKET': 'REINFORCEMENT',
      'KEV POUCH 2x7x8': 'REINFORCEMENT',
      'KEV POUCH 2x8x9': 'REINFORCEMENT',
    },
    optionType: {
      'KEV POUCH EXPANSION SLANT POCKET': 'POCKET',
      'KEV POUCH 2x7x8': 'POCKET',
      'KEV POUCH 2x8x9': 'POCKET',
    },
    gear: 'Pants'
  },

  PANT_SIDE_POCKETS_LEFT_PULL_TAB: {
    label: 'Pull Tab',
    attribute: 'PANT_SIDE_POCKETS_LEFT_PULL_TAB',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'BLK ARASHIELD POCKET PULL TAB': 'N2STPTA1',
    },
    optionGroup: {
      'BLK ARASHIELD POCKET PULL TAB': 'PCKT',
    },
    optionType: {
      'BLK ARASHIELD POCKET PULL TAB': 'OTHER',
    },
    gear: 'Pants'
  },

  PANT_SIDE_POCKETS_LEFT_POCKET_DIVIDER: {
    label: 'Pocket Divider',
    attribute: 'PANT_SIDE_POCKETS_LEFT_POCKET_DIVIDER',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      ' DIVIDER KEVLAR EXP/SEMI 9" HIGH': 'N2KT237',
    },
    optionGroup: {
      ' DIVIDER KEVLAR EXP/SEMI 9" HIGH': 'PCKT',
    },
    optionType: {
      ' DIVIDER KEVLAR EXP/SEMI 9" HIGH': 'DVDR',
    },
    gear: 'Pants'
  },

  PANT_SIDE_POCKETS_LEFT_TOOL_COMPARTMENT: {
    label: 'Tool Compartment',
    attribute: 'PANT_SIDE_POCKETS_LEFT_TOOL_COMPARTMENT',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'ARASHIELD TOOL 6 COMPARTMENT 2X10X10': 'N288267',
    },
    optionGroup: {
      'ARASHIELD TOOL 6 COMPARTMENT 2X10X10': 'PCKT',
    },
    optionType: {
      'ARASHIELD TOOL 6 COMPARTMENT 2X10X10': 'SPECIAL',
    },
    gear: 'Pants'
  },

  /*************** OTHER ****************************/
  PANT_OTHER_PANTS_CUFF: {
    label: 'Pant Cuffs',
    attribute: 'PANT_OTHER_PANTS_CUFF',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'CUFF REINFORCEMENT DRAGONHIDE': 'N2STCRA1',
      ' CUFF REINFORCEMENT ARASHIELD': '2988109'
    },
    optionGroup: {
      'CUFF REINFORCEMENT DRAGONHIDE': 'REINFORCEMENT',
      ' CUFF REINFORCEMENT ARASHIELD': 'REINFORCEMENT'
    },
    optionType: {
      'CUFF REINFORCEMENT DRAGONHIDE': 'CUFF',
      ' CUFF REINFORCEMENT ARASHIELD': 'CUFF'
    },
    gear: 'Pants'
  },

  PANT_OTHER_KNEES_REINFORCEMENT: {
    label: 'Knees Reinforcements',
    attribute: 'PANT_OTHER_KNEES_REINFORCEMENT',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'KNEE SHELL DRAGONHIDE ATX': 'N2STKRA1',
      'KNEE SHELL BLACK SUEDE CATHEDRAL': '290105BC'
    },
    optionGroup: {
      'KNEE SHELL DRAGONHIDE ATX': 'REINFORCEMENT',
      'KNEE SHELL BLACK SUEDE CATHEDRAL': 'REINFORCEMENT'
    },
    optionType: {
      'KNEE SHELL DRAGONHIDE ATX': 'KNEE',
      'KNEE SHELL BLACK SUEDE CATHEDRAL': 'KNEE'
    },
    gear: 'Pants'
  },

  PANT_OTHER_KNEES_PADDING_LINING: {
    label: 'Knees Padding - Lining',
    attribute: 'PANT_OTHER_KNEES_PADDING_LINING',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'KNEE LINER SILIZONE': 'N2STLKA1',
      'KNEELNR 2LYR SILIZONE ATX': '29SLZ627'
    },
    optionGroup: {
      'KNEE LINER SILIZONE': 'REINFORCEMENT',
      'KNEELNR 2LYR SILIZONE ATX': 'REINFORCEMENT'
    },
    optionType: {
      'KNEE LINER SILIZONE': 'PADD',
      'KNEELNR 2LYR SILIZONE ATX': 'PADD'
    },
    gear: 'Pants'
  },

  PANT_OTHER_GLOBEGUARD: {
    label: 'Pant Globeguard',
    attribute: 'PANT_OTHER_GLOBEGUARD',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      ' PANT GLOBEGUARD GMB': 'N200GGG',
      ' PANT GLOBEGUARD NEOP': 'N200GGN'
    },
    optionGroup: {
      ' PANT GLOBEGUARD GMB': 'MISCELLANEOUS',
      ' PANT GLOBEGUARD NEOP': 'MISCELLANEOUS'
    },
    optionType: {
      ' PANT GLOBEGUARD GMB': 'OTHER',
      ' PANT GLOBEGUARD NEOP': 'OTHER'
    },
    gear: 'Pants'
  },

  PANT_OTHER_SUSPENDERS: {
    label: 'Suspenders',
    attribute: 'PANT_OTHER_SUSPENDERS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'REG BLACK PADDED RIPCORD HBK': 'N2STSU01',
      'REGULAR BLACK PDRIP LY1.5 IN PLACE OF': 'I83315T2'
    },
    optionGroup: {
      'REG BLACK PADDED RIPCORD HBK': 'SUSPENDER',
      'REGULAR BLACK PDRIP LY1.5 IN PLACE OF': 'SUSPENDER'
    },
    optionType: {
      'REG BLACK PADDED RIPCORD HBK': 'RPCRD',
      'REGULAR BLACK PDRIP LY1.5 IN PLACE OF': 'RPCRD'
    },
    gear: 'Pants'
  },

  PANT_OTHER_MANDATORY_CCHR: {
    label: 'Mandatory CCHR',
    attribute: 'PANT_OTHER_MANDATORY_CCHR',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'KNEE LINER 2LYR ATX': 'N2N2ATX',
    },
    optionGroup: {
      'KNEE LINER 2LYR ATX': 'REINFORCEMENT',
    },
    optionType: {
      'KNEE LINER 2LYR ATX': 'PADD',
    },
    gear: 'Pants'
  },
}

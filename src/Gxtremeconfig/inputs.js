export default {
  /**************************************************
    *************** Material Options *****************
    **************************************************/
  Gear: {
    label: 'Gear',
    attribute: 'GEAR_VISIBILITY',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      GX3: '1/F',
      Coat: '1',
      Pant: 'F'
    },
    optionGroup: {
      GX3: 'NA',
      Coat: 'NA',
      Pant: 'NA'
    },
    optionType: {
      GX3: 'NA',
      Coat: 'NA',
      Pant: 'NA'
    },
    gear: 'gxtreme'
  },

  Materials: {
    label: 'Materials',
    attribute: 'MATERIALS',
    type: 'radioButtons',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      'Pioneer': 'C7',
      'Agility':'G7',
      'Kombat Flex':'D2',
      'PBI Max':'C3',
      'Peak 5':'F3',
      'PBI Max LP':'58',
      'Armor AP':'D4'
    },
    optionGroup: {
      'Pioneer': 'NA',
      'Agility':'NA',
      'Kombat Flex':'NA',
      'PBI Max':'NA',
      'Peak 5':'NA',
      'PBI Max LP':'NA',
      'Armor AP':'NA'
    },
    optionType: {
      'Pioneer': 'NA',
      'Agility':'NA',
      'Kombat Flex':'NA',
      'PBI Max':'NA',
      'Peak 5':'NA',
      'PBI Max LP':'NA',
      'Armor AP':'NA'
    },
    gear: 'gxtreme'
  },

  Color: {
    label: 'Color',
    attribute: 'Color',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      Black: '01',
      Yellow: '02',
      Tan:'05',
      Gold:'10',
      LightGold:'30',
      DarkGold:'20'
    },
    optionGroup: {
      Black: 'NA',
      Yellow: 'NA',
      Tan:'NA',
      Gold:'NA',
      LightGold:'NA',
      DarkGold:'NA'
    },
    optionType: {
      Black: 'NA',
      Yellow: 'NA',
      Tan:'NA',
      Gold:'NA',
      LightGold:'NA',
      DarkGold:'NA'
    },
    gear: 'gxtreme'
  },

  ThermalLiner: {
    label: 'Thermal Liner',
    attribute: 'THERMAL LINER',
    type: 'radioButtons',
    data: 'tk-platform',
    cssClass: 'active',
    selected: true,
    optionNumber: {
      'Caldura Elite': '57',
      'Glide Ice (2-Layer)':'62',
      'Quantum':'53',
      'Defender (NP Brass)':'74',
      'Defender (Camo)':'81',
      'Titanium SL2':'45',
      'Titanium w/Nomex Nano':'N3',
      'Glide Ice w/Nomex Nano':'N1',
      'Parallon X1M2':'XM',
    },
    optionGroup: {
      'Caldura Elite': 'NA',
      'Glide Ice (2-Layer)':'NA',
      'Quantum':'NA',
      'Defender (NP Brass)':'NA',
      'Defender (Camo)':'NA',
      'Titanium SL2':'NA',
      'Titanium w/Nomex Nano':'NA',
      'Glide Ice w/Nomex Nano':'NA',
      'Parallon X1M2':'NA',
    },
    optionType: {
      'Caldura Elite': 'NA',
      'Glide Ice (2-Layer)':'NA',
      'Quantum':'NA',
      'Defender (NP Brass)':'NA',
      'Defender (Camo)':'NA',
      'Titanium SL2':'NA',
      'Titanium w/Nomex Nano':'NA',
      'Glide Ice w/Nomex Nano':'NA',
      'Parallon X1M2':'NA',
    },
    gear: 'gxtreme'
  },

  MoistureBarrier: {
    label: 'Moisture Barrier',
    attribute: 'MOISTURE BARRIER',
    type: 'radioButtons',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      'Crosstech Black': 'G',
      'Stedair 3000':'E',
      'Stedair Gold':'J',
      'Parallon B2':'B'
    },
    optionGroup: {
      'Crosstech Black': 'NA',
      'Stedair 3000':'NA',
      'Stedair Gold':'NA',
      'Parallon B2':'NA'
    },
    optionType: {
      'Crosstech Black': 'NA',
      'Stedair 3000':'NA',
      'Stedair Gold':'NA',
      'Parallon B2':'NA'
    },
    gear: 'gxtreme'
  },

  /**************************************************
   *************** trim Options *****************
   **************************************************/
  COAT_TRIM_TYPE: {
    label: 'Coat Trim Type',
    attribute: 'COAT TRIM TYPE',
    type: 'radioButtons',
    data: 'tk-platform',
    selected: true,
    cssClass: 'active',
    optionNumber: {
      'NYC': '17(T)703',
      'NFPA B':'17(T)783',
      'NFPA VERT':'17(T)753',
    },
    optionGroup: {
      'NYC': 'NA',
      'NFPA B':'NA',
      'NFPA VERT':'NA',
    },
    optionType: {
      'NYC': 'NA',
      'NFPA B':'NA',
      'NFPA VERT':'NA',
    },
    gear: 'gxtreme'
  },

  COAT_TRIM_COLOR: {
    label: 'Coat Trim Color',
    attribute: 'COAT TRIM COLOR',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      'Lime/Yellow': 'L/Y',
      'Red/Orange': 'R/O',
    },
    optionGroup: {
      'Lime/Yellow': 'NA',
      'Red/Orange': 'NA',
    },
    optionType: {
      'Lime/Yellow': 'NA',
      'Red/Orange': 'NA',
    },
    gear: 'gxtreme'
  },

  COAT_TRIM_MATERIAL: {
    label: 'Coat Trim Material',
    attribute: 'COAT TRIM MATERIAL',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      'Triple Trim':'Triple Trim',
      'Comfort Trim':'Comfort Trim',
      'Brilliance w/Stripe':'Brilliance w/Stripe'
    },
    optionGroup: {
      'Triple Trim':'NA',
      'Comfort Trim':'NA',
      'Brilliance w/Stripe':'NA'
    },
    optionType: {
      'Triple Trim':'NA',
      'Comfort Trim':'NA',
      'Brilliance w/Stripe':'NA'
    },
    gear: 'gxtreme'
  },

  PANTS_TRIM_TYPE: {
    label: 'Pant Trim Type',
    attribute: 'PANTS TRIM TYPE',
    type: 'radioButtons',
    data: 'tk-platform',
    selected: true,
    cssClass: 'active',
    optionNumber: {
      '3" AROUND CUFFS': '27(T)03',
    },
    optionGroup: {
      '3" AROUND CUFFS': 'NA',
    },
    optionType: {
      '3" AROUND CUFFS': 'NA',
    },
    gear: 'gxtreme'
  },

  PANTS_TRIM_COLOR: {
    label: 'Pant Trim Color',
    attribute: 'PANTS TRIM COLOR',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      'Lime/Yellow': 'L/Y',
      'Red/Orange': 'R/O',
    },
    optionGroup: {
      'Lime/Yellow': 'NA',
      'Red/Orange': 'NA',
    },
    optionType: {
      'Lime/Yellow': 'NA',
      'Red/Orange': 'NA',
    },
    gear: 'gxtreme'
  },

  PANT_TRIM_MATERIAL: {
    label: 'Pant Trim Material',
    attribute: 'PANT TRIM MATERIAL',
    type: 'RadioButtonsImages',
    data: 'tk-platform',
    cssClass: 'active',
    optionNumber: {
      'Triple Trim':'Triple Trim',
      'Comfort Trim':'Comfort Trim',
      'Brilliance w/Stripe':'Brilliance w/Stripe'
    },
    optionGroup: {
      'Triple Trim':'NA',
      'Comfort Trim':'NA',
      'Brilliance w/Stripe':'NA'
    },
    optionType: {
      'Triple Trim':'NA',
      'Comfort Trim':'NA',
      'Brilliance w/Stripe':'NA'
    },
    gear: 'gxtreme'
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
      'VISLON ZIP IN-VLC OUT': 'N1STCL03',
      'HK/D IN VLC OUT GX3':'19(XX)307',
      'TC VISZIP IN VLCOUT':'19(XX)T269',
    },
    optionGroup: {
      'VISLON ZIP IN-VLC OUT': 'CLOS',
      'HK/D IN VLC OUT GX3':'NA',
      'TC VISZIP IN VLCOUT':'NA',
    },
    optionType: {
      'VISLON ZIP IN-VLC OUT': 'ZIPV',
      'HK/D IN VLC OUT GX3':'NA',
      'TC VISZIP IN VLCOUT':'NA',
    },
    gear: 'Jacket'
  },

  JACKET_FRONT_STORMFLAP_ZIPPER_PULL: {
    label: 'ZIPPER PULL',
    attribute: 'JACKET_FRONT_STORMFLAP_ZIPPER_PULL',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      NONE: '',
      ZIPPERGRIPPER:'ZIPGRIP'
    },
    optionGroup: {
      NONE: 'NA',
      ZIPPERGRIPPER:'CLOS'
    },
    optionType: {
      NONE: 'NA',
      ZIPPERGRIPPER:'OTHER'
    },
    gear: 'Jacket'
  },

  JACKET_FRONT_HOLDER_STORMFLAP: {
    label: 'HOLDER - STORMFLAP',
    attribute: 'FRONT HOLDERS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NONE':'',
      'HANG STRAP WITH D-RING ': '19(XX)590S',
      'HELMET SNAP W/SLF STRAP': 'N1(XX)190S',
      'MICROPHONE STRAP 1X3': '19(XX)564S',
    },
    optionGroup: {
      'NONE':'NA',
      'HANG STRAP WITH D-RING': 'HOLDER',
      'HELMET SNAP W/SLF STRAP': 'HOLDER',
      'MICROPHONE STRAP 1X3': 'HOLDER',
    },
    optionType: {
      'NONE':'NA',
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
      'NONE':'NA',
      'MICROPHONE STRAP 1X3': '19(XX)564S',
    },
    optionGroup: {
      'NONE':'NA',
      'MICROPHONE STRAP 1X3': 'HOLDER',
    },
    optionType: {
      'NONE':'NA',
      'MICROPHONE STRAP 1X3': 'MICROPHONE',
    },
    gear: 'Jacket'
  },
/***********************JACKET SIDE POCLETS (LEFT & RIGHT)************************* */
  SIZE_AND_TYPE: {
    label: 'SIZE AND TYPE',
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
      'NONE':'',
      'DRAGONHIDE FRONT EXPANSION POCKET 2X8X8': '19428DH',
    },
    optionGroup: {
      'NONE':'',
      'DRAGONHIDE FRONT EXPANSION POCKET 2X8X8': 'REINFORCEMENT',
    },
    optionType: {
      'NONE':'',
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
      'KEV POUCH HANDWARMER 2X8X8': 'N1STPR01',
    },
    optionGroup: {
      'KEV POUCH HANDWARMER 2X8X8': 'REINFORCEMENT',
    },
    optionType: {
      'KEV POUCH HANDWARMER 2X8X8': 'POCKET',
    },
    gear: 'Jacket'
  },
  /*********************COLLAR************************* */
  RIGHT_TOP_COLLAR: {
    label: 'Right Top Collar',
    attribute: 'RIGHT TOP COLLAR',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NONE':'',
      'MICROPHONE STRAP 1X3': '19(XX)564C',
    },
    optionGroup: {
      'NONE':'',
      'MICROPHONE STRAP 1X3': 'HOLDER',
    },
    optionType: {
      'NONE':'',
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
      'MICROPHONE STRAP 1X3': '19(XX)564C',
    },
    optionGroup: {
      'MICROPHONE STRAP 1X3': 'HOLDER',
    },
    optionType: {
      'MICROPHONE STRAP 1X3': 'MICROPHONE',
    },
    gear: 'Jacket'
  },
/*********************CHEST***************************** */
  RIGHT_CHESTSF_POCKETS: {
    label: 'Pockets',
    attribute: 'RIGHT POCKETS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NONE':'',
      'RADIO POCKET 3X3.5X9': '19(XX)413B',
      'RADIO POCKET 2X3.5X8': '19(XX)413C',
      'RADIO POCKET 3X2.5X7': '19(XX)413D',
    },
    optionGroup: {
      'NONE':'',
      'RADIO POCKET 3X3.5X9': 'PCKT',
      'RADIO POCKET 2X3.5X8': 'PCKT',
      'RADIO POCKET 3X2.5X7': 'PCKT',
    },
    optionType: {
      'NONE':'',
      'RADIO POCKET 3X3.5X9': 'RADIO',
      'RADIO POCKET 2X3.5X8': 'RADIO',
      'RADIO POCKET 3X2.5X7': 'RADIO',
    },
    gear: 'Jacket'
  },

  RIGHT_CHESTSF_MIC: {
    label: 'Holder Michrophone',
    attribute: 'RIGHT CHEST MIC',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NONE':'',
      'MICROPHONE STRAP 1X3': '19(XX)564'
    },
    optionGroup: {
      'NONE':'',
      'MICROPHONE STRAP 1X3': 'HOLDER'
    },
    optionType: {
      'NONE':'',
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
      'NONE':'',
      'HANGING STRAP WITH D-RING': '19(XX)590H',
      'STRAP 1X12 W/1X4 VELCRO': 'N1(XX)109',
      'HELMET SNAP W/SLF &VLC STRAP': 'N1(XX)187',
      'SELF HSNP/MIC/2.5X9': 'N1(XX)187',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'N1(XX)298',
      'HELMET SNAP W/SLF STRAP': 'N1(XX)190S',
      'SURVIVOR STRAP': '19(XX)548',
      'SUNLANCE W/SLF HELMET SNAP ABOVE': '19(XX)546C',
    },
    optionGroup: {
      'NONE':'',
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
      'NONE':'',
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
      'NONE':'',
      'RADIO FLAP DUAL NOTCH TAB 3': 'N1(XX)505',
      'RADIO FLAP NOTCH TAB 3': 'N1(XX)5035',
    },
    optionGroup: {
      'NONE':'',
      'RADIO FLAP DUAL NOTCH TAB 3': 'PCKT',
      'RADIO FLAP NOTCH TAB 3': 'PCKT',
    },
    optionType: {
      'NONE':'',
      'RADIO FLAP DUAL NOTCH TAB 3': 'FLAP',
      'RADIO FLAP NOTCH TAB 3': 'RADIO',
    },
    gear: 'Jacket'
  },

  LEFT_CHESTSF_POCKETS: {
    label: 'Pockets',
    attribute: 'LEFT POCKETS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NONE':'',
      'RADIO POCKET 3X3.5X9': '19(XX)413B',
      'RADIO POCKET 2X3.5X8': '19(XX)413C',
      'RADIO POCKET 3X2.5X7': '19(XX)413D',
    },
    optionGroup: {
      'NONE':'',
      'RADIO POCKET 3X3.5X9': 'PCKT',
      'RADIO POCKET 2X3.5X8': 'PCKT',
      'RADIO POCKET 3X2.5X7': 'PCKT',
    },
    optionType: {
      'NONE':'',
      'RADIO POCKET 3X3.5X9': 'RADIO',
      'RADIO POCKET 2X3.5X8': 'RADIO',
      'RADIO POCKET 3X2.5X7': 'RADIO',
    },
    gear: 'Jacket'
  },

  LEFT_CHESTSF_MIC: {
    label: 'Holder Michrophone',
    attribute: 'LEFT CHEST MIC',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NONE':'',
      'MICROPHONE STRAP 1X3': '19(XX)564'
    },
    optionGroup: {
      'NONE':'',
      'MICROPHONE STRAP 1X3': 'HOLDER'
    },
    optionType: {
      'NONE':'',
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
      'NONE':'',
      'RADIO FLAP DUAL NOTCH TAB 3': 'N1(XX)505',
      'RADIO FLAP NOTCH TAB 3': 'N1(XX)5035',
    },
    optionGroup: {
      'NONE':'',
      'RADIO FLAP DUAL NOTCH TAB 3': 'PCKT',
      'RADIO FLAP NOTCH TAB 3': 'PCKT',
    },
    optionType: {
      'NONE':'',
      'RADIO FLAP DUAL NOTCH TAB 3': 'FLAP',
      'RADIO FLAP NOTCH TAB 3': 'FLAP',
    },
    gear: 'Jacket'
  },

  LEFT_CHESTSF_HOLDERS_STORMFLAP: {
    label: 'Holders',
    attribute: 'LEFT HOLDERS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NONE':'',
      'HANGING STRAP WITH D-RING': '19(XX)590H',
      'STRAP 1X12 W/1X4 VELCRO': 'N1(XX)109',
      'HELMET SNAP W/SLF &VLC STRAP': 'N1(XX)187',
      'SELF HSNP/MIC/2.5X9': 'N1(XX)267',
      'FLASHLIGHT STRAP 2.5X9 WITH VELCRO': 'N1(XX)298',
      'HELMET SNAP W/SLF STRAP': 'N1(XX)190S',
      'SURVIVOR STRAP': '19(XX)548',
      'SUNLANCE W/SLF HELMET SNAP ABOVE': '19(XX)546C',
    },
    optionGroup: {
      'NONE':'',
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
      'NONE':'',
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
/**************FRONT*************** */
  RIGHT_FRONT_NEXTSF_HOLDERS: {
    label: 'Holders',
    attribute: 'RIGHT FRONT NEXT TO STORMFLAP',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'HELMET SNAP W/SLF STRAP': 'N1(XX)190',
      'HANGING STRAP WITH D-RING': '19(XX)590H',
      'NONE':''
    },
    optionGroup: {
      'HELMET SNAP W/SLF STRAP': 'HOLDER',
      'HANGING STRAP WITH D-RING': 'HOLDER',
      'NONE':''
    },
    optionType: {
      'HELMET SNAP W/SLF STRAP': 'HELMET SNAP',
      'HANGING STRAP WITH D-RING': 'D-RING',
      'NONE':''
    },
    gear: 'Jacket'
  },

  LEFT_FRONT_NEXTSF_HOLDERS: {
    label: 'holders',
    attribute: 'LEFT FRONT NEXT TO STORMFLAP',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'HELMET SNAP W/SLF STRAP': 'N1(XX)190',
      'HANGING STRAP WITH D-RING': '19(XX)590H',
      'NONE':''
    },
    optionGroup: {
      'HELMET SNAP W/SLF STRAP': 'HOLDER',
      'HANGING STRAP WITH D-RING': 'HOLDER',
      'NONE':''
    },
    optionType: {
      'HELMET SNAP W/SLF STRAP': 'HELMET SNAP',
      'HANGING STRAP WITH D-RING': 'D-RING',
      'NONE':''
    },
    gear: 'Jacket'
  },
/************SLEEVES*********** */
  RIGHT_FLAGS: {
    label: 'FLAGS',
    attribute: 'RIGHT FLAGS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
     'U.S. FLAG EMBROIDERY RIGHT SLEEVE': 'N100107E',
     'CANADIAN FLAG EMBROIDERY RIGHT SLEEVE':'N100107F',
     'NONE':''
    },
    optionGroup: {
     'U.S. FLAG EMBROIDERY RIGHT SLEEVE': 'MISCELLANEOUS',
     'CANADIAN FLAG EMBROIDERY RIGHT SLEEVE':'MISCELLANEOUS',
     'NONE':''
    },
    optionType: {
     'U.S. FLAG EMBROIDERY RIGHT SLEEVE': 'FLAG',
     'CANADIAN FLAG EMBROIDERY RIGHT SLEEVE':'FLAG',
     'NONE':''
    },
    gear: 'Jacket'
   },

   RIGHT_PATCH_PADDING: {
    label: 'CUSTOM PRINTED PATCH PADDING',
    attribute: 'RIGHT EMBROIDERY PADDING',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NONE':'',
      'RSLV CPPS': '1975R615',
    },
    optionGroup: {
      'NONE':'',
      'RSLV CPPS': 'REINFORCEMENT',
    },
    optionType: {
      'NONE':'',
      'RSLV CPPS': 'PADD',
    },
    gear: 'Jacket'
  },

  RIGHT_CUSTOM_PATCHES: {
    label: 'CUSTOM PATCHES',
    attribute: 'RIGHT EMBROIDERY PATCHES',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NONE':'',
     'CUSTOM SILVER PRINT PATCH SLEEVE': 'CPPS',
     'CUSTOM BLACK PRINT PATCH SLEEVE': 'CPPSBLK',
     'CUSTOM GOLD PRINT PATCH SLEEVE': 'CPPSGLD',
     'CUSTOM YELLOW PRINT PATCH SLEEVE': 'CPPSYEL'
    },
    optionGroup: {
      'NONE':'',
     'CUSTOM SILVER PRINT PATCH SLEEVE': 'PATCH',
     'CUSTOM BLACK PRINT PATCH SLEEVE': 'PATCH',
     'CUSTOM GOLD PRINT PATCH SLEEVE': 'PATCH',
     'CUSTOM YELLOW PRINT PATCH SLEEVE': 'PATCH'
    },
    optionType: {
      'NONE':'',
     'CUSTOM SILVER PRINT PATCH SLEEVE': 'PRNT',
     'CUSTOM BLACK PRINT PATCH SLEEVE': 'PRNT',
     'CUSTOM GOLD PRINT PATCH SLEEVE': 'PRNT',
     'CUSTOM YELLOW PRINT PATCH SLEEVE': 'PRNT'
    },
    gear: 'Jacket'
   },

   LEFT_CUSTOM_PATCHES: {
    label: 'CUSTOM PATCHES',
    attribute: 'LEFT EMBROIDERY PATCHES',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NONE':'',
     'CUSTOM SILVER PRINT PATCH SLEEVE': 'CPPS',
     'CUSTOM BLACK PRINT PATCH SLEEVE': 'CPPSBLK',
     'CUSTOM GOLD PRINT PATCH SLEEVE': 'CPPSGLD',
     'CUSTOM YELLOW PRINT PATCH SLEEVE': 'CPPSYEL'
    },
    optionGroup: {
      'NONE':'',
     'CUSTOM SILVER PRINT PATCH SLEEVE': 'PATCH',
     'CUSTOM BLACK PRINT PATCH SLEEVE': 'PATCH',
     'CUSTOM GOLD PRINT PATCH SLEEVE': 'PATCH',
     'CUSTOM YELLOW PRINT PATCH SLEEVE': 'PATCH'
    },
    optionType: {
      'NONE':'',
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
     'U.S. FLAG EMBROIDERY LEFT SLEEVE': 'N100107E',
     'CANADIAN FLAG EMBROIDERY LEFT SLEEVE':'N100107F',
     'NONE':''
    },
    optionGroup: {
     'U.S. FLAG EMBROIDERY LEFT SLEEVE': 'MISCELLANEOUS',
     'CANADIAN FLAG EMBROIDERY LEFT SLEEVE':'MISCELLANEOUS',
     'NONE':''
    },
    optionType: {
     'U.S. FLAG EMBROIDERY LEFT SLEEVE': 'FLAG',
     'CANADIAN FLAG EMBROIDERY LEFT SLEEVE':'FLAG',
     'NONE':''
    },
    gear: 'Jacket'
   },

   LEFT_EMBROIDERY_PADDING: {
    label: 'CUSTOM PRINTED PATCH PADDING',
    attribute: 'LEFT EMBROIDERY PADDING',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NONE':'',
      'LSLV CPPS': '1975R615',
    },
    optionGroup: {
      'NONE':'',
      'LSLV CPPS': 'REINFORCEMENT',
    },
    optionType: {
      'NONE':'',
      'LSLV CPPS': 'PADD',
    },
    gear: 'Jacket'
  },

  /* *************LETTERING******************** */
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

   LETTERS_D_COLOR: {
     label: 'D Letters Color',
     attribute: 'Row D Color Input',
     type: 'radioButtons',
     data: 'tk-platform',
   },

   LETTERS_D_TEXT: {
     label: 'D Letters Text',
     attribute: 'Row D Lettering Input',
     type: 'textInput',
     data: 'tk-platform',

   },

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

  LETTER_PATCH: {
    label: 'PATCH',
    attribute: 'HANGING LETTER PATCH',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'LETTER PATCH SNP/VLC HANG 5X20': 'N1(XX)132',
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
      'Lime/Yellow': 'L/Y',
      'Red/Orange': 'R/O',
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
/***************OTHER********************* */

SLEEVE_WELL: {
  label: 'Sleeve Well',
  attribute: 'SLEEVE WELL',
  type: 'radioButtons',
  data: 'tk-platform',
  optionNumber: {
    'Std Adjust Neop SlvWell': 'N1STSW01',
  },
  optionGroup: {
    'Std Adjust Neop SlvWell': 'SLVW',
  },
  optionType: {
    'Std Adjust Neop SlvWell': 'WRISTER',
  },
  gear: 'Jacket'
},

  WRISTER_LINER: {
    label: 'WRISTER_LINER',
    attribute: 'WRISTER (LINER)',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NOMEX WRISTER LINER':'N1STWR02',
      'NOMEX HAND AND WRIST GUARD LINER':'190549NX',
      'GRY NOMEX WRISTER LINER': '1905G5NX',
      'GRY NOMEX HAND AND WRIST GUARD LINER': '1905G9NX'
    },
    optionGroup: {
      'NOMEX WRISTER LINER':'',
      'NOMEX HAND AND WRIST GUARD LINER':'',
      'GRY NOMEX WRISTER LINER': 'SLVW',
      'GRY NOMEX HAND AND WRIST GUARD LINER': 'SLVW'
    },
    optionType: {
      'NOMEX WRISTER LINER':'',
      'NOMEX HAND AND WRIST GUARD LINER':'',
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
      'NONE':''
    },
    optionGroup: {
      'THUMB HOLE LOOP LINER': 'MISCELLANEOUS',
      'NONE':''
    },
    optionType: {
      'THUMB HOLE LOOP LINER': 'OTHER',
      'NONE':''
    },
    gear: 'Jacket'
  },

  SLEEVE_CUFFS: {
    label: 'Sleeve Cuffs',
    attribute: 'SLEEVE CUFFS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'STD SUEDE CUFFS':'N1STCR01',
      'CUFF REINFORCEMENT DRAGONHIDE': '19DH506',
      'CUFF REINFORCEMENT ARASHIELD': '19DH506'
    },
    optionGroup: {
      'STD SUEDE CUFFS':'',
      'CUFF REINFORCEMENT DRAGONHIDE': 'REINFORCEMENT',
      'CUFF REINFORCEMENT ARASHIELD': 'REINFORCEMENT'
    },
    optionType: {
      'STD SUEDE CUFFS':'',
      'CUFF REINFORCEMENT DRAGONHIDE': 'CUFF',
      'CUFF REINFORCEMENT ARASHIELD': 'CUFF'
    },
    gear: 'Jacket'
  },

  GLOBE_GUARD: {
    label: 'Globeguard',
    attribute: 'GLOBEGUARD',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'NONE':'',
      'COAT GLOBEGUARD GMB': 'N100GGG',
      'COAT GLOBEGUARD NEOP': 'N100GGN'
    },
    optionGroup: {
      'NONE':'',
      'COAT GLOBEGUARD GMB': 'MISCELLANEOUS',
      'COAT GLOBEGUARD NEOP': 'MISCELLANEOUS'
    },
    optionType: {
      'NONE':'',
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

  THERMAL_LINER_POCKET: {
    label: 'Thermal Liner Pocket',
    attribute: 'THERMAL LINER POCKET',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'Std. Liner Pkt - Left': 'N1STLP02',
    },
    optionGroup: {
      'Std. Liner Pkt - Left': 'PCKT',
    },
    optionType: {
      'Std. Liner Pkt - Left': 'THRML',
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
  /**************************************************
   *************** Pants Options ********************
   **************************************************/

  /*************** FRONT ****************************/

  PANT_FRONT_FRONTCLOSURE_BELT_LOOPS: {
    label: 'BELT LOOPS',
    attribute: 'PANT_FRONT_FRONTCLOSURE_BELT_LOOPS',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'BLTLPS WD GPS': 'N200276G',
      'NONE':''
    },
    optionGroup: {
      'BLTLPS WD GPS': 'MISCELLANEOUS',
      'NONE':''
    },
    optionType: {
      'BLTLPS WD GPS': 'LOOP',
      'NONE':''
    },
    gear: 'Pants'
  },

  PANT_FRONT_FRONTCLOSURE_BELT: {
    label: 'BELT',
    attribute: 'PANT_FRONT_FRONTCLOSURE_BELT',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'ESCAPE BLT':'N200301',
      'BLK NOMEX BLT GPS':'N200255G',
      'NOMEX BLT/TUNNEL':'N2STWC05'
    },
    optionGroup: {
      'ESCAPE BLT':'',
      'BLK NOMEX BLT GPS':'',
      'NOMEX BLT/TUNNEL':''
    },
    optionType: {
      'ESCAPE BLT':'',
      'BLK NOMEX BLT GPS':'',
      'NOMEX BLT/TUNNEL':''
    },
    gear: 'Pants'
  },

  PANT_FRONT_FRONTCLOSURE_CARABINER: {
    label: 'CARABINER',
    attribute: 'PANT_FRONT_FRONTCLOSURE_CARABINER',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'CMC CARABINER': 'N2CBCMC',
      'YATES CARABINER': 'N2CBYATE',
      'NONE':''
    },
    optionGroup: {
      'CMC CARABINER': 'MISCELLANEOUS',
      'YATES CARABINER': 'MISCELLANEOUS',
      'NONE':''
    },
    optionType: {
      'CMC CARABINER': 'HARNESS',
      'YATES CARABINER': 'HARNESS',
      'NONE':''
    },
    gear: 'Pants'
  },

   /***************PANT SIDE POCKETS (LEFT & RIGHT)****************************/
  PANT_SIDE_POCKETS_RIGHT_SIZE_TYPE: {
    label: 'SIZE AND TYPE',
    attribute: 'PANT_SIDE_POCKETS_RIGHT_SIZE_TYPE',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'EXP PKT 2X10X10': 'N2STPK01',
      'ESCAPE SYSTEM POCKET CROSBY 2X7X8 RPKT': 'N2(XX)285',
      'ESCAPE SYSTEM POCKET CMC 2X8X9 RPKT': 'N2(XX)389R',
    },
    optionGroup: {
      'EXP PKT 2X10X10': '',
      'ESCAPE SYSTEM POCKET CROSBY 2X7X8 RPKT': 'PCKT',
      'ESCAPE SYSTEM POCKET CMC 2X8X9 RPKT': 'PCKT',
    },
    optionType: {
      'EXP PKT 2X10X10': '',
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
      'Kevlar':'N2STPR01'
    },
    optionGroup: {
      'Kevlar':'REINFORCEMENT'
    },
    optionType: {
      'Kevlar':'POCKET'
    },
    gear: 'Pants'
  },

  PANT_SIDE_POCKETS_LEFT_INSIDE_REINFORCEMENT: {
    label: 'Inside Reinforcement',
    attribute: 'PANT_SIDE_POCKETS_LEFT_INSIDE_REINFORCEMENT',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
     'Kevlar':'N2STPR01'
    },
    optionGroup: {
      'Kevlar':'REINFORCEMENT'
    },
    optionType: {
      'Kevlar':'POCKET'
    },
    gear: 'Pants'
  },

  PANT_SIDE_POCKETS_LEFT_SIZE_TYPE: {
    label: 'SIZE AND TYPE',
    attribute: 'PANT_SIDE_POCKETS_LEFT_SIZE_TYPE',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'EXP PKT 2X10X10': 'N2STPK01',
      'ESCAPE SYSTEM POCKET CROSBY 2X7X8 LPKT': 'N2(XX)285L',
      'ESCAPE SYSTEM POCKET CMC 2X8X9 LPKT': 'N2(XX)389R',
    },
    optionGroup: {
      'EXP PKT 2X10X10': '',
      'ESCAPE SYSTEM POCKET CROSBY 2X7X8 LPKT': 'PCKT',
      'ESCAPE SYSTEM POCKET CMC 2X8X9 LPKT': 'PCKT',
    },
    optionType: {
      'EXP PKT 2X10X10': '',
      'ESCAPE SYSTEM POCKET CROSBY 2X7X8 LPKT': 'ESCAPE SYSTEM POCKET',
      'ESCAPE SYSTEM POCKET CMC 2X8X9 LPKT': 'ESCAPE SYSTEM POCKET',
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
      'STD SUEDE CUFFS':'N2STCR01',
      'CUFF REINFORCEMENT DRAGONHIDE': '29DH109',
      ' CUFF REINFORCEMENT ARASHIELD': '2988109'
    },
    optionGroup: {
      'STD SUEDE CUFFS':'',
      'CUFF REINFORCEMENT DRAGONHIDE': 'REINFORCEMENT',
      ' CUFF REINFORCEMENT ARASHIELD': 'REINFORCEMENT'
    },
    optionType: {
      'STD SUEDE CUFFS':'',
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
      'KNEE SHELL DRAGONHIDE CATHEDRAL': 'N2DH104C',
      'KNEE SHELL BLACK SUEDE CATHEDRAL': '290105BC',
      'KNEE SHELL ARASHIELD CATHEDRAL':'N288104C'
    },
    optionGroup: {
      'KNEE SHELL DRAGONHIDE ATX': 'REINFORCEMENT',
      'KNEE SHELL BLACK SUEDE CATHEDRAL': 'REINFORCEMENT',
      'KNEE SHELL ARASHIELD CATHEDRAL':''
    },
    optionType: {
      'KNEE SHELL DRAGONHIDE ATX': 'KNEE',
      'KNEE SHELL BLACK SUEDE CATHEDRAL': 'KNEE',
      'KNEE SHELL ARASHIELD CATHEDRAL':''
    },
    gear: 'Pants'
  },

  PANT_OTHER_GLOBEGUARD: {
    label: 'Pant Globeguard',
    attribute: 'PANT_OTHER_GLOBEGUARD',
    type: 'radioButtons',
    data: 'tk-platform',
    optionNumber: {
      'PANT GLOBEGUARD GMB': 'N200GGG',
      'PANT GLOBEGUARD NEOP': 'N200GGN',
      'NONE':''
    },
    optionGroup: {
      'PANT GLOBEGUARD GMB': 'MISCELLANEOUS',
      'PANT GLOBEGUARD NEOP': 'MISCELLANEOUS',
      'NONE':''
    },
    optionType: {
      'PANT GLOBEGUARD GMB': 'OTHER',
      'PANT GLOBEGUARD NEOP': 'OTHER',
      'NONE':''
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
      'Additional CCHR Req': '2975615C',
    },
    optionGroup: {
      'Additional CCHR Req': 'REINFORCEMENT',
    },
    optionType: {
      'Additional CCHR Req': 'PADD',
    },
    gear: 'Pants'
  },
}



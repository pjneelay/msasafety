export default [
  {
    label: 'gxtreme',
    sections: [
      {
        label: 'Materials',
        sections: [
          {
            label: 'GEAR',
            inputs: ['Gear'],
          },
          {
            label: 'MATERIALS',
            inputs: ['Materials'],
          },
          {
            label: 'COLOR',
            inputs: ['Color'],
          },
          {
            label: 'THERMAL LINER',
            inputs: ['ThermalLiner'],
          },
          {
            label: 'MOISTURE BARRIER',
            inputs: ['MoistureBarrier'],
          },
        ],
      },
      {
        label: 'Trim',
        sections: [
          {
            label: 'COAT TRIM',
            inputs: ['COAT_TRIM_TYPE', 'COAT_TRIM_COLOR','COAT_TRIM_MATERIAL'],
          },
          {
            label: 'PANTS TRIM',
            inputs: ['PANTS_TRIM_TYPE', 'PANTS_TRIM_COLOR','PANT_TRIM_MATERIAL'],
          },
        ]
      }
    ],
  },
  {
    label: 'jacket',
    sections: [
      {
        label: 'FRONT',
        sections: [
          {
            label: 'STORMFLAP',
            inputs: ['JACKET_FRONT_STORMFLAP_CLOSURE', 'JACKET_FRONT_STORMFLAP_ZIPPER_PULL', 'JACKET_FRONT_HOLDER_STORMFLAP', 'JACKET_FRONT_HOLDER_ABOVE_TRIM'],
          },
        ],
      },
      {
        label: 'SIDE POCKETS',
        sections: [
          {
            label: 'SIDE POCKETS',
            inputs: ['SIZE_AND_TYPE', 'OUTSIDE_REINFORCEMENT', 'INSIDE_REINFORCEMENT'],
          },
        ],
      },
      {
        label: 'COLLAR OPTIONS',
        sections: [
          {
            label: 'COLLAR OPTIONS',
            inputs: ['RIGHT_TOP_COLLAR','LEFT_TOP_COLLAR'],
          }
        ]
      },
      {
        label: 'RIGHT CHEST',
        sections: [
          {
            label: 'NEXT TO STORMFLAP',
            inputs: ['RIGHT_CHESTSF_POCKETS','RIGHT_CHESTSF_ANTENNA_NOTCH', 'RIGHT_CHESTSF_MIC','RIGHT_CHESTSF_HOLDERS_STORMFLAP'],
          },
         
        ],
      },
      {
        label: 'LEFT CHEST',
        sections: [
          {
            label: 'NEXT TO STORMFLAP',
            inputs: ['LEFT_CHESTSF_POCKETS','LEFT_CHESTSF_ANTENNA_NOTCH', 'LEFT_CHESTSF_MIC', 'LEFT_CHESTSF_HOLDERS_STORMFLAP'],
          },
          
        ],
      },
      {
        label: 'RIGHT FRONT',
        sections: [
          {
            label: 'Other Feature (Next to Stormflap)',
            inputs: ['RIGHT_FRONT_NEXTSF_HOLDERS'],
          },
          // {
          //   label: 'Other Feature (Nehind Base Pocket)',
          //   inputs: ['rightFrontBehindBasePocketHolders'],
          // }
        ],
      },
      {
        label: 'LEFT FRONT',
        sections: [
          {
            label: 'Other Feature (Next to Stormflap)',
            inputs: ['LEFT_FRONT_NEXTSF_HOLDERS'],
          },
          // {
          //   label: 'Other Feature (Nehind Base Pocket)',
          //   inputs: ['leftFrontBehindBasePocketHolders'],
          // }
        ],
      },
      {
        label: 'RIGHT SLEEVE',
        sections: [
          {
            label: 'FLAG / CUSTOM PRINTED PATCH',
            inputs: ['RIGHT_FLAGS', 'RIGHT_PATCH_PADDING','RIGHT_CUSTOM_PATCHES']
          },
          /*{
            label: 'CUSTOM PRINTED PATCH PADDING',
            inputs: ['rightEmbroideryPadding'],
            cssClass: ['right-patch-padding']
          }*/
        ],
      },
      {
        label: 'LEFT SLEEVE',
        sections: [
          {
            label: 'FLAG / CUSTOM PRINTED PATCH',
            inputs: ['LEFT_FLAGS', 'LEFT_PATCH_PADDING','LEFT_CUSTOM_PATCHES']
          },
          /*{
            label: 'CUSTOM PRINTED PATCH PADDING',
            inputs: ['leftEmbroideryPadding'],
            cssClass: ['left-patch-padding']
          }*/
        ],
      },
      
      {
        label: 'BACK LETTERING',
        sections: [
          {
            label: 'Row A Lettering',
            inputs: ['LETTERS_A_TEXT', 'LETTER_A_SIZE','LETTERS_A_COLOR'],
          },
          {
            label: 'Row B Lettering',
            inputs:['LETTERS_B_TEXT', 'LETTER_B_SIZE','LETTERS_B_COLOR'],
          },
          {
            label: 'Row C Lettering',
            inputs: ['LETTERS_C_TEXT', 'LETTER_C_SIZE','LETTERS_C_COLOR'],
          },
          {
            label: 'Row D Lettering',
            inputs: ['LETTERS_D_TEXT', 'LETTER_D_SIZE','LETTERS_D_COLOR'],
          },
          {
            label: 'Row E Lettering',
            inputs:['LETTERS_E_TEXT', 'LETTER_E_SIZE','LETTERS_E_COLOR'],
          },
          {
            label: 'Row F Lettering',
            inputs:['LETTERS_F_TEXT', 'LETTER_F_SIZE','LETTERS_F_COLOR'],
          },
          {
            label: 'Hanging Letter Patch',
            inputs: ['LETTER_PATCH'],
          },
          {
            label: 'Hanging Letter Patch Lettering ',
            inputs: ['LETTERS_TEXT','LETTER_SIZE','LETTERS_COLOR'],
          }
        ],
      },
      {
        label: 'OTHER',
        sections: [
          {
            label: 'Sleeve Well Configuration',
            inputs: ['SLEEVE_WELL'],
          },
          {
            label: 'Wrister (Liner) Adjustable Sleevewell',
            inputs: ['WRISTER_LINER'],
          },
          {
            label: 'Wrister (Liner) Thumb Hole Loop',
            inputs: ['WRISTER_LINER_THUMB_HOLE_LOOP'],
          },
          {
            label: 'Sleeve Cuffs',
            inputs: ['SLEEVE_CUFFS'],
          },
          
          {
            label: 'Globeguard',
            inputs: ['GLOBE_GUARD'],
          },
          {
            label: 'Neck Hanger Loop',
            inputs: ['NECK_HANGER_LOOP'],
          },
          {
            label: 'Thermal Liner Pocket',
            inputs: ['THERMAL_LINER_POCKET'],
          },
          {
            label: 'Liner Attachment (Shell)',
            inputs: ['LINER_ATTACHMENT_SHELL'],
          },
          {
            label: 'Liner Attachment (Liner)',
            inputs: ['LINER_ATTACHMENT_LINER'],
          },
          {
            label: 'DRD STRAP',
            inputs: ['DRD_STRAP'],
          },
        ],
      },
    ],
  },
  {
    label: 'pants',
    sections: [
      {
        label: 'FRONT',
        sections: [
          {
            label: 'FRONT CLOSURE',
            inputs: ['PANT_FRONT_FRONTCLOSURE_BELT_LOOPS', 'PANT_FRONT_FRONTCLOSURE_BELT', 'PANT_FRONT_FRONTCLOSURE_CARABINER'],
          }
        ]
      },
      {
        label: 'SIDE POCKETS',
        sections: [
          {
            label: 'SIDE POCKETS (RIGHT)',
            inputs: ['PANT_SIDE_POCKETS_RIGHT_SIZE_TYPE','PANT_SIDE_POCKETS_RIGHT_INSIDE_REINFORCEMENT'],
          },
          {
            label: 'SIDE POCKETS (LEFT)',
            inputs: ['PANT_SIDE_POCKETS_LEFT_SIZE_TYPE','PANT_SIDE_POCKETS_LEFT_INSIDE_REINFORCEMENT'],
          }
        ]
      },
      {
        label: 'OTHER',
        sections: [
          {
            label: 'PANT CUFFS',
            inputs: ['PANT_OTHER_PANTS_CUFF'],
          },
          {
            label: 'KNEES REINFORCEMENT',
            inputs: ['PANT_OTHER_KNEES_REINFORCEMENT'],
          },
          {
            label: 'GLOBEGUARD',
            inputs: ['PANT_OTHER_GLOBEGUARD'],
          },
          {
            label: 'SUSPENDERS',
            inputs: ['PANT_OTHER_SUSPENDERS'],
          },
          {
            label: 'Mandatory CCHR',
            inputs: ['PANT_OTHER_MANDATORY_CCHR'],
          }
        ]
      },
    ]
  },
  {
    label: 'summary',
    sections: [
      {
        label: 'CONFIGURATION',
        sections: [
          {
           
          },
        ]
      },
      {
        label: 'LETTERING',
        sections: [
          {
           
          },
        ]
      },
      {
        label: 'SHARE VIA EMAIL',
        sections: [
          {
            
          },
        ]
      }
    ]
  }
];


export default [
  {
    label: 'athletix ™',
    sections: [
      {
        label: 'Materials',
        sections: [
          {
            label: 'GEAR',
            inputs: ['GEAR_VISIBILITY'],
          },
          {
            label: 'OUTER SHELL',
            inputs: ['outerShell'],
          },
          {
            label: 'COLOR',
            inputs: ['color'],
          },
          {
            label: 'THERMAL LINER',
            inputs: ['thermalLiner'],
          },
          {
            label: 'MOISTURE BARRIER',
            inputs: ['moistureBarrier'],
          },
        ],
      },
      {
        label: 'Trim',
        sections: [
          {
            label: 'COAT TRIM',
            inputs: ['COAT_TRIM_TYPE', 'COAT_TRIM_COLOR'],
          },
          {
            label: 'PANTS TRIM',
            inputs: ['PANTS_TRIM_TYPE', 'PANTS_TRIM_COLOR'],
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
            inputs: ['sizeAndType', 'outsideReinforcement', 'insideReinforcement', 'pullTab', 'rightSidePocketDivider', 'leftSidePocketDivider'],
          },
        ],
      },
      {
        label: 'COLLAR OPTIONS',
        sections: [
          {
            label: 'COLLAR OPTIONS',
            inputs: ['rightTopCollar','leftTopCollar'],
          }
        ]
      },
      {
        label: 'RIGHT CHEST',
        sections: [
          {
            label: 'NEXT TO STORMFLAP',
            inputs: ['rightChestSFPockets','rightChestSFTrimOverPocket','rightChestSFAntennaNotch', 'rightChestSFMic','rightChestSFHoldersStormFlap'],
          },
          // {
          //   label: 'TWD SLEEVE',
          //   inputs: ['rightChestSleeveHolders'],
          // },
        ],
      },
      {
        label: 'LEFT CHEST',
        sections: [
          {
            label: 'NEXT TO STORMFLAP',
            inputs: ['leftChestSFPockets','leftChestSFTrimOverPocket','leftChestSFAntennaNotch', 'leftChestSFMic', 'leftChestSFHoldersStormFlap'],
          },
          // {
          //   label: 'TWD SLEEVE',
          //   inputs: ['leftChestSleeveHolders'],
          // }
        ],
      },
      {
        label: 'RIGHT SLEEVE',
        sections: [
          {
            label: 'FLAG / CUSTOM PRINTED PATCH',
            inputs: ['rightFlags', 'rightEmbroidery']
          },
          {
            label: 'CUSTOM PRINTED PATCH PADDING',
            inputs: ['rightEmbroideryPadding'],
            cssClass: ['right-patch-padding']
          }
        ],
      },
      {
        label: 'LEFT SLEEVE',
        sections: [
          {
            label: 'FLAG / CUSTOM PRINTED PATCH',
            inputs: ['leftFlags', 'leftEmbroidery']
          },
          {
            label: 'CUSTOM PRINTED PATCH PADDING',
            inputs: ['leftEmbroideryPadding'],
            cssClass: ['left-patch-padding']
          }
        ],
      },
      {
        label: 'RIGHT FRONT',
        sections: [
          {
            label: 'Other Feature (Next to Stormflap)',
            inputs: ['rightFrontNextSFHolders'],
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
            inputs: ['leftFrontNextSFHolders'],
          },
          // {
          //   label: 'Other Feature (Nehind Base Pocket)',
          //   inputs: ['leftFrontBehindBasePocketHolders'],
          // }
        ],
      },
      {
        label: 'BACK LETTERING',
        sections: [
          {
            label: 'Row A Lettering',
            inputs: ['lettersAText', 'letterASize','lettersAColor'],
          },
          {
            label: 'Row B Lettering',
            inputs: ['lettersBText', 'letterBSize','lettersBColor'],
          },
          {
            label: 'Row C Lettering',
            inputs: ['lettersCText', 'letterCSize','lettersCColor'],
          },
          {
            label: 'Row D Lettering (NOT AVAILABLE)',
            inputs: ['lettersDText'],
          },
          {
            label: 'Row E Lettering',
            inputs: ['lettersEText', 'letterESize','lettersEColor'],
          },
          {
            label: 'Row F Lettering',
            inputs: ['lettersFText', 'letterFSize','lettersFColor'],
          },
          {
            label: 'Hanging Letter Patch',
            inputs: ['letterPatch'],
          },
          {
            label: 'Hanging Letter Patch Lettering ',
            inputs: ['lettersText','letterSize','lettersColor'],
          }
        ],
      },
      {
        label: 'OTHER',
        sections: [
          {
            label: 'Sleeve Well Configuration',
            inputs: ['sleeveWellConfiguration'],
          },
          {
            label: 'Wrister (Liner)',
            inputs: ['wristerLiner'],
          },
          {
            label: 'Wrister (Liner) Thumb Hole Loop',
            inputs: ['wristerLinerThumbHoleLoop'],
          },
          {
            label: 'Sleeve Cuffs',
            inputs: ['sleeveCuffs'],
          },
          {
            label: 'Shoulder Padding',
            inputs: ['shoulderPadding'],
          },
          {
            label: 'Globeguard',
            inputs: ['globeguard'],
          },
          {
            label: 'Neck Hanger Loop',
            inputs: ['neckHangerLoop'],
          },
          {
            label: 'Hem Snap Tabs (Shell)',
            inputs: ['hemSnapTabsSell'],
          },
          {
            label: 'Hem Snap Tabs (Liner)',
            inputs: ['hemSnapTabsLiner'],
          },
          {
            label: 'Thermal Liner Pocket',
            inputs: ['thermalLinerPocket'],
          },
          {
            label: 'Liner Attachment (Shell)',
            inputs: ['linerAttachmentShell'],
          },
          {
            label: 'Liner Attachment (Liner)',
            inputs: ['linerAttachmentLiner'],
          },
          {
            label: 'DRD STRAP',
            inputs: ['drdStrap'],
          },
          {
            label: 'PIPING',
            inputs: ['deletePiping'],
          }
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
            inputs: ['PANT_FRONT_FRONTCLOSURE_CLOSURE', 'PANT_FRONT_FRONTCLOSURE_BELT_LOOPS', 'PANT_FRONT_FRONTCLOSURE_BELT', 'PANT_FRONT_FRONTCLOSURE_CARABINER', 'PANT_FRONT_FRONTCLOSURE_RAPPELLING'],
          }
        ]
      },
      {
        label: 'SIDE POCKETS',
        sections: [
          {
            label: 'SIDE POCKETS (RIGHT)',
            inputs: ['PANT_SIDE_POCKETS_RIGHT_SIZE_TYPE', 'PANT_SIDE_POCKETS_RIGHT_OUTSITE_REINFORCEMENT', 'PANT_SIDE_POCKETS_RIGHT_INSIDE_REINFORCEMENT', 'PANT_SIDE_POCKETS_RIGHT_PULL_TAB', 'PANT_SIDE_POCKETS_RIGHT_POCKET_DIVIDER', 'PANT_SIDE_POCKETS_RIGHT_TOOL_COMPARTMENT'],
          },
          {
            label: 'SIDE POCKETS (LEFT)',
            inputs: ['PANT_SIDE_POCKETS_LEFT_SIZE_TYPE', 'PANT_SIDE_POCKETS_LEFT_OUTSIDE_REINFORCEMENT', 'PANT_SIDE_POCKETS_LEFT_INSIDE_REINFORCEMENT', 'PANT_SIDE_POCKETS_LEFT_PULL_TAB', 'PANT_SIDE_POCKETS_LEFT_POCKET_DIVIDER', 'PANT_SIDE_POCKETS_LEFT_TOOL_COMPARTMENT'],
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
            label: 'KNEES PADDING - LINING',
            inputs: ['PANT_OTHER_KNEES_PADDING_LINING'],
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
            //label: 'Chest',
            //inputs: ['holders','pockets','closures','reinforcements'],
          },
        ]
      },
      {
        label: 'LETTERING',
        sections: [
          {
            //label: 'Chest',
            //inputs: ['holders','pockets','closures','reinforcements'],
          },
        ]
      },
      {
        label: 'REQUEST QUOTE',
        sections: [
          {
            //label: 'Chest',
            //inputs: ['holders','pockets','closures','reinforcements'],
          },
        ]
      }
    ]
  }
];
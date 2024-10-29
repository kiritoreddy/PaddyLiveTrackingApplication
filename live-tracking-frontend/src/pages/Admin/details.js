export const shifitingColumns = [
    { field: 'ppcName',headerClass: 'center-header', headerName: 'Paddy Center',minWidth:160 },

    {
      headerName: 'Qtls Purchase',
      headerClass: 'center-header',
      children: [
        { field: 'purchaseA', headerName: 'A',cellStyle: { textAlign: 'center' ,headerClass: 'center-header',} },
        { field: 'purchaseC', headerName: 'C',cellStyle: { textAlign: 'center',headerClass: 'center-header', } }
      ]
    },
    {
      headerName: 'Qtls Shifted',
      headerClass: 'center-header',
      children: [
        { field: 'shiftedA', headerName: 'A',cellStyle: { textAlign: 'center' , headerClass: 'center-header', } },
        { field: 'shiftedC', headerName: 'C',cellStyle: { textAlign: 'center' , headerClass: 'center-header', } }
      ]
    }, {
      headerName: 'Qtls To Be Shifed',
      headerClass: 'center-header',
      children: [
        { field: 'tobeShifedA', headerName: 'A' , cellStyle: { textAlign: 'center' , headerClass: 'center-header', } },
        { field: 'tobeShifedC', headerName: 'C' , cellStyle: { textAlign: 'center' , headerClass: 'center-header', } }
      ],
    },
    {
      field: 'totalToBeShifed', hide: true, sort: 'desc'
    }
  ]

  export const shiftingData = [
    { ppcName: "Madikonda", purchaseA: 2056, purchaseC: 3278, shiftedA: 1025, shiftedC: 1500, tobeShifedA: 1030, tobeShifedC: 1777, totalToBeShifed: 2807 },
    { ppcName: "Tekulagudem", purchaseA: 1548, purchaseC: 2789, shiftedA: 875, shiftedC: 1458, tobeShifedA: 672, tobeShifedC: 1331, totalToBeShifed: 2003 },
    { ppcName: "Bhattupally", purchaseA: 3300, purchaseC: 4111, shiftedA: 1600, shiftedC: 2000, tobeShifedA: 1700, tobeShifedC: 2110, totalToBeShifed: 3810 },
    { ppcName: "Tharalapally", purchaseA: 2505, purchaseC: 3120, shiftedA: 1200, shiftedC: 1300, tobeShifedA: 1305, tobeShifedC: 1820, totalToBeShifed: 3125 },
    { ppcName: "Kadipikonda", purchaseA: 3054, purchaseC: 4077, shiftedA: 1300, shiftedC: 1500, tobeShifedA: 1754, tobeShifedC: 2576, totalToBeShifed: 4330 },
    { ppcName: "Mulkalagudem", purchaseA: 2555, purchaseC: 3789, shiftedA: 1000, shiftedC: 1560, tobeShifedA: 1554, tobeShifedC: 2229, totalToBeShifed: 3783 },
    { ppcName: "Nagalgudem", purchaseA: 2100, purchaseC: 3298, shiftedA: 1150, shiftedC: 1600, tobeShifedA: 949, tobeShifedC: 1697, totalToBeShifed: 2646 },
    { ppcName: "Dharmajipet", purchaseA: 2889, purchaseC: 3155, shiftedA: 1250, shiftedC: 1420, tobeShifedA: 1639, tobeShifedC: 1735, totalToBeShifed: 3374 },
    { ppcName: "Siripuram", purchaseA: 2754, purchaseC: 3100, shiftedA: 1150, shiftedC: 1300, tobeShifedA: 1604, tobeShifedC: 1799, totalToBeShifed: 3403 },
    { ppcName: "Vellampally", purchaseA: 2677, purchaseC: 3322, shiftedA: 1200, shiftedC: 1400, tobeShifedA: 1477, tobeShifedC: 1922, totalToBeShifed: 4399 }
];


  export const OPMSData = [
    { ppcName: "Madikonda", sentToRiceMillA: 2056, sentToRiceMillC: 3278, opmsDoneA: 1025, opmsDoneC: 1500, OPMCLeftA: 1030, OPMCLeftC: 1777, totalOPMCLeft: 2807 },
    { ppcName: "Tekulagudem", sentToRiceMillA: 1548, sentToRiceMillC: 2789, opmsDoneA: 875, opmsDoneC: 1458, OPMCLeftA: 672, OPMCLeftC: 1331, totalOPMCLeft: 2003 },
    { ppcName: "Bhattupally", sentToRiceMillA: 3300, sentToRiceMillC: 4111, opmsDoneA: 1600, opmsDoneC: 2000, OPMCLeftA: 1700, OPMCLeftC: 2110, totalOPMCLeft: 3810 },
    { ppcName: "Tharalapally", sentToRiceMillA: 2505, sentToRiceMillC: 3120, opmsDoneA: 1200, opmsDoneC: 1300, OPMCLeftA: 1305, OPMCLeftC: 1820, totalOPMCLeft: 3125 },
    { ppcName: "Kadipikonda", sentToRiceMillA: 3054, sentToRiceMillC: 4077, opmsDoneA: 1300, opmsDoneC: 1500, OPMCLeftA: 1754, OPMCLeftC: 2576, totalOPMCLeft: 4330 },
    { ppcName: "Mulkalagudem", sentToRiceMillA: 2555, sentToRiceMillC: 3789, opmsDoneA: 1000, opmsDoneC: 1560, OPMCLeftA: 1554, OPMCLeftC: 2229, totalOPMCLeft: 3783 },
    { ppcName: "Nagalgudem", sentToRiceMillA: 2100, sentToRiceMillC: 3298, opmsDoneA: 1150, opmsDoneC: 1600, OPMCLeftA: 949, OPMCLeftC: 1697, totalOPMCLeft: 2646 },
    { ppcName: "Dharmajipet", sentToRiceMillA: 2889, sentToRiceMillC: 3155, opmsDoneA: 1250, opmsDoneC: 1420, OPMCLeftA: 1639, OPMCLeftC: 1735, totalOPMCLeft: 3374 },
    { ppcName: "Siripuram", sentToRiceMillA: 2754, sentToRiceMillC: 3100, opmsDoneA: 1150, opmsDoneC: 1300, OPMCLeftA: 1604, OPMCLeftC: 1799, totalOPMCLeft: 3403 },
    { ppcName: "Vellampally", sentToRiceMillA: 2677, sentToRiceMillC: 3322, opmsDoneA: 1200, opmsDoneC: 1400, OPMCLeftA: 1477, OPMCLeftC: 1922, totalOPMCLeft: 4399 }
];


  export const opmsColumns = [
    { field: 'ppcName',headerClass: 'center-header', headerName: 'Paddy Center',minWidth:160 },

    {
      headerName: 'Qtls Sent to Ricemill',
      headerClass: 'center-header',
      children: [
        { field: 'sentToRiceMillA', headerName: 'A',cellStyle: { textAlign: 'center' ,headerClass: 'center-header',} },
        { field: 'sentToRiceMillC', headerName: 'C',cellStyle: { textAlign: 'center',headerClass: 'center-header', } }
      ]
    },
    {
      headerName: 'Qtls OPMS Entries Done',
      headerClass: 'center-header',
      children: [
        { field: 'opmsDoneA', headerName: 'A',cellStyle: { textAlign: 'center' , headerClass: 'center-header', } },
        { field: 'opmsDoneC', headerName: 'C',cellStyle: { textAlign: 'center' , headerClass: 'center-header', } }
      ]
    }, {
      headerName: 'Qtls OPMS Balance',
      headerClass: 'center-header',
      children: [
        { field: 'OPMCLeftA', headerName: 'A' , cellStyle: { textAlign: 'center' , headerClass: 'center-header', } },
        { field: 'OPMCLeftC', headerName: 'C' , cellStyle: { textAlign: 'center' , headerClass: 'center-header', } }
      ],
    },
    {
      field: 'totalOPMCLeft', hide: true, sort: 'desc'
    }
  ]
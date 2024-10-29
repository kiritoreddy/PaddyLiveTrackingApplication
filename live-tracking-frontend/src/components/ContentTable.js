import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';
import './ContentTable.scss';

const ContentTable = ({ title, columns, data }) => {
  // to use myTheme in an application, pass it to the theme grid option


  const [rowData, setRowData] = useState([
    { ppcName: "Madikonda", purchaseA: 2056, purchaseC: 3278, shiftedA: 1025, shiftedC: 1500, tobeShifedA: 1030, tobeShifedC: 1777 },
    { ppcName: "Tekulagudem", purchaseA: 1548, purchaseC: 2789, shiftedA: 875, shiftedC: 1458, tobeShifedA: 672, tobeShifedC: 1331 },
    { ppcName: "Bhattupally", purchaseA: 3300, purchaseC: 4111, shiftedA: 1600, shiftedC: 2000, tobeShifedA: 1700, tobeShifedC: 2110 },
    { ppcName: "Tharalapally", purchaseA: 2505, purchaseC: 3120, shiftedA: 1200, shiftedC: 1300, tobeShifedA: 1305, tobeShifedC: 1820 },
    { ppcName: "Kadipikonda", purchaseA: 3054, purchaseC: 4077, shiftedA: 1300, shiftedC: 1500, tobeShifedA: 1754, tobeShifedC: 2576 },
    { ppcName: "Mulkalagudem", purchaseA: 2555, purchaseC: 3789, shiftedA: 1000, shiftedC: 1560, tobeShifedA: 1554, tobeShifedC: 2229 },
    { ppcName: "Nagalgudem", purchaseA: 2100, purchaseC: 3298, shiftedA: 1150, shiftedC: 1600, tobeShifedA: 949, tobeShifedC: 1697 },
    { ppcName: "Dharmajipet", purchaseA: 2889, purchaseC: 3155, shiftedA: 1250, shiftedC: 1420, tobeShifedA: 1639, tobeShifedC: 1735 },
    { ppcName: "Siripuram", purchaseA: 2754, purchaseC: 3100, shiftedA: 1150, shiftedC: 1300, tobeShifedA: 1604, tobeShifedC: 1799 },
    { ppcName: "Vellampally", purchaseA: 2677, purchaseC: 3322, shiftedA: 1200, shiftedC: 1400, tobeShifedA: 1477, tobeShifedC: 1922 }
  ]
  );

  const updatedRowData = rowData.map(row => ({
    ...row,
    totalToBeShifed: row.tobeShifedA + row.tobeShifedC
  }));

  const [colDefs, setColDefs] = useState([
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
  ]);

  const defaultColDef = {
    flex: 1,
    sortable: true,
    resizable: false
  };

  return (
    <div className="ContentTable">
      <Card>
        <Card.Body>
          <div className="ag-theme-quartz" style={{ height: '350px', width: '810px' }}>
            <AgGridReact
              columnDefs={colDefs}
              rowData={updatedRowData}
              defaultColDef={defaultColDef}
            />
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ContentTable;

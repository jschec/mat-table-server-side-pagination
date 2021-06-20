import React, { useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid';
import Container from '@material-ui/core/Container';
import Toolbar from './components/Toolbar';
import FormDialog from "./components/FormDialog";
import MainForm from "./components/MainForm";
import DataService from "./services/DataService";

const columns = [
  { 
    field: 'id', 
    headerName: 'ID', 
    //width: 180, 
    editable: false 
  },
  { 
    field: 'fullName', 
    headerName: 'Full Name', 
    //width: 180, 
    editable: true 
  },
  { 
    field: 'email', 
    headerName: 'Email', 
    editable: true 
  },
  { 
    field: 'mobile', 
    headerName: 'Mobile', 
    type: 'number', 
    editable: true 
  },
  { 
    field: 'city', 
    headerName: 'City', 
    editable: true 
  },
  { 
    field: 'gender', 
    headerName: 'Gender', 
    editable: true 
  },
  {
    field: 'hireDate',
    headerName: 'Hire Created',
    type: 'date',
    //width: 180,
    editable: true,
  },
  //{
  //  field: 'lastLogin',
  //  headerName: 'Last Login',
  //  type: 'dateTime',
  //  width: 220,
  //  editable: true,
  //},
];

function loadServerRows(page, data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.rows.slice(page * 5, (page + 1) * 5));
    }, Math.random() * 500 + 100); // simulate network latency
  });
}

function App() {
  const [dataService] = useState(() => new DataService());
  const [page, setPage] = useState(0);
  const [rows, setRows] = useState([]);
  const [recordCount, setRecordCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [recordForEdit, setRecordForEdit] = useState(null);

  const addOrEdit = (employee, resetForm) => {
    console.log(employee);
    if (employee.id == 0)
      dataService.post(employee);
    else
      dataService.put(employee);
    resetForm();
    setRecordForEdit(null);
    setOpenPopup(false);
    setRows(dataService.getAll())
}

const openInPopup = item => {
    setRecordForEdit(item);
    setOpenPopup(true);
}

  const handlePageChange = (params) => {
    console.log("handlePageChange");
    setPage(params.page);
  };

  const handleRowClick = (params) => {
    console.log(dataService);

    openInPopup(params.row);
  }

  const handleCreate = () => {
    console.log("create event");
    openInPopup(null);
  }

  const handleFilter = () => {
    console.log("filter event");
  }

  useEffect(() => {
    setLoading(true);
    setRows(dataService.getAll());
    setRecordCount(dataService.getCount());
    setLoading(false);
  }, [dataService]);
  /*
  React.useEffect(() => {
    let active = true;

    (async () => {
      setLoading(true);
      const newRows = await loadServerRows(page, data);

      if (!active) {
        return;
      }

      setRows(newRows);
      setLoading(false);
    })();

    return () => {
      active = false;
    };
  }, [page, data]);
  */

  return (
    <Container maxWidth="md">
      <FormDialog
        title="Employee Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <MainForm
          recordForEdit={recordForEdit}
          addOrEdit={addOrEdit} />
      </FormDialog>

      <div style={{ height: 300, width: '100%', paddingTop: 20 }}>
        <Toolbar 
          title={"Placeholder"}
          onCreate={handleCreate}
          onFilter={handleFilter}
        />
        <DataGrid 
          rows={rows} 
          columns={columns}
          pagination
          pageSize={5}
          rowCount={recordCount}
          paginationMode="server"
          onRowClick={handleRowClick}
          onPageChange={handlePageChange}
          loading={loading}
        />
      </div>
    </Container>
  );
}

export default App;
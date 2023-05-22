import {
  Box,
  Button,
  Grid,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  styled,
  tableCellClasses,
} from "@mui/material";
import { useFetchCompaniesQuery } from "../Api";
import { useSelector } from "react-redux";
import { useState } from "react";
import theme from "../theme";
import CreateCompanyModal from "../components/CreateCompanyModal";
import { DeleteForever, Edit } from "@mui/icons-material";
import DeleteCompanyModal from "../components/DeleteCompanyModal";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const HomePage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const [search, setSearch] = useState("");
  const [openCreateModal, setOpenCreateModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(undefined);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const { data: companies, refetch: fetchCompanies } = useFetchCompaniesQuery(
    { search, pageIndex: page + 1, pageSize: rowsPerPage },
    { skip: !isLoggedIn }
  );

  const handleEditClick = (company) => {
    setSelectedCompany(company);
    setOpenCreateModal(true);
  };

  const handleDeleteClick = (company) => {
    setSelectedCompany(company);
    setOpenDeleteModal(true);
  };

  return (
    <Grid container>
      <Grid item container xs={12} justifyContent="space-between">
        <Button variant="contained" onClick={() => setOpenCreateModal(true)}>
          Create Company
        </Button>
        <TextField
          sx={{ width: "30%" }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          label="Search company"
        />
      </Grid>
      <Grid item xs={12} sx={{ mt: theme.spacing(4) }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Company ID</StyledTableCell>
                <StyledTableCell>Company Name</StyledTableCell>
                <StyledTableCell>Actions</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {companies?.items?.map((company) => (
                <StyledTableRow key={company.companyId}>
                  <StyledTableCell>{company.companyId}</StyledTableCell>
                  <StyledTableCell>{company.companyName}</StyledTableCell>
                  <StyledTableCell>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-around" }}
                    >
                      <Edit onClick={() => handleEditClick(company)} />
                      <DeleteForever
                        onClick={() => handleDeleteClick(company)}
                      />
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        {companies && (
          <TablePagination
            rowsPerPageOptions={[5, 10, 25, 50, 100]}
            component="div"
            count={companies?.itemCount}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={(_, page) => setPage(page)}
            onRowsPerPageChange={(v) => {
              setRowsPerPage(v.target.value);
              setPage(0);
            }}
          />
        )}
      </Grid>
      <CreateCompanyModal
        key={`create_company_modal_${openCreateModal}`}
        open={openCreateModal}
        onClose={() => {
          setOpenCreateModal(false);
          setSelectedCompany(undefined);
        }}
        refetch={fetchCompanies}
        data={selectedCompany}
      />
      <DeleteCompanyModal
        key={`delete_company_modal_${openDeleteModal}`}
        open={openDeleteModal}
        onClose={() => {
          setOpenDeleteModal(false);
          setSelectedCompany(undefined);
        }}
        refetch={fetchCompanies}
        data={selectedCompany}
      />
    </Grid>
  );
};

export default HomePage;

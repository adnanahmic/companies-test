import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import theme from "../theme";
import { useDeleteCompanyMutation } from "../Api";

const DeleteCompanyModal = ({ open, onClose, refetch, data }) => {
  const [deleteCompany] = useDeleteCompanyMutation();

  const handleSubmit = async () => {
    try {
      await deleteCompany({ id: data.companyId });
      onClose();
      refetch();
    } catch {}
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}
    >
      <Box
        sx={{
          background: "white",
          width: "600px",
          p: theme.spacing(4),
          borderRadius: theme.spacing(1),
        }}
      >
        <Typography variant="h5" component="h3">
          Delete company {data?.companyName} ?
        </Typography>
        <Grid
          container
          justifyContent="space-around"
          sx={{
            mt: theme.spacing(3),
          }}
        >
          <Button variant="contained" color="error" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="contained" color="success" onClick={handleSubmit}>
            Delete
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default DeleteCompanyModal;

import { Box, Button, Grid, Modal, TextField, Typography } from "@mui/material";
import theme from "../theme";
import { useEffect, useState } from "react";
import { useCreateCompanyMutation, useUpdateCompanyMutation } from "../Api";

const CreateCompanyModal = ({ open, onClose, refetch, data }) => {
  const [companyName, setCompanyName] = useState(data?.companyName ?? "");

  const [createCompany] = useCreateCompanyMutation();
  const [updateCompany] = useUpdateCompanyMutation();

  const handleSubmit = async () => {
    try {
      if (data?.companyId)
        await updateCompany({ id: data.companyId, data: { companyName } });
      else await createCompany({ companyName });
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
          {data ? "Edit" : "Create new"} company
        </Typography>
        <TextField
          label="Company name"
          value={companyName}
          onChange={({ target }) => setCompanyName(target.value)}
          fullWidth
          sx={{ my: theme.spacing(2) }}
        />
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
            Submit
          </Button>
        </Grid>
      </Box>
    </Modal>
  );
};

export default CreateCompanyModal;

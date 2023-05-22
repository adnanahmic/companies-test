import { Box, Typography } from "@mui/material";
import { Draggable } from "react-beautiful-dnd";
import theme from "../theme";

const CompanyCard = ({ company, index }) => (
  <Draggable draggableId={company?.companyId} index={index}>
    {(provided, snapshot) => (
      <Box
        ref={provided.innerRef}
        snapshot={snapshot}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        sx={{
          background: "#fff",
          display: "flex",
          p: theme.spacing(2),
          borderRadius: theme.spacing(2),
          my: theme.spacing(1),
          justifyContent: "center",
        }}
      >
        <Typography variant="h6">{company?.companyName}</Typography>
      </Box>
    )}
  </Draggable>
);

export default CompanyCard;

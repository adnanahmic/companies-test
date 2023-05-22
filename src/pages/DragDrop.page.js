import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { useFetchCompaniesQuery } from "../Api";
import { useSelector } from "react-redux";
import CompanyCard from "../components/CompanyCard";
import theme from "../theme";

const DragDropPage = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [elements, setElements] = useState({
    "left-list": [],
    "right-list": [],
  });

  const { data: companies } = useFetchCompaniesQuery(
    {},
    {
      skip: !isLoggedIn,
    }
  );

  useEffect(() => {
    setElements({
      "left-list": companies?.items,
      "right-list": [],
    });
  }, [companies]);

  const removeFromList = (list, index) => {
    const result = Array.from(list);
    const [removed] = result.splice(index, 1);
    return [removed, result];
  };

  const addToList = (list, index, element) => {
    const result = Array.from(list);
    result.splice(index, 0, element);
    return result;
  };

  const onDragEnd = (result) => {
    console.log(result);
    if (!result.destination) {
      return;
    }
    const listCopy = { ...elements };

    const sourceList = listCopy[result.source.droppableId];

    const [removedElement, newSourceList] = removeFromList(
      sourceList,
      result.source.index
    );

    listCopy[result.source.droppableId] = newSourceList;

    const destinationList = listCopy[result.destination.droppableId];

    listCopy[result.destination.droppableId] = addToList(
      destinationList,
      result.destination.index,
      removedElement
    );

    setElements(listCopy);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container justifyContent="center">
        <Grid
          item
          xs={4}
          sx={{
            background: "#dcdcdc",
            borderRadius: theme.spacing(2),
            py: theme.spacing(2),
            px: theme.spacing(3),
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Companies on Left
          </Typography>
          <Droppable droppableId="left-list">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ height: "100%" }}
              >
                {elements["left-list"]?.map((company, index) => (
                  <CompanyCard
                    key={company.companyId}
                    company={company}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
        <Grid item xs={2} />
        <Grid
          item
          xs={4}
          sx={{
            background: "#dcdcdc",
            borderRadius: theme.spacing(2),
            py: theme.spacing(2),
            px: theme.spacing(3),
          }}
        >
          <Typography variant="h5" sx={{ textAlign: "center" }}>
            Companies on Right
          </Typography>
          <Droppable droppableId={"right-list"}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{ height: "100%" }}
              >
                {elements["right-list"]?.map((company, index) => (
                  <CompanyCard
                    key={company.companyId}
                    company={company}
                    index={index}
                  />
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </Grid>
      </Grid>
    </DragDropContext>
  );
};

export default DragDropPage;

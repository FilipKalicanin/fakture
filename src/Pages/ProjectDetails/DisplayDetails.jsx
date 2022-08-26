import {
  Button,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { deleteStonePart } from "../../Redux/projectsSlice";
import { useReactToPrint } from "react-to-print";
import { currencyFormat } from "../../Helpers/currencyFormat";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

const DisplayDetails = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.value.projects);
  const [projectDetails, setProjectDetails] = useState({});
  const componentRef = useRef();

  useEffect(() => {
    projects.map((el) => {
      if (el.id === state.id) {
        return setProjectDetails(el);
      }
    });
  }, [state.id, projects]);

  const deleteItem = (id, amount) => {
    dispatch(
      deleteStonePart({ parentId: state.id, stone_part_id: id, amount: amount })
    );
  };

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Grid container direction='column' gap='20px'>
      <Grid item>
        <Button
          variant='contained'
          onClick={() => handlePrint()}
          endIcon={<FileDownloadIcon />}
        >
          Nikola
        </Button>
      </Grid>
      <Grid item ref={componentRef}>
        <Grid container direction='column'>
          <Grid item>
            <Grid container>
              <Grid item sx={{ marginRight: "50px" }}>
                <Typography sx={{ fontWeight: "bold" }}>Projekat:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {projectDetails.project_name}
                </Typography>
              </Grid>
              <Grid item sx={{ marginRight: "50px" }}>
                <Typography sx={{ fontWeight: "bold" }}>
                  Vrsta kamena:
                </Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {projectDetails.material}
                </Typography>
              </Grid>
              <Grid item>
                <Typography sx={{ fontWeight: "bold" }}>Total:</Typography>
                <Typography sx={{ fontWeight: "bold" }}>
                  {projectDetails.total_price > 0
                    ? currencyFormat(projectDetails.total_price)
                    : "0 Eur"}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item></Grid>
          <Grid item>
            <TableContainer sx={{ border: "1px solid #A1A0A3" }}>
              <Table>
                <TableHead>
                  <TableRow sx={{ backgroundColor: "#D3D3D3" }}>
                    <TableCell>
                      <Typography>Naziv</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Dimenzije</Typography>
                    </TableCell>
                    <TableCell>
                      <Typography>Cena</Typography>
                    </TableCell>
                    <TableCell />
                  </TableRow>
                </TableHead>
                <TableBody>
                  {projectDetails.stone_parts &&
                  projectDetails.stone_parts.length > 0 ? (
                    projectDetails.stone_parts.map((el) => {
                      return (
                        <TableRow
                          key={el.id}
                          sx={{ borderBottom: "2px solid black" }}
                        >
                          <TableCell sx={{ pt: "0", pb: "5px" }}>
                            <Typography>{el.part_name}</Typography>
                          </TableCell>
                          <TableCell sx={{ pt: "0", pb: "5px" }}>
                            <Typography>
                              {el.length} / {el.width} / {el.height}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ pt: "0", pb: "5px" }}>
                            <Typography sx={{ fontWeight: "bold" }}>
                              {el.price > 0
                                ? currencyFormat(el.price)
                                : "0 Eur"}
                            </Typography>
                          </TableCell>
                          <TableCell sx={{ pt: "0", pb: "5px" }}>
                            <Button
                              sx={{ color: "red" }}
                              onClick={() => deleteItem(el.id, el.price)}
                            >
                              X
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  ) : (
                    <TableRow>
                      <TableCell>
                        <Typography>No parts</Typography>
                      </TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default DisplayDetails;

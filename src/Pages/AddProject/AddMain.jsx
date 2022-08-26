import { Grid } from "@mui/material";
import AddProject from "./AddProject";
import AllProjects from "./AllProjects";

const AddMain = () => {
  return (
    <Grid container direction='column' sx={{ pt: "20px" }}>
      <Grid item>
        <AddProject />
      </Grid>
      <Grid item>
        <AllProjects />
      </Grid>
    </Grid>
  );
};

export default AddMain;

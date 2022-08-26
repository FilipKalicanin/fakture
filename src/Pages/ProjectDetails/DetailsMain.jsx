import { Grid } from "@mui/material";
import AddDetails from "./AddDetails";
import DisplayDetails from "./DisplayDetails";

const DetailsMain = () => {
  return (
    <Grid container direction='column' sx={{ padding: "70px" }}>
      <Grid item>
        <AddDetails />
      </Grid>
      <Grid item>
        <DisplayDetails />
      </Grid>
    </Grid>
  );
};

export default DetailsMain;

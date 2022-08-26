import { Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { currencyFormat } from "../../Helpers/currencyFormat";
import background from "../../Helpers/background.jpg";

const classes = {
  item: {
    padding: "5px",
    mt: "5px",
    cursor: "pointer",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: "#d4ebf2",
    },
    backgroundImage: `url(${background})`,
    boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px",
  },
};

const AllProjects = () => {
  const navigate = useNavigate();
  const projects = useSelector((state) => state.projects.value.projects);

  const navigateToProject = (id, material) => {
    navigate("details", { state: { id: id, material: material } });
  };

  return (
    <Grid
      container
      direction='column'
      sx={{
        margin: "0 auto",
        width: "50%",
        padding: "20px",
        border: "2px solid gray",
        borderRadius: "20px",
      }}
    >
      {projects.map((el) => {
        return (
          <Grid
            item
            key={el.id}
            sx={classes.item}
            onClick={() => navigateToProject(el.id, el.material)}
          >
            <Typography sx={{ fontWeight: "bold", color: "black" }}>
              Projekat: {el.project_name} | {el.material} |{" "}
              {currencyFormat(el.total_price)}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

export default AllProjects;

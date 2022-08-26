import React from "react";
import {
  Button,
  Grid,
  Input,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addNewProject } from "../../Redux/projectsSlice";
import background from "../../Helpers/background.jpg";

const AddProject = () => {
  const materijali = [
    "Impala",
    "Bengal",
    "Kristal",
    "Roso Purino",
    "Asoluto Nero",
  ];
  const dispatch = useDispatch();

  const DataSchema = Yup.object().shape({
    project_name: Yup.string().max(500).required("Obavezno polje legendo"),
    material: Yup.string().max(50).required("Obavezno polje legendo"),
  });

  const initialValues = {
    project_name: "",
    material: "",
  };

  const handleSubmit = (data) => {
    let newProject = {
      project_name: data.project_name,
      material: data.material,
      stone_parts: [],
      total_price: 0,
      id: uuidv4(),
    };

    dispatch(addNewProject(newProject));
  };

  return (
    <Grid container direction='column'>
      <Grid item>
        <Grid container justifyContent='center' alignItems='center'>
          <Grid
            item
            sx={{
              width: "50%",
              padding: "20px",
              borderRadius: "20px",
              backgroundImage: `url(${background})`,
              boxShadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px",
            }}
          >
            <Formik
              onSubmit={(data) => {
                handleSubmit(data);
              }}
              validationSchema={DataSchema}
              initialValues={initialValues}
            >
              {({ values, setFieldValue }) => (
                <Form>
                  <Grid container direction='column' gap='15px'>
                    <Grid item>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          backgroundColor: "rgba(255, 255, 255, .8)",
                          width: "20%",
                        }}
                      >
                        Naziv Projekta
                      </Typography>
                      <Field name='project_name'>
                        {({ field }) => (
                          <Input
                            {...field}
                            placeholder='Darko ekser'
                            type='text'
                            fullWidth
                            sx={{
                              border: "1px solid blue",
                              paddingLeft: "10px",
                            }}
                            value={values.project_name}
                            name='project_name'
                            disableUnderline
                          />
                        )}
                      </Field>
                      <ErrorMessage name='project_name'>
                        {(message) => (
                          <Typography color='error' variant='body2'>
                            {message}
                          </Typography>
                        )}
                      </ErrorMessage>
                    </Grid>

                    <Grid item>
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          backgroundColor: "rgba(255, 255, 255, .8)",
                          width: "15%",
                        }}
                      >
                        Materijal
                      </Typography>

                      <Field name='material'>
                        {({ field }) => (
                          <Select
                            {...field}
                            sx={{ boder: "1px solid blue" }}
                            variant='standard'
                            fullWidth
                            value={values.material}
                            displayEmpty
                            onChange={(e) => {
                              setFieldValue("material", e.target.value);
                            }}
                            name='material'
                          >
                            <MenuItem disabled>
                              Pick one carefuly nig, u cant change it later
                            </MenuItem>

                            {materijali.map((item) => (
                              <MenuItem key={item} value={item}>
                                {item}
                              </MenuItem>
                            ))}
                          </Select>
                        )}
                      </Field>

                      <ErrorMessage name='material'>
                        {(message) => (
                          <Typography color='error' variant='body2'>
                            {message}
                          </Typography>
                        )}
                      </ErrorMessage>
                    </Grid>

                    <Grid item>
                      <Button type='submit' variant='contained'>
                        Dodaj Projekat Nikola
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default AddProject;

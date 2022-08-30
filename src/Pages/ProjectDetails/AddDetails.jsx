import React from "react";
import { Button, Grid, Input, Typography } from "@mui/material";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { v4 as uuidv4 } from "uuid";
import calculatePrice from "../../Helpers/calculatePrice";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import {
  addProjectsDetails,
  updateTotalPrice,
} from "../../Redux/projectsSlice";
import background from "../../Helpers/background.jpg";

const AddDetails = () => {
  const { state } = useLocation();
  const dispatch = useDispatch();

  const DataSchema = Yup.object().shape({
    length: Yup.number().max(1000).required("Obavezano polje."),
    width: Yup.number().max(1000).required("Obavezano polje."),
    height: Yup.number().min(3).required("Obavezano polje."),
    amount: Yup.number().min(1).required("Obavezano polje."),
  });

  const initialValues = {
    length: "",
    width: "",
    height: "",
    amount: "",
  };

  const handleSubmit = (data) => {
    let newInput = {
      length: data.length,
      width: data.width,
      height: data.height,
      amount: data.amount,
      price: calculatePrice(
        data.height,
        data.length,
        data.width,
        data.amount,
        state.material
      ),
      id: uuidv4(),
    };

    dispatch(addProjectsDetails({ parentId: state.id, data: newInput }));
    dispatch(updateTotalPrice({ parentId: state.id, price: newInput.price }));
  };

  return (
    <Grid container justifyContent='center' sx={{ marginBottom: "30px" }}>
      <Grid
        item
        sx={{
          width: "100%",
          backgroundImage: `url(${background})`,
          boxShadow: "rgba(0, 0, 0, 0.3) 0px 14px 33px",
          borderRadius: "10px",
          padding: "20px",
        }}
      >
        <Formik
          onSubmit={(data, { resetForm }) => {
            handleSubmit(data);
            resetForm();
          }}
          validationSchema={DataSchema}
          initialValues={initialValues}
        >
          {({ values }) => (
            <Form>
              <Grid
                container
                direction='row'
                gap='15px'
                justifyContent='space-between'
              >
                <Grid item>
                  <Typography>Duzina</Typography>

                  <Field name='length'>
                    {({ field }) => (
                      <Input
                        {...field}
                        placeholder='0 m'
                        type='number'
                        fullWidth
                        sx={{
                          border: "1px solid blue",
                          paddingLeft: "10px",
                        }}
                        value={values.length}
                        name='length'
                        disableUnderline
                      />
                    )}
                  </Field>
                  <ErrorMessage name='length'>
                    {(message) => (
                      <Typography color='error' variant='body2'>
                        {message}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Grid>

                <Grid item>
                  <Typography>Sirina</Typography>

                  <Field name='width'>
                    {({ field }) => (
                      <Input
                        {...field}
                        placeholder='0 m'
                        type='number'
                        fullWidth
                        sx={{
                          border: "1px solid blue",
                          paddingLeft: "10px",
                        }}
                        value={values.width}
                        name='width'
                        disableUnderline
                      />
                    )}
                  </Field>
                  <ErrorMessage name='width'>
                    {(message) => (
                      <Typography color='error' variant='body2'>
                        {message}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Grid>

                <Grid item>
                  <Typography>Debljina</Typography>

                  <Field name='height'>
                    {({ field }) => (
                      <Input
                        {...field}
                        sx={{
                          border: "1px solid blue",
                          paddingLeft: "10px",
                        }}
                        placeholder='0 m'
                        type='number'
                        fullWidth
                        value={values.height}
                        name='height'
                        disableUnderline
                      />
                    )}
                  </Field>
                  <ErrorMessage name='height'>
                    {(message) => (
                      <Typography color='error' variant='body2'>
                        {message}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Grid>

                <Grid item>
                  <Typography>Kolicina</Typography>

                  <Field name='amount'>
                    {({ field }) => (
                      <Input
                        {...field}
                        sx={{
                          border: "1px solid blue",
                          paddingLeft: "10px",
                        }}
                        placeholder='Eg. 3'
                        type='number'
                        fullWidth
                        value={values.amount}
                        name='amount'
                        disableUnderline
                      />
                    )}
                  </Field>
                  <ErrorMessage name='amount'>
                    {(message) => (
                      <Typography color='error' variant='body2'>
                        {message}
                      </Typography>
                    )}
                  </ErrorMessage>
                </Grid>

                <Grid item sx={{ display: "flex", alignItems: "flex-end" }}>
                  <Button
                    type='submit'
                    variant='contained'
                    sx={{ height: "34px" }}
                  >
                    Dodaj u listu
                  </Button>
                </Grid>
              </Grid>
            </Form>
          )}
        </Formik>
      </Grid>
    </Grid>
  );
};

export default AddDetails;

import { Box, Grid, TextField, Typography, useTheme } from '@mui/material';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { LoadingButton } from '@mui/lab';

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  name: yup.string().required('Password is required'),
  subject: yup.string().required('Subject is required'),
  message: yup
    .string()
    .min(30, 'Message should be of minimum 30 characters')
    .required('Message is required')
});

const ContactForm = () => {
  const theme = useTheme();

  const [isSendingData, setIsSendingData] = useState(false);
  const [hasSentSuccessfully, setHasSentSuccessfully] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
      subject: '',
      message: ''
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      setIsSendingData(true);
      setHasSubmitted(false);
      const response = await fetch('https://server.vexleet.me/send-mail', {
        method: 'POST',
        body: JSON.stringify(values)
      });

      const body = await response.text();

      setHasSubmitted(true);

      if (body === 'OK') {
        setHasSentSuccessfully(true);
        formik.resetForm();
      } else {
        setHasSentSuccessfully(false);
      }

      setIsSendingData(false);
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Grid container spacing={2}>
        <Grid xs={6} item>
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            fullWidth
            value={formik.values.name}
            onChange={formik.handleChange('name')}
            onBlur={formik.handleBlur('name')}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
        </Grid>
        <Grid xs={6} item>
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            fullWidth
            value={formik.values.email}
            onChange={formik.handleChange('email')}
            onBlur={formik.handleBlur('email')}
            error={formik.touched.email && !!formik.errors.email}
            helperText={formik.touched.email && formik.errors.email}
          />
        </Grid>
        <Grid xs={12} item>
          <TextField
            id="outlined-basic"
            label="Subject"
            variant="outlined"
            fullWidth
            value={formik.values.subject}
            onChange={formik.handleChange('subject')}
            onBlur={formik.handleBlur('subject')}
            error={formik.touched.subject && Boolean(formik.errors.subject)}
            helperText={formik.touched.subject && formik.errors.subject}
          />
        </Grid>
        <Grid xs={12} item>
          <TextField
            id="outlined-basic"
            label="Message"
            multiline
            minRows={4}
            variant="outlined"
            fullWidth
            value={formik.values.message}
            onChange={formik.handleChange('message')}
            onBlur={formik.handleBlur('message')}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
          />
        </Grid>
        <Grid xs={12} item>
          <LoadingButton variant="contained" color="primary" type="submit" loading={isSendingData}>
            Send Message
          </LoadingButton>

          {hasSubmitted && (
            <Box mt={2}>
              {hasSentSuccessfully ? (
                <Typography variant="body1" color={theme.palette.success.main}>
                  You have successfully sent your email. I will get back to you as soon as possible!
                </Typography>
              ) : (
                <Typography variant="body1" color={theme.palette.error.main}>
                  Something went wrong. Please try again!
                </Typography>
              )}
            </Box>
          )}
        </Grid>
      </Grid>
    </form>
  );
};

export default ContactForm;

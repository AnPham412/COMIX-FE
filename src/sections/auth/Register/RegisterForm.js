import * as Yup from 'yup';
import { useState } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
// material
import {Stack, TextField, IconButton, InputAdornment, Container} from '@mui/material';
import {LoadingButton} from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import {FormProvider, FTextField} from "../../../components/form";
import useAuth from "../../../hooks/useAuth";


// ----------------------------------------------------------------------

const RegisterSchema = Yup.object().shape({
  firstName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('First name required'),
  lastName: Yup.string().min(2, 'Too Short!').max(50, 'Too Long!').required('Last name required'),
  email: Yup.string().email('Email must be a valid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const defaultValues={
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  passwordConfirmation: "",
};

export default function RegisterForm() {
  const navigate = useNavigate();
  const auth = useAuth();
  const location = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
      useState(false);

  const methods = useForm({
    resolver: yupResolver(RegisterSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = (data) => {
    const { name, email, password } = data;
       auth.register({ name, email, password }, () => {
           const from = location.state?.from?.pathname || "/";
        navigate(from, { replace: true });
      });
  };

  return (
      <Container >
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <FTextField name="Fname" label="First name" />

              <FTextField name="Lname" label="Last name" />
            </Stack>

            <FTextField name="email" label="Email address" />

            <TextField
                fullWidth
                name="password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                InputProps={{
                  endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end" onClick={() => setShowPassword((prev) => !prev)}>
                          <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                  ),
                }}
            />
            <TextField
                fullWidth
                name="passwordConfirmation"
                type={showPassword ? 'text' : 'password'}
                label="Password Confirmation"
                InputProps={{
                  endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                            edge="end"
                            onClick={() => setShowPasswordConfirmation((prev) => prev)}>
                          <Iconify icon={showPasswordConfirmation ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                  ),
                }}
            />

            <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}>
              Register
            </LoadingButton>
          </Stack>
        </FormProvider>
      </Container>
  );
}

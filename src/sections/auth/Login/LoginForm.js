import * as Yup from 'yup';
import { useState } from 'react';
import {Link as RouterLink, useNavigate} from 'react-router-dom';
import {FTextField, FormProvider, FCheckbox} from "../../../components/form";
import { useForm } from "react-hook-form";
// material
import {Link, Stack, IconButton, InputAdornment, Container,} from '@mui/material';
import {Alert, LoadingButton} from '@mui/lab';
// component
import Iconify from '../../../components/Iconify';
import useAuth from "../../../hooks/useAuth";
import {yupResolver} from "@hookform/resolvers/yup";
// ----------------------------------------------------------------------

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const auth = useAuth();

  const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Email must be a valid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const defaultValues = {
    email: "",
    password: "",
    remember: true,
  };

  const methods = useForm({ resolver: yupResolver(LoginSchema),
    defaultValues });

  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const onSubmit = async (data) => {
    let { email, password } = data;

    try {
      await auth.login({ email, password }, (path) => {
        navigate(path, { replace: true });
      });
    } catch (error) {
      reset();
      setError("responseError", error);
    }
  };
  //for frontend only
  // const onSubmit = (data) => {
  //   let { email, password } = data;
  //      auth.login({ email, password }, () => {
  //        const from = location.state?.from?.pathname || "/";
  //        navigate(from, { replace: true });
  //      });
  // };

  return (
      <Container>
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={3}>
            {!!errors.responseError && (
                <Alert severity="error">{errors.responseError.message}</Alert>
            )}
            <FTextField
                name="email"
                label="Email address"
                sx={{ mt: "2rem" }}
            />

            <FTextField
                fullWidth
                name="password"
                autoComplete="current-password"
                type={showPassword ? 'text' : 'password'}
                label="Password"
                InputProps={{
                  endAdornment: (
                      <InputAdornment position="end">
                        <IconButton onClick={handleShowPassword} edge="end">
                          <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                        </IconButton>
                      </InputAdornment>
                  ),
                }}
            />
          </Stack>

          <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
            <FCheckbox name="remember" label="Remember me" />
          <Link component={RouterLink} variant="subtitle2" to="/" underline="hover">
            Forgot password?
          </Link>
          </Stack>
          <LoadingButton
              fullWidth
              size="large"
              type="submit"
              variant="contained"
              loading={isSubmitting}
          >
            Login
          </LoadingButton>
        </FormProvider>
      </Container>
  );
}

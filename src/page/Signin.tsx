import React, { useState } from 'react';
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import { setUser } from '../store';


export const SigninProvidersButtons = () => {

  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const onGoogleSignin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        setUser(user)
        navigate("/home")

        // IdP data available using getAdditionalUserInfo(result)
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }
  return (
    <>
      <Button
        variant="outlined"
        startIcon={<GoogleIcon />}
        sx={{ mt: 2, mb: 2, borderRadius: 28 }}
        onClick={onGoogleSignin}
      >
        Continue with Google</Button>
      <Button
        variant="outlined"
        startIcon={<FacebookIcon />}
        sx={{ mb: 2, borderRadius: 28 }}
      > Continue with Facebook</Button>
    </>
  )
}

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        setUser(user)
        navigate("/home")

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
      });

  }

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={onSignin} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Box textAlign={"center"} display={"flex"} flexDirection={"column"}>
              <Button
                type="submit"
                variant="outlined"
                sx={{ mt: 3, mb: 2, borderRadius: 28 }}
              >
                Sign In
              </Button>
              <SigninProvidersButtons />
            </Box>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Signin
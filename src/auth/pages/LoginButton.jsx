import { useSignIn } from "../hooks/useSignIn";
import { GoogleLogin } from '@react-oauth/google';
import { LoadingProgress } from "./CircularLoading";
import { Alert } from "@mui/material";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';

export const LoginButton = () => {

  const { SignIn, isLoading, errorAlert, errorDetail } = useSignIn()
  const [open, setOpen] = useState(true);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        className="mb-2">
        {
          (isLoading)
            ? <LoadingProgress />
            : <GoogleLogin
              /* onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }} */
              onSuccess={SignIn}
              onError={() => {
                console.log('Login Failed');
              }}
              theme="filled_black"
              text="continue_with"
              useOneTap={false}
            />
        }
      </div>

      {
        (errorAlert)
          ? <Collapse in={open}>
            <Alert
              action={
                <IconButton
                  aria-label="close"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <CloseIcon fontSize="inherit" />
                </IconButton>
              }
              severity="error"
              variant="filled"
            >
              Ocurrió un error, {errorDetail}
            </Alert>
          </Collapse>
          : <></>
      }

    </>
  )
}

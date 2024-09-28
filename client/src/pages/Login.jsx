import React, { useState } from 'react'
import { Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography } from '@mui/material';
import {CameraAlt as CameraAltIcon} from '@mui/icons-material';
import { VisuallyHiddenInput } from '../components/styles/StyledComponent';
import { useFileHandler, useInputValidation, useStrongPassword } from '6pp'; 
import { usernameValidator } from '../utils/validators';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleLogin = () => setIsLogin((!isLogin))

  const name = useInputValidation("")
  const bio = useInputValidation("")
  const username = useInputValidation("", usernameValidator)
  const password = useInputValidation("")
  //Below method can be used to validate password
  // const password = useStrongPassword("")

  return (
    <Container component={"main"} maxWidth="xs" sx = {{ 
      height : "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    
      }}>
      <Paper elevation={3} 
      sx= {{
        padding: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>


      {
        isLogin ? <>
          <Typography variant = "h5" > Login</Typography>
          <form style = {{
            width: "100%",
            marginTop: "1rem"
          }}>
            <TextField required fullWidth label = "Username" margin = "normal" variant='outlined'  />
            <TextField required fullWidth label = "Password" type='password' margin = "normal" variant='outlined'  />

            <Button sx= {{ marginTio : "1rem"}}
              variant='contained'
              color='primary'
              type='submit'
              fullWidth
            >
              Login

            </Button>


          <Typography textAlign={"center"} m={"1rem"} > OR </Typography>

            <Button
              fullWidth
              variant='text'
              onClick= {toggleLogin}
            >
              Sign up instead

            </Button>
          </form>
        </> 
        : 
        <>

          <Stack position={"relative"} width = {"10rem"} margin={"auto"}>
            <Avatar
              sx = {{
                width: "10rem",
                height: "10rem",
                objectFit: "contain"
              }}

              
            />
            
              <IconButton
                sx = {{
                  position: "absolute",
                  bottom: "0",
                  right: "0",
                  color: "white",
                  bgcolor: "rgba(0, 0, 0, 0.5)",
                  ":hover:" : {
                    bgcolor: "rgba(0, 0, 0, 0.7"
                  }
                }}
                component = "label"
              >
                <>
                  <CameraAltIcon/>
                  <VisuallyHiddenInput type="file"/>
                </>
              </IconButton>

          </Stack>

          <Typography variant = "h5" > Register </Typography>
          <form style = {{
            width: "100%",
            marginTop: "1rem"
          }}>
            <TextField required fullWidth label = "Name" margin = "normal" variant='outlined' value = {name.value}
            onChange={name.changeHandler} />
            <TextField required fullWidth label = "Bio" margin = "normal" variant='outlined' value = {bio.value}
            onChange={bio.changeHandler}  />
            <TextField required fullWidth label = "Username" margin = "normal" variant='outlined' value = {username.value}
            onChange={username.changeHandler}  />

            {
              username.error && (
                <Typography color="error" variant='caption'> {username.error} </Typography>
              )
            }

            <TextField required fullWidth label = "Password" type='password' margin = "normal" variant='outlined' value = {password.value}
            onChange={password.changeHandler}  />
            
            {/* Below method can be used to validate password */}
            {/* {
              password.error && (
                <Typography color="error" variant='caption'> {password.error} </Typography>
              )
            } */}


            <Button sx= {{ marginTio : "1rem"}}
              variant='contained'
              color='primary'
              type='submit'
              fullWidth
            >
              Sign up

            </Button>


          <Typography textAlign={"center"} m={"1rem"} > OR </Typography>

            <Button
              fullWidth
              variant='text'
              onClick= {toggleLogin}
            >
              Login instead

            </Button>
          </form>
        </> 
      }

      </Paper>
    </Container>
  )
}

export default Login


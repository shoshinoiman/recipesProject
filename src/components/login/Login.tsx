import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormEvent, useContext, useRef, useState } from 'react';
import axios from "axios";
import { userContext } from '../../App';
import { user } from '../../reducer/userReduce';
import Update from './update';
import { log } from 'console';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.white',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function Login() {
    const userState = useContext(userContext);
    const [open, setOpen] = useState(false);
    const [afterIn, setAfterIn] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    console.log('hgfhnfgmghmhjk,'+open);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleRegister = async (e: FormEvent, userData: Partial<user>) => {
    e.preventDefault();
    try {
    console.log('hgfhnfgmghmhjk,'+open);

      const res = await axios.post('http://localhost:3000/api/user/login', userData);
      console.log(res.data);
      userState.userDispatch({ type: 'CREATE', data: res.data as user });
    } catch (e) {
    console.log('hgfhnfgmghmhjkljkhlhff,'+open);

      if (e === 401) alert("Invalid password or email!!");
      else {
        setAfterIn(true);
        userState.user?.isConnected && (userState.user.isConnected = true);
      }

      console.log(e);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = {
      email: emailRef.current?.value || ' ',
      password: passwordRef.current?.value || ' ',
    };
    handleRegister(event, userData);
    setOpen(false);
  };

  return (
    <div>
      {!afterIn && (
        <Button
        sx={{ 
            position: 'absolute', 
            top: '13%', 
            left: '-100px', 
            backgroundColor: '#77A672', 
            color: 'white', 
            borderRadius: '20px solid #4CAF50' ,  
            ':hover': { backgroundColor: '#5E8B5C' }
          }}
          onClick={handleOpen}
        >
          Login
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Enter your details:
          </Typography>

          <form onSubmit={handleSubmit} id="modal-modal-description">
            <input
              type="email"
              placeholder={'email'}
              ref={emailRef}
              required
              style={{ padding: '8px', marginBottom: '12px', borderRadius: '4px', width: '100%' }}
            />
            <input
              type="password"
              placeholder={'password'}
              ref={passwordRef}
              required
              style={{ padding: '8px', marginBottom: '12px', borderRadius: '4px', width: '100%' }}
            />
            <Button type='submit' variant="contained" sx={{ backgroundColor: '#77A672', ':hover': { backgroundColor: '#5E8B5C' } }}>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
      {afterIn && <Update />}
    </div>
  );
}

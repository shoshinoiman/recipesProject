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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth: 500,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  padding: 4,
  borderRadius: 2,
};

export default function Register() {
  const [open, setOpen] = useState(false);
  const [afterIn, setAfterIn] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const userState = useContext(userContext);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/user/register', userState);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const userData = {
      first_name: firstNameRef.current?.value || ' ',
      last_name: lastNameRef.current?.value || ' ',
      email: emailRef.current?.value || ' ',
      password: passwordRef.current?.value || ' ',
      address: addressRef.current?.value || ' ',
      phon: phoneRef.current?.value || ' ',
    };
    userState.userDispatch({ type: 'CREATE', data: userData as user });
    handleRegister(event);
    setOpen(false);
    setAfterIn(true);
    userState.userDispatch({ type: 'UPDATE_CONNECTION', data: { isConnected: true } });
  };

  return (
    <div>
      {!afterIn && (
        <Button
          sx={{
            position: 'absolute',
            top: '5%',
            left: '50%',
            // transform: 'translateX(-50%)',
            backgroundColor: '#77A672',
            color: 'white',
            ':hover': { backgroundColor: '#5E8B5C' },
          }}
          onClick={handleOpen}
        >
          Register
        </Button>
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{ textAlign: 'center', color: '#2E5635' }}>
            Enter your details:
          </Typography>

          <Box component="form" onSubmit={handleSubmit} id="modal-modal-description" sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <input
              type="text"
              ref={firstNameRef}
              placeholder="First Name"
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                marginBottom: '10px',
              }}
            />
            <input
              type="text"
              ref={lastNameRef}
              placeholder="Last Name"
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                marginBottom: '10px',
              }}
            />
            <input
              type="email"
              ref={emailRef}
              placeholder="Email"
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                marginBottom: '10px',
              }}
            />
            <input
              type="password"
              ref={passwordRef}
              placeholder="Password"
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                marginBottom: '10px',
              }}
            />
            <input
              type="text"
              ref={addressRef}
              placeholder="Address"
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                marginBottom: '10px',
              }}
            />
            <input
              type="number"
              ref={phoneRef}
              placeholder="Phone"
              required
              style={{
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                marginBottom: '10px',
              }}
            />
            <Button
              type="submit"
              sx={{
                backgroundColor: '#77A672',
                color: 'white',
                ':hover': { backgroundColor: '#5E8B5C' },
                padding: '10px',
                borderRadius: '4px',
                marginTop: '10px',
              }}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Modal>
      {afterIn && <Update />}
    </div>
  );
}

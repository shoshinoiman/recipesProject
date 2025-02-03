import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormEvent, useContext, useRef, useState } from 'react';

import { userContext } from '../../App';
import { user } from '../../reducer/userReduce';
import axios from 'axios';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#FFDDC1', // Background color for the modal (apricot)
  border: '2px solid #4CAF50', // Green border
  boxShadow: 24,
  p: 4,
  borderRadius: '8px', // Rounded corners
};

export default function Update() {
  const [open, setOpen] = useState(false); 
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  const userState = useContext(userContext);

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);

  const handleUpdate = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.put('http://localhost:3000/api/user/', userState);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => { 
    event.preventDefault();
    const userData = {
      first_name: firstNameRef.current?.value || undefined,
      last_name: lastNameRef.current?.value || undefined,
      email: emailRef.current?.value || undefined,
      password: passwordRef.current?.value || undefined,
      address: addressRef.current?.value || undefined,
      phon: phoneRef.current?.value || undefined,
    };
    
    userState.userDispatch({ type: 'UPDATE', data: userData as Partial<user> });
    handleUpdate(event);
    setOpen(false);
  };

  return (
    <div>
      <Button 
        style={{ 
          position: 'absolute', 
          top: '13%', 
          left: '-100px', 
          backgroundColor: '#77A672', 
          color: 'white', 
          borderRadius: '20px' 
        }} 
        onClick={handleOpen}>
        Update
      </Button>
      
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography 
            id="modal-modal-title" 
            variant="h6" 
            component="h2" 
            sx={{ color: '#4CAF50', fontWeight: 'bold' }}>
            Enter your new details:
          </Typography>
         
          <form onSubmit={handleSubmit} id="modal-modal-description">
            <input 
              type="text" 
              ref={firstNameRef} 
              placeholder="First Name" 
              style={{ 
                width: '100%', 
                padding: '10px', 
                marginBottom: '10px', 
                borderRadius: '5px', 
                border: '1px solid #4CAF50' 
              }} 
            />
            <input 
              type="text" 
              ref={lastNameRef} 
              placeholder="Last Name" 
              style={{ 
                width: '100%', 
                padding: '10px', 
                marginBottom: '10px', 
                borderRadius: '5px', 
                border: '1px solid #4CAF50' 
              }} 
            />
            <input 
              type="email" 
              placeholder="Email" 
              ref={emailRef} 
              style={{ 
                width: '100%', 
                padding: '10px', 
                marginBottom: '10px', 
                borderRadius: '5px', 
                border: '1px solid #4CAF50' 
              }} 
            />
            <input 
              type="password" 
              placeholder="Password" 
              ref={passwordRef} 
              style={{ 
                width: '100%', 
                padding: '10px', 
                marginBottom: '10px', 
                borderRadius: '5px', 
                border: '1px solid #4CAF50' 
              }} 
            />
            <input 
              type="text" 
              placeholder="Address" 
              ref={addressRef} 
              style={{ 
                width: '100%', 
                padding: '10px', 
                marginBottom: '10px', 
                borderRadius: '5px', 
                border: '1px solid #4CAF50' 
              }} 
            />
            <input 
              type="number" 
              placeholder="Phone" 
              ref={phoneRef} 
              style={{ 
                width: '100%', 
                padding: '10px', 
                marginBottom: '10px', 
                borderRadius: '5px', 
                border: '1px solid #4CAF50' 
              }} 
            />
            <Button 
              type="submit" 
              sx={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '10px',
                borderRadius: '5px',
                '&:hover': { backgroundColor: '#388E3C' }
              }}>
              Submit
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

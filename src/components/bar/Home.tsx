import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Home = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f1', // Light background color
      }}
    >
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: 'bold',
          color: '#77A672', // Peach green color
          marginBottom: 3,
        }}
      >
        Welcome to Tasty
      </Typography>
      <Typography
        variant="h6"
        sx={{
          fontFamily: "'Arial', sans-serif",
          color: '#333',
          marginBottom: 5,
          paddingX: 3,
          textAlign: 'center',
        }}
      >
        The perfect place for delicious and healthy recipes! Discover new recipes, share your own, and create your culinary experiences.
      </Typography>
      <Button
        variant="contained"
        sx={{
          backgroundColor: '#77A672', // Peach green color
          color: 'white',
          padding: '10px 20px',
          fontSize: '1.1rem',
          borderRadius: '5px',
          '&:hover': {
            backgroundColor: '#5e8b5c', // Hover effect color
          },
        }}
      >
        Get Started
      </Button>
    </Container>
  );
};

export default Home;

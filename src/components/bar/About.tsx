import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ padding: 3, backgroundColor: '#f7f7f7' }}>
      <Container maxWidth="md">
        <Box sx={{ padding: 3, marginBottom: 4, backgroundColor: '#FFDDC1', borderRadius: '8px' }}>
          <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
            About the Website
          </Typography>
          <Typography variant="h6" align="center" sx={{ color: '#4CAF50', marginTop: 2 }}>
            Welcome to our website, the perfect place for every cooking enthusiast! The site offers a wide range
            of healthy, delicious, and suitable recipes for everyone.
          </Typography>
        </Box>

        <Box sx={{ padding: 3, marginBottom: 4, backgroundColor: '#FFDDC1', borderRadius: '8px' }}>
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
            About Us
          </Typography>
          <Typography variant="body1" align="center" sx={{ color: '#333', marginTop: 2 }}>
            We are a group of passionate chefs who love the culinary world. We believe everyone can cook delicious
            and healthy food at home, and we’re here to show you how to do it easily and quickly. On the site, you'll
            find recipes of all kinds, categorized along with tips and recommendations to help you make cooking fun.
          </Typography>
          <Typography variant="body1" align="center" sx={{ color: '#333', marginTop: 2 }}>
            All the recipes on the site are carefully selected with an emphasis on quality ingredients and ease of preparation.
            We believe in home cooking, fresh and healthy, which can be both delicious and nutritious.
          </Typography>
        </Box>

        <Box sx={{ padding: 3, marginBottom: 4, backgroundColor: '#FFDDC1', borderRadius: '8px' }}>
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
            Our Vision
          </Typography>
          <Typography variant="body1" align="center" sx={{ color: '#333', marginTop: 2 }}>
            Our vision is to make cooking an enjoyable and connecting experience. We strive to offer recipes that suit everyone,
            with accessible and tasty ingredients. We want to include all types of food: main dishes, desserts, salads, and more,
            so every time you visit the site, you’ll find something new and exciting to prepare.
          </Typography>
          <Typography variant="body1" align="center" sx={{ color: '#333', marginTop: 2 }}>
            We believe that when everyone can prepare quality food at home, it not only leads to tasty results but also strengthens
            bonds with family and friends. Cooking is an experience that can be simple and fun, and with our recipes, you can turn
            every meal into an unforgettable experience.
          </Typography>
        </Box>

        <Box sx={{ padding: 3, backgroundColor: '#FFDDC1', borderRadius: '8px' }}>
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', color: '#4CAF50' }}>
            Join Us
          </Typography>
          <Typography variant="body1" align="center" sx={{ color: '#333', marginTop: 2 }}>
            We are always excited to welcome new members. If you have a family recipe or a new idea, feel free to send us
            your recipe and make it part of our community. Every recipe added to the site is carefully selected, and we are
            sure our users will enjoy it very much.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default About;

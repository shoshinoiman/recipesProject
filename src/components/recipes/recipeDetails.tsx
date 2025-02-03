import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Recipe } from '../../modle/recipe';
import { Typography } from '@mui/material';

const bull = '• ';  

export default function RecipeDetails(recipe: Recipe) {
  console.log("******************recipe***************", recipe);

  return (
    <List sx={{ width: '100%', maxWidth: 400, bgcolor: 'background.paper', padding: 2, boxShadow: 3, borderRadius: 2 }}>
      <Typography variant="h4" sx={{ color: '#77A672', fontWeight: 'bold', marginBottom: 2 }}>
        {recipe.title}
      </Typography>
      <Typography variant="h6" sx={{ color: '#5E8B5C', fontStyle: 'italic', marginBottom: 2 }}>
        {recipe.description}
      </Typography>
      {Array.isArray(recipe.ingredients) && recipe.ingredients.map((value, index) => (
        <ListItem key={index} disableGutters>
          <ListItemText sx={{ color: '#333' }} primary={`${bull}${value}`} />
        </ListItem>
      ))}
      <Typography variant="body1" sx={{ color: '#333', marginTop: 2 }}>
        {recipe.instructions}
      </Typography>
    </List>
  );
}

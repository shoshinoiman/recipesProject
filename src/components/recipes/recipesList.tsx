import { Recipe } from '../../modle/recipe';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import { getRecipes } from './reciepsFetch';
import RecipeDetails from './recipeDetails';
export default function RecipesList() {
    const dispatch = useDispatch<any>();
    const list = useSelector((state: any) => state?.recipes?.recipes) as Recipe[];
    const loading = useSelector((state: any) => state?.recipes?.loading);
    const error = useSelector((state: any) => state?.recipes?.error);
    const [isShowDetails, setIsShowDetails] = useState(false);
    const [currentRecipe, setCurrentRecipe] = useState({} as Recipe);
    const handleClick = (recipe: Recipe) => {
        setIsShowDetails(true);
        setCurrentRecipe(recipe);
    };

    useEffect(() => {
        dispatch(getRecipes());
        console.log("Dispatched getRecipes");
    }, [dispatch]);

    // אם אין נתונים או שמצב טעינה - הצג הודעת טעינה
    if (loading) {
        return <p>טעינה...</p>;
    }

    // אם יש שגיאה, הצג אותה
    if (error) {
        return <p>התרחשה שגיאה: {error}</p>;
    }

    // אם הנתונים נטענו כראוי, הצג את הכפתורים
    const buttons = Array.isArray(list) && list.length > 0
        ? list.map((r: Recipe) => (
            <Button 
                key={r.id} 
                onClick={() => handleClick(r)} 
                variant="contained"
                sx={{
                    backgroundColor: '#77A672',
                    color: 'white',
                    ":hover": { backgroundColor: '#5E8B5C' },
                    textTransform: "none",
                    marginBottom: 1,
                }}
            >
                {r.title}
            </Button>
        ))
        : <p>אין מתכונים להציג</p>;

    return (
        <div style={{ display: '', flexDirection: 'column', alignItems: 'center' ,position:'relative'}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 2,
                }}
            >
                <ButtonGroup 
                    orientation="vertical" 
                    aria-label="Vertical button group" 
                    sx={{
                        gap: 2,
                    }}
                >
                    {buttons}
                </ButtonGroup>
            </Box>
            <Box sx={{ marginTop: 3, display: 'flex', justifyContent: 'center' }}>
                {isShowDetails && <RecipeDetails {...currentRecipe}></RecipeDetails>}
            </Box>
        </div>
    );
}
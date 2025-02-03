import { useForm, useFieldArray } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Recipe } from "../../modle/recipe";
import { useDispatch } from "react-redux";
import { postRecipes } from "./reciepsFetch";
import { AppDispatch } from "../../store/Store";
import { 
  Container, TextField, Button, Box, Typography, IconButton, Divider, Paper 
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";

const schema: yup.ObjectSchema<Recipe> = yup.object({
  id: yup.number().typeError("Id must be a number").required("Id is required"),
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  authorId: yup.number().typeError("Author Id must be a number").required("Author Id is required"),
  ingredients: yup
    .array()
    .of(yup.string().required("Ingredient is required"))
    .min(1, "At least one ingredient is required")
    .required("Ingredients are required"),
  instructions: yup.string().required("Instructions are required"),
});

function AddRecipe() {
  const dispatch = useDispatch<AppDispatch>();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<Recipe>({
    resolver: yupResolver(schema),
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: "ingredients" as never,
  });

  const onSubmit = (data: Recipe) => {
    dispatch(postRecipes(data));
    console.log("Submitted Data:", data);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh", // מבטיח שה-Box יתפוס את כל גובה המסך
        background: "linear-gradient(135deg, #FFC3A0, #A0D995)",
        padding: 2,
      
      }}
    >
      <Container maxWidth="xl" sx={{ paddingLeft: 2, paddingRight: 2 }}>
        <Paper
          elevation={8}
          sx={{
            padding: 4,
            borderRadius: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0px 10px 25px rgba(0, 0, 0, 0.2)",
            width: "100%", // הטופס יתפוס את כל הרוחב
            maxWidth: "800px", // מקסימום רוחב
          }}
        >
          <Typography 
            variant="h4" 
            textAlign="center" 
            fontWeight="bold" 
            gutterBottom
            sx={{ fontFamily: "'Poppins', sans-serif", color: "#2E5635" }}
          >
            הוספת מתכון
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Box 
            component="form"
            onSubmit={handleSubmit(onSubmit)}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <TextField
              label="מזהה מתכון (Id)"
              type="number"
              fullWidth
              {...register("id", { valueAsNumber: true })}
              error={!!errors.id}
              helperText={errors.id?.message}
            />

            <TextField
              label="שם המנה"
              fullWidth
              {...register("title")}
              error={!!errors.title}
              helperText={errors.title?.message}
            />

            <TextField
              label="תיאור המנה"
              fullWidth
              {...register("description")}
              error={!!errors.description}
              helperText={errors.description?.message}
            />

            <TextField
              label="מזהה מחבר"
              type="number"
              fullWidth
              {...register("authorId", { valueAsNumber: true })}
              error={!!errors.authorId}
              helperText={errors.authorId?.message}
            />

            <Typography variant="h6" sx={{ color: "#2E5635", mt: 2 }}>
              רשימת מרכיבים:
            </Typography>
            
            {fields.map((field, index) => (
              <Box key={field.id} sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <TextField
                  label={`מרכיב ${index + 1}`}
                  fullWidth
                  {...register(`ingredients.${index}` as const)}
                  error={!!(errors.ingredients && errors.ingredients[index])}
                  helperText={errors.ingredients && errors.ingredients[index]?.message}
                />
                <IconButton onClick={() => remove(index)} sx={{ color: "#C75D36" }}>
                  <Remove />
                </IconButton>
              </Box>
            ))}

            <Button
              onClick={() => append("")}
              startIcon={<Add />}
              variant="contained"
              sx={{
                backgroundColor: "#77A672",
                ":hover": { backgroundColor: "#5E8B5C" },
              }}
            >
              הוספת מרכיב
            </Button>

            <TextField
              label="אופן ההכנה"
              fullWidth
              {...register("instructions")}
              error={!!errors.instructions}
              helperText={errors.instructions?.message}
            />

            <Button 
              type="submit" 
              variant="contained" 
              size="large"
              sx={{
                mt: 2,
                backgroundColor: "#C75D36",
                ":hover": { backgroundColor: "#A14A2B" },
              }}
            >
              שליחת מתכון
            </Button>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}

export default AddRecipe;

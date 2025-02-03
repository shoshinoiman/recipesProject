import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
// import { deepOrange } from '@mui/material/colors';
import { useContext } from 'react';
import { userContext } from '../../App';

export default function LetterAvatars() {
  const userState = useContext(userContext);

  return (
    <Stack
      direction="row"
      spacing={2}
      sx={{
        position: 'absolute',
        top: '5%',
        left: '-36px',
        display: 'flex',
        alignItems: 'center',
        gap: 1, // מרווח קטן בין ה-Avatar ללחצן הלוגין
      }}
    >
      <Avatar
        sx={{
          bgcolor: '#FFC3A0', // אפרסק
          color: '#2E5635', // ירוק כהה
          border: '2px solid #fff',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
        }}
      >
        {userState?.user?.first_name?.charAt(0).toUpperCase()}
      </Avatar>
    </Stack>
  );
}

import React, { useState, useEffect } from 'react';
import instance from '../api/api_instance';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import { FormControl, FormLabel } from '@mui/material';
import UploadIcon from '@mui/icons-material/Upload';
import Upload from '@mui/icons-material/Upload';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  border: '5px solid #02AEEC',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

const centerFlex = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  padding: '30px',
};


export default function EditModal() {
const [open, setOpen] = React.useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);

const [profilePic, setProfilePic] = useState(null);
const [coverPhoto, setCoverPhoto] = useState(null);
const [description, setDescription] = useState('');

useEffect(() => {
  async function GetProfileInformation() {
    try{ 
      await instance ({
        url: "/profile/get",
        method: "GET",          
    }).then((res) => {
      console.log(res)
      setDescription(res.data.description)
    });
    } catch(e) {
      console.error(e)
    }
  }
  GetProfileInformation();
  } , // <- function that will run on every dependency update
  [] // <-- empty dependency array
) 


const handleProfilePicChange = (event) => {
  setProfilePic(event.target.files[0]);
};

const handleCoverPhotoChange = (event) => {
  setCoverPhoto(event.target.files[0]);
};

const handleDescriptionChange = (event) => {
  setDescription(event.target.value);
};

const handleProfileUpdate = async () => {
  const formData = new FormData();
  if (profilePic) {
    formData.append('profile_pic', profilePic);
  }
  if (coverPhoto) {
    formData.append('cover_photo', coverPhoto);
  }
  formData.append('description', description);

  console.log(formData);

  try{
    await instance.post('/profile/edit', formData, {
      // url: "/post/create/data",
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    }).then(
      (res) => {
        
      }
    );
  } catch(e){
      //display error message (username or password incorrect)
      console.error(e)
  }
}

  return (
    <div>
      <Button
        sx={{ margin: 3.5, top: '250px', left: '25px' }}
        className="custom-button"
        variant="contained"
        onClick={handleOpen} // Use onClick here to open the modal
      >
        Edit Profile
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center', fontWeight: 'bold', fontSize: '30px'}}>
            Edit Profile
          </Typography>
          <FormControl sx={{...centerFlex}}>
            <TextField
              id="filled-multiline-static"
              label="Description"
              multiline
              rows={6}
              defaultValue={description}
              variant="filled"
              sx={{margin: '15px', width: '400px'}}
              onChange={handleDescriptionChange}
            />
            <FormLabel>Change Banner Photo</FormLabel>
            <TextField
                type="file"
                style = {{width: 400, textAlign: "center",}}
                inputProps={{accept:".png, .jpg"}}
                margin="normal"
                required
                size="large"
                name="coverPhoto"
                autoFocus
                onChange={handleCoverPhotoChange}
                />
            <FormLabel>Change Profile Photo</FormLabel>
            <TextField
                type="file"
                style = {{width: 400, textAlign: "center",}}
                inputProps={{accept:".png, .jpg"}}
                margin="normal"
                required
                size="large"
                name="profilePic"
                autoFocus
                onChange={handleProfilePicChange}
                />
            <Button onClick={()=> {handleProfileUpdate(); handleClose(); }} sx={{marginTop:'30px'}}>Save Changes</Button>
          </FormControl>

        </Box>
      </Modal>
    </div>
  );
}


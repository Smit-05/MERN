import React from 'react'
import '../styles/NavBar.css'
import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import IconButton from '@mui/material/IconButton';

function NavBar() {
  return (
    <div>
      <nav class="navbar navbar-light bg-light d-flex justify-content-between underline fixed-height">
        <IconButton>
          <PersonIcon fontSize='large' className='icons'></PersonIcon>
        </IconButton>
        
        <a class="navbar-brand font-style" href="#">
            SocioLyf
        </a>
        <IconButton>
          <ForumIcon fontSize='large'></ForumIcon>
        </IconButton>
        
      </nav>
    </div>
  )
}

export default NavBar
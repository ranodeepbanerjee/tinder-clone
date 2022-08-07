import React from 'react'
import './Footer.css'
import ReplayIcon from '@mui/icons-material/Replay';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CloseIcon from '@mui/icons-material/Close';
import StarRateIcon from '@mui/icons-material/StarRate';
import FlashOnIcon from '@mui/icons-material/FlashOn'
import { IconButton } from '@mui/material';

function Footer() {
  return (
    <div className='bottomButtons' >
      <IconButton className='replay' >
        <ReplayIcon fontSize='large' />
      </IconButton>

      <IconButton className='close' >
        <CloseIcon fontSize='large' />
      </IconButton>

      <IconButton className='star' >
        <StarRateIcon fontSize='large' />
      </IconButton>

      <IconButton className='favorite' >
        <FavoriteIcon fontSize='large' />
      </IconButton>

      <IconButton className='flash' >
        <FlashOnIcon fontSize='large' />
      </IconButton>
    </div>
  )
}

export default Footer
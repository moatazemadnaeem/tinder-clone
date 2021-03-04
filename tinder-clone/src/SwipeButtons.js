import React from 'react'
import './SwipeButtons.css'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarIcon from '@material-ui/icons/Star';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from '@material-ui/core/IconButton';
function SwipeButtons() {
    return (
        <div className="btns">
            <IconButton  className="replaybtn">
                <ReplayIcon fontSize="large"/>
            </IconButton>

            <IconButton className="clostbtn">
            <CloseIcon  fontSize="large" />
            </IconButton>

            <IconButton className="favbtn">
            < FavoriteIcon fontSize="large" />
            </IconButton>

            <IconButton className="starbtn">
            <StarIcon  fontSize="large" />
            </IconButton>

            <IconButton  className="flashbtn">
            < FlashOnIcon fontSize="large"/>
            </IconButton>
            
        </div>
    )
}

export default SwipeButtons

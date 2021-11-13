import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';

const Footer = () => {
    return (
        <div className="footer">
            <p>© JavohirDev 2020 - {new Date().getFullYear()} | Made with <FavoriteIcon /></p>
        </div>
    );
};

export default Footer;
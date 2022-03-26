import React from "react";
import propTypes from "prop-types";
import s from './Notification.module.css'

const Notification = ({ message }) => 
    <div className={ s.notification}>
        { message}
    </div>
        
Notification.propTypes = {
    message:propTypes.string.isRequired
}

export default Notification 
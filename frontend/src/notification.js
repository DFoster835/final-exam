import React, {useEffect, useState} from 'react';
import '../ui/notification.css'

export default function Notification({message, styleName}) {
    if (message === null) {
        return null
    }
    return (
        <div className={styleName}>
            {message}
        </div>
    )
}

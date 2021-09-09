import React from 'react'
import './css/HeaderOption.css';
import {Avatar} from '@material-ui/core'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function HeaderOption({avatar,Icon,title,onClick}) {
    const user = useSelector(selectUser);
    console.log(user ? user : '');
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption__icon"/>}
            {avatar && <Avatar className="headerOption__icon" src={user ? user.photoUrl : ''}> {user ? user.email[0] : ''} </Avatar>}
            <h3 className="headerOption__title">{title}</h3>
        </div>
    )
}

export default HeaderOption
 
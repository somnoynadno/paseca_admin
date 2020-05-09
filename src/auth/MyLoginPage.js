import React, { useState } from 'react';
import { useLogin, useNotify, Notification } from 'react-admin';
import { ThemeProvider } from '@material-ui/styles';

import background from '../assets/background.jpg';

let bgStyle = {
    backgroundImage: 'url(' + background.toString() + ')',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width: "auto",
    minHeight: "100vh",
}

let layoutStyle = {
    backgroundColor: 'rgba(255,255,255,0.7)',
    borderRadius: "30px",
    padding: "2% 5%",
    width: "320px",
    margin: "0 auto"
}

let pad = {
    height: "20vh"
}

const MyLoginPage = ({ theme }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const login = useLogin();
    const notify = useNotify();
    const submit = (e) => {
        e.preventDefault();
        login({ username, password })
            .catch(() => notify('Неверные логин или пароль'));
    };

    return (
        <ThemeProvider theme={theme}>
            <div style={bgStyle}>
                <div style={pad}></div>
                <div style={layoutStyle}>
                    <h2>Панель администратора</h2>
                    <form onSubmit={submit}>
                        Пользователь <br />
                        <input name="username" type="text" value={username} onChange={e => setUsername(e.target.value)} />
                        <br /> <br />
                        Пароль <br />
                        <input name="password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <br /><br />
                        <button type="submit">Войти</button>
                        <Notification />
                    </form>
                </div>
            </div>
        </ThemeProvider>
    );
};

export default MyLoginPage;

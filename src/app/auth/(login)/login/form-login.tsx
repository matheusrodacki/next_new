'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';

export default function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode implementar a lógica de autenticação, como:
    // - Chamar uma API para validar o usuário
    // - Armazenar o token retornado
    // - Tratar erros e fornecer feedback para o usuário
    console.log('Email:', email);
    console.log('Senha:', password);

    // Exemplo: após autenticação bem-sucedida, redireciona para a home
    router.push('/');
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Entrar
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Endereço de Email"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Lembrar de mim"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}>
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/auth/register" variant="body2">
                {'Não tem uma conta? Cadastre-se'}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </React.Fragment>
  );
}

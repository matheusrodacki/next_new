// app/api/login/route.ts
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    // Opcional: valide se body.email e body.password estão presentes

    const externalResponse = await fetch(
      'https://clientapi.mrrodz.com/auth/login',
      {
        method: 'POST',
        headers: {
          accept: '*/*',
          'x-client-id': '1', // valor fixo conforme solicitado
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: body.email,
          password: body.password,
        }),
      }
    );

    const data = await externalResponse.json();
    return NextResponse.json(data, { status: externalResponse.status });
  } catch (error) {
    return NextResponse.json(
      { error: `Erro ao autenticar - ${error}` },
      { status: 500 }
    );
  }
}

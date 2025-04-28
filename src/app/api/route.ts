import { type NextRequest } from 'next/server';
import { validateVisitor } from '@/utils/visitorValidation';

export async function GET(request: NextRequest) {
    const { searchParams } = new URL(request.url);

    const username = searchParams.get('username');
    const password = searchParams.get('password');

    if (!username || !password) {
        return new Response('Missing username or password', { status: 400 });
    }

    const result = validateVisitor(username, password);

    if (result.success) {
        return new Response(JSON.stringify(result.data), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } else {
        return new Response(result.message, { status: 401 });
    }
}
import { getNoteBySlug } from '@/lib/notes';
import { NextResponse } from 'next/server';

interface RouteParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(_request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params;
    const note = await getNoteBySlug(slug);

    if (!note) {
      return NextResponse.json({ error: 'Note not found' }, { status: 404 });
    }

    return NextResponse.json(note);
  } catch (error) {
    console.error('Error fetching note:', error);
    return NextResponse.json({ error: 'Failed to fetch note' }, { status: 500 });
  }
}

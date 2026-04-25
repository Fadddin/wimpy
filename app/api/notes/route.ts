import { getAllNotes } from '@/lib/notes';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const notes = await getAllNotes();
    console.log('Fetched notes:', notes);
    return NextResponse.json(notes);
  } catch (error) {
    console.error('Error fetching notes:', error);
    return NextResponse.json(
      { error: 'Failed to fetch notes', details: String(error) }, 
      { status: 500 }
    );
  }
}

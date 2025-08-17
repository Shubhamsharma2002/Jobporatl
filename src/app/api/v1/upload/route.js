import { put } from '@vercel/blob';
import { NextResponse } from 'next/server';

export async function POST(request) {
  const origin = request.headers.get('origin');
  if(origin !== process.env.NEXT_PUBLIC_BASE_URL) 
    return NextResponse.json({ message: "Couldn't upload" }, { status: 403 });

  // Read file from FormData
  const formData = await request.formData();
  const file = formData.get('file');
  if (!file) return NextResponse.json({ message: "No file uploaded" }, { status: 400 });

  // Upload inside "resumes/" folder
  const blob = await put(`resumes/${Date.now()}-${file.name}`, file, {
    access: 'public',
    token: process.env.BLOB_READ_WRITE_TOKEN,
  });
  console.log("blog resposne",blob);
  
  return NextResponse.json(blob);
}

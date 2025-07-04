import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY!;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID!;
    const AIRTABLE_TABLE_NAME = process.env.AIRTABLE_TABLE_NAME;

    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fields: {
          name: name,
          email: email,
          message: message,
        },
      }),
    });

    if (!response.ok) {
      console.error(await response.text());
      return NextResponse.json({ error: 'Failed to submit to Airtable' }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Something went wrong' }, { status: 500 });
  }
}

import { HttpStatusCode } from 'axios';
import { NextRequest, NextResponse } from 'next/server';
import { connectDB } from '@vendor/mongodb';
import { User } from '@models/user';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    if (body.name) {
      const product = await User.create(body);
      return NextResponse.json(
        { product, message: 'You has been created' },
        { status: HttpStatusCode.Created },
      );
    }
    return NextResponse.json({ message: 'Product name is missing' }, { status: HttpStatusCode.BadRequest });
  } catch (error) {
    return NextResponse.json({ message: error }, { status: HttpStatusCode.BadRequest });
  }
}

export async function GET() {
  try {
    await connectDB();
    const users = await User.find();
    return NextResponse.json({ data: users });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
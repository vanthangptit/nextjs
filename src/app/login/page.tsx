import React from 'react';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

//Note: Custom metadata for the all page by this way
export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  return {
    title: 'Login',
    openGraph: {
      images: ['/some-specific-page-image.jpg'],
    },
  }
}

const Login = () => {
  return (
    <div>
      Login
    </div>
  );
};

export default Login;

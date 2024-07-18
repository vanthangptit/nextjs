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

  // // fetch data
  // const product = await fetch(`https://.../${id}`).then((res) => res.json())
  //
  // // optionally access and extend (rather than replace) parent metadata
  // const previousImages = (await parent).openGraph?.images || []

  return {
    title: 'Posts',
    // title: product.title,
    openGraph: {
      images: ['/some-specific-page-image.jpg'],
      //images: ['/some-specific-page-image.jpg', ...previousImages],
    },
  }
}

const Posts = () => {
  return (
    <main>
      <h1>Post Page</h1>
    </main>
  );
};

export default Posts;

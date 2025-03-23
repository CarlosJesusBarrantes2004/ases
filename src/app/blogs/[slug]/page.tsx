interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;

  return <div>BlogPage</div>;
}

export default BlogPage;

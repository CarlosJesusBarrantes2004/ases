interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;

  return <div>ServicePage: {slug}</div>;
}

export default ServicePage;

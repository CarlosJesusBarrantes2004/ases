interface DigitalServicePageProps {
  params: Promise<{ slug: string }>;
}

async function DigitalServicePage({ params }: DigitalServicePageProps) {
  const { slug } = await params;

  return <div>DigitalServicePage: {slug}</div>;
}

export default DigitalServicePage;

type Props = {
  params: Promise<{ slug: string }>;
};

const SlugPage = async ({ params }: Props) => {
  const slug = (await params).slug;

  return (
    <section className='container mx-auto'>
      <div>Travel and tour services single page {slug}</div>
    </section>
  );
};

export default SlugPage;

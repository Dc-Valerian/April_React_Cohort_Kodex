const HeroPage = () => {
  return (
    <section
      className="h-125 bg-cover bg-center flex flex-col items-center justify-center gap-4 text-white"
      style={{
        backgroundImage: `url(${"https://react-landing-page-template-93ne.vercel.app/img/intro-bg.jpg"})`,
      }}
    >
      <h1 className="text-[black] text-[40px] font-bold">Ada Pedro</h1>
      <p>Welcome to My Portfolio Review</p>

      <button className="bg-[red] p-3 rounded-2xl hover:cursor-pointer hover:bg-[blue]">
        Read More
      </button>
    </section>
  );
};

export default HeroPage;

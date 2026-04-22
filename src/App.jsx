function App() {
  return (
    <div>
      <header className="bg-[white] flex items-center justify-between h-20 p-8">
        <div className="text-[black] text-[25px] font-bold">Valerian.</div>

        <div className="">
          <ul className="flex items-center gap-10">
            <li>
              <a href="">Features</a>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Services</a>
            </li>
            <li>
              <a href="">Gallery</a>
            </li>
            <li>
              <a href="">Testimonial</a>
            </li>
          </ul>
        </div>
      </header>

      <section
        className="h-125 bg-cover bg-center flex flex-col items-center justify-center gap-4 text-white"
        style={{
          backgroundImage: `url(${"https://react-landing-page-template-93ne.vercel.app/img/intro-bg.jpg"})`,
        }}
      >
        <h1 className="text-[black] text-[40px] font-bold">Valerian Pedro</h1>
        <p>Welcome to My Portfolio Review</p>
        <button className="bg-[blue] w-[200px] h-[50px] rounded-2xl hover:bg-[green] cursor-pointer">View Resume</button>
      </section>
    </div>
  );
}

export default App;

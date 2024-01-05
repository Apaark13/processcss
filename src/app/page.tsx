function Card({ source }: any) {
  return (
    <div className="card bg-white">
      <a href="/">
        <div className="card-thumbnail">
          <img
            src={source}
            loading="lazy"
            alt="Explore NeoBrutalismCSS"
            className="card-thumbnail"
          />
        </div>
        <div className="card-content">
          <div className="text-small">January 3, 2024</div>
          <p>
            <strong>Explore ProcessCSS: A Revolutionary library</strong>
          </p>
          <p>
            Unveil the future of NeoBrutalism with our groundbreaking approach
            that will transform your life.
          </p>
          <p>
            <strong>Learn More </strong>
          </p>
        </div>
      </a>
    </div>
  );
}
export default function Home() {
  return (
    <>
    <div className="card nav justify-between">
      <div className="logo flex items-center">
      <img src="/assets/logo.png" alt="" className="w-20 px-2"/>
      <h1 className="text-2xl font-bold">ProcessCSS</h1>
      </div>
      <div className="flex">
        <button className="nb-button default rounded p-1 m-1"> Home </button>
        <button className="nb-button orange rounded p-1 m-1"> Projects </button>
        <button className="nb-button pale-red rounded p-1 m-1"> About </button>
        <button className="nb-button green rounded p-1 m-1"> Contact </button>
      </div>
    </div>

      <div className="flex flex-wrap justify-evenly">
        {Array.from({ length: 10 }).map((_, index) => (
          <Card key={index} source={`/assets/image (${index+1}).jpeg`} />
        ))}
      </div>
    </>
  );
}

function Card({ source }: any) {
  return (
    <div className="card">
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
      <div className="card nav">
      <button className="nb-button default rounded p-1 m-1"> Home </button>
      <button className="nb-button orange rounded p-1 m-1"> Projects </button>
      <button className="nb-button pale-red rounded p-1 m-1"> About </button>
      <button className="nb-button green rounded p-1 m-1"> Contact </button>
      </div>

      <div className="flex">
        <Card source="/assets/image.jpeg" />
        <Card source="/assets/image (1).jpeg" />
        <Card source="/assets/image (2).jpeg" />
      </div>
    </>
  );
}

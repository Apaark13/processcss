
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
      
  
        <div className="flex flex-wrap justify-evenly">
          {Array.from({ length: 10 }).map((_, index) => (
            <Card key={index} source={`/assets/image (${index+1}).jpeg`} />
          ))}
        </div>
      </>
    );
  }
  
import "./page.scss";
const page = () => {
  return (
    <div className="home">
      <img src="/assets/home.png" alt="" className=""/>
      <div className="home-text">
        <div>

        <h2 ><div>Welcome to ProcessCSS </div> Your Gateway to Mastering Web Design!</h2>
        <p>
          Unlock the secrets of CSS and elevate your web development skills with
          ProcessCSS. Our platform is tailor-made for learners of all levels,
          from beginners taking their first steps to seasoned developers
          refining their craft.
        </p>
        </div>
        <section>
        <button className="nb-button green rounded p-1 m-1"> Explore </button>
        <button className="nb-button orange rounded p-1 m-1"> Contact </button>

        </section>
      </div>
    </div>
  );
};

export default page;

const page = () => {
  return (
    <div className="flex justify-between">
      <img src="/assets/home.png" alt="" className="w-2/5"/>
      <div className="home-text py-16 w-3/5 px-16 text-right">
        <h2 className="text-4xl py-4">Welcome to ProcessCSS - <br /> Your Gateway to Mastering Web Design!</h2>
        <p>
          Unlock the secrets of CSS and elevate your web development skills with
          ProcessCSS. Our platform is tailor-made for learners of all levels,
          from beginners taking their first steps to seasoned developers
          refining their craft.
        </p>
      </div>
    </div>
  );
};

export default page;

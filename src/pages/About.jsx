import profile from "../assets/img/profile.png";
const About = () => {
  return (
    <section className="h-screen bg-ctm7  flex ">
      <main className=" container mx-auto  my-auto">
        <div className="grid md:grid-cols-2 grid-cols-1 px-4 md:px-0">
          <div className="flex justify-center">
            <img src={profile} className="rounded w-[500px]" alt="profile" />
          </div>

          <div className="my-auto p-3">
            <div className="">
              <h2 className="text-3xl font-bold">
                About <span className="text-ctm5">Me</span>
              </h2>
              <p className="mt-5">
                There are many variations of passages ofLorem Ipsum available,
                but the majority havesuffered alteration in some form, by
                injected humour, Passages ofLorem Ipsumavailable, but the
                majority havesuffered alteration in some form, by injected
                humour,
              </p>
            </div>
            <div className="mt-3 hidden md:block">
              <span className="font-semibold text-xl text-red-600">Stacks</span>
              <ul className="uppercase">
                <li className="border border-ctm5  inline-block p-1 mr-2 ml-1 mt-2">
                  HTML
                </li>
                <li className="border border-ctm5  inline-block p-1 mr-2 ml-1 mt-2">
                  CSS
                </li>
                <li className="border border-ctm5  inline-block p-1 mr-2 ml-1 mt-2">
                  Front End Development
                </li>
                <li className="border border-ctm5  inline-block p-1 mr-2 ml-1 mt-2">
                  JAVASCRIPT
                </li>
                <li className="border border-ctm5  inline-block p-1 mr-2 ml-1 mt-2">
                  REACT
                </li>
                <li className="border border-ctm5  inline-block p-1 mr-2 ml-1 mt-2">
                  NODE
                </li>
                <li className="border border-ctm5  inline-block p-1 mr-2 ml-1 mt-2">
                  FIVEM
                </li>
                <li className="border border-ctm5  inline-block p-1 mr-2 ml-1 mt-2">
                  DISCORD.JS
                </li>
                <li className="border border-ctm5  inline-block p-1 mr-2 ml-1 mt-2">
                  LUA
                </li>
                <li className="border border-ctm5  inline-block p-1 mr-2 ml-1 mt-2">
                  UI/UX
                </li>
                <li className="border border-ctm5  inline-block p-1 mr-2 ml-1 mt-2">
                  PHOTOSHOP
                </li>
                <li className="border border-ctm5  inline-block p-1 mr-2 ml-1 mt-2">
                  FIGMA
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
};

export default About;

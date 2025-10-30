import "./App.css";

function App() {
  return (
    <>
      <section className="h-screen w-screen flex justify-center items-center bg-[#E6EFF6]">
        <div className="h-[720px] w-[315px] md:h-[474px] md:w-[635px] rounded-lg shadow-lg">
          <div className="h-[40%] w-full md:h-[50%] box-border px-5 py-8 md:p-10 rounded-t-lg">
            <h1 className="text-[#2BB3B1] font-bold md:font-semi-bold text-lg md:text-2xl mb-7">
              Join our community
            </h1>
            <p className="text-[#BFDF32] font-bold mb-3">
              30-day, hassle-free money back guarantee
            </p>
            <p className="text-gray-400">
              Gain access to our full library of tutorials along with expert
              code reviews. Perfect for any developers who are serious about
              honing their skills.
            </p>
          </div>

          <div className="md:flex h-[60%] md:h-[50%] w-full">
            <div className="h-[50%] md:h-full w-full md:w-[50%] bg-[#2BB3B1] box-border p-5 md:rounded-bl-lg">
              <h2 className="text-white font-bold">Monthly Subscription</h2>
              <p className="my-3 text-gray-300">
                <span className="font-bold text-white text-3xl mr-1.5">$29</span> per month
              </p>
              <p className="text-white">Full access for less than $1 a day</p>
              <button className="mt-5 h-[47px] w-[250px] text-white bg-[#BFDF32] rounded-lg shadow-lg font-bold">
                Sign Up
              </button>
            </div>

            <div className="h-[50%] md:h-full w-full md:w-[50%] bg-[#4ABEBD] box-border p-5 md:rounded-br-lg rounded-b-lg md:rounded-b-none">
              <h2 className="text-white font-bold mb-3">Why Us</h2>
              <p className="text-white text-sm">Tutorials by industry experts</p>
              <p className="text-white text-sm">Peer &amp; expert code review</p>
              <p className="text-white text-sm">Coding exercises</p>
              <p className="text-white text-sm">Access to our GitHub repos</p>
              <p className="text-white text-sm">Community forum</p>
              <p className="text-white text-sm">Flashcard decks</p>
              <p className="text-white text-sm">New videos every week</p>
            </div>
          </div>
        </div>

        {/* Signature at the very bottom center of the page */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
          <a
            href="https://github.com/fatintawsifhoque"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <span className="text-gray-500 text-base md:text-lg font-medium tracking-wide">
              Coded by{" "}
              <span className="text-[#2BB3B1] font-bold text-lg md:text-xl group-hover:text-[#4ABEBD] transition-colors duration-300">
                Fatin Tawsif Hoque
              </span>
            </span>
            <span className="block mt-1 w-0 h-0.5 bg-[#2BB3B1] mx-auto group-hover:w-32 transition-all duration-500 ease-out"></span>
          </a>
        </div>
      </section>
    </>
  );
}

export default App;
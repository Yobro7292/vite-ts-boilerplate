import HomeNavbar from '../partials/navbars/HomeNavbar';

function Home() {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <HomeNavbar />
      <div className="w-3/4 mt-8">
        <span className="text-2xl font-medium">
          Example title of the page.
        </span>
      </div>
    </main>
  );
}

export default Home;

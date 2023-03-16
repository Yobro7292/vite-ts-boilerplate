import HomeNavbar from '../partials/navbars/HomeNavbar';
import { increment } from '../slices/counterSlices';
import { useAppDispatch, useAppSelector } from '../slices/hooks';

function Home() {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);
  return (
    <main className="w-full h-full flex flex-col items-center justify-center">
      <HomeNavbar />
      <div className="w-3/4 mt-8 flex flex-col">
        <span className="text-2xl font-medium">Example title of the page.</span>
        <button
          type="button"
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <span className="text-2xl font-medium text-green-500">{counter}</span>
      </div>
    </main>
  );
}

export default Home;

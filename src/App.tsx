import { useQuery } from "@tanstack/react-query";
import { fetchArtImages } from "./fetchArtImages";
import { useState } from "react";
import logo from "./logo.png";

function App() {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ["images", page],
    queryFn: () => fetchArtImages({ pageParam: page }),
  });

  const setNextPage = () => {
    setPage((page) => page + 1);
  };

  const setPreviousPage = () => {
    setPage((page) => page - 1);
  };

  if (isLoading)
    return (
      <div className="text-2xl text-slate-700 m-40 text-center">
        Gallery loading...
      </div>
    );

  if (error) return "Something went wrong!";

  return (
    <div className="font-[Cinzel] text-xs">
      <header className=" mt-4  bg-slate-400/20 shadow-md flex  items-end gap-2 px-10 py-3 sm:gap-6 sm:py-5 ">
        <img src={logo} alt="logo" className=" w-12 sm:w-20 "></img>
        <div>
          <h1 className="mb-2 font-semibold sm:text-xl 2xl:text-2xl">
            ART GALLERY
          </h1>
          <h2 className="2xl:text-lg">Art Institute of Chicago</h2>
        </div>
      </header>
      <main className="grid grid-cols-1 gap-x-5 gap-y-10 m-10 mb-12 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 2xl:gap-x-7 2xl:gap-y-20">
        {data?.images.map((image) => (
          <div key={image.id} className="max-w-3xs mb-10">
            <img
              src={image.imageUrl || undefined}
              alt={image.title}
              className=" w-full h-full object-cover shadow-lg"
            ></img>
            <h2 className="mt-3 line-clamp-2 xl:text-sm 2xl:text-2xl">
              {image.title}
            </h2>
          </div>
        ))}
      </main>
      <footer className="m-8 sm:text-sm xl:text-lg 2xl:text-3xl 2xl:mt-28">
        <div className="flex gap-1 justify-center items-center sm:gap-3">
          <button
            onClick={setPreviousPage}
            disabled={page === 1}
            className=" disabled:text-gray-600 disabled:border-gray-200 disabled:hover:bg-gray-50 w-24 py-1 px-3 border rounded-md border-blue-200 transition duration-500 hover:bg-blue-100 xl:w-32 2xl:px-5 2xl:py-2 2xl:w-48 "
          >
            Previous
          </button>
          <p className=" p-1 ">{page}</p>
          <button
            onClick={setNextPage}
            className=" w-24 p-1 border rounded-md border-blue-200 transition duration-500 hover:bg-blue-100 xl:w-32 2xl:px-5 2xl:py-2 2xl:w-48"
          >
            Next
          </button>
        </div>
      </footer>
    </div>
  );
}

export default App;

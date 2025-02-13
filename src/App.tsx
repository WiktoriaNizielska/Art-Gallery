import { useQuery } from "@tanstack/react-query";
import { fetchArtImages } from "./fetchArtImages";
import { useState } from "react";

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

  if (isLoading) return "Loading...";

  if (error) return "Something went wrong!";

  return (
    <>
      <header className="m-10">Art gallery - Art Institute of Chicago</header>
      <main className="grid grid-cols-1 gap-x-5 gap-y-10 m-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 ">
        {data?.images.map((image) => (
          <div key={image.id} className="max-w-3xs mb-10 md:max-h-48">
            <img
              src={image.imageUrl || undefined}
              alt={image.title}
              className=" w-full h-full object-cover shadow-lg"
            ></img>
            <h2 className="mt-3 line-clamp-2">{image.title}</h2>
          </div>
        ))}
      </main>
      <footer className="m-8">
        <div className="flex gap-3 justify-center">
          <button
            onClick={setPreviousPage}
            className="w-24 p-1 border rounded-md border-blue-200 transition duration-500 hover:bg-blue-100 "
          >
            Previous
          </button>
          <p className=" p-1 ">{page}</p>
          <button
            onClick={setNextPage}
            className=" w-24 p-1 border rounded-md border-blue-200 transition duration-500 hover:bg-blue-100 "
          >
            {" "}
            Next{" "}
          </button>
        </div>
      </footer>
    </>
  );
}

export default App;

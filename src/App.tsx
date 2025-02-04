import { useQuery } from "@tanstack/react-query";
import { fetchArtImages } from "./fetchArtImages";

function App() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["images"],
    queryFn: fetchArtImages,
  });

  if (isLoading) return "Loading...";

  if (error) return "Something went wrong!";

  return (
    <>
      <header className="m-2">Art gallery - Art Institute of Chicago</header>
      <main className="max-lg:grid-cols-4 max-md:grid-cols-3 max-sm:grid-cols-1 grid grid-cols-5 gap-5 m-2 ">
        {data?.images.map((image) => (
          <div key={image.id} className="max-w-3xs mb-10 ">
            <img
              src={image.imageUrl || undefined}
              alt={image.title}
              className=" w-full h-full object-cover"
            ></img>
            <h2>{image.title}</h2>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;

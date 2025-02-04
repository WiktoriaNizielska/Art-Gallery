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
      <header>Art gallery - Art Institute of Chicago</header>
      <main>
        {data?.images.map((image) => (
          <div key={image.id}>
            <img src={image.imageUrl || undefined} alt={image.title}></img>
            <h2>{image.title}</h2>
          </div>
        ))}
      </main>
    </>
  );
}

export default App;

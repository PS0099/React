import "./App.css";
import DataToShow from "./Components/DataToShow";
import UseFetch from "./Custom_hook/UseFetch";

function App() {
  const { data, loading, error } = UseFetch();

  // Console log to inspect the data for debugging purposes
  const flat = data.flat();
 

  // Loading state
  if (loading)
    return (
      <h1 className="text-blue-500 text-4xl text-center font-semibold mt-[20%]">
        Loading...
      </h1>
    );
  
  // Error handling
  if (error)
    return (
      <h1 className="text-red-500 text-4xl text-center font-semibold mt-[20%]">
        Error: {error.message}
      </h1>
    );
  

  return (
    <div>
      <h1 className="text-center text-2xl m-2 bg-blue-300 p-3 ">Photo Gallery</h1>
      <DataToShow data={flat} /> 
    </div>
  );
}

export default App;

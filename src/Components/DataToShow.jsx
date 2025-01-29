import React from "react";

function DataToShow({ data }) {
  return (
    <div className=" bg-blue-300 p-4 grid grid-cols-4 gap-4">
      {data.map((photo, index) => (
        <div key={index} className="flex flex-col items-center bg-slate-500 border-emerald-600 border-4"
>
           <h1>Photo No : {index + 1}</h1>
          <div className="flex justify-center mb-2">
            <img
              src={
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-C_UAhXq9GfuGO452EEzfbKnh1viQB9EDBQ&s"
              }
              className="w-48 h-auto rounded-full"
            />
          </div>
          <div className="flex justify-center mt-2">
            <p className="text-center text-white text-sm">
              {photo.title ||
                "Lorem ipsum dolor sit amet consectetur adipisicing elit."}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DataToShow;

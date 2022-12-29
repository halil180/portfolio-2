import React, { useState } from "react";
const images = [
  "ZHBwdrv8aCc",
  "DHph0kuNf-s",
  "Wsb_xHRTqMo",
  "xqlyExBhVeM",
  "pWVtNae4bZg",
  "IPo2T6RGuaQ",
];
function ShortVids() {
  const [vidURl, setVidUrl] = useState(null);
  return (
    <div className="container mx-auto  mt-5 mb-5">
            <h1 className="text-center text-4xl pt-5">Some of my Shortvids</h1>
      <div className="grid-cols-3 p-10 space-y-2 lg:space-y-0 lg:grid lg:gap-3 lg:grid-rows-3 rounded">
        {images.map((image, index) => (
          <div
            key={index}
            className={
              index === 1
                ? "w-full col-span-2 row-span-2 rounded  transition duration-300 ease-in-out hover:opacity-70"
                : "w-full rounded transition duration-300 ease-in-out hover:opacity-70"
            }
          >
            <label
              htmlFor="my-modal-5"
              className="btn w-full h-full"
              onClick={() => setVidUrl(image)}
            >
              <img
                src={`https://img.youtube.com/vi/${image}/0.jpg`}
                alt="youtube ShortVids"
                className={index === 1 ? "h-full rounded " : ""}
              />
            </label>
          </div>
        ))}
      </div>

      <input type="checkbox" id="my-modal-5" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <h3 className="font-bold text-lg">
            Hicoders Shortvids
          </h3>
          <p className="py-4">
            <iframe
              className="w-full aspect-video ..."
              src={`https://www.youtube.com/embed/${vidURl}`}
            ></iframe>
          </p>
          <div className="modal-action">
            <label
              htmlFor="my-modal-5"
              className="btn"
              onClick={() => setVidUrl(null)}
            >
              nice!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ShortVids;
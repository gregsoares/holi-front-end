import React, { useEffect } from "react";

export const LazyLoader = () => {
  useEffect(() => {
    const lazyLoad = () => {
      const nodes = document.querySelectorAll("img");

      let nodeOptions = {};

      let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const image = entry.target;
          image.src = image.src.replace("10", "800");
          observer.unobserve(image);
        });
      }, nodeOptions);

      nodes.forEach((node) => {
        observer.observe(node);
      });
      console.log({ nodeOptions });
    };
    lazyLoad();
  }, []);
  return (
    <div>
      <ul classList="flex flex-wrap" id="listContainer">
        <div classList="mx-2">
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
        </div>
        <div classList="mx-2">
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
        </div>
        <div classList="mx-2">
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
        </div>
        <div classList="mx-2">
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
        </div>
        <div classList="mx-2">
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
        </div>
        <div classList="mx-2">
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
        </div>
        <div classList="mx-2">
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
        </div>
        <div classList="mx-2">
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
        </div>
        <div classList="mx-2">
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
        </div>
        <div classList="mx-2">
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
        </div>
        <div classList="mx-2">
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
        </div>
        <div classList="mx-2">
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
          <li classList="w-64 h-64 mx-2 border-black border-4 my-3 hover:shadow-lg">
            <img src="https://via.placeholder.com/10" alt="" />
          </li>
        </div>
      </ul>
    </div>
  );
};

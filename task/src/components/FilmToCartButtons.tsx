"use client";

import { useMemo } from "react";

import { IMovie } from "@/lib/api";
import { useStore } from "@/lib/store";

export const FilmToCartButtons = ({
  movie,
}: {
  movie: IMovie;
}) => {

  const addItem = useStore((state) => state.addItem);
  const removeItem = useStore((state) => state.removeItem);
  const cartItems = useStore((state) => state.cartItems);

  const count = useMemo(
    () =>
      cartItems.reduce(
        (acc, item) => (item.id === movie.id ? acc + 1 : acc),
        0
      ),
    [cartItems, movie.id]
  );

  const handleRemove = (movie: IMovie) => {
    removeItem(movie);
  };

  return (
    <>
      <button
        className="flex items-center justify-center text-white rounded-md bg-orange w-5 h-5 disabled:bg-orange-disabled disabled:hover:brightness-100 hover:brightness-90"
        onClick={() => handleRemove(movie)}
        disabled={!count}
        aria-label="delete ticket"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="10"
          height="2"
          fill="none"
        >
          <path
            fill="#fff"
            d="M9.5 1a.375.375 0 0 1-.375.375H.875a.375.375 0 0 1 0-.75h8.25A.375.375 0 0 1 9.5 1Z"
          />
        </svg>
      </button>
      <p>{count}</p>
      <button
        className="flex items-center justify-center text-white rounded-md bg-orange w-5 h-5 disabled:bg-orange-disabled disabled:hover:brightness-100 hover:brightness-90 "
        onClick={() => addItem(movie)}
        disabled={cartItems.length >= 30}
        aria-label="add ticket"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="none"
        >
          <path
            fill="#fff"
            d="M10.5 6a.375.375 0 0 1-.375.375h-3.75v3.75a.375.375 0 0 1-.75 0v-3.75h-3.75a.375.375 0 1 1 0-.75h3.75v-3.75a.375.375 0 1 1 .75 0v3.75h3.75A.375.375 0 0 1 10.5 6Z"
          />
        </svg>
      </button>
    </>
  );
};

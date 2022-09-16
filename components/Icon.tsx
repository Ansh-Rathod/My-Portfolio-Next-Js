import React from "react";

export default function Icon(props: any) {
  const { classes, url } = props;
  return (
    <div className="scale-100 hover:scale-[1.1]">
      <a
        target="_blank"
        rel="noreferrer"
        href={url + "&ref=anshrathod.com"}
        className=" rounded-full p-2 m-2 border-[0.6px] transition-all ease-in-out border-slate-400 group
          hover:bg-blue-100 hover:border-blue-300"
      >
        <i
          className={
            classes + ` group-hover:text-blue-700 group-hover:scale-110`
          }
        ></i>
      </a>
    </div>
  );
}

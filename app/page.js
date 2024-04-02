"use client";
import Input from "postcss/lib/input";
import React, { useState } from "react";

const page = () => {
  const [tname, settname] = useState("");
  const [tdesc, settdesc] = useState("");
  const [maintask, setmaintask] = useState([]);

  const valuesubmited = (e) => {
    e.preventDefault();
    setmaintask([...maintask, { tname, tdesc }]);
    settname("");
    settdesc("");
  };
  const deletetsk = (i) => {
    var copylist = [...maintask];
    copylist.splice(i, 1);
    setmaintask(copylist);
  };

  let randerlist = maintask.map((t, i) => {
    return (
      <li key={i}>
        <div className="grid grid-cols-3 w-full gap-4 p-5 bg-gray-500 mb-2 px-10 text-white">
          <h3 className="font-bold text-2xl">{t.tname}</h3>
          <h4 className="font-semibold text-2xl">{t.tdesc}</h4>
          <div key={i}>
            <button
              className="rounded-md font-bold bg-red-500 text-white px-4 py-2 "
              onClick={() => {
                deletetsk(i);
              }}
            >
              delete
            </button>
          </div>
        </div>
      </li>
    );
  });

  return (
    <div>
      <div>
        <h1 className="flex h-20 bg-gray-500 text-white items-center justify-center text-3xl">
          List Today Tasks
        </h1>
      </div>
      <form onSubmit={valuesubmited}>
        <div className="flex items-center justify-center w-full">
        <div className="gap-5 flex items-center m-10">
          <input
            value={tname}
            onChange={(e) => {
              settname(e.target.value);
            }}
            type="text"
            placeholder="Task Name"
            className="text-2xl border-zinc-600 border-2 rounded-md p-2"
          ></input>
          <input
            value={tdesc}
            onChange={(e) => {
              settdesc(e.target.value);
            }}
            type="text"
            placeholder="Task description "
            className="text-2xl border-zinc-600 border-2 rounded-md p-2"
          ></input>
          <button className="text-2xl bg-gray-500 text-white rounded-md px-4 py-2 ">
            submit
          </button>
        </div>
        </div>
      </form>
      <hr />
      <div>{randerlist}</div>
    </div>
  );
};

export default page;

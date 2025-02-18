import React from "react";

function Input({ label, type, id, placeholder, register, rules, error }) {
  return (
    <div className="mb-6">
      <div className="flex">
        <label htmlFor={id} className="font-semibold w-40 p-2">
          {label}
        </label>
        <div className="flex-1">
          <input
            className="w-full p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
            id={id}
            type={type}
            placeholder={placeholder}
            {...register(id, rules)}
          />
          {error && (
            <p className="text-red-500 text-sm mt-1">{error.message}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Input;

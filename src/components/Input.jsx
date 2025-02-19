import React from "react";

const Input = React.forwardRef(
  ({ label, type, id, placeholder, error, ...props }, ref) => {
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
              ref={ref}
              {...props}
            />
            {error && (
              <p className="text-red-500 text-sm mt-1">{error.message}</p>
            )}
          </div>
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;

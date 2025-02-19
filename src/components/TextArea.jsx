import React from "react";

const TextArea = React.forwardRef(
  ({ label, id, placeholder, error, ...props }, ref) => {
    return (
      <div className="mb-6">
        <div className="flex">
          <label htmlFor={id} className="font-semibold w-40 p-2">
            {label}
          </label>
          <div className="flex-1">
            <textarea
              className="w-full h-60 p-2 font-medium border rounded-md border-slate-300 placeholder:opacity-60"
              id={id}
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

export default TextArea;

import React, { useState } from "react";

function UserForm({ formType, submitAction }) {
  const [values, setValues] = useState();
  const onChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    formType === "signUp"
      ? submitAction({
          variables: {
            registerInput: {
              ...values,
            },
          },
        })
      : submitAction({
          variables: {
            ...values,
          },
        });
  };
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <form
        className="flex flex-col space-y-3 w-1/2 border border-gray-300 p-16 rounded-md shadow-md"
        onSubmit={onSubmit}
      >
        <p className="text-2xl font-semibold text-center mb-8">
          {formType === "signUp" ? "Sign up" : "Sign In"}
        </p>
        {formType === "signUp" && (
          <input
            className="border border-gray-300 p-2 rounded-md text-sm"
            placeholder="Username"
            required
            type="text"
            id="username"
            name="username"
            onChange={onChange}
          />
        )}
        <input
          className="border border-gray-300 p-2 rounded-md text-sm"
          placeholder="Email"
          required
          type="email"
          id="email"
          name="email"
          onChange={onChange}
        />
        <input
          className="border border-gray-300 p-2 rounded-md text-sm"
          placeholder="Password"
          required
          type="password"
          id="password"
          name="password"
          onChange={onChange}
        />
        {formType === "signUp" && (
          <input
            className="border border-gray-300 p-2 rounded-md text-sm"
            placeholder="Confirm password"
            required
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={onChange}
          />
        )}
        <button
          type="submit"
          className="py-2 bg-slate-400 text-white rounded-md hover:bg-slate-500 active:bg-slate-600 duration-300"
        >
          {formType === "signUp" ? "Sign up" : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default UserForm;

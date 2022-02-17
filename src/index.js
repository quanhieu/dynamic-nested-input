import React from "react";
import { useForm } from "react-hook-form";
import FieldArray from "./fieldArray";
import ReactDOM from "react-dom";

import "./styles.css";

const defaultValues = {
  domain: [
    {
      domainField: 'http://testphp.vulnweb.com/',
      subdomain: [
        {
          subdomainField: 'http://testphp.vulnweb.com/artists.php'
        },
        {
          subdomainField: 'http://testphp.vulnweb.com/categories.php'
        },
      ]
    },
    {
      domainField: 'https://knexjs.org/',
      subdomain: [
        {
          subdomainField: 'https://knexjs.org/#Builder-del%20/%20delete'
        }
      ]
    },
  ]
};

function App() {
  const {
    control,
    register,
    handleSubmit,
    errors,
    reset,
  } = useForm({
    defaultValues
  });
  const onSubmit = (data) => console.log("data", data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Array of Array Fields</h1>
      <p>
        The following example demonstrate the ability of building nested array
        fields.
      </p>

      <FieldArray
        {...{ control, register, defaultValues, errors }}
      />

      <button type="button" onClick={() => reset(defaultValues)}>
        Reset
      </button>

      <input type="submit" />
    </form>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

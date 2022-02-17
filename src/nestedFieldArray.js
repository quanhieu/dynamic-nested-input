import React from "react";
import { useFieldArray } from "react-hook-form";

export default ({ nestIndex, control, register }) => {
  const { fields, remove, append } = useFieldArray({
    control,
    name: `domain[${nestIndex}].subdomain`
  });

  return (
    <ul>
      <label>Nested Array:</label>
      {fields.map((item, k) => {
        return (
          <li key={item.id} style={{ marginLeft: 20 }}>
            <input
              name={`domain[${nestIndex}].subdomain[${k}].subdomainField`}
              ref={register({ required: true })}
              defaultValue={item.subdomainField}
              style={{ marginRight: "25px" }}
            />

            <button type="button" onClick={() => remove(k)}>
              Delete Nested
            </button>
          </li>
        );
      })}

      <button
        type="button"
        onClick={() =>
          append({
            subdomainField: "sub.example.com"
          })
        }
      >
        Append Nested
      </button>

      <hr />
    </ul>
  );
};

import React from "react";
import { useFieldArray } from "react-hook-form";
import NestedArray from "./nestedFieldArray";

let renderCount = 0;

export default function Fields({ control, register }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "domain"
  });

  renderCount++;

  return (
    <>
      <label>Domain:</label>
      <ul>
        {fields.map((item, index) => {
          return (
            <li key={item.id}>
              <input
                name={`domain[${index}].domainField`}
                ref={register()}
                defaultValue={item.domainField}
              />

              <button type="button" onClick={() => remove(index)}>
                Delete
              </button>
              <NestedArray nestIndex={index} {...{ control, register }} />
            </li>
          );
        })}
      </ul>

      <section>
        <button
          type="button"
          onClick={() => {
            append({ domainField: "append" });
          }}
        >
          append
        </button>
      </section>

      <span className="counter">Render Count: {renderCount}</span>
    </>
  );
}

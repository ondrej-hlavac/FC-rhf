import React, { ChangeEvent, FormEvent, useState } from "react";
import Result from "../components/Result";

type Event = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

let renderCount: number = 0;

const ControlledForm = () => {
  const [formData, setFormData] = useState({});

  renderCount++;

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(`form submit data: ${JSON.stringify(formData)}`);
  };

  const handleChange = (e: Event) => {
    const { value, name } = e.currentTarget;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h1>Controlled form</h1>
      <form onSubmit={onSubmit}>
        <label>
          Jméno
          <input type="text" name="firstName" onChange={handleChange} />
        </label>
        <br />
        <label>
          Příjmení
          <input type="text" name="lastName" onChange={handleChange} />
        </label>
        <br />
        <label>
          profese
          <select onChange={handleChange} name="profession">
            <option value="">vyber</option>
            <option value="dev">developer</option>
            <option value="civil">civilista</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Odeslat" />
      </form>
      <hr />
      <Result renderCount={renderCount} />
    </>
  );
};

export default ControlledForm;

import { SubmitHandler, useForm } from "react-hook-form";
import Result from "../components/Result";

type FormData = {
  firstName: string;
  lastName: string;
  profession: string;
};

let renderCount: number = 0;

const RHF = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>();

  renderCount++;

  const onSubmit: SubmitHandler<FormData> = (data) => {
    alert(`form submit data: ${JSON.stringify(data)}`);
  };

  // INFO: watch způsobuje rerender komponenty
  // console.log(watch("firstName"));

  return (
    <div
      style={{
        display: "block",
        marginTop: "200px",
        padding: "20px",
        background: "lightblue",
      }}
    >
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Jméno
          <input
            type="text"
            {...register("firstName", { required: true, minLength: 3 })}
          />
          {errors.firstName && (
            <p style={{ color: "red" }}>
              toto pole musí být vyplněno s minimální délkou tří znaků
            </p>
          )}
        </label>
        <br />
        <label>
          Příjmení
          <input
            type="text"
            {...register("lastName", {
              required: "Toto pole musí být vyplněno",
              minLength: {
                value: 3,
                message: "minimální délka příjmení jsou tři znaky",
              },
            })}
          />
          <p>{errors.lastName?.message}</p>
        </label>
        <br />
        <label>
          profese
          <select {...register("profession")}>
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
    </div>
  );
};

export default RHF;

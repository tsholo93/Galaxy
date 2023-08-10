import { useForm } from "react-hook-form";
import './Form.css';
import "../../../Common/styles/Button.css";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    formState: {errors}
  } = useForm();

  const onSubmit = data => console.log("Thank you!");

  return (
    <form
      style={{
        background: "#0D0D0D",
        color: "#F2F2F2"
      }}
      className="container-fluid w-100 m-0 p-0 galaxy-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="row">
        <section className="mb-3 col">
          <label
            htmlFor="userName"
            className="form-label">Name</label>

          <input
            id="userName"
            type="text"
            placeholder="e.g John"
            name="userName"
            className="form-control x-dark border-gradient"
            {
              ...register("name", {
                  required: "Name is required.",
                  minLength: {
                    value: 2,
                    message: "Name must be at-least 2 characters."
                  },
                  maxLength: {
                    value: 30,
                    message: "Name must not exceed 30 characters."
                  },
                  pattern: {
                    value: /^[a-z]+$/i,
                    message: "Please enter a valid name"
                  }
              })
            }
            aria-invalid={errors.name ? "true" : "false"}
          />

          {
            errors.name  && (
            <p role="alert" className="form-text" style={{
              color: "#FF293B"
            }}>{errors.name.message}</p>)
          }
        </section>

        <section className="mb-3 col">
          <label
            htmlFor="userSurname"
            className="form-label">Surname</label>

          <input
            id="userSurname"
            placeholder="e.g Doe"
            name="userSurname"
            type="text"
            className="form-control x-dark border-gradient"
            {
              ...register("surname", {
                require: "Surname is required.",
                minLength: {
                  value: 2,
                  message: "Surname must be at-least 2 characters."
                },
                maxLength: {
                  value: 30,
                  message: "Surname should not exceed 30 characters."
                },
                pattern: {
                  value: /^[a-z]+$/i,
                  message: "Please enter a valid surname."
                }
              })
            }
            aria-invalid={errors.surname ? "true" : "false"}
          />

          {
            errors.surname  && (
            <p role="alert" className="form-text" style={{
              color: "#FF293B"
            }}>{errors.surname.message}</p>)
          }
        </section>
      </div>

      <div className="row">
        <section className="mb-3 col">
          <label
            htmlFor="userMail"
            className="form-label">Email Address</label>
          <input
            id="userMail"
            placeholder="e.g johndoe@mail.com"
            name="userMail"
            type="email"
            className="form-control x-dark border-gradient"
            {
              ...register("userMail", {
                required: "Email address is required.",
                pattern: {
                  value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Please enter a valid email."
                }
              })
            }
            aria-invalid={errors.userMail ? "true" : "false"}
            />

          {
            errors.userMail  && (
            <p role="alert" className="form-text" style={{
              color: "#FF293B"
            }}>{errors.userMail.message}</p>)
          }
        </section>

        <section className="mb-3 col">
          <label
            htmlFor="userPhone"
            className="form-label">Contact Number</label>

          <input
            id="userPhone"
            placeholder="e.g 072 678 8762"
            name="userPhone"
            type="text"
            className="form-control x-dark border-gradient"
            {
              ...register("userContact", {
                  required: "Contact number is required.",
                  minLength: {
                    value: 10,
                    message: "Contact number must be at least 10 character."
                  },
                  maxLength: {
                    value: 10,
                    message: "Please enter a valid contact number."
                  },
                  pattern: {
                    value: /^[0-9]+$/g,
                    message: "Please enter a valid contact number."
                  }
                })
              }
              aria-invalid={errors.userContact ? "true" : "false"}
              />
          {
            errors.userContact  && (
            <p role="alert" className="form-text" style={{
              color: "#FF293B"
            }}>{errors.userContact.message}</p>)
          }
        </section>
      </div>


      <div className="row">
        <fieldset className="form-set">
          <legend style={{
            fontSize: "1rem"
          }}>Are you participating as a:</legend>
          <ul className="list-unstyled">
            <li className="form-check form-check-inline">
              <input
                id="part-player"
                type="radio"
                name="userParticipation"
                value="player"
                className="form-check-input"
              />
              <label htmlFor="part-player" className="form-check-label">Player</label>
            </li>
            <li className="form-check form-check-inline">
              <input
                id="part-spectator"
                type="radio"
                name="userParticipation"
                value="spectator"
                className="form-check-input"
              />
              <label htmlFor="part-spectator" className="form-check-label">Spectator</label>
            </li>
            <li className="form-check form-check-inline">
              <input
                id="part-exhibitor"
                type="radio"
                name="userParticipation"
                value="exhibitor"
                className="form-check-input"
              />
              <label htmlFor="part-exhibitor" className="form-check-label">Exhibitor</label>
            </li>
          </ul>
        </fieldset>
      </div>

      <div className="row">
        <section className="mb-3">
          <label
            htmlFor="userMessage"
            className="form-label"
          >Special Requests</label>
          <textarea
            className="form-control x-dark border-gradient"
            name="userMessage"
            row="2"
          ></textarea>
    </section>
      </div>

      <div className="row">
        <section className="my-4">
          <button
            type="submit"
            className="btn x-dark galaxy-button black btn-style"
          >
              <strong>Register now</strong>
          </button>
        </section>
      </div>
    </form>
  )
}

export default Form

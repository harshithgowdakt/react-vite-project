import { FormEvent, useRef } from "react";

const Form = () => {
   const nameRef = useRef<HTMLInputElement>(null);
   const ageRef = useRef<HTMLInputElement>(null);
   const person = { name: "", age: 0 };

   const handleSubmit = (event: FormEvent) => {
     event.preventDefault();
     console.log("submitted");
     if (nameRef.current != null) person.name = nameRef.current.value;
     if (ageRef.current != null) person.age = parseInt(ageRef.current.value);
   };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-lable">
          Name
        </label>
        <input ref={nameRef} type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-lable">
          Age
        </label>
        <input ref={ageRef} type="number" className="form-control" />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;

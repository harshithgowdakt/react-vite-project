const Form = () => {
  return (
    <form>
      <div className="mb-3">
        <label htmlFor="name" className="form-lable">
          Name
        </label>
        <input type="text" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-lable">
          Age
        </label>
        <input type="number" className="form-control" />
      </div>
    </form>
  );
};

export default Form;

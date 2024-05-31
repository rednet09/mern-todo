const TodoForm = () => {
  return (
    <>
      <section className="mx-auto">
        <div className="">
          <input
            className="border p-2 mx-2 rounded-md"
            placeholder="Enter the TODOs..."
          />
          <button className="rounded-lg bg-slate-950 text-white p-2">
            Add TODO
          </button>
        </div>
      </section>
    </>
  );
};
export default TodoForm;

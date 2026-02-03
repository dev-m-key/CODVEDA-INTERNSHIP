export default function SearchCard() {
  return (
    <div className="card shadow-sm p-4">
      <h5 className="mb-3 text-primary">Repository Search</h5>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search..."
        aria-label="Search repositories"
      />

      <button className="btn btn-primary w-100">
        Search
      </button>
    </div>
  );
}

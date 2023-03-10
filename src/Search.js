import "./App.css";
export default function Search() {
  return (
    <div className="searchForm">
      <form>
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city.."
              autofocus="on"
              autocomplete="off"
              className="form-control shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="form-control btn btn-primary shadow-sm"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Current"
              className="form-control btn btn-success shadow-sm"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

import { Component } from "react";

class SearchBox extends Component {
  render() {
    const { onSearchChange } = this.props;
    return (
      <div className="form-group  container my-4" style={{ width: "50%" }}>
        <input
          type="search"
          className="form-control"
          placeholder="Search Monsters"
          onChange={onSearchChange}
        />
      </div>
    );
  }
}

export default SearchBox;

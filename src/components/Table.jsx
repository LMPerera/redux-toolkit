import React from "react";

function Table({ data, remove, type }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">{type === "user" ? "Name" : "Title"}</th>
          <th scope="col">{type === "user" ? "Username" : "Content"}</th>
          <th scope="col">Option</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((row) => {
            return (
              <tr key={row.id}>
                <td>{row.name || row.title}</td>
                <td>{row.username || row.content}</td>
                <td>
                  <button
                    className="btn btn-light"
                    onClick={(e) => {
                      remove(row.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}

export default Table;

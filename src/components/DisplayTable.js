import React from "react";
import { Link } from "react-router-dom";

const DisplayTable = ({ data, repositories }) => {
  return (
    <table className="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Avatar</th>
          <th>Location</th>
          <th>Bio</th>
          <th>Repositories</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{data.name}</td>
          <td>
            {!data.avatar_url ? (
              " "
            ) : (
              <img
                className="ui small circular image"
                src={data.avatar_url}
                alt={data.avatar_url}
              />
            )}
          </td>
          <td>{data.location}</td>
          <td>{data.bio}</td>
          <td>
            {repositories.map((repo) => (
              <div className="ui relaxed divided list" key={repo.name}>
                <div className="item">
                  <i className="large github middle aligned icon"></i>
                  <div className="content">
                    <Link
                      to={`content/${data.username }/${repo.name}`}
                      className="header"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {repo.name}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default DisplayTable;

import React, { useEffect, useState } from "react";

const Search = () => {
  const data = [
    {
      _id: "001",
      isActive: "true",
      price: "20.00",
      picture: "/img/products/N0CA_430.png",
      name: "Damage Reverse Oil Conditioner",
      about:
        "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
      tags: ["ojon", "oil", "conditioner"],
    },
    {
      _id: "002",
      isActive: "true",
      price: "22.00",
      picture: "/img/products/N0EN01_430.png",
      name: "Volume Advance Conditioner",
      about:
        "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
      tags: ["ojon", "conditioner"],
    },
  ];

  const [searchData, setSearchData] = useState([]);
  const [name, setName] = useState("");

  useEffect(() => {
    setSearchData(data);
  }, []);

  const handleChange = (value) => {
    setName(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    let dt = [];
    if (name !== "") dt = data.filter((item) => item.name === name);
    else dt = data;
    setSearchData(dt);
  };

  return (
    <div
      style={{
        margin: "0 auto",
        width: "900px",
        backgroundColor: "#E5E7E9",
        height: "400px",
        marginTop: "50px",
      }}
    >
      <div style={{ width: "300px", marginTop: "20px", height: "70px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Enter Name"
          onChange={(e) => handleChange(e.target.value)}
        ></input>
        <button onClick={(e) => handleSearch(e)}>Search</button>
      </div>
      <br></br>
      <br></br>
      <div style={{ width: "800px" }}>
        <table className="table  table-bordered table-hover">
          <thead>
            <tr>
              <td>Id</td>
              <td>Price</td>
              <td>Name</td>
              <td>Active</td>
            </tr>
          </thead>
          <tbody>
            {searchData &&
              searchData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{item._id}</td>
                    <td>{item.price}</td>
                    <td>{item.name}</td>
                    <td>{item.isActive}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";
import { BsFilter } from "react-icons/bs";
import Accordion from "react-bootstrap/Accordion";

type Data = {
  id: number;
  order: string;
  type: string;
  item: string;
  category: "fruit" | "electronics" | "beverages";
  description: string;
};

const dummyData: Data[] = [
  {
    id: 1,
    order: "13458952304",
    type: "CAO",
    item: "452689135",
    category: "fruit",
    description: "Ninja Food  10 in 1",
  },
  {
    id: 2,
    order: "18458362344",
    type: "EDF",
    item: "452689135",
    category: "electronics",
    description: "Fast charging",
  },
  {
    id: 3,
    order: "95458952304",
    type: "SFO",
    item: "752689135",
    category: "fruit",
    description: "500kg of Apples",
  },
  {
    id: 4,
    order: "63458952304",
    type: "CAO",
    item: "342689135",
    category: "fruit",
    description: "Ninja Food  10 in 1",
  },
  {
    id: 6,
    order: "81234589523",
    type: "SFO",
    item: "295268913",
    category: "beverages",
    description: "Beverages Package  15 in 1",
  },
  {
    id: 7,
    order: "81234589523",
    type: "SFO",
    item: "295268913",
    category: "beverages",
    description: "Beverages Package  15 in 1",
  },
  {
    id: 8,
    order: "81234589523",
    type: "SFO",
    item: "295268913",
    category: "beverages",
    description: "Beverages Package  15 in 1",
  },
  {
    id: 9,
    order: "81234589523",
    type: "SFO",
    item: "295268913",
    category: "beverages",
    description: "Beverages Package  15 in 1",
  },
  {
    id: 10,
    order: "81234589523",
    type: "SFO",
    item: "295268913",
    category: "beverages",
    description: "Beverages Package  15 in 1",
  },
  {
    id: 11,
    order: "18458362344",
    type: "EDF",
    item: "452689135",
    category: "electronics",
    description: "Fast charging",
  },
  {
    id: 12,
    order: "18458362344",
    type: "EDF",
    item: "452689135",
    category: "electronics",
    description: "Fast charging",
  },
  {
    id: 13,
    order: "18458362344",
    type: "EDF",
    item: "452689135",
    category: "electronics",
    description: "Fast charging",
  },
];

const SearchEngine = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState(dummyData);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value.toLowerCase();
    setSearchTerm(term);
    const filtered = dummyData.filter((item) => {
      return (
        item.order.toLowerCase().includes(term) ||
        item.item.toLowerCase().includes(term) ||
        item.type.toLowerCase().includes(term) ||
        item.description.toLowerCase().includes(term) ||
        item.category.toLowerCase().includes(term)
      );
    });

    setFilteredData(filtered);
  };

  const clearInput = () => {
    setFilteredData([]);
    setSearchTerm("");
  };

  const handleFilter = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const filterType = event.target.value;
    let filtered: Data[];

    switch (filterType) {
      case "all":
        filtered = dummyData;
        break;
      case "fruit":
        filtered = dummyData.filter((item) => item.category === "fruit");
        break;
      case "electronics":
        filtered = dummyData.filter((item) => item.category === "electronics");
        break;
      case "beverages":
        filtered = dummyData.filter((item) => item.category === "beverages");
        break;
      default:
        filtered = dummyData;
    }

    setFilteredData(filtered);
  };

  return (
    <div className="container p-5">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h1>Item Search</h1>
          </div>

          <div className=" d-flex">
            <input
              type="text"
              value={searchTerm}
              className="form-control search-width"
              onChange={handleSearch}
            />
            <div className="ms-2 searchIcon">
              {filteredData.length === 0 ? (
                <FaSearch className="fs-4 p-1" />
              ) : (
                <RiCloseFill
                  className="fs-4 p-1"
                  id="clearBtn"
                  onClick={clearInput}
                />
              )}
            </div>
            <BsFilter
              className="fs-1 p-1 sidebar-toggle"
              onClick={handleToggle}
            />
            <select onChange={handleFilter}>
              <option value="all">All</option>
              <option value="fruit">Fruit</option>
              <option value="electronics">Electronics</option>
              <option value="beverages">Beverages</option>
            </select>
          </div>
        </div>
        {/* Offcanvas */}
        <div className={`off-canvas-menu ${toggle ? "active" : ""}`}>
          <div className="filter-divider d-flex justify-content-between">
            <div className="set-parameters container">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  {" "}
                  <h4 className="m-3">
                    {" "}
                    <BsFilter
                      className="fs-1 p-1 sidebar-toggle"
                      onClick={handleToggle}
                    />{" "}
                    Set Parameter
                  </h4>
                </div>
                <div>
                  <a href="#" className="text-decoration-none">
                    <h6 className="text-primary" onClick={clearInput}>
                      Reset All
                    </h6>
                  </a>
                </div>
              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Item</Accordion.Header>
                  <Accordion.Body>
                    <div className=" d-flex">
                      <input
                        type="text"
                        value={searchTerm}
                        className="form-control search-width"
                        onChange={handleSearch}
                      />
                      <div className="ms-2 searchIcon">
                        {filteredData.length === 0 ? (
                          <FaSearch className="fs-4 p-1" />
                        ) : (
                          <RiCloseFill
                            className="fs-4 p-1"
                            id="clearBtn"
                            onClick={clearInput}
                          />
                        )}
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Order #</Accordion.Header>
                  <Accordion.Body>
                    <div className=" d-flex">
                      <input
                        type="text"
                        value={searchTerm}
                        className="form-control search-width"
                        onChange={handleSearch}
                        placeholder="Order ID: (ex:46233298)"
                      />
                      <div className="ms-2 searchIcon">
                        {filteredData.length === 0 ? (
                          <FaSearch className="fs-4 p-1" />
                        ) : (
                          <RiCloseFill
                            className="fs-4 p-1"
                            id="clearBtn"
                            onClick={clearInput}
                          />
                        )}
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>Type</Accordion.Header>
                  <Accordion.Body>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">Show All</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">CAO</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">EDF</label>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="3">
                  <Accordion.Header>Category</Accordion.Header>
                  <Accordion.Body>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">Show All</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">Fruit</label>
                    </div>
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label className="form-check-label">Electronics</label>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>Status </Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>Picked Date</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
              <br />
              <div className=" container-fluid d-flex justify-content-between mt-5  p-2 ">
                <div>
                  <a href="#" className="text-decoration-none">
                    <h5 onClick={handleToggle}>Cancel</h5>
                  </a>
                </div>
                <div>
                  <button type="button" className="btn btn-primary">
                    Apply
                  </button>
                </div>
              </div>
            </div>

            <div className="set-filter container">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <h4 className="m-3">
                    {" "}
                    <BsFilter
                      className="fs-1 p-1 sidebar-toggle"
                      onClick={handleToggle}
                    />{" "}
                    Set Filter
                  </h4>
                </div>
                <div>
                  <a href="#" className="text-decoration-none">
                    <h6 className="text-primary" onClick={clearInput}>
                      Reset All
                    </h6>
                  </a>
                </div>
              </div>
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>US State</Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label">Show All</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label">Alabama</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label">California</label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label">New York</label>
                      </div>

                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label">Durham</label>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="1">
                  <Accordion.Header>Text</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="2">
                  <Accordion.Header>number</Accordion.Header>
                  <Accordion.Body></Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label">Show All</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label">$ 50</label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="flexCheckDefault"
                        />
                        <label className="form-check-label">$ 250</label>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4">
                  <Accordion.Header>Location</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5">
                  <Accordion.Header>Text</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="6">
                  <Accordion.Header>Date</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="7">
                  <Accordion.Header>Status</Accordion.Header>
                  <Accordion.Body>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>

              <div className=" container-fluid d-flex justify-content-between mt-5  p-2 ">
                <div>
                  <a href="#" className="text-decoration-none">
                    <h5 onClick={handleToggle}>Cancel</h5>
                  </a>
                </div>
                <div>
                  <button type="button" className="btn btn-primary">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <table className="table customTable">
          <tr>
            <th>Order #</th>
            <th>Type</th>
            <th>Item</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.order}</td>
              <td>{item.type}</td>
              <td>{item.item}</td>
              <td>{item.category}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
};

export default SearchEngine;

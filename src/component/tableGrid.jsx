import React, { Component } from "react";

let constUrl = "https://edge.dev1.nextgen.xpms.ai/api/content/search/";

class TableGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
      <div className="col badge-secondary m-2 ">
            {
                this.props.itemList.map((ele) => {
                   return( <div className="row m-1" key={ele.id}>
                   <div className="col p-1">{ele.itemName}</div>
                   <div className="col p-1">{ele.size}</div>
                   <div className="col p-1">{ele.pages}</div>
                   <div className="col p-1">{ele.time}</div>
               </div>)
                })
        }
      </div>
    );
  }

}

const getItemList=() => {
    const payload = {
    search_text: "",
    search_on: "document",
    pagination: { no_of_records: 10, page: 1 },
    solution_id: "testrdflib",
    api: "document",
    };
    fetch(constUrl, {
    method: "POST",
    body: JSON.stringify(payload),
    headers: {
        "Content-Type": "application/json",
        "Content-type": "application/x-www-form-urlencoded",
    },
    })
    .then((res) => res.json())
    .then((response) => {
        console.log(response);
    })
    .catch((error) => console.error("Error:", error));
}

window.onload = function () {
    getItemList();
};

export default TableGrid;

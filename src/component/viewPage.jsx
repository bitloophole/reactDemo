import React, { Component } from "react";
import ItemDetails from "./itemDetails";
import TableGrid from "./tableGrid";
import RecentSearch  from './recentSearch'

class ViewPage extends Component {
  state = {
    count: 0,
    tags: ["tag1", "tag2", "tag3"],
    item: [
      { id: 1, value: 4900, desc: "Total item processed" },
      { id: 2, value: 20, desc: "Average item processed pre-min" },
      { id: 3, value: 49, desc: "Total item processed" },
      { id: 4, value: 4, desc: "Total item processed" }
    ],
    fileList: [
      { id: 1, itemName: "CMS1004", size: "2MB", pages:100 , time: "03 Feb 2021, 09:00am"},
      { id: 2, itemName: "CMS1003", size: "2MB", pages:100 , time: "03 Feb 2021, 09:00am" },
      { id: 3, itemName: "CMS1002", size: "2MB", pages:100 , time: "03 Feb 2021, 09:00am"},
      { id: 4, itemName: "CMS1001", size: "2MB", pages: 100, time: "03 Feb 2021, 09:00am" },
      { id: 5, itemName: "CMS1005", size: "2MB", pages:100 , time: "03 Feb 2021, 09:00am" },
      { id: 6, itemName: "CMS1006", size: "2MB", pages:100 , time: "03 Feb 2021, 09:00am"},
      { id: 7, itemName: "CMS1007", size: "2MB", pages: 100, time: "03 Feb 2021, 09:00am" },
      { id: 8, itemName: "CMS1008", size: "2MB", pages:100 , time: "03 Feb 2021, 09:00am" },
      { id: 9, itemName: "CMS1009", size: "2MB", pages:100 , time: "03 Feb 2021, 09:00am"},
      { id: 10, itemName: "CMS1010", size: "2MB", pages: 100, time: "03 Feb 2021, 09:00am" },
      { id: 11, itemName: "CMS1011", size: "2MB", pages:100 , time: "03 Feb 2021, 09:00am" },
      { id: 12, itemName: "CMS1012", size: "2MB", pages:100 , time: "03 Feb 2021, 09:00am"},
      { id: 13, itemName: "CMS1013", size: "2MB", pages: 100, time: "03 Feb 2021, 09:00am" },
      { id: 14, itemName: "CMS1014", size: "2MB", pages:100 , time: "03 Feb 2021, 09:00am" },
      { id: 15, itemName: "CMS1015", size: "2MB", pages:100 , time: "03 Feb 2021, 09:00am"},
      { id: 16, itemName: "CMS1016", size: "2MB", pages: 100, time: "03 Feb 2021, 09:00am" }
    ],
    searchResult: [
      { name: "Hypothyrodism", time: "06Feb 2021, 09:00am", count: "40 results" },
      { name: "Lymphoma", time: "06Feb 2021, 09:00am", count: "20 results" },
      { name:"CMS", time: "10 Feb 2021, 09:00am", count:"30 results"}]
  };

  render() {
    return (
      <div className="m-0">
          <div className="row m-0">
        {this.state.item.map((itm) => (
          <ItemDetails key={itm.id} details={itm}>
            </ItemDetails>
        ))}
       
      </div>
        <div className="row">
          <div className="col-6" >
            <TableGrid itemList={this.state.fileList}></TableGrid>
          </div>
          <div className="col-6 p-0">
          <RecentSearch searchList={this.state.searchResult}></RecentSearch>
          </div>
       </div>
    </div>
    );
  }
}

export default ViewPage;

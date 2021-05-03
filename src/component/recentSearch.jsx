import React, { Component } from 'react';
class RecentSearch extends React.Component {

    state = {  }
    render() { 
        return (<div className="badge-secondary  m-2">
            {this.props.searchList.map((ele) => {
                return (<div className="row btn-default">
                    <div className="col"> {ele.name}</div>
                    <div className="col">{ele.count}</div>
                    <div className="col"> {ele.time}</div>
            </div>)
                
             })}
        </div> );
    }
}
 
export default RecentSearch;
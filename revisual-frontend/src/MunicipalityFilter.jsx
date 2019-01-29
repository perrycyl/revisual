import React, {Component} from 'react';

 
const options = ["Today", "3months", "2years"]
class MunicipalityFilter extends Component {
  constructor() {
    super();
  }

  saleChange = (event) => {
    this.props.saleChange(event.target.value);
  }

  durationChange = (event) => {
    this.props.durationChange(event.target.value);
  }

  render() {
    return (
      <div className="filter">
        <div className="form-group">
          <label className="form-label" htmlFor="sale-lease" >Sale/Lease</label>
          <select onChange={this.saleChange} className="form-control">
            <option value="sale">Sale</option>
            <option value="lease">Lease</option>
          </select>
          <label className="form-label" htmlFor="duration" >Duration</label>
          <select onChange={this.durationChange} className="form-control">
          {options.map(option => {
            return <option value={option} key={option} >{option}</option>
          })}
          </select>
        </div>
      </div>
    );
  }
}
export default MunicipalityFilter;

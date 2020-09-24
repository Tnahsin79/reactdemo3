import React from 'react';
class Individual extends React.Component {
    constructor() {
        super();
    }
    clickHandler = () => {
        alert(this.props.type);
    }
    render() {
        const { type, cost, detail } = this.props;
        return (
            <div class="card">
                <div class="card-header"> 
                    <h5>{type}</h5>
                    <h1>{cost}</h1>
                    <hr></hr>
                </div>
                <div class="card-body">
                    {detail["Single user"] ? <h6>&#10004; Single user</h6> : <h6>&#9747; Single user</h6>}
                    {detail["5GB Strorage"] ? <h6>&#10004; 5GB Strorage</h6> : <h6>&#9747; 5GB Strorage</h6>}
                    {detail["Unlimited Public Projects"] ? <h6>&#10004; Unlimited Public Projects</h6> : <h6>&#9747; Unlimited Public Projects</h6>}
                    {detail["Community access"] ? <h6>&#10004; Community access</h6> : <h6>&#9747; Community access</h6>}
                    {detail["Unlimited Private Projects"] ? <h6>&#10004; Unlimited Private Projects</h6> : <h6>&#9747; Unlimited Private Projects</h6>}
                    {detail["Dedicated Phone Support"] ? <h6>&#10004; Dedicated Phone Support</h6> : <h6>&#9747; Dedicated Phone Support</h6>}
                    {detail["Free Subdomain"] ? <h6>&#10004; Free Subdomain</h6> : <h6>&#9747; Free Subdomain</h6>}
                    {detail["Monthly Status Reports"] ? <h6>&#10004; Monthly Status Reports</h6> : <h6>&#9747; Monthly Status Reports</h6>}
                    <button class="btn btn-outline-primary" onClick={this.clickHandler}>Button</button>
                </div>
            </div>
        )
    }
}
export default Individual
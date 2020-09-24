import React from 'react';
import Individual from './Individual.js'
class Card extends React.Component {
    constructor() {
        super();
    }
    data=[
        {
            "Single user":true,
            "5GB Strorage":true,
            "Unlimited Public Projects":true,
            "Community access":true,
            "Unlimited Private Projects":false,
            "Dedicated Phone Support":false,
            "Free Subdomain":false,
            "Monthly Status Reports":false
        },
        {
            "Single user":true,
            "5GB Strorage":true,
            "Unlimited Public Projects":true,
            "Community access":true,
            "Unlimited Private Projects":true,
            "Dedicated Phone Support":true,
            "Free Subdomain":true,
            "Monthly Status Reports":false
        },
        {
            "Single user":true,
            "5GB Strorage":true,
            "Unlimited Public Projects":true,
            "Community access":true,
            "Unlimited Private Projects":true,
            "Dedicated Phone Support":true,
            "Free Subdomain":true,
            "Monthly Status Reports":true
        }
    ]
    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-12 col-sm-12 col-md-4"><Individual type={"FREE"} cost={"$0/month"} detail={this.data[0]}/></div>
                    <div class="col-12 col-sm-12 col-md-4"><Individual type={"PLUS"} cost={"$9/month"} detail={this.data[1]}/></div>
                    <div class="col-12 col-sm-12 col-md-4"><Individual type={"PRO"} cost={"$49/month"} detail={this.data[2]}/></div>
                </div>
            </div>
        )
    }
}
export default Card
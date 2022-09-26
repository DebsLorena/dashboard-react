import React from "react";
import './RightSideStyle.css'
import Updates from "../updates/Updates";
import CustomerReview from "../customerReview/CustomerReview";

const RightSide = () => {
    return (
        <div className="RightSide">
            <div>
                <h3>Updates</h3>
                <Updates />
            </div>
            <div>
                <h3>Customer Reviem</h3>
                <CustomerReview />
            </div>
        </div>
    )
}

export default RightSide
import React from 'react'
import "./featuredInfo.css"
import { ArrowDownward, ArrowUpward } from '@material-ui/icons';

const FeaturedInfo = () => {
    return (
        <div className='featured'>
            <div className="featuredItem">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$2,323</span>
                    <span className="featuredMoneyRate">
                        -19.3<ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <span className="featureSub">Compared to Last Months</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,323</span>
                    <span className="featuredMoneyRate">
                        -1.3<ArrowDownward className='featuredIcon negative'/>
                    </span>
                </div>
                <span className="featureSub">Compared to Last Months</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$1,323</span>
                    <span className="featuredMoneyRate">
                        +1.3<ArrowUpward className='featuredIcon'/>
                    </span>
                </div>
                <span className="featureSub">Compared to Last Months</span>
            </div>
        </div>
    )
}

export default FeaturedInfo;
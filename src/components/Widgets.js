import React from 'react'
import './css/Widgets.css'
import InfoIcon from '@material-ui/icons/Info'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'

function Widgets() {
    const newsArticle = (heading,subtitle)=>(
        <div className="widgets__article">
            <div className="widget__articleLeft">
                <FiberManualRecordIcon/>
            </div>
            <div className="widget__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
            </div>
        </div>
    )
    return (
        <div className="widgets">
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon/>
            </div>
            {newsArticle('HashDevelop is Back!!',"Top News - 9099 readers")}
            {newsArticle('CoronaVirus: Pakistan Updates',"Top News - 1022 readers")}
            {newsArticle('Football Updates',"Top News - 5322 readers")}
            {newsArticle('WorldCup is coming',"Top News - 553 readers")}
            {newsArticle('Afghanistan has implemented Islam',"Top News - 8675 readers")}
            {newsArticle('Bitcoin breaks record',"Top News - 1589 readers")}
        </div>
    )
}

export default Widgets

import React,{Component} from "react";
import "pages/Page1/Page1.css";
import image from './image/test.png';
export default class Page1 extends Component {
    render(){
        return (
            <div className="page-box">
                this is page1 ;
                <img src={image}/>
            </div>
        )
    }
}
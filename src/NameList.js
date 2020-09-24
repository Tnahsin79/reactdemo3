import React from 'react';
function NameList({ detail }) {
    //const {name,production}=this.props;
    function clickHandler(){
        //alert("hahahah");
        let result=`I am ${detail.name} from ${detail.production}`.strike();
        document.getElementById(detail.id).innerHTML=result;
    }
    return (
        <div>
            <h1 id={detail.id} onClick={clickHandler}>I am {detail.name} from {detail.production}</h1>
        </div>
    )
}
export default NameList
import React from "react";

function Footer(props) {
    //var name = "Irman";
    return(
        <div>
            <h4>Halaman Footer {props.name}</h4>
            <p>@{props.tahun}</p>
        </div>);
}
export default Footer;
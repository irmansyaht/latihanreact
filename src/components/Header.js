import React, {Component} from "react";

class  Header extends  Component {
    constructor(props){
        super(props);
        this.state = {
            daftar: "Daftar Makanan Nusantara",
            datalist: this.list ,
        };
        this.handlePesan = this.handlePesan.bind(this);
    }
    handlePesan(value, e ){
        e.preventDefault()
        alert(this.state.daftar);
        alert(value);
    }
    componentDidMount() {
        console.log("Jalan : componentDidMount");
    }

    render() {
        console.log("Jalan : Render");
        return (
            <div>
                <h2> Makanan Khas Indonesia </h2>
                <p> {this.state.daftar} </p>
                <p>{this.state.datalist}</p>
                <a href="/" onClick={(e)=> this.handlePesan("Pesan dari Header",e)}> Halaman Header </a>
            </div>
        );
    }
}
export  default Header;
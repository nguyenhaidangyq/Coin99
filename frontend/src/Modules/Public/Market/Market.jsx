import React, { Component } from "react";
import { CoinListMarket } from "./Components/CoinListMarket/CoinListMarket";

export class Market extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
            <CoinListMarket />

            </>
        )
    }
}
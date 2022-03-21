import React, { Component } from "react";

export class Coin99List extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <div className="page-topbar gradient-blue1">
                    <div className="logo-area crypto"></div>
                    <div className="quick-area">
                        <div className="pull-left">
                            <ul className="info-menu left-links list-inline list-unstyled">
                                <li className="sidebar-toggle-wrap">
                                    <a href="#" data-toggle="sidebar" className="sidebar_toggle">
                                        <i className="fa fa-bars" />
                                    </a>
                                </li>
                                <li className="topnav-item item1">
                                    <a href="#" className="new-link w-text">
                                        Schedule
                                        <span className="badge badge-primary ml-5">New</span>
                                    </a>
                                </li>
                                <li className="topnav-item active item2">
                                    <a href="#" className="nav-link w-text">
                                        <i className="fa fa-area-chart mr-10" />
                                        Reports
                                    </a>
                                </li>
                                <li className="topnav-item item3">
                                    <a href="#" className="nav-link w-text">
                                        <i className="fa fa-sitemap mr-10" />
                                        Trading
                                    </a>
                                </li>
                                <li className="hidden-sm hidden-xs searchform">
                                    <form action="#" method="post">
                                        <div className="input-group">
                                            <span className="input-group-addon">
                                                <i className="fa fa-search" />
                                            </span>
                                            <input
                                                type="text"
                                                className="form-control animated fadeIn"
                                                placeholder="Search & Enter"
                                            />
                                        </div>
                                        <input type="submit" defaultValue="" />
                                    </form>
                                </li>
                            </ul>
                        </div>
                        <div className="pull-right">
                            <ul className="info-menu right-links list-inline list-unstyled">
                                <li className="notify-toggle-wrapper spec">
                                    <a href="#" data-toggle="dropdown" className="toggle">
                                        <i className="fa fa-bell" />
                                        <span className="badge badge-accent">3</span>
                                    </a>
                                    <ul className="dropdown-menu notifications animated fadeIn">
                                        <li className="total">
                                            <span className="small">
                                                You have <strong>3</strong> new notifications.
                                                <a href="javascript:;" className="pull-right">
                                                    Mark all as Read
                                                </a>
                                            </span>
                                        </li>
                                        <li className="list">
                                            <ul className="dropdown-menu-list list-unstyled ps-scrollbar">
                                                <li className="unread available">
                                                    {/* available: success, warning, info, error */}
                                                    <a href="javascript:;">
                                                        <div className="notice-icon">
                                                            <i className="fa fa-check" />
                                                        </div>
                                                        <div>
                                                            <span className="name">
                                                                <strong>Successful transaction of 0.01 BTC</strong>
                                                                <span className="time small">15 mins ago</span>
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className="unread away">
                                                    {/* available: success, warning, info, error */}
                                                    <a href="javascript:;">
                                                        <div className="notice-icon">
                                                            <i className="fa fa-clock-o" />
                                                        </div>
                                                        <div>
                                                            <span className="name">
                                                                <strong>4 of Pending Transactions!</strong>
                                                                <span className="time small">45 mins ago</span>
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className=" busy">
                                                    {/* available: success, warning, info, error */}
                                                    <a href="javascript:;">
                                                        <div className="notice-icon">
                                                            <i className="fa fa-times" />
                                                        </div>
                                                        <div>
                                                            <span className="name">
                                                                <strong>Cancelled Order of 200 ICO</strong>
                                                                <span className="time small">1 hour ago</span>
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className=" available">
                                                    {/* available: success, warning, info, error */}
                                                    <a href="javascript:;">
                                                        <div className="notice-icon">
                                                            <i className="fa fa-check" />
                                                        </div>
                                                        <div>
                                                            <span className="name">
                                                                <strong>Great Speed Notify of 1.34 LTC</strong>
                                                                <span className="time small">14th Mar</span>
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="external">
                                            <a href="javascript:;">
                                                <span>Read All Notifications</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="message-toggle-wrapper spec">
                                    <a href="#" data-toggle="dropdown" className="toggle mr-15">
                                        <i className="fa fa-envelope" />
                                        <span className="badge badge-accent">7</span>
                                    </a>
                                    <ul className="dropdown-menu messages animated fadeIn">
                                        <li className="list">
                                            <ul className="dropdown-menu-list list-unstyled ps-scrollbar">
                                                <li className="unread status-available">
                                                    <a href="javascript:;">
                                                        <div className="user-img">
                                                            <img
                                                                src="../data/profile/avatar-1.png"
                                                                alt="user-image"
                                                                className="img-circle img-inline"
                                                            />
                                                        </div>
                                                        <div>
                                                            <span className="name">
                                                                <strong>Clarine Vassar</strong>
                                                                <span className="time small">- 15 mins ago</span>
                                                                <span className="profile-status available pull-right" />
                                                            </span>
                                                            <span className="desc small">
                                                                Lorem ipsum dolor sit elit fugiat molest.
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className=" status-away">
                                                    <a href="javascript:;">
                                                        <div className="user-img">
                                                            <img
                                                                src="../data/profile/avatar-2.png"
                                                                alt="user-image"
                                                                className="img-circle img-inline"
                                                            />
                                                        </div>
                                                        <div>
                                                            <span className="name">
                                                                <strong>Brooks Latshaw</strong>
                                                                <span className="time small">- 45 mins ago</span>
                                                                <span className="profile-status away pull-right" />
                                                            </span>
                                                            <span className="desc small">
                                                                Lorem ipsum dolor sit elit fugiat molest.
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className=" status-busy">
                                                    <a href="javascript:;">
                                                        <div className="user-img">
                                                            <img
                                                                src="../data/profile/avatar-3.png"
                                                                alt="user-image"
                                                                className="img-circle img-inline"
                                                            />
                                                        </div>
                                                        <div>
                                                            <span className="name">
                                                                <strong>Clementina Brodeur</strong>
                                                                <span className="time small">- 1 hour ago</span>
                                                                <span className="profile-status busy pull-right" />
                                                            </span>
                                                            <span className="desc small">
                                                                Lorem ipsum dolor sit elit fugiat molest.
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className=" status-offline">
                                                    <a href="javascript:;">
                                                        <div className="user-img">
                                                            <img
                                                                src="../data/profile/avatar-4.png"
                                                                alt="user-image"
                                                                className="img-circle img-inline"
                                                            />
                                                        </div>
                                                        <div>
                                                            <span className="name">
                                                                <strong>Carri Busey</strong>
                                                                <span className="time small">- 5 hours ago</span>
                                                                <span className="profile-status offline pull-right" />
                                                            </span>
                                                            <span className="desc small">
                                                                Lorem ipsum dolor sit elit fugiat molest.
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className=" status-offline">
                                                    <a href="javascript:;">
                                                        <div className="user-img">
                                                            <img
                                                                src="../data/profile/avatar-5.png"
                                                                alt="user-image"
                                                                className="img-circle img-inline"
                                                            />
                                                        </div>
                                                        <div>
                                                            <span className="name">
                                                                <strong>Melissa Dock</strong>
                                                                <span className="time small">- Yesterday</span>
                                                                <span className="profile-status offline pull-right" />
                                                            </span>
                                                            <span className="desc small">
                                                                Lorem ipsum dolor sit elit fugiat molest.
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className=" status-available">
                                                    <a href="javascript:;">
                                                        <div className="user-img">
                                                            <img
                                                                src="../data/profile/avatar-1.png"
                                                                alt="user-image"
                                                                className="img-circle img-inline"
                                                            />
                                                        </div>
                                                        <div>
                                                            <span className="name">
                                                                <strong>Verdell Rea</strong>
                                                                <span className="time small">- 14th Mar</span>
                                                                <span className="profile-status available pull-right" />
                                                            </span>
                                                            <span className="desc small">
                                                                Lorem ipsum dolor sit elit fugiat molest.
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className=" status-busy">
                                                    <a href="javascript:;">
                                                        <div className="user-img">
                                                            <img
                                                                src="../data/profile/avatar-2.png"
                                                                alt="user-image"
                                                                className="img-circle img-inline"
                                                            />
                                                        </div>
                                                        <div>
                                                            <span className="name">
                                                                <strong>Linette Lheureux</strong>
                                                                <span className="time small">- 16th Mar</span>
                                                                <span className="profile-status busy pull-right" />
                                                            </span>
                                                            <span className="desc small">
                                                                Lorem ipsum dolor sit elit fugiat molest.
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                                <li className=" status-away">
                                                    <a href="javascript:;">
                                                        <div className="user-img">
                                                            <img
                                                                src="../data/profile/avatar-3.png"
                                                                alt="user-image"
                                                                className="img-circle img-inline"
                                                            />
                                                        </div>
                                                        <div>
                                                            <span className="name">
                                                                <strong>Araceli Boatright</strong>
                                                                <span className="time small">- 16th Mar</span>
                                                                <span className="profile-status away pull-right" />
                                                            </span>
                                                            <span className="desc small">
                                                                Lorem ipsum dolor sit elit fugiat molest.
                                                            </span>
                                                        </div>
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="external">
                                            <a href="javascript:;">
                                                <span>Read All Messages</span>
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="profile">
                                    <a href="#" data-toggle="dropdown" className="toggle">
                                        <img
                                            src="../data/profile/profile.jpg"
                                            alt="user-image"
                                            className="img-circle img-inline"
                                        />
                                        <span>
                                            Arnold Ramsy <i className="fa fa-angle-down" />
                                        </span>
                                    </a>
                                    <ul className="dropdown-menu profile animated fadeIn">
                                        <li>
                                            <a href="crypto-account-setting.html">
                                                <i className="fa fa-wrench" /> Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a href="crypto-profile.html">
                                                <i className="fa fa-user" /> Profile
                                            </a>
                                        </li>
                                        <li>
                                            <a href="crypto-faq.html">
                                                <i className="fa fa-info" /> Help
                                            </a>
                                        </li>
                                        <li className="last">
                                            <a href="crypto-login.html">
                                                <i className="fa fa-lock" /> Logout
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="page-container row-fluid container-fluid">
                    {/* SIDEBAR - START */}
                    <div className="page-sidebar fixedscroll">
                        {/* MAIN MENU - START */}
                        <div className="page-sidebar-wrapper crypto" id="main-menu-wrapper">
                            <ul className="wraplist">
                                <li className="menusection">Main</li>
                                <li className="">
                                    <a href="index-crypto-dashboard.html">
                                        <i className="img relative crypto-ic ">
                                            <img
                                                src="../data/crypto-dash/icons/1.png"
                                                alt=""
                                                className="ic1 width-20"
                                            />
                                        </i>
                                        <span className="title">Dashboard</span>
                                    </a>
                                </li>
                                <li className="open">
                                    <a href="crypto-wallet.html">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/2.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Crypto Wallet</span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="crypto-buy-sell.html">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/6.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Buy &amp; Sell</span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="crypto-ico-admin.html">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/4.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">ICO Admin</span>
                                        <span className="label label-accent">HOT</span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="crypto-affiliate.html">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/8.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Affiliate Program</span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="crypto-profile.html">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/10.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Trader Profile</span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="crypto-faq.html">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/12.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Support</span>
                                    </a>
                                </li>
                                <li className="">
                                    <a href="javascript:;">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/11.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Settings</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className="" href="crypto-personal-setting.html">
                                                Personal Settings
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="crypto-account-setting.html">
                                                Account Settings
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <a href="javascript:;">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/9.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Access Pages</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className="" href="crypto-login.html">
                                                Login
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="crypto-register.html">
                                                Registration
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-404.html">
                                                404
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <a href="javascript:;">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/7.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Mailbox</span>
                                        <span className="arrow" />
                                    </a>
                                    <ul className="sub-menu" style={{ display: "none" }}>
                                        <li>
                                            <a className="" href="crypto-mail-inbox.html">
                                                Inbox
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="crypto-mail-compose.html">
                                                Compose
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="crypto-mail-view.html">
                                                View
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="crypto-mail-important.html">
                                                Important Mail
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="crypto-mail-trash.html">
                                                Mail Trash
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menusection">Data Visualization</li>
                                <li className="">
                                    <a href="javascript:;">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/16.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Echarts</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className="" href="charts-echart-line.html">
                                                Line &amp; Area Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="charts-echart-bar.html">
                                                Bar &amp; Stacked Charts
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <a href="javascript:;">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/17.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Morris Charts</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className="" href="charts-morris-line.html">
                                                Line Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="charts-morris-bar.html">
                                                Bar &amp; Stacked Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="charts-morris-area.html">
                                                Area Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="charts-morris-pie.html">
                                                Pie Charts
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <a href="javascript:;">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/18.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Charts JS</span>
                                        <span className="arrow" />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className="" href="charts-chartjs-line.html">
                                                Line Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="charts-chartjs-bar.html">
                                                Bar Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="charts-chartjs-pie-donut.html">
                                                Pie &amp; Donut
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <a href="javascript:;">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/19.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Flot Charts</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className="" href="charts-flot-area.html">
                                                Area Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="charts-flot-line.html">
                                                Line Charts
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <a href="javascript:;">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/20.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Sparkline Charts</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className="" href="charts-sparkline-line.html">
                                                Line &amp; Area Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="charts-sparkline-bar.html">
                                                Bar Charts
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="charts-sparkline-composite.html">
                                                Composite Charts
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="menusection">User Interface</li>
                                <li className="">
                                    <a href="javascript:;">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/13.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Ui Elements</span>{" "}
                                        <span className="arrow " />{" "}
                                    </a>
                                    <ul className="sub-menu">
                                        <li className="">
                                            <a href="javascript:;">
                                                <span className="title">Timeline</span>{" "}
                                                <span className="arrow " />{" "}
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a className="" href="ui-timeline-centered.html">
                                                        Centered timeline
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="" href="ui-timeline-left.html">
                                                        Left Aligned timeline
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="">
                                            <a href="javascript:;">
                                                <span className="title">Pricing Tables</span>{" "}
                                                <span className="arrow " />{" "}
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a className="" href="ui-pricing-expanded.html">
                                                        Expanded
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="" href="ui-pricing-narrow.html">
                                                        Narrow
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="">
                                            <a href="javascript:;">
                                                <span className="title">Icon Sets</span>{" "}
                                                <span className="arrow " />{" "}
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a className="" href="ui-icons.html">
                                                        Icon Styles
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="" href="ui-fontawesome.html">
                                                        Font Awesome
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="" href="ui-glyphicons.html">
                                                        Glyph Icons
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="javascript:;">
                                                <span className="title">Form Elements</span>{" "}
                                                <span className="arrow " />{" "}
                                            </a>
                                            <ul className="sub-menu">
                                                <li>
                                                    <a className="" href="form-elements.html">
                                                        Field Elements
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="" href="form-elements-premade.html">
                                                        Pre Made Forms
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="" href="form-elements-icheck.html">
                                                        Checkbox &amp; Radio
                                                    </a>
                                                </li>
                                                <li>
                                                    <a className="" href="form-elements-grid.html">
                                                        Form Grid
                                                    </a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="form-wizard.html">
                                                {" "}
                                                <span className="title">Form Wizard</span>{" "}
                                            </a>
                                        </li>
                                        <li>
                                            <a href="form-validation.html">
                                                {" "}
                                                <span className="title">Form Validations</span>{" "}
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <a href="javascript:;">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/14.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Components</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className="" href="ui-tabs.html">
                                                Tabs
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-accordion.html">
                                                Accordions
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-progress.html">
                                                Progress Bars
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-buttons.html">
                                                Buttons
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-modals.html">
                                                Modals
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-alerts.html">
                                                Alerts
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-notifications.html">
                                                Notifications
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-tooltips.html">
                                                Tooltips
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-popovers.html">
                                                Popovers
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-navbars.html">
                                                Navbars
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-dropdowns.html">
                                                Dropdowns
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-breadcrumbs.html">
                                                Breadcrumbs
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-pagination.html">
                                                Pagination
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-labels-badges.html">
                                                Labels &amp; Badges
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li className="">
                                    <a href="javascript:;">
                                        <i className="img">
                                            <img
                                                src="../data/crypto-dash/icons/15.png"
                                                alt=""
                                                className="width-20"
                                            />
                                        </i>
                                        <span className="title">Appearance</span>
                                        <span className="arrow " />
                                    </a>
                                    <ul className="sub-menu">
                                        <li>
                                            <a className="" href="ui-typography.html">
                                                Typography
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-grids.html">
                                                Grids
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-panels.html">
                                                Draggable Panels
                                            </a>
                                        </li>
                                        <li>
                                            <a className="" href="ui-group-list.html">
                                                Group Listing
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* MAIN MENU - END */}
                    </div>
                    {/*  SIDEBAR - END */}
                    {/* START CONTENT */}
                    <section id="main-content" className="">
                        <div className="wrapper main-wrapper row" style={{}}>
                            <div className="col-xs-12">
                                <div className="page-title">
                                    <div className="pull-left">
                                        {/* PAGE HEADING TAG - START */}
                                        <h1 className="title">Crypto Wallets</h1>
                                        {/* PAGE HEADING TAG - END */}
                                    </div>
                                    <div className="pull-right hidden-xs">
                                        <ol className="breadcrumb">
                                            <li>
                                                <a href="#">
                                                    <i className="fa fa-home" />
                                                    Home
                                                </a>
                                            </li>
                                            <li className="active">
                                                <strong>Crypto wallet</strong>
                                            </li>
                                        </ol>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                            {/* MAIN CONTENT AREA STARTS */}
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="statistics-box text-center gradient-blue mt-15">
                                    <div className="crypto-icon mb-15">
                                        <i className="cc BTC w-text" />
                                    </div>
                                    <h4 className="coin-name boldy w-text">Bitcoin Balance</h4>
                                    <p className="mb-0 g-text">0.312373 BTC</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="statistics-box text-center gradient-pink mt-15">
                                    <div className="crypto-icon mb-15">
                                        <i className="cc ETH w-text" />
                                    </div>
                                    <h4 className="coin-name boldy w-text">Ethereum Balance</h4>
                                    <p className="mb-0 g-text">1.007346 ETH</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="statistics-box text-center gradient-green mt-15">
                                    <div className="crypto-icon mb-15">
                                        <i className="cc LTC w-text" />
                                    </div>
                                    <h4 className="coin-name boldy w-text">Litecoin Balance</h4>
                                    <p className="mb-0 g-text">2.021421 LTC</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="statistics-box text-center gradient-violet mt-15">
                                    <div className="crypto-icon mb-15">
                                        <i className="cc XRP w-text" />
                                    </div>
                                    <h4 className="coin-name boldy w-text">Ripple Balance</h4>
                                    <p className="mb-0 g-text">323.0421 XRP</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="statistics-box text-center gradient-orange mt-15">
                                    <div className="crypto-icon mb-15">
                                        <i className="cc XMR w-text" />
                                    </div>
                                    <h4 className="coin-name boldy w-text">Monero Balance</h4>
                                    <p className="mb-0 g-text">323.0421 XMR</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="statistics-box text-center gradient-grep mt-15">
                                    <div className="crypto-icon mb-15">
                                        <i className="cc DASH w-text" />
                                    </div>
                                    <h4 className="coin-name boldy w-text">Dashcoin Balance</h4>
                                    <p className="mb-0 g-text">3.042189 DASH</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div className="statistics-box text-center orange-bg mt-15">
                                    <div className="crypto-icon mb-15">
                                        <i className="cc DOGE w-text" />
                                    </div>
                                    <h4 className="coin-name boldy w-text">Dogecoin Balance</h4>
                                    <p className="mb-0 g-text">877393,12 DOGE</p>
                                </div>
                            </div>
                            <div className="col-lg-3 col-sm-6 col-xs-12">
                                <div
                                    className="img-affa-wrapper text-center no-mb mt-15"
                                    style={{ padding: "25px 20px" }}
                                >
                                    <div className="">
                                        <i
                                            className="fa fa-plus has-gradient-to-right-bottom icon-sm icon-rounded inviewport visible "
                                            style={{ width: 50, height: 50, lineHeight: 25 }}
                                        />
                                        <a href="#myModal" data-toggle="modal">
                                            <h4 className="no-mb mt-20">Create new Wallet</h4>
                                        </a>
                                    </div>
                                </div>
                                <div
                                    aria-hidden="true"
                                    role="dialog"
                                    tabIndex={-1}
                                    id="myModal"
                                    className="modal fade"
                                    style={{ display: "none" }}
                                >
                                    <div className="modal-dialog">
                                        <div className="modal-content">
                                            <div className="modal-header gradient-blue">
                                                <button
                                                    aria-hidden="true"
                                                    data-dismiss="modal"
                                                    className="close"
                                                    type="button"
                                                >
                                                    ×
                                                </button>
                                                <h4 className="modal-title w-text">Create New Wallet</h4>
                                            </div>
                                            <div className="modal-body text-left">
                                                <form>
                                                    <div className="form-group">
                                                        <label htmlFor="modalname1" className="form-label">
                                                            Coin Name
                                                        </label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="modalname1"
                                                            placeholder="Enter crypto coin name"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label className="form-label">Wallet address</label>
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            id="modalwallet1"
                                                            placeholder="Enter wallet address"
                                                        />
                                                    </div>
                                                    <div className="form-group">
                                                        <label htmlFor="modalfile3" className="form-label">
                                                            Upload your private key
                                                        </label>
                                                        <input type="file" id="modalfile3" />
                                                        <span className="help-block">
                                                            This is important for verification purposes.
                                                        </span>
                                                    </div>
                                                    <button type="submit" className="btn btn-primary">
                                                        Add Wallet
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                            <div className="col-lg-12">
                                <section className="box ">
                                    <header className="panel_header">
                                        <h2 className="title pull-left">Crypto Wallet addresses</h2>
                                        <div className="actions panel_actions pull-right">
                                            <a className="box_toggle fa fa-chevron-down" />
                                            <a
                                                className="box_setting fa fa-cog"
                                                data-toggle="modal"
                                                href="#section-settings"
                                            />
                                            <a className="box_close fa fa-times" />
                                        </div>
                                    </header>
                                    <div className="content-body">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="row tabs-area">
                                                    <ul className="nav nav-tabs crypto-wallet-address vertical col-xs-4 col-md-3 left-aligned primary">
                                                        <li className="active text-center relative">
                                                            <a href="#home-5" data-toggle="tab" aria-expanded="true">
                                                                <img
                                                                    src="../data/crypto-dash/coin1.png"
                                                                    className="crypto-i"
                                                                    alt=""
                                                                />
                                                                <h4>Bitcoin</h4>
                                                            </a>
                                                            <div className="check-span">
                                                                <i className="fa fa-check" />
                                                            </div>
                                                        </li>
                                                        <li className="text-center relative">
                                                            <a
                                                                href="#profile-5"
                                                                data-toggle="tab"
                                                                aria-expanded="false"
                                                            >
                                                                <img
                                                                    src="../data/crypto-dash/coin3.png"
                                                                    className="crypto-i"
                                                                    alt=""
                                                                />
                                                                <h4>Dashcoin</h4>
                                                            </a>
                                                            <div className="check-span">
                                                                <i className="fa fa-check" />
                                                            </div>
                                                        </li>
                                                        <li className="text-center relative">
                                                            <a
                                                                href="#messages-5"
                                                                data-toggle="tab"
                                                                aria-expanded="false"
                                                            >
                                                                <img
                                                                    src="../data/crypto-dash/coin8.png"
                                                                    className="crypto-i"
                                                                    alt=""
                                                                />
                                                                <h4>Litecoin</h4>
                                                            </a>
                                                            <div className="check-span">
                                                                <i className="fa fa-check" />
                                                            </div>
                                                        </li>
                                                        <li className="text-center relative">
                                                            <a href="#settings-5" data-toggle="tab">
                                                                <img
                                                                    src="../data/crypto-dash/coin6.png"
                                                                    className="crypto-i"
                                                                    alt=""
                                                                />
                                                                <h4>Dogecoin</h4>
                                                            </a>
                                                            <div className="check-span">
                                                                <i className="fa fa-check" />
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <div
                                                        className="tab-content wallet-address-tab vertical col-xs-12 col-lg-9 left-aligned primary"
                                                        style={{ paddingRight: 0 }}
                                                    >
                                                        <div className="tab-pane fade active in" id="home-5">
                                                            <div className="row">
                                                                <div className="col-xs-12">
                                                                    <div className="option-identity-wrapper mb-15">
                                                                        <h3 className="boldy mt-0">BTC Wallet Address</h3>
                                                                        <div className="row">
                                                                            <div className="col-lg-8">
                                                                                <div className="form-group mb-0">
                                                                                    <label className="form-label mb-10">
                                                                                        Wallet Address
                                                                                    </label>
                                                                                    <span className="desc ">
                                                                                        (You can share it with traders to get Paid)
                                                                                    </span>
                                                                                    <div className="input-group primary">
                                                                                        <span className="input-group-addon">
                                                                                            <span className="arrow" />
                                                                                            <i className="cc BTC-alt" />
                                                                                        </span>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            defaultValue="HWEW9032JM3MK29I0EI302003I20EI320"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-4 no-pl mt-30">
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn btn-primary btn-corner"
                                                                                >
                                                                                    <i className="fa fa-copy" />
                                                                                </a>
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn btn-primary btn-corner right15"
                                                                                >
                                                                                    Generate New
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12">
                                                                    <div className="option-identity-wrapper no-mb">
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                <div className="option-icon">
                                                                                    <img
                                                                                        src="../data/crypto-dash/qr.png"
                                                                                        className="tab-img-icon"
                                                                                        alt="icon"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-8">
                                                                                <div className="scan-info left15">
                                                                                    <h3 className="bold">
                                                                                        Just scan the wallet address
                                                                                    </h3>
                                                                                    <p>
                                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                                        adipisicing elit. Tempora quaerat optio
                                                                                        tempore, culpa iure ipsam voluptatum amet
                                                                                        consectetur fuga ab, blanditiis saepe alias
                                                                                        ea, corrupti doloremque quaerat optio
                                                                                        tempore.
                                                                                    </p>
                                                                                    <div className="col-lg-12 no-pl mt-10">
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-primary btn-corner right15"
                                                                                        >
                                                                                            <i className="fa fa-long-arrow-down complete color-white" />{" "}
                                                                                            Recieve
                                                                                        </a>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-primary btn-corner right15"
                                                                                        >
                                                                                            <i className="fa fa-long-arrow-up complete color-white" />{" "}
                                                                                            Send
                                                                                        </a>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-primary btn-corner"
                                                                                        >
                                                                                            <i className="fa fa-gear" />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="profile-5">
                                                            <div className="row">
                                                                <div className="col-xs-12">
                                                                    <div className="option-identity-wrapper mb-15">
                                                                        <h3 className="boldy mt-0">DASH Wallet Address</h3>
                                                                        <div className="row">
                                                                            <div className="col-lg-8">
                                                                                <div className="form-group mb-0">
                                                                                    <label className="form-label mb-10">
                                                                                        Wallet Address
                                                                                    </label>
                                                                                    <span className="desc ">
                                                                                        (You can share it with traders to get Paid)
                                                                                    </span>
                                                                                    <div className="input-group primary">
                                                                                        <span className="input-group-addon">
                                                                                            <span className="arrow" />
                                                                                            <i className="cc DASH-alt" />
                                                                                        </span>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            defaultValue="HWEW9032JM3MK29I0EI302003I20EI320"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-4 no-pl mt-30">
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn btn-primary btn-corner"
                                                                                >
                                                                                    <i className="fa fa-copy" />
                                                                                </a>
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn btn-primary btn-corner right15"
                                                                                >
                                                                                    Generate New
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12">
                                                                    <div className="option-identity-wrapper no-mb">
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                <div className="option-icon">
                                                                                    <img
                                                                                        src="../data/crypto-dash/qr.png"
                                                                                        className="tab-img-icon"
                                                                                        alt="icon"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-8">
                                                                                <div className="scan-info left15">
                                                                                    <h3 className="bold ">
                                                                                        Just scan the wallet address
                                                                                    </h3>
                                                                                    <p>
                                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                                        adipisicing elit. Tempora quaerat optio
                                                                                        tempore, culpa iure ipsam voluptatum amet
                                                                                        consectetur fuga ab, blanditiis saepe alias
                                                                                        ea, corrupti doloremque quaerat optio
                                                                                        tempore.
                                                                                    </p>
                                                                                    <div className="col-lg-12 no-pl mt-10">
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-primary btn-corner right15"
                                                                                        >
                                                                                            <i className="fa fa-long-arrow-down complete color-white" />{" "}
                                                                                            Recieve
                                                                                        </a>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-primary btn-corner right15"
                                                                                        >
                                                                                            <i className="fa fa-long-arrow-up complete color-white" />{" "}
                                                                                            Send
                                                                                        </a>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-primary btn-corner"
                                                                                        >
                                                                                            <i className="fa fa-gear" />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="messages-5">
                                                            <div className="row">
                                                                <div className="col-xs-12">
                                                                    <div className="option-identity-wrapper mb-15">
                                                                        <h3 className="boldy mt-0">LTC Wallet Address</h3>
                                                                        <div className="row">
                                                                            <div className="col-lg-8">
                                                                                <div className="form-group mb-0">
                                                                                    <label className="form-label mb-10">
                                                                                        Wallet Address
                                                                                    </label>
                                                                                    <span className="desc ">
                                                                                        (You can share it with traders to get Paid)
                                                                                    </span>
                                                                                    <div className="input-group primary">
                                                                                        <span className="input-group-addon">
                                                                                            <span className="arrow" />
                                                                                            <i className="cc LTC-alt" />
                                                                                        </span>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            defaultValue="HWEW9032JM3MK29I0EI302003I20EI320"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-4 no-pl mt-30">
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn btn-primary btn-corner"
                                                                                >
                                                                                    <i className="fa fa-copy" />
                                                                                </a>
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn btn-primary btn-corner right15"
                                                                                >
                                                                                    Generate New
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12">
                                                                    <div className="option-identity-wrapper no-mb">
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                <div className="option-icon">
                                                                                    <img
                                                                                        src="../data/crypto-dash/qr.png"
                                                                                        className="tab-img-icon"
                                                                                        alt="icon"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-8">
                                                                                <div className="scan-info left15">
                                                                                    <h3 className="bold ">
                                                                                        Just scan the wallet address
                                                                                    </h3>
                                                                                    <p>
                                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                                        adipisicing elit. Tempora quaerat optio
                                                                                        tempore, culpa iure ipsam voluptatum amet
                                                                                        consectetur fuga ab, blanditiis saepe alias
                                                                                        ea, corrupti doloremque quaerat optio
                                                                                        tempore.
                                                                                    </p>
                                                                                    <div className="col-lg-12 no-pl mt-10">
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-primary btn-corner right15"
                                                                                        >
                                                                                            <i className="fa fa-long-arrow-down complete color-white" />{" "}
                                                                                            Recieve
                                                                                        </a>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-primary btn-corner right15"
                                                                                        >
                                                                                            <i className="fa fa-long-arrow-up complete color-white" />{" "}
                                                                                            Send
                                                                                        </a>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-primary btn-corner"
                                                                                        >
                                                                                            <i className="fa fa-gear" />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="tab-pane fade" id="settings-5">
                                                            <div className="row">
                                                                <div className="col-xs-12">
                                                                    <div className="option-identity-wrapper mb-15">
                                                                        <h3 className="boldy mt-0">Doge Wallet Address</h3>
                                                                        <div className="row">
                                                                            <div className="col-lg-8">
                                                                                <div className="form-group mb-0">
                                                                                    <label className="form-label mb-10">
                                                                                        Wallet Address
                                                                                    </label>
                                                                                    <span className="desc ">
                                                                                        (You can share it with traders to get Paid)
                                                                                    </span>
                                                                                    <div className="input-group primary">
                                                                                        <span className="input-group-addon">
                                                                                            <span className="arrow" />
                                                                                            <i className="cc DOGE-alt" />
                                                                                        </span>
                                                                                        <input
                                                                                            type="text"
                                                                                            className="form-control"
                                                                                            defaultValue="HWEW9032JM3MK29I0EI302003I20EI320"
                                                                                        />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-lg-4 no-pl mt-30">
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn btn-primary btn-corner"
                                                                                >
                                                                                    <i className="fa fa-copy" />
                                                                                </a>
                                                                                <a
                                                                                    href="#"
                                                                                    className="btn btn-primary btn-corner right15"
                                                                                >
                                                                                    Generate New
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="col-xs-12">
                                                                    <div className="option-identity-wrapper no-mb">
                                                                        <div className="row">
                                                                            <div className="col-md-4">
                                                                                <div className="option-icon">
                                                                                    <img
                                                                                        src="../data/crypto-dash/qr.png"
                                                                                        className="tab-img-icon"
                                                                                        alt="icon"
                                                                                    />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-md-8">
                                                                                <div className="scan-info left15">
                                                                                    <h3 className="bold ">
                                                                                        Just scan the wallet address
                                                                                    </h3>
                                                                                    <p>
                                                                                        Lorem ipsum dolor sit amet, consectetur
                                                                                        adipisicing elit. Tempora quaerat optio
                                                                                        tempore, culpa iure ipsam voluptatum amet
                                                                                        consectetur fuga ab, blanditiis saepe alias
                                                                                        ea, corrupti doloremque quaerat optio
                                                                                        tempore.
                                                                                    </p>
                                                                                    <div className="col-lg-12 no-pl mt-10">
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-primary btn-corner right15"
                                                                                        >
                                                                                            <i className="fa fa-long-arrow-down complete color-white" />{" "}
                                                                                            Recieve
                                                                                        </a>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-primary btn-corner right15"
                                                                                        >
                                                                                            <i className="fa fa-long-arrow-up complete color-white" />{" "}
                                                                                            Send
                                                                                        </a>
                                                                                        <a
                                                                                            href="#"
                                                                                            className="btn btn-primary btn-corner"
                                                                                        >
                                                                                            <i className="fa fa-gear" />
                                                                                        </a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* </div>  */}
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12">
                                <div className="r1_graph1 db_box db_box_large mt-15">
                                    <div className="coin-box2 flex align-items-center">
                                        <div className="coin-icon mr-10">
                                            <img src="../data/crypto-dash/coin1.png" alt="" />
                                        </div>
                                        <h5 className="coin-name boldy">Bitcoin</h5>
                                        <h5 className="coin-price boldy">$8.958</h5>
                                        <p className="mb-0 green-text">
                                            4.98%
                                            <i className="complete fa fa-arrow-up ml-10" />
                                        </p>
                                    </div>
                                    <div className="coin-box2 flex align-items-center">
                                        <div className="coin-icon mr-10">
                                            <img src="../data/crypto-dash/coin2.png" alt="" />
                                        </div>
                                        <h5 className="coin-name boldy">Ethereum</h5>
                                        <h5 className="coin-price boldy">$1.958</h5>
                                        <p className="mb-0 red-text">
                                            3.45%
                                            <i className="cancelled fa fa-arrow-down ml-10" />
                                        </p>
                                    </div>
                                    <div className="coin-box2 flex align-items-center">
                                        <div className="coin-icon mr-10">
                                            <img src="../data/crypto-dash/coin3.png" alt="" />
                                        </div>
                                        <h5 className="coin-name boldy">Dashcoin</h5>
                                        <h5 className="coin-price boldy">$838,45</h5>
                                        <p className="mb-0 green-text">
                                            3.45%
                                            <i className="complete fa fa-arrow-up ml-10" />
                                        </p>
                                    </div>
                                    <div className="coin-box2 flex align-items-center">
                                        <div className="coin-icon mr-10">
                                            <img src="../data/crypto-dash/coin8.png" alt="" />
                                        </div>
                                        <h5 className="coin-name boldy">Litecoin</h5>
                                        <h5 className="coin-price boldy">$308,09</h5>
                                        <p className="mb-0 red-text">
                                            2.05%
                                            <i className="cancelled fa fa-arrow-down ml-10" />
                                        </p>
                                    </div>
                                    <div className="coin-box2 mb-0 flex align-items-center">
                                        <div className="coin-icon mr-10">
                                            <img src="../data/crypto-dash/coin7.png" alt="" />
                                        </div>
                                        <h5 className="coin-name boldy">Monero</h5>
                                        <h5 className="coin-price boldy">$475.048</h5>
                                        <p className="mb-0 green-text">
                                            2.05%
                                            <i className="complete fa fa-arrow-up ml-10" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12">
                                <div className="r1_graph1 db_box db_box_large mt-15">
                                    <div className="pat-info-wrapper">
                                        <div className="pat-info text-left">
                                            <h5 className="">Total Funds</h5>
                                            <h6>Complete transactions</h6>
                                        </div>
                                        <div className="pat-val relative">
                                            <h4 className="value blue-text">
                                                <i className="complete fa fa-arrow-up" />
                                                124%<span>increase By</span>
                                            </h4>
                                        </div>
                                    </div>
                                    <span className="sparkline15">
                                        <canvas
                                            width={270}
                                            height={200}
                                            style={{
                                                display: "inline-block",
                                                width: 270,
                                                height: 200,
                                                verticalAlign: "top"
                                            }}
                                        />
                                    </span>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-12 col-xs-12">
                                <div className="r1_graph1 db_box db_box_large mt-15 text-center">
                                    <div className="invest-img relative">
                                        <img
                                            src="../data/crypto-dash/invest-img.png"
                                            className="center-block img-responsive"
                                            alt=""
                                        />
                                        <div className="invest-data">
                                            <h5 className="boldy mt-0">Investment Split</h5>
                                            <h2 className="boldy">45%</h2>
                                            <p className="mb-0">On Ethereum</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix" />
                            <div className="col-lg-12">
                                <section className="box">
                                    <header className="panel_header">
                                        <h2 className="title pull-left">Transactions History</h2>
                                        <div className="actions panel_actions pull-right">
                                            <a className="box_toggle fa fa-chevron-down" />
                                            <a
                                                className="box_setting fa fa-cog"
                                                data-toggle="modal"
                                                href="#section-settings"
                                            />
                                            <a className="box_close fa fa-times" />
                                        </div>
                                    </header>
                                    <div className="content-body">
                                        <div className="row">
                                            <div className="col-xs-12">
                                                <div
                                                    className="table-responsive"
                                                    data-pattern="priority-columns"
                                                >
                                                    <table
                                                        id="tech-companies-1"
                                                        className="table vm trans table-small-font no-mb table-bordered table-striped"
                                                    >
                                                        <thead>
                                                            <tr>
                                                                <th>Crypto Trade</th>
                                                                <th>Sender ID</th>
                                                                <th>Transaction ID</th>
                                                                <th>Time</th>
                                                                <th>Status</th>
                                                                <th>Amount</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>
                                                                    <div className="round img2">
                                                                        <img src="../data/crypto-dash/coin1.png" alt="" />
                                                                    </div>
                                                                    <div className="designer-info">
                                                                        <h6>Bitcoin</h6>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">gdh-34um3bbj</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">HJD9R034JNN3N43</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">10:23:45</small>
                                                                </td>
                                                                <td>
                                                                    <span className="badge  w-70 round-success">
                                                                        completed
                                                                    </span>
                                                                </td>
                                                                <td className="green-text boldy">+0,041BTC</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="round img2">
                                                                        <img src="../data/crypto-dash/coin8.png" alt="" />
                                                                    </div>
                                                                    <div className="designer-info">
                                                                        <h6>Litecoin</h6>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">gdh-34um3bbj</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">HJD9R034JNN3N43</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">12:53:25</small>
                                                                </td>
                                                                <td>
                                                                    <span className="badge w-70 round-warning">
                                                                        Pending
                                                                    </span>
                                                                </td>
                                                                <td className="red-text boldy">-1,176LTC</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="round img2">
                                                                        <img src="../data/crypto-dash/coin2.png" alt="" />
                                                                    </div>
                                                                    <div className="designer-info">
                                                                        <h6>Ethereum</h6>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">gdh-34um3bbj</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">HJD9R034JNN3N43</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">04:03:25</small>
                                                                </td>
                                                                <td>
                                                                    <span className="badge w-70 round-primary">
                                                                        exchanged{" "}
                                                                    </span>
                                                                </td>
                                                                <td className="blue-text boldy">0.023ETH</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="round img2">
                                                                        <img src="../data/crypto-dash/coin4.png" alt="" />
                                                                    </div>
                                                                    <div className="designer-info">
                                                                        <h6>Ripple</h6>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">gdh-34um3bbj</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">HJD9R034JNN3N43</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted"> 09:33:02</small>
                                                                </td>
                                                                <td>
                                                                    <span className="badge w-70 round-danger">
                                                                        Canceled
                                                                    </span>
                                                                </td>
                                                                <td className="green-text boldy">+107,0XRP</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="round img2">
                                                                        <img src="../data/crypto-dash/coin1.png" alt="" />
                                                                    </div>
                                                                    <div className="designer-info">
                                                                        <h6>Bitcoin</h6>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">gdh-34um3bbj</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">HJD9R034JNN3N43</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">10:23:45</small>
                                                                </td>
                                                                <td>
                                                                    <span className="badge  w-70 round-warning">
                                                                        pending
                                                                    </span>
                                                                </td>
                                                                <td className="green-text boldy">-0,098BTC</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="round img2">
                                                                        <img src="../data/crypto-dash/coin3.png" alt="" />
                                                                    </div>
                                                                    <div className="designer-info">
                                                                        <h6>Dashcoin</h6>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">gdh-34um3bbj</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">HJD9R034JNN3N43</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">09:33:02</small>
                                                                </td>
                                                                <td>
                                                                    <span className="badge w-70 round-success">
                                                                        Completed
                                                                    </span>
                                                                </td>
                                                                <td className="red-text boldy">-2,76DAH</td>
                                                            </tr>
                                                            <tr>
                                                                <td>
                                                                    <div className="round img2">
                                                                        <img src="../data/crypto-dash/coin5.png" alt="" />
                                                                    </div>
                                                                    <div className="designer-info">
                                                                        <h6>Bitdash</h6>
                                                                    </div>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">gdh-34um3bbj</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">HJD9R034JNN3N43</small>
                                                                </td>
                                                                <td>
                                                                    <small className="text-muted">09:33:02</small>
                                                                </td>
                                                                <td>
                                                                    <span className="badge w-70 round-success">
                                                                        Completed
                                                                    </span>
                                                                </td>
                                                                <td className="green-text boldy">+1,429DAH</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            </div>
                            {/* MAIN CONTENT AREA ENDS */}
                        </div>
                    </section>
                    {/* END CONTENT */}
                    <div className="page-chatapi hideit">
                        <div className="search-bar">
                            <input type="text" placeholder="Search" className="form-control" />
                        </div>
                        <div className="chat-wrapper">
                            <h4 className="group-head">Favourites</h4>
                            <ul className="contact-list">
                                <li className="user-row " id="chat_user_1" data-user-id={1}>
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="../data/profile/avatar-1.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="user-info">
                                        <h4>
                                            <a href="#">Joge Lucky</a>
                                        </h4>
                                        <span className="status available" data-status="available">
                                            {" "}
                                            Available
                                        </span>
                                    </div>
                                    <div className="user-status available">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_2" data-user-id={2}>
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="../data/profile/avatar-2.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="user-info">
                                        <h4>
                                            <a href="#">Folisise Chosiel</a>
                                        </h4>
                                        <span className="status away" data-status="away">
                                            {" "}
                                            Away
                                        </span>
                                    </div>
                                    <div className="user-status away">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_3" data-user-id={3}>
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="../data/profile/avatar-3.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="user-info">
                                        <h4>
                                            <a href="#">Aron Gonzalez</a>
                                        </h4>
                                        <span className="status busy" data-status="busy">
                                            {" "}
                                            Busy
                                        </span>
                                    </div>
                                    <div className="user-status busy">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                            </ul>
                            <h4 className="group-head">More Contacts</h4>
                            <ul className="contact-list">
                                <li className="user-row " id="chat_user_4" data-user-id={4}>
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="../data/profile/avatar-4.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="user-info">
                                        <h4>
                                            <a href="#">Chris Fox</a>
                                        </h4>
                                        <span className="status offline" data-status="offline">
                                            {" "}
                                            Offline
                                        </span>
                                    </div>
                                    <div className="user-status offline">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_5" data-user-id={5}>
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="../data/profile/avatar-5.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="user-info">
                                        <h4>
                                            <a href="#">Mogen Polish</a>
                                        </h4>
                                        <span className="status offline" data-status="offline">
                                            {" "}
                                            Offline
                                        </span>
                                    </div>
                                    <div className="user-status offline">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_6" data-user-id={6}>
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="../data/profile/avatar-1.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="user-info">
                                        <h4>
                                            <a href="#">Smith Carter</a>
                                        </h4>
                                        <span className="status available" data-status="available">
                                            {" "}
                                            Available
                                        </span>
                                    </div>
                                    <div className="user-status available">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_7" data-user-id={7}>
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="../data/profile/avatar-2.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="user-info">
                                        <h4>
                                            <a href="#">Amilia Gozenal</a>
                                        </h4>
                                        <span className="status busy" data-status="busy">
                                            {" "}
                                            Busy
                                        </span>
                                    </div>
                                    <div className="user-status busy">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_8" data-user-id={8}>
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="../data/profile/avatar-3.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="user-info">
                                        <h4>
                                            <a href="#">Tahir Jemyship</a>
                                        </h4>
                                        <span className="status away" data-status="away">
                                            {" "}
                                            Away
                                        </span>
                                    </div>
                                    <div className="user-status away">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_9" data-user-id={9}>
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="../data/profile/avatar-4.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="user-info">
                                        <h4>
                                            <a href="#">Johanson Wright</a>
                                        </h4>
                                        <span className="status busy" data-status="busy">
                                            {" "}
                                            Busy
                                        </span>
                                    </div>
                                    <div className="user-status busy">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_10" data-user-id={10}>
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="../data/profile/avatar-5.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="user-info">
                                        <h4>
                                            <a href="#">Loni Tindall</a>
                                        </h4>
                                        <span className="status away" data-status="away">
                                            {" "}
                                            Away
                                        </span>
                                    </div>
                                    <div className="user-status away">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_11" data-user-id={11}>
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="../data/profile/avatar-1.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="user-info">
                                        <h4>
                                            <a href="#">Natcho Herlaey</a>
                                        </h4>
                                        <span className="status idle" data-status="idle">
                                            {" "}
                                            Idle
                                        </span>
                                    </div>
                                    <div className="user-status idle">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                                <li className="user-row " id="chat_user_12" data-user-id={12}>
                                    <div className="user-img">
                                        <a href="#">
                                            <img src="../data/profile/avatar-2.png" alt="" />
                                        </a>
                                    </div>
                                    <div className="user-info">
                                        <h4>
                                            <a href="#">Shakira Swedan</a>
                                        </h4>
                                        <span className="status idle" data-status="idle">
                                            {" "}
                                            Idle
                                        </span>
                                    </div>
                                    <div className="user-status idle">
                                        <i className="fa fa-circle" />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="chatapi-windows "></div>
                </div>

            </>
        )
    }
}


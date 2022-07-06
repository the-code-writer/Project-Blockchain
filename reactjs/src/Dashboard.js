import React from 'react';
import 'font-awesome/css/font-awesome.min.css';
import Swiper from 'swiper';
import 'swiper/css';
import JobItemSwiper from './JobItemSwiper.js';
import {reactLocalStorage} from 'reactjs-localstorage';

const axios = require('axios');

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: {
                tenant:{

                }
            },
            items: [],
            titles: {
                t1: "Not Started",
                t2: "In Progress...",
                t3: "Completed",
                t4: "Delivered",
            }
        };

    }

    componentDidMount() {

        this.setState({
            userData: this.props.userData
        })

        this.refreshReplicationStats();

    }

    renderSwiper(){

        let self = this;

        window.swiper = new Swiper(".swiper", {
            loop: false,
            loopFillGroupWithBlank: true,
            //slidesPerView: 4,
            //slidesPerGroup: 4,
            spaceBetween: 1,
            centeredSlides: false,
            direction: 'horizontal',
            speed: 5000,
            autoplay: {
                delay: 15000,
                disableOnInteraction: true,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
        });

        window.swiper.on('reachEnd', function () {

            setTimeout(function(){

                window.swiper.destroy(true, true);

                self.refreshReplicationStats();

            }, 10000);

        });

        window.swiper.on('afterInit', function () {

            console.log(":: SWIPER INITIALISED ::");

        });

    }

    refreshReplicationStats(){

        console.log(":: refreshReplicationStats ::: self.props ::::", this.props);

        let self = this;

        if ("tenant_id" in self.props.userData) {

            this.setState({items: []})

            // Make a request for a user with a given ID
            axios.get('https://communicator.hyperefficient2.net/index.php/display/retrieve_json/' + self.props.userData.tenant_id)
                .then(function (response) {
                    // handle success
                    self.populateData(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log("::", error);

                    setTimeout(function () {

                        self.refreshReplicationStats();

                    },1000);

                })
                .then(function () {
                    // always executed
                });

        } else {

            console.warn(":: No data 0 ::")

            let localUserObject = reactLocalStorage.getObject("userObject");

            console.warn(":: No data 1 :: load local ::", localUserObject);

            if (localUserObject){

                console.warn(":: No data 2 :: now get the data ::", localUserObject);

                // Make a request for a user with a given ID
                axios.get('https://communicator.hyperefficient2.net/index.php/display/retrieve_json/' + localUserObject.tenant_id)
                    .then(function (response) {

                        console.warn(":: No data 3 :: result from server ::", response);

                        // handle success
                        self.populateData(response);

                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })
                    .then(function () {
                        // always executed
                    });

            }


        }

    }

    normaliseData( data ){

        //console.warn(":: REAL DATA :: XXX ::", data.data.pages);

        return data.data.pages;

    }

    populateData( data ){

        let self = this;

        console.log(":: POPULATE DATA :: data :: 0 ::", data);

        data = this.normaliseData( data );

        console.log(":: POPULATE DATA :: data :: 2 ::", data);

        setTimeout(function(){

            self.setState({ items: data });

            console.log(":: POPULATE DATA :: this.state.items :: 3 ::", self.state.items);

            self.renderSwiper();

        },1000);

        setTimeout(function () {

            const newTitles = {
                t1: self.state.userData.tenant.not_started_title,
                t2: self.state.userData.tenant.in_progress_title,
                t3: self.state.userData.tenant.completed_title,
                t4: self.state.userData.tenant.delivered_title,
            };

            self.setState({
                titles: newTitles
            })

        },2000);

    }

    render() {

        return (

            <div className="container-fluid ">

                <div className="row kanban-header-container">

                    <div className="col-10 col-md-10 kanban-header">

                        <img alt="" src="https://communicator.hyperefficient2.net/assets/display/title.png" className="kanban-header-image" />

                    </div>

                    <div className="col-2 col-md-2 kanban-header">

                        <i className="fa fa-power-off fa-icon" style={{fontSize : "36px", "color": "#ffff", "float": "right"}}  onClick={this.props.actionLogout} ></i>

                    </div>

                </div>

                <div className="row kanban-tiles-container">

                    <JobItemSwiper titles={this.state.titles} items={this.state.items} />

                </div>

                <div className="row  kanban-footer-container">

                    <div className="col-4">&nbsp;</div>

                    <div className="col-4  kanban-footer-text-container">

                        <div className="swiper-pagination"></div>

                    </div>

                    <div className="col-4">&nbsp;</div>

                </div>

            </div>

        );

    }

}

export default Dashboard;

import React, { Component } from 'react';
import axios from 'axios';
import CircularProgress from '@material-ui/core/CircularProgress';


class Map extends Component {
    constructor(props) {
        super(props);

        this.platform = null;
        this.map = null;

        this.state = {
            app_id: props.app_id,
            app_code: props.app_code,
            coords: {
                lat: 0,
                lng: 0
            },
            isChecked: false,
            address: {
                street: props.street,
                city: props.city,
                state: props.state,
                postalCode: props.postalCode,
                country: props.country
              },
            loading: true,
            zoom: props.zoom,
            map: null,
            style: props.style,
        }
    }

    getPlatform() {
        return new window.H.service.Platform(this.state);
    }

    getMap(container, layers, settings) {
        return new window.H.Map(container, layers, settings);
    }

    getEvents(map) {
        return new window.H.mapevents.MapEvents(map);
    }

    getBehavior(events) {
        return new window.H.mapevents.Behavior(events);
    }

    getUI(map, layers) {
        return new window.H.ui.UI.createDefault(map, layers);
    }

    componentDidMount() {
        let params = {
            'app_id': this.state.app_id,
            'app_code': this.state.app_code,
            'searchtext': this.state.address.street
            + this.state.address.city
            + this.state.address.state
            + this.state.address.postalCode
            + this.state.address.country,
    }
    axios.get('https://geocoder.api.here.com/6.2/geocode.json',
        {'params': params }
        ).then( (response) => {
            const view = response.data.Response.View
            if (view.length > 0 && view[0].Result.length > 0) {
                const location = view[0].Result[0].Location;
                console.log(this.state.coords + " "+location.DisplayPosition.Latitude+"hahaha "+location.DisplayPosition.Longitude)
                this.setState({
                    isChecked: true,
                    coords: {
                        lat: location.DisplayPosition.Latitude,
                        lng: location.DisplayPosition.Longitude
                    },
                    loading: false
                });
                console.log("ha ana f if"+this.state.coords.lat + 12)
                var icon = new window.H.map.Icon('https://img.icons8.com/color/48/000000/doctor-male.png'),
                marker = new window.H.map.Marker(this.state.coords, {icon: icon});
                this.map.setCenter(this.state.coords)
                this.map.addObject(marker);
            } else {
                this.setState({
                    isChecked: true,
                    coords: null,
                    loading: false
                })
            }
    
        })
        .catch(function (error) {
            console.log('caught failed query '+error);

            this.setState({
                isChecked: true,
                coords: null,
                loading: false
            });
        });
          this.platform = this.getPlatform();
          var layers = this.platform.createDefaultLayers();
          var element = document.getElementById('here-map');
          this.map = this.getMap(element, layers.normal.map, {
              center: this.state.coords,
              zoom: this.state.zoom
          });
    }

    render() {
        return (
            <div id="here-map" style={{width: '100%', height: '400px', background: 'grey' }} />
        );
    }
}

export default Map;

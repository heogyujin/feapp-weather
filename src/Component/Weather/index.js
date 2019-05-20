import React from 'react';

class Weather extends React.Component{
cons API_CITIES =


state = {

    cities : null

    };

componentDidMount(){

    const city_list = await fetch(API_CITIES)
    .then(res => res.json())
    .then(data => data);

        this.setState({
        cities : city_list
        });
        });
    }

 render(){
        const { foo } = this.state;

      return(

      <div>

      <h1>{foo}</h1>

      </div>

      );





    }



}
import React, { Component } from 'react';
import { Item } from './Item';


class Features extends Component {
    render() {
        return Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
                return (
                    <Item   
                        selected={this.props.selected} 
                        updateFeature={this.props.updateFeature}
                        item={item}
                        feature={feature}
                    />
                )
            })
            return (
                <fieldset className="feature" key={featureHash}>
                  <legend className="feature__name">
                    <h3>{feature}</h3>
                  </legend>
                  {options}
                </fieldset>
              );
        })
    }
}

export default Features;
  
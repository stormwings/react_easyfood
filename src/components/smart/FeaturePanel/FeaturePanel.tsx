import React, { Component } from "react";
import "./FeaturePanel.scss";

import Button from "../../dumb/Button/Button";

interface Props {
  featureName: any;
  featureFirstValue: any;
  featureSecondValue: any;
}

class FeaturePanel extends Component<Props> {
  render() {
    const { featureName, featureFirstValue, featureSecondValue } = this.props;

    return (
      <section id="feature-panel">
        <Button content={featureName} type={"success"} />
        <Button content={featureFirstValue} type={"empty"} />
        <Button content={featureSecondValue} type={"success-outline"} />
      </section>
    );
  }
}

export default FeaturePanel;

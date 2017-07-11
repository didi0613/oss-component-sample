import React from "react";
import { FormattedMessage } from "react-intl";

import styles from "../../src/styles/oss-component-sample.css";
import messages from "../lang/default-messages";

export default class OssComponentSample extends React.Component {
  render() {
    return (
      <div className={styles.someStyle}>
        <FormattedMessage {...messages.editMe} />
      </div>
    );
  }
}

OssComponentSample.displayName = "OssComponentSample";

OssComponentSample.propTypes = { };

OssComponentSample.defaultProps = { };

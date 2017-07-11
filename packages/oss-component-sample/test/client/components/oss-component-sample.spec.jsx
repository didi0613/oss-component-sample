/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import OssComponentSample from "src/components/oss-component-sample";

describe("components/oss-component-sample", () => {

  describe("Mounting", () => {

    it("should render into the document", () => {
      const component = shallow(<OssComponentSample />);
      expect(component).to.not.be.null;
    });

  });

});

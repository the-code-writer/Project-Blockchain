import React from 'react';

class Purchase extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      state:null,
    };
  }

  componentDidMount() {

  }

  render() {

    return (

      /* begin::Explore drawer toggle */
      <button id="kt_explore_toggle" className="explore-toggle btn btn-sm bg-body btn-color-gray-700 btn-active-primary shadow-sm position-fixed px-8 fw-bolder zindex-2 top-50 mt-10 end-0 transform-90 fs-5 rounded-top-0" title="Purchase Start HTML Pro" data-bs-toggle="tooltip" data-bs-placement="left" data-bs-dismiss="click" data-bs-trigger="hover">
        <span id="kt_explore_toggle_label">Purchase</span>
      </button>
      /* end::Explore drawer toggle */

    );

  }

}

export default Purchase;

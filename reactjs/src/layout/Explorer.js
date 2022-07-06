import React from 'react';

class Explorer extends React.Component {

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

      /* begin::Explore drawer */
      <div id="kt_explore" className="explore bg-white" data-kt-drawer="true" data-kt-drawer-name="explore" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'lg': '440px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_explore_toggle" data-kt-drawer-close="#kt_explore_close">
        {/* begin::Card */}
        <div className="card shadow-none rounded-0 w-100">
          {/* begin::Header */}
          <div className="card-header" id="kt_explore_header">
            <h5 className="card-title fw-bold text-gray-600">Purchase Start HTML Pro</h5>
            <div className="card-toolbar">
              <button type="button" className="btn btn-sm btn-icon explore-btn-dismiss me-n5" id="kt_explore_close">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg */}
                <span className="svg-icon svg-icon-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><rect opacity=".5" x="6" y="17.314" width="16" height="2" rx="1" transform="rotate(-45 6 17.314)" fill="#000"/><rect x="7.414" y="6" width="16" height="2" rx="1" transform="rotate(45 7.414 6)" fill="#000"/></svg>
                </span>
                {/* end::Svg Icon */}
              </button>
            </div>
          </div>
          {/* end::Header */}
          {/* begin::Body */}
          <div className="card-body" id="kt_explore_body">
            {/* begin::Content */}
            <div id="kt_explore_scroll" className="scroll-y me-n5 pe-5" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-wrappers="#kt_explore_body" data-kt-scroll-dependencies="#kt_explore_header, #kt_explore_footer" data-kt-scroll-offset="5px">
              {/* begin::License */}
              <div className="rounded border border-dashed border-gray-300 py-6 px-8 mb-5">
                {/* begin::Heading */}
                <div className="d-flex flex-stack mb-5">
                  {/* begin::Price */}
                  <h3 className="fs-3 fw-bolder mb-0">All-in License</h3>
                  {/* end::Price */}
                </div>
                {/* end::Heading */}
                {/* begin::Description */}
                <div className="fs-5 fw-bold mb-7">
                  <span className="text-gray-500">Unlimited End Products and SaaS sites with paying users.</span>
                  <a className="explore-link" href="https://keenthemes.com/licensing">License Terms</a>
                </div>
                {/* end::Description */}
                {/* begin::Purchase */}
                <div className="mb-7">
                  <a href="https://keenthemes.com/products%PUBLIC_URL%" className="btn btn-lg explore-btn-primary w-100">Buy Now</a>
                </div>
                {/* end::Purchase */}
                {/* begin::Payment info */}
                <div className="d-flex flex-column flex-center mb-3">
                  {/* begin::Heading */}
                  <div className="mb-3 text-gray-500 fw-bold fs-6">Secured Payment by
                    <a href="https://www.2checkout.com/" target="_black" className="fw-bolder text-dark explore-link-hover me-1">2Checkout</a>with:</div>
                  {/* end::Heading */}
                  {/* begin::Payment methods */}
                  <div className="mb-2">
                    <img src="/assets/media/svg/payment-methods/paypal.svg" alt="" className="h-30px me-3 rounded-1" />
                    <img src="/assets/media/svg/payment-methods/visa.svg" alt="" className="h-30px me-3 rounded-1" />
                    <img src="/assets/media/svg/payment-methods/mastercard.svg" alt="" className="h-30px me-3 rounded-1" />
                    <img src="/assets/media/svg/payment-methods/americanexpress.svg" alt="" className="h-30px rounded-1" />
                  </div>
                  {/* end::Payment methods */}
                  {/* begin::Notice */}
                  <div className="text-gray-400 fs-7">100% money back guarantee!</div>
                  {/* end::Notice */}
                </div>
                {/* end::Payment info */}
              </div>
              {/* end::Licenses */}
              {/* begin::Related Products */}
              <div className="pt-15 mb-0">
                {/* begin::Heading */}
                <div className="d-flex flex-stack mb-5">
                  {/* begin::Title */}
                  <h3 className="fw-bolder text-dark me-2 mb-0">Related Products</h3>
                  {/* end::Title */}
                  {/* begin::Link */}
                  <a href="https://keenthemes.com" target="_black" className="fs-6 fw-bold explore-link">All Products</a>
                  {/* end::Link */}
                </div>
                {/* end::Heading */}
                {/* begin::Products */}
                <div className="mb-0">
                  {/* begin::Product */}
                  <a href="https://keenthemes.com/products%PUBLIC_URL%" className="btn btn-flex explore-btn-outline w-100 flex-stack active px-4 mb-4">
                    {/* begin::Info */}
                    <div className="d-flex align-items-center me-1">
                      <img src="/assets/media/technology-logos/Html5.png" alt="" className="h-30px me-3" />
                      <div className="d-flex flex-column align-items-start">
                        <h3 className="text-gray-800 fs-6 fw-bold mb-0">Start HTML Pro</h3>
                        <div className="text-gray-400 fs-7 fw-bold">HTML5, CSS3, JS, Bootstrap 5</div>
                      </div>
                    </div>
                    {/* end::Info */}
                    {/* begin::Label */}
                    <span className="badge badge-inline explore-label-pro py-2">Pro</span>
                    {/* end::Label */}
                  </a>
                  {/* end::Product */}
                  {/* begin::Product */}
                  <a href="https://keenthemes.com/products/start-vue-pro" className="btn btn-flex explore-btn-outline w-100 flex-stack px-4 mb-4">
                    {/* begin::Info */}
                    <div className="d-flex align-items-center me-1">
                      <img src="/assets/media/technology-logos/VueJS.png" alt="" className="h-30px me-3" />
                      <div className="d-flex flex-column align-items-start">
                        <h3 className="text-gray-800 fs-6 fw-bold mb-0">Start Vue Pro</h3>
                        <div className="text-gray-400 fs-7 fw-bold">VueJS 3, Typescript, Bootstrap 5</div>
                      </div>
                    </div>
                    {/* end::Info */}
                    {/* begin::Label */}
                    <span className="badge badge-inline explore-label-pro py-2">Pro</span>
                    {/* end::Label */}
                  </a>
                  {/* end::Product */}
                  {/* begin::Product */}
                  <a href="https://keenthemes.com/products/start-react-pro" className="btn btn-flex explore-btn-outline w-100 flex-stack px-4 mb-4">
                    {/* begin::Info */}
                    <div className="d-flex align-items-center me-1">
                      <img src="/assets/media/technology-logos/React.png" alt="" className="h-30px me-3" />
                      <div className="d-flex flex-column align-items-start">
                        <h3 className="text-gray-800 fs-6 fw-bold mb-0">Start React Pro</h3>
                        <div className="text-gray-400 fs-7 fw-bold">React, Typescript, Bootstrap 5</div>
                      </div>
                    </div>
                    {/* end::Info */}
                    {/* begin::Label */}
                    <span className="badge badge-inline explore-label-pro py-2">Pro</span>
                    {/* end::Label */}
                  </a>
                  {/* end::Product */}
                </div>
                {/* end::Products */}
              </div>
              {/* end::Related Products */}
            </div>
            {/* end::Content */}
          </div>
          {/* end::Body */}
        </div>
        {/* end::Card */}
      </div>
      /* end::Explore drawer */
    );

  }

}

export default Explorer;

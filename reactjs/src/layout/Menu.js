import React from 'react';

class Menu extends React.Component {

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
      /* begin::Mega Menu */
      <div className="modal bg-white fade" id="kt_mega_menu_modal" tabIndex="-1" aria-hidden="true">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content shadow-none">
            <div className="container">
              <div className="modal-header d-flex flex-stack border-0">
                <div className="d-flex align-items-center">
                  {/* begin::Logo */}
                  <a href="/index.html">
                    <img alt="Logo" src="/assets/media/logos/logo-default.svg" className="h-30px" />
                  </a>
                  {/* end::Logo */}
                </div>
                {/* begin::Close */}
                <div className="btn btn-icon btn-sm btn-light-primary ms-2" data-bs-dismiss="modal">
                  {/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg */}
                  <span className="svg-icon svg-icon-1">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
										<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
									</svg>
								</span>
                  {/* end::Svg Icon */}
                </div>
                {/* end::Close */}
              </div>
              <div className="modal-body">
                {/* begin::Row */}
                <div className="row py-10 g-5">
                  {/* begin::Column */}
                  <div className="col-lg-6 pe-lg-25">
                    {/* begin::Row */}
                    <div className="row">
                      <div className="col-sm-4">
                        <h3 className="fw-bolder mb-5">Dashboards</h3>
                        <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2 active" href="/index.html">Start</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/dashboards/extended.html">Extended</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/dashboards/light.html">Light</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/dashboards/compact.html">Compact</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <h3 className="fw-bolder mb-5">Apps</h3>
                        <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/apps/calendar.html">Calendar</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/apps/chat/private.html">Private Chat</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/apps/chat/group.html">Group Chat</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/apps/chat/drawer.html">Drawer Chat</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/apps/inbox.html">Inbox</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/apps/shop/shop-1.html">Shop 1</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/apps/shop/shop-2.html">Shop 2</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/apps/shop/product.html">Shop Product</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <h3 className="fw-bolder mb-5">General</h3>
                        <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/general/faq.html">FAQ</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/general/pricing.html">Pricing</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/general/invoice.html">Invoice</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/general/login.html">Login</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/general/wizard.html">Wizard</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/general/error.html">Error</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* end::Row */}
                    {/* begin::Row */}
                    <div className="row">
                      <div className="col-sm-4">
                        <h3 className="fw-bolder mb-5">Profile</h3>
                        <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/profile/overview.html">Overview</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/profile/account.html">Account</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/profile/settings.html">Settings</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4">
                        <h3 className="fw-bolder mb-5">Resources</h3>
                        <ul className="menu menu-column menu-fit menu-rounded menu-gray-600 menu-hover-primary menu-active-primary fw-bold fs-6 mb-10">
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/documentation/base/utilities.html">Components</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/documentation/getting-started.html">Documentation</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/layout-builder.html">Layout Builder</a>
                          </li>
                          <li className="menu-item">
                            <a className="menu-link ps-0 py-2" href="/documentation/getting-started/changelog.html">Changelog
                              <span className="badge badge-changelog badge-light-danger bg-hover-danger text-hover-white fw-bold fs-9 px-2 ms-2">v1.0.5</span></a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    {/* end::Row */}
                  </div>
                  {/* end::Column */}
                  {/* begin::Column */}
                  <div className="col-lg-6">
                    <h3 className="fw-bolder mb-8">Quick Links</h3>
                    {/* begin::Row */}
                    <div className="row g-5">
                      <div className="col-sm-4">
                        <a href="#exec" className="card bg-light-success hoverable min-h-125px shadow-none mb-5">
                          <div className="card-body d-flex flex-column flex-center">
                            <h3 className="fs-3 mb-2 text-dark fw-bolder">Security</h3>
                            <p className="mb-0 text-gray-600">$2.99/month</p>
                          </div>
                        </a>
                      </div>
                      <div className="col-sm-4">
                        <a href="#exec" className="card bg-light-danger hoverable min-h-125px shadow-none mb-5">
                          <div className="card-body d-flex flex-column flex-center text-center">
                            <h3 className="fs-3 mb-2 text-dark fw-bolder">Demo</h3>
                            <p className="mb-0 text-gray-600">Free Version</p>
                          </div>
                        </a>
                      </div>
                      <div className="col-sm-4">
                        <a href="#exec" className="card bg-light-warning hoverable min-h-125px shadow-none mb-5">
                          <div className="card-body d-flex flex-column flex-center text-center">
                            <h3 className="fs-3 mb-2 text-dark text-hover-primary fw-bolder">Try Now</h3>
                            <p className="mb-0 text-gray-600">Pro Version</p>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* end::Row */}
                    {/* begin::Row */}
                    <div className="row g-5">
                      <div className="col-sm-8">
                        <a href="#exec" className="card bg-light-primary hoverable min-h-125px shadow-none mb-5">
                          <div className="card-body d-flex flex-column flex-center text-center">
                            <h3 className="fs-3 mb-2 text-dark fw-bolder">Payment Methods</h3>
                            <p className="mb-0 text-gray-600">Credit Cards/Debit Cards, Paypal,
                              <br />Transferwise &amp; Others</p>
                          </div>
                        </a>
                        {/* begin::Row */}
                        <div className="row g-5">
                          <div className="col-sm-6">
                            <a href="#exec" className="card bg-light-warning hoverable shadow-none min-h-125px mb-5">
                              <div className="card-body d-flex flex-column flex-center text-center">
                                <h3 className="fs-3 mb-2 text-dark fw-bolder">Support</h3>
                                <p className="mb-0 text-gray-600">6 Month Free</p>
                              </div>
                            </a>
                          </div>
                          <div className="col-sm-6">
                            <a href="#exec" className="card bg-light-success hoverable shadow-none min-h-125px mb-5">
                              <div className="card-body d-flex flex-column flex-center text-center">
                                <h3 className="fs-3 mb-2 text-dark fw-bolder">Installation</h3>
                                <p className="mb-0 text-gray-600">$0.99 Per Machine</p>
                              </div>
                            </a>
                          </div>
                        </div>
                        {/* end::Row */}
                      </div>
                      <div className="col-sm-4">
                        <a href="#exec" className="card card-stretch mb-5 bg-light-info hoverable shadow-none min-h-250px">
                          <div className="card-body d-flex flex-column p-0">
                            <div className="d-flex flex-column flex-grow-1 flex-center text-center px-5 pt-10">
                              <h3 className="fs-3 mb-2 text-dark fw-bolder">Quick Start</h3>
                              <p className="mb-0 text-gray-600">Single Click Import</p>
                            </div>
                            <div className="min-h-125px bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom" style={{backgroundImage:"url('/assets/media/illustrations/sigma-1/2.png')"}}></div>
                          </div>
                        </a>
                      </div>
                    </div>
                    {/* end::Row */}
                  </div>
                  {/* end::Column */}
                </div>
                {/* end::Row */}
              </div>
            </div>
          </div>
        </div>
      </div>
      /* end::Mega Menu */
    );

  }

}

export default Menu;

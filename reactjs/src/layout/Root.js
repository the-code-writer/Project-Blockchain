import React from 'react';
import InputCheckbox from "../components/Forms/InputCheckbox";
import InputRadio from "../components/Forms/InputRadio";
import InputText from "../components/Forms/InputText";

class Root extends React.Component {

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
      /* begin::Root */
      <div className="d-flex flex-column flex-root" >
        {/* begin::Page */}
        <div className="page d-flex flex-row flex-column-fluid">
          {/* begin::Wrapper */}
          <div className="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
            {/* begin::Header */}
            <div id="kt_header" className="header" data-kt-sticky="true" data-kt-sticky-name="header" data-kt-sticky-offset="{default: '200px', lg: '300px'}">
              {/* begin::Container */}
              <div className="container-xxl d-flex align-items-stretch justify-content-between">
                {/* begin::Left */}
                <div className="d-flex align-items-center">
                  {/* begin::Mega Menu Toggler */}
                  <button className="btn btn-icon btn-accent me-2 me-lg-6" id="kt_mega_menu_toggle" data-bs-toggle="modal" data-bs-target="#kt_mega_menu_modal">
                    {/* begin::Svg Icon | path: icons/duotune/general/gen059.svg */}
                    <span className="svg-icon svg-icon-3">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
											<rect y="6" width="16" height="3" rx="1.5" fill="black" />
											<rect opacity="0.3" y="12" width="8" height="3" rx="1.5" fill="black" />
											<rect opacity="0.3" width="12" height="3" rx="1.5" fill="black" />
										</svg>
									</span>
                    {/* end::Svg Icon */}
                  </button>
                  {/* end::Mega Menu Toggler */}
                  {/* begin::Logo */}
                  <a href="/index.html">
                    <img  alt="Logo" src="/assets/media/logos/logo-default.svg" className="h-30px" />
                  </a>
                  {/* end::Logo */}
                </div>
                {/* end::Left */}
                {/* begin::Right */}
                <div className="d-flex align-items-center">
                  {/* begin::Search */}
                  <button className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6" data-bs-toggle="modal" data-bs-target="#kt_header_search_modal" id="kt_header_search_toggle">
                    {/* begin::Svg Icon | path: icons/duotune/general/gen021.svg */}
                    <span className="svg-icon svg-icon-1 svg-icon-dark">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
											<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
										</svg>
									</span>
                    {/* end::Svg Icon */}
                  </button>
                  {/* end::Search */}
                  {/* begin::Message */}
                  <button className="btn btn-icon btn-sm btn-active-bg-accent ms-1 ms-lg-6" id="kt_drawer_chat_toggle">
                    {/* begin::Svg Icon | path: icons/duotune/communication/com003.svg */}
                    <span className="svg-icon svg-icon-1 svg-icon-dark">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path opacity="0.3" d="M2 4V16C2 16.6 2.4 17 3 17H13L16.6 20.6C17.1 21.1 18 20.8 18 20V17H21C21.6 17 22 16.6 22 16V4C22 3.4 21.6 3 21 3H3C2.4 3 2 3.4 2 4Z" fill="black" />
											<path d="M18 9H6C5.4 9 5 8.6 5 8C5 7.4 5.4 7 6 7H18C18.6 7 19 7.4 19 8C19 8.6 18.6 9 18 9ZM16 12C16 11.4 15.6 11 15 11H6C5.4 11 5 11.4 5 12C5 12.6 5.4 13 6 13H15C15.6 13 16 12.6 16 12Z" fill="black" />
										</svg>
									</span>
                    {/* end::Svg Icon */}
                  </button>
                  {/* end::Message */}
                  {/* begin::User */}
                  <div className="ms-1 ms-lg-6">
                    {/* begin::Toggle */}
                    <div className="btn btn-icon btn-sm btn-active-bg-accent" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" id="kt_header_user_menu_toggle">
                      {/* begin::Svg Icon | path: icons/duotune/communication/com013.svg */}
                      <span className="svg-icon svg-icon-1 svg-icon-dark">
											<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
												<path d="M6.28548 15.0861C7.34369 13.1814 9.35142 12 11.5304 12H12.4696C14.6486 12 16.6563 13.1814 17.7145 15.0861L19.3493 18.0287C20.0899 19.3618 19.1259 21 17.601 21H6.39903C4.87406 21 3.91012 19.3618 4.65071 18.0287L6.28548 15.0861Z" fill="black" />
												<rect opacity="0.3" x="8" y="3" width="8" height="8" rx="4" fill="black" />
											</svg>
										</span>
                      {/* end::Svg Icon */}
                    </div>
                    {/* begin::Menu */}
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-300px" data-kt-menu="true">
                      <div className="menu-content fw-bold d-flex align-items-center bgi-no-repeat bgi-position-y-top rounded-top" style={{backgroundImage: "url('/assets/media//misc/dropdown-header-bg.jpg')"}}>
                        <div className="symbol symbol-45px mx-5 py-5">
												<span className="symbol-label bg-primary align-items-end">
													<img alt="Logo" src="/assets/media/svg/avatars/001-boy.svg" className="mh-35px" />
												</span>
                        </div>
                        <div className="">
                          <span className="text-white fw-bolder fs-4">Hello, James</span>
                          <span className="text-white fw-bold fs-7 d-block">CRM Product Designer</span>
                        </div>
                      </div>
                      {/* begin::Row */}
                      <div className="row row-cols-2 g-0">
                        <a href="/profile/overview.html" className="border-bottom border-end text-center py-10 btn btn-active-color-primary rounded-0">
                          {/* begin::Svg Icon | path: icons/duotune/general/gen025.svg */}
                          <span className="svg-icon svg-icon-3x me-n1">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
														<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
														<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black" />
														<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
													</svg>
												</span>
                          {/* end::Svg Icon */}
                          <span className="fw-bolder fs-6 d-block pt-3">My Profile</span>
                        </a>
                        <a href="/profile/account.html" className="col border-bottom text-center py-10 btn btn-active-color-primary rounded-0">
                          {/* begin::Svg Icon | path: icons/duotune/general/gen019.svg */}
                          <span className="svg-icon svg-icon-3x me-n1">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path d="M17.5 11H6.5C4 11 2 9 2 6.5C2 4 4 2 6.5 2H17.5C20 2 22 4 22 6.5C22 9 20 11 17.5 11ZM15 6.5C15 7.9 16.1 9 17.5 9C18.9 9 20 7.9 20 6.5C20 5.1 18.9 4 17.5 4C16.1 4 15 5.1 15 6.5Z" fill="black" />
														<path opacity="0.3" d="M17.5 22H6.5C4 22 2 20 2 17.5C2 15 4 13 6.5 13H17.5C20 13 22 15 22 17.5C22 20 20 22 17.5 22ZM4 17.5C4 18.9 5.1 20 6.5 20C7.9 20 9 18.9 9 17.5C9 16.1 7.9 15 6.5 15C5.1 15 4 16.1 4 17.5Z" fill="black" />
													</svg>
												</span>
                          {/* end::Svg Icon */}
                          <span className="fw-bolder fs-6 d-block pt-3">Settings</span>
                        </a>
                        <a href="/profile/settings.html" className="col text-center border-end py-10 btn btn-active-color-primary rounded-0">
                          {/* begin::Svg Icon | path: icons/duotune/finance/fin009.svg */}
                          <span className="svg-icon svg-icon-3x me-n1">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path opacity="0.3" d="M15.8 11.4H6C5.4 11.4 5 11 5 10.4C5 9.80002 5.4 9.40002 6 9.40002H15.8C16.4 9.40002 16.8 9.80002 16.8 10.4C16.8 11 16.3 11.4 15.8 11.4ZM15.7 13.7999C15.7 13.1999 15.3 12.7999 14.7 12.7999H6C5.4 12.7999 5 13.1999 5 13.7999C5 14.3999 5.4 14.7999 6 14.7999H14.8C15.3 14.7999 15.7 14.2999 15.7 13.7999Z" fill="black" />
														<path d="M18.8 15.5C18.9 15.7 19 15.9 19.1 16.1C19.2 16.7 18.7 17.2 18.4 17.6C17.9 18.1 17.3 18.4999 16.6 18.7999C15.9 19.0999 15 19.2999 14.1 19.2999C13.4 19.2999 12.7 19.2 12.1 19.1C11.5 19 11 18.7 10.5 18.5C10 18.2 9.60001 17.7999 9.20001 17.2999C8.80001 16.8999 8.49999 16.3999 8.29999 15.7999C8.09999 15.1999 7.80001 14.7 7.70001 14.1C7.60001 13.5 7.5 12.8 7.5 12.2C7.5 11.1 7.7 10.1 8 9.19995C8.3 8.29995 8.79999 7.60002 9.39999 6.90002C9.99999 6.30002 10.7 5.8 11.5 5.5C12.3 5.2 13.2 5 14.1 5C15.2 5 16.2 5.19995 17.1 5.69995C17.8 6.09995 18.7 6.6 18.8 7.5C18.8 7.9 18.6 8.29998 18.3 8.59998C18.2 8.69998 18.1 8.69993 18 8.79993C17.7 8.89993 17.4 8.79995 17.2 8.69995C16.7 8.49995 16.5 7.99995 16 7.69995C15.5 7.39995 14.9 7.19995 14.2 7.19995C13.1 7.19995 12.1 7.6 11.5 8.5C10.9 9.4 10.5 10.6 10.5 12.2C10.5 13.3 10.7 14.2 11 14.9C11.3 15.6 11.7 16.1 12.3 16.5C12.9 16.9 13.5 17 14.2 17C15 17 15.7 16.8 16.2 16.4C16.8 16 17.2 15.2 17.9 15.1C18 15 18.5 15.2 18.8 15.5Z" fill="black" />
													</svg>
												</span>
                          {/* end::Svg Icon */}
                          <span className="fw-bolder fs-6 d-block pt-3">Subscriptions</span>
                        </a>
                        <a href="/general/login.html" className="col text-center py-10 btn btn-active-color-primary rounded-0">
                          {/* begin::Svg Icon | path: icons/duotune/arrows/arr077.svg */}
                          <span className="svg-icon svg-icon-3x me-n1">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<rect opacity="0.3" x="4" y="11" width="12" height="2" rx="1" fill="black" />
														<path d="M5.86875 11.6927L7.62435 10.2297C8.09457 9.83785 8.12683 9.12683 7.69401 8.69401C7.3043 8.3043 6.67836 8.28591 6.26643 8.65206L3.34084 11.2526C2.89332 11.6504 2.89332 12.3496 3.34084 12.7474L6.26643 15.3479C6.67836 15.7141 7.3043 15.6957 7.69401 15.306C8.12683 14.8732 8.09458 14.1621 7.62435 13.7703L5.86875 12.3073C5.67684 12.1474 5.67684 11.8526 5.86875 11.6927Z" fill="black" />
														<path d="M8 5V6C8 6.55228 8.44772 7 9 7C9.55228 7 10 6.55228 10 6C10 5.44772 10.4477 5 11 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H11C10.4477 19 10 18.5523 10 18C10 17.4477 9.55228 17 9 17C8.44772 17 8 17.4477 8 18V19C8 20.1046 8.89543 21 10 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3H10C8.89543 3 8 3.89543 8 5Z" fill="#C4C4C4" />
													</svg>
												</span>
                          {/* end::Svg Icon */}
                          <span className="fw-bolder fs-6 d-block pt-3">Sign Out</span>
                        </a>
                      </div>
                      {/* end::Row */}
                    </div>
                    {/* end::Menu */}
                  </div>
                  {/* end::User */}
                  {/* begin::Notifications */}
                  <div className="ms-1 ms-lg-6">
                    {/* begin::Dropdown */}
                    <button className="btn btn-icon btn-sm btn-light-danger fw-bolder pulse pulse-danger" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end" id="kt_activities_toggle">
                      <span className="position-absolute fs-6">3</span>
                      <span className="pulse-ring"></span>
                    </button>
                    {/* begin::Menu */}
                    <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded fw-bold menu-title-gray-800 menu-hover-bg menu-state-title-primary w-250px w-md-300px" data-kt-menu="true">
                      <div className="menu-item mx-3">
                        <div className="menu-content fs-6 text-dark fw-bolder py-6">4 New Notifications</div>
                      </div>
                      <div className="separator mb-3"></div>
                      <div className="menu-item mx-3">
                        <a href="#exec" className="menu-link px-4 py-3">
                          <div className="symbol symbol-35px">
													<span className="symbol-label bg-light-info">
														{/* begin::Svg Icon | path: icons/duotune/abstract/abs027.svg */}
                            <span className="svg-icon svg-icon-3 svg-icon-info">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
																<path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
															</svg>
														</span>
                            {/* end::Svg Icon */}
													</span>
                          </div>
                          <div className="ps-4">
                            <span className="menu-title fw-bold mb-1">New Uer Library Added</span>
                            <span className="text-muted fw-bold d-block fs-7">3 Hours ago</span>
                          </div>
                        </a>
                      </div>
                      <div className="menu-item mx-3">
                        <a href="#exec" className="menu-link px-4 py-3">
                          <div className="symbol symbol-35px">
													<span className="symbol-label bg-light-warning">
														{/* begin::Svg Icon | path: icons/duotune/communication/com004.svg */}
                            <span className="svg-icon svg-icon-3 svg-icon-warning">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path opacity="0.3" d="M14 3V20H2V3C2 2.4 2.4 2 3 2H13C13.6 2 14 2.4 14 3ZM11 13V11C11 9.7 10.2 8.59995 9 8.19995V7C9 6.4 8.6 6 8 6C7.4 6 7 6.4 7 7V8.19995C5.8 8.59995 5 9.7 5 11V13C5 13.6 4.6 14 4 14V15C4 15.6 4.4 16 5 16H11C11.6 16 12 15.6 12 15V14C11.4 14 11 13.6 11 13Z" fill="black" />
																<path d="M2 20H14V21C14 21.6 13.6 22 13 22H3C2.4 22 2 21.6 2 21V20ZM9 3V2H7V3C7 3.6 7.4 4 8 4C8.6 4 9 3.6 9 3ZM6.5 16C6.5 16.8 7.2 17.5 8 17.5C8.8 17.5 9.5 16.8 9.5 16H6.5ZM21.7 12C21.7 11.4 21.3 11 20.7 11H17.6C17 11 16.6 11.4 16.6 12C16.6 12.6 17 13 17.6 13H20.7C21.2 13 21.7 12.6 21.7 12ZM17 8C16.6 8 16.2 7.80002 16.1 7.40002C15.9 6.90002 16.1 6.29998 16.6 6.09998L19.1 5C19.6 4.8 20.2 5 20.4 5.5C20.6 6 20.4 6.60005 19.9 6.80005L17.4 7.90002C17.3 8.00002 17.1 8 17 8ZM19.5 19.1C19.4 19.1 19.2 19.1 19.1 19L16.6 17.9C16.1 17.7 15.9 17.1 16.1 16.6C16.3 16.1 16.9 15.9 17.4 16.1L19.9 17.2C20.4 17.4 20.6 18 20.4 18.5C20.2 18.9 19.9 19.1 19.5 19.1Z" fill="black" />
															</svg>
														</span>
                            {/* end::Svg Icon */}
													</span>
                          </div>
                          <div className="ps-4">
                            <span className="menu-title fw-bold mb-1">Clean Microphone</span>
                            <span className="text-muted fw-bold d-block fs-7">5 Hours ago</span>
                          </div>
                        </a>
                      </div>
                      <div className="menu-item mx-3">
                        <a href="#exec" className="menu-link px-4 py-3">
                          <div className="symbol symbol-35px">
													<span className="symbol-label bg-light-primary">
														{/* begin::Svg Icon | path: icons/duotune/communication/com012.svg */}
                            <span className="svg-icon svg-icon-3 svg-icon-primary">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="black" />
																<rect x="6" y="12" width="7" height="2" rx="1" fill="black" />
																<rect x="6" y="7" width="12" height="2" rx="1" fill="black" />
															</svg>
														</span>
                            {/* end::Svg Icon */}
													</span>
                          </div>
                          <div className="ps-4">
                            <span className="menu-title fw-bold mb-1">Quick Chat Created</span>
                            <span className="text-muted fw-bold d-block fs-7">A Day ago</span>
                          </div>
                        </a>
                      </div>
                      <div className="menu-item mx-3">
                        <a href="#exec" className="menu-link px-4 py-3">
                          <div className="symbol symbol-35px">
													<span className="symbol-label bg-light-danger">
														{/* begin::Svg Icon | path: icons/duotune/coding/cod008.svg */}
                            <span className="svg-icon svg-icon-3 svg-icon-danger">
															<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																<path d="M11.2166 8.50002L10.5166 7.80007C10.1166 7.40007 10.1166 6.80005 10.5166 6.40005L13.4166 3.50002C15.5166 1.40002 18.9166 1.50005 20.8166 3.90005C22.5166 5.90005 22.2166 8.90007 20.3166 10.8001L17.5166 13.6C17.1166 14 16.5166 14 16.1166 13.6L15.4166 12.9C15.0166 12.5 15.0166 11.9 15.4166 11.5L18.3166 8.6C19.2166 7.7 19.1166 6.30002 18.0166 5.50002C17.2166 4.90002 16.0166 5.10007 15.3166 5.80007L12.4166 8.69997C12.2166 8.89997 11.6166 8.90002 11.2166 8.50002ZM11.2166 15.6L8.51659 18.3001C7.81659 19.0001 6.71658 19.2 5.81658 18.6C4.81658 17.9 4.71659 16.4 5.51659 15.5L8.31658 12.7C8.71658 12.3 8.71658 11.7001 8.31658 11.3001L7.6166 10.6C7.2166 10.2 6.6166 10.2 6.2166 10.6L3.6166 13.2C1.7166 15.1 1.4166 18.1 3.1166 20.1C5.0166 22.4 8.51659 22.5 10.5166 20.5L13.3166 17.7C13.7166 17.3 13.7166 16.7001 13.3166 16.3001L12.6166 15.6C12.3166 15.2 11.6166 15.2 11.2166 15.6Z" fill="black" />
																<path opacity="0.3" d="M5.0166 9L2.81659 8.40002C2.31659 8.30002 2.0166 7.79995 2.1166 7.19995L2.31659 5.90002C2.41659 5.20002 3.21659 4.89995 3.81659 5.19995L6.0166 6.40002C6.4166 6.60002 6.6166 7.09998 6.5166 7.59998L6.31659 8.30005C6.11659 8.80005 5.5166 9.1 5.0166 9ZM8.41659 5.69995H8.6166C9.1166 5.69995 9.5166 5.30005 9.5166 4.80005L9.6166 3.09998C9.6166 2.49998 9.2166 2 8.5166 2H7.81659C7.21659 2 6.71659 2.59995 6.91659 3.19995L7.31659 4.90002C7.41659 5.40002 7.91659 5.69995 8.41659 5.69995ZM14.6166 18.2L15.1166 21.3C15.2166 21.8 15.7166 22.2 16.2166 22L17.6166 21.6C18.1166 21.4 18.4166 20.8 18.1166 20.3L16.7166 17.5C16.5166 17.1 16.1166 16.9 15.7166 17L15.2166 17.1C14.8166 17.3 14.5166 17.7 14.6166 18.2ZM18.4166 16.3L19.8166 17.2C20.2166 17.5 20.8166 17.3 21.0166 16.8L21.3166 15.9C21.5166 15.4 21.1166 14.8 20.5166 14.8H18.8166C18.0166 14.8 17.7166 15.9 18.4166 16.3Z" fill="black" />
															</svg>
														</span>
                            {/* end::Svg Icon */}
													</span>
                          </div>
                          <div className="ps-4">
                            <span className="menu-title fw-bold mb-1">32 New Attachements</span>
                            <span className="text-muted fw-bold d-block fs-7">2 Day ago</span>
                          </div>
                        </a>
                      </div>
                      <div className="separator mt-3"></div>
                      <div className="menu-item mx-2">
                        <div className="menu-content py-5">
                          <a href="#exec" className="btn btn-primary fw-bolder me-2 px-5">Report</a>
                          <a href="#exec" className="btn btn-light fw-bolder px-5">Reset</a>
                        </div>
                      </div>
                    </div>
                    {/* end::Menu */}
                    {/* end::Dropdown */}
                  </div>
                  {/* end::Notifications */}
                  {/* begin::Aside Toggler */}
                  {/* end::Aside Toggler */}
                  {/* begin::Sidebar Toggler */}
                  <button className="btn btn-icon btn-sm btn-active-bg-accent d-lg-none ms-1 ms-lg-6" id="kt_sidebar_toggler">
                    {/* begin::Svg Icon | path: icons/duotune/abstract/abs015.svg */}
                    <span className="svg-icon svg-icon-1 svg-icon-dark">
										<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
											<path d="M21 7H3C2.4 7 2 6.6 2 6V4C2 3.4 2.4 3 3 3H21C21.6 3 22 3.4 22 4V6C22 6.6 21.6 7 21 7Z" fill="black" />
											<path opacity="0.3" d="M21 14H3C2.4 14 2 13.6 2 13V11C2 10.4 2.4 10 3 10H21C21.6 10 22 10.4 22 11V13C22 13.6 21.6 14 21 14ZM22 20V18C22 17.4 21.6 17 21 17H3C2.4 17 2 17.4 2 18V20C2 20.6 2.4 21 3 21H21C21.6 21 22 20.6 22 20Z" fill="black" />
										</svg>
									</span>
                    {/* end::Svg Icon */}
                  </button>
                  {/* end::Sidebar Toggler */}
                </div>
                {/* end::Right */}
              </div>
              {/* end::Container */}
            </div>
            {/* end::Header */}
            {/* begin::Main */}
            <div className="d-flex flex-column flex-column-fluid">
              {/* begin::Content */}
              <div className="content fs-6 d-flex flex-column-fluid" id="kt_content">
                {/* begin::Container */}
                <div className="container-xxl">
                  {/* begin::Row */}
                  <div className="row g-0 g-xl-5 g-xxl-8">
                    <div className="col-xl-4">
                      {/* begin::Engage Widget 5 */}
                      <div className="card card-stretch mb-5 mb-xxl-8">
                        {/* begin::Body */}
                        <div className="card-body pb-0">
                          {/* begin::Wrapper */}
                          <div className="d-flex flex-column h-100">
                            {/* begin::Text */}
                            <h3 className="text-dark text-center fs-1 fw-bolder pt-15 lh-lg">Kickstart
                              <br />Mobile Application</h3>
                            {/* end::Text */}
                            {/* begin::Action */}
                            <div className="text-center pt-7">
                              <a href="#exec" className="btn btn-primary fw-bolder fs-6 px-7 py-3" data-bs-toggle="modal" data-bs-target="#kt_modal_create_app">Create App</a>
                            </div>
                            {/* end::Action */}
                            {/* begin::Image */}
                            <div className="flex-grow-1 bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-bottom card-rounded-bottom h-200px" style={{backgroundImage: "url('/assets/media/illustrations/sigma-1/3.png')"}}></div>
                            {/* end::Image */}
                          </div>
                          {/* end::Wrapper */}
                        </div>
                        {/* end::Body */}
                      </div>
                      {/* end::Engage Widget 5 */}
                    </div>
                    <div className="col-xl-8">
                      {/* begin::Table Widget 1 */}
                      <div className="card card-stretch mb-5 mb-xxl-8">
                        {/* begin::Header */}
                        <div className="card-header border-0 pt-5">
                          <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bolder text-dark fs-3">Campaign Leaders</span>
                            <span className="text-muted mt-2 fw-bold fs-6">890,344 Sales</span>
                          </h3>
                          <div className="card-toolbar">
                            <ul className="nav nav-pills nav-pills-sm nav-light">
                              <li className="nav-item">
                                <a className="nav-link btn btn-active-light btn-color-muted py-2 px-4 active fw-bolder me-2" data-bs-toggle="tab" href="#kt_tab_pane_1_1">Day</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2" data-bs-toggle="tab" href="#kt_tab_pane_1_2">Week</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder" data-bs-toggle="tab" href="#kt_tab_pane_1_3">Month</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body pt-2 pb-0 mt-n3">
                          <div className="tab-content mt-5" id="myTabTables1">
                            {/* begin::Tap pane */}
                            <div className="tab-pane fade show active" id="kt_tab_pane_1_1" role="tabpanel" aria-labelledby="kt_tab_pane_1_1">
                              {/* begin::Table */}
                              <div className="table-responsive">
                                <table className="table table-borderless align-middle">
                                  <thead>
                                  <tr>
                                    <th className="p-0 w-50px"></th>
                                    <th className="p-0 min-w-200px"></th>
                                    <th className="p-0 min-w-100px"></th>
                                    <th className="p-0 min-w-40px"></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                    <th className="px-0 py-3">
                                      <div className="symbol symbol-65px me-5">
																				<span className="symbol-label bg-light-primary">
																					{/* begin::Svg Icon | path: icons/duotune/communication/com012.svg */}
                                          <span className="svg-icon svg-icon-1 svg-icon-primary">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="black" />
																							<rect x="6" y="12" width="7" height="2" rx="1" fill="black" />
																							<rect x="6" y="7" width="12" height="2" rx="1" fill="black" />
																						</svg>
																					</span>
                                          {/* end::Svg Icon */}
																				</span>
                                      </div>
                                    </th>
                                    <td className="ps-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Top Authors</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML/CSS/JS, Python</span>
                                    </td>
                                    <td>
                                      <div className="d-flex flex-column w-100 me-3">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-dark me-2 fs-6 fw-bolder">Progress</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                          <div className="progress h-6px w-100 bg-light-primary">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{width: "46%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <span className="text-muted fs-7 fw-bold ps-3">46%</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-0 py-3">
                                      <div className="symbol symbol-65px">
																				<span className="symbol-label bg-light-warning">
																					{/* begin::Svg Icon | path: icons/duotune/general/gen025.svg */}
                                          <span className="svg-icon svg-icon-1 svg-icon-warning">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
																							<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
																							<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black" />
																							<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
																						</svg>
																					</span>
                                          {/* end::Svg Icon */}
																				</span>
                                      </div>
                                    </td>
                                    <td className="ps-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Popular Authors</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML, VueJS, Laravel</span>
                                    </td>
                                    <td>
                                      <div className="d-flex flex-column w-100 me-3">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-dark me-2 fs-6 fw-bolder">Progress</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                          <div className="progress h-6px w-100 bg-light-warning">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: "87%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <span className="text-muted fs-7 fw-bold ps-3">87%</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="px-0 py-3">
                                      <div className="symbol symbol-65px">
																				<span className="symbol-label bg-light-success">
																					{/* begin::Svg Icon | path: icons/duotune/abstract/abs026.svg */}
                                          <span className="svg-icon svg-icon-1 svg-icon-success">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<path opacity="0.3" d="M7 20.5L2 17.6V11.8L7 8.90002L12 11.8V17.6L7 20.5ZM21 20.8V18.5L19 17.3L17 18.5V20.8L19 22L21 20.8Z" fill="black" />
																							<path d="M22 14.1V6L15 2L8 6V14.1L15 18.2L22 14.1Z" fill="black" />
																						</svg>
																					</span>
                                          {/* end::Svg Icon */}
																				</span>
                                      </div>
                                    </th>
                                    <td className="ps-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">New Products</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML/CSS/JS, Python</span>
                                    </td>
                                    <td>
                                      <div className="d-flex flex-column w-100 me-3">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-dark me-2 fs-6 fw-bolder">Progress</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                          <div className="progress h-6px w-100 bg-light-success">
                                            <div className="progress-bar bg-success" role="progressbar" style={{width: "53%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <span className="text-muted fs-7 fw-bold ps-3">53%</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="px-0 py-3">
                                      <div className="symbol symbol-65px">
																				<span className="symbol-label bg-light-danger">
																					{/* begin::Svg Icon | path: icons/duotune/abstract/abs027.svg */}
                                          <span className="svg-icon svg-icon-1 svg-icon-danger">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
																							<path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
																						</svg>
																					</span>
                                          {/* end::Svg Icon */}
																				</span>
                                      </div>
                                    </th>
                                    <td className="ps-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Weekly Bestsellers</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML/CSS/JS, Python</span>
                                    </td>
                                    <td>
                                      <div className="d-flex flex-column w-100 me-3">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-dark me-2 fs-6 fw-bolder">Progress</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                          <div className="progress h-6px w-100 bg-light-danger">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "92%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <span className="text-muted fs-7 fw-bold ps-3">92%</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* end::Table */}
                            </div>
                            {/* end::Tap pane */}
                            {/* begin::Tap pane */}
                            <div className="tab-pane fade" id="kt_tab_pane_1_2" role="tabpanel" aria-labelledby="kt_tab_pane_1_2">
                              {/* begin::Table */}
                              <div className="table-responsive">
                                <table className="table table-borderless align-middle">
                                  <thead>
                                  <tr>
                                    <th className="p-0 w-50px"></th>
                                    <th className="p-0 min-w-200px"></th>
                                    <th className="p-0 min-w-100px"></th>
                                    <th className="p-0 min-w-40px"></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                    <th className="ps-0 py-3">
                                      <div className="symbol symbol-65px me-3">
																				<span className="symbol-label bg-light-success">
																					{/* begin::Svg Icon | path: icons/duotune/arrows/arr075.svg */}
                                          <span className="svg-icon svg-icon-1 svg-icon-success">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
																							<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
																						</svg>
																					</span>
                                          {/* end::Svg Icon */}
																				</span>
                                      </div>
                                    </th>
                                    <td className="ps-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">New Users</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML/CSS/JS, Python</span>
                                    </td>
                                    <td>
                                      <div className="d-flex flex-column w-100 me-3">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-dark me-2 fs-6 fw-bolder">Progress</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                          <div className="progress h-6px w-100 bg-light-success">
                                            <div className="progress-bar bg-success" role="progressbar" style={{width: "53%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <span className="text-muted fs-7 fw-bold ps-3">53%</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="ps-0 py-3">
                                      <div className="symbol symbol-65px me-3">
																				<span className="symbol-label bg-light-danger">
																					{/* begin::Svg Icon | path: icons/duotune/abstract/abs027.svg */}
                                          <span className="svg-icon svg-icon-1 svg-icon-danger">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
																							<path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
																						</svg>
																					</span>
                                          {/* end::Svg Icon */}
																				</span>
                                      </div>
                                    </th>
                                    <td className="ps-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Weekly Bestsellers</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML/CSS/JS, Python</span>
                                    </td>
                                    <td>
                                      <div className="d-flex flex-column w-100 me-3">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-dark me-2 fs-6 fw-bolder">Progress</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                          <div className="progress h-6px w-100 bg-light-danger">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "92%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <span className="text-muted fs-7 fw-bold ps-3">92%</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="ps-0 py-3">
                                      <div className="symbol symbol-65px me-3">
																				<span className="symbol-label bg-light-primary">
																					{/* begin::Svg Icon | path: icons/duotune/communication/com012.svg */}
                                          <span className="svg-icon svg-icon-1 svg-icon-primary">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="black" />
																							<rect x="6" y="12" width="7" height="2" rx="1" fill="black" />
																							<rect x="6" y="7" width="12" height="2" rx="1" fill="black" />
																						</svg>
																					</span>
                                          {/* end::Svg Icon */}
																				</span>
                                      </div>
                                    </th>
                                    <td className="ps-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Top Authors</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML/CSS/JS, Python</span>
                                    </td>
                                    <td>
                                      <div className="d-flex flex-column w-100 me-3">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-dark me-2 fs-6 fw-bolder">Progress</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                          <div className="progress h-6px w-100 bg-light-primary">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{width: "46%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <span className="text-muted fs-7 fw-bold ps-3">46%</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="ps-0 py-3">
                                      <div className="symbol symbol-65px me-3">
																				<span className="symbol-label bg-light-warning">
																					{/* begin::Svg Icon | path: icons/duotune/general/gen025.svg */}
                                          <span className="svg-icon svg-icon-1 svg-icon-warning">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
																							<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
																							<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black" />
																							<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
																						</svg>
																					</span>
                                          {/* end::Svg Icon */}
																				</span>
                                      </div>
                                    </td>
                                    <td className="ps-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Popular Authors</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML, VueJS, Laravel</span>
                                    </td>
                                    <td>
                                      <div className="d-flex flex-column w-100 me-3">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-dark me-2 fs-6 fw-bolder">Progress</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                          <div className="progress h-6px w-100 bg-light-warning">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: "87%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <span className="text-muted fs-7 fw-bold ps-3">87%</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* end::Table */}
                            </div>
                            {/* end::Tap pane */}
                            {/* begin::Tap pane */}
                            <div className="tab-pane fade" id="kt_tab_pane_1_3" role="tabpanel" aria-labelledby="kt_tab_pane_1_3">
                              {/* begin::Table */}
                              <div className="table-responsive">
                                <table className="table table-borderless align-middle">
                                  <thead>
                                  <tr>
                                    <th className="p-0 w-50px"></th>
                                    <th className="p-0 min-w-200px"></th>
                                    <th className="p-0 min-w-100px"></th>
                                    <th className="p-0 min-w-40px"></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                    <td className="ps-0 py-3">
                                      <div className="symbol symbol-65px bg-light-warning me-3">
																				<span className="symbol-label">
																					{/* begin::Svg Icon | path: icons/duotune/general/gen025.svg */}
                                          <span className="svg-icon svg-icon-1 svg-icon-warning">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<rect x="2" y="2" width="9" height="9" rx="2" fill="black" />
																							<rect opacity="0.3" x="13" y="2" width="9" height="9" rx="2" fill="black" />
																							<rect opacity="0.3" x="13" y="13" width="9" height="9" rx="2" fill="black" />
																							<rect opacity="0.3" x="2" y="13" width="9" height="9" rx="2" fill="black" />
																						</svg>
																					</span>
                                          {/* end::Svg Icon */}
																				</span>
                                      </div>
                                    </td>
                                    <td className="ps-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Popular Authors</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML, VueJS, Laravel</span>
                                    </td>
                                    <td>
                                      <div className="d-flex flex-column w-100 me-3">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-dark me-2 fs-6 fw-bolder">Progress</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                          <div className="progress h-6px w-100 bg-light-warning">
                                            <div className="progress-bar bg-warning" role="progressbar" style={{width: "87%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <span className="text-muted fs-7 fw-bold ps-3">87%</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="ps-0 py-3">
                                      <div className="symbol symbol-65px bg-light-success me-3">
																				<span className="symbol-label">
																					{/* begin::Svg Icon | path: icons/duotune/arrows/arr075.svg */}
                                          <span className="svg-icon svg-icon-1 svg-icon-success">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<rect opacity="0.5" x="11.364" y="20.364" width="16" height="2" rx="1" transform="rotate(-90 11.364 20.364)" fill="black" />
																							<rect x="4.36396" y="11.364" width="16" height="2" rx="1" fill="black" />
																						</svg>
																					</span>
                                          {/* end::Svg Icon */}
																				</span>
                                      </div>
                                    </th>
                                    <td className="ps-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">New Users</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML/CSS/JS, Python</span>
                                    </td>
                                    <td>
                                      <div className="d-flex flex-column w-100 me-3">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-dark me-2 fs-6 fw-bolder">Progress</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                          <div className="progress h-6px w-100 bg-light-success">
                                            <div className="progress-bar bg-success" role="progressbar" style={{width: "53%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <span className="text-muted fs-7 fw-bold ps-3">53%</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="ps-0 py-3">
                                      <div className="symbol symbol-65px bg-light-primary me-3">
																				<span className="symbol-label">
																					{/* begin::Svg Icon | path: icons/duotune/communication/com012.svg */}
                                          <span className="svg-icon svg-icon-1 svg-icon-primary">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<path opacity="0.3" d="M20 3H4C2.89543 3 2 3.89543 2 5V16C2 17.1046 2.89543 18 4 18H4.5C5.05228 18 5.5 18.4477 5.5 19V21.5052C5.5 22.1441 6.21212 22.5253 6.74376 22.1708L11.4885 19.0077C12.4741 18.3506 13.6321 18 14.8167 18H20C21.1046 18 22 17.1046 22 16V5C22 3.89543 21.1046 3 20 3Z" fill="black" />
																							<rect x="6" y="12" width="7" height="2" rx="1" fill="black" />
																							<rect x="6" y="7" width="12" height="2" rx="1" fill="black" />
																						</svg>
																					</span>
                                          {/* end::Svg Icon */}
																				</span>
                                      </div>
                                    </th>
                                    <td className="ps-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Top Authors</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML/CSS/JS, Python</span>
                                    </td>
                                    <td>
                                      <div className="d-flex flex-column w-100 me-3">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-dark me-2 fs-6 fw-bolder">Progress</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                          <div className="progress h-6px w-100 bg-light-primary">
                                            <div className="progress-bar bg-primary" role="progressbar" style={{width: "46%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <span className="text-muted fs-7 fw-bold ps-3">46%</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <th className="ps-0 py-3">
                                      <div className="symbol symbol-65px bg-light-danger me-3">
																				<span className="symbol-label">
																					{/* begin::Svg Icon | path: icons/duotune/abstract/abs027.svg */}
                                          <span className="svg-icon svg-icon-1 svg-icon-danger">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<path opacity="0.3" d="M21.25 18.525L13.05 21.825C12.35 22.125 11.65 22.125 10.95 21.825L2.75 18.525C1.75 18.125 1.75 16.725 2.75 16.325L4.04999 15.825L10.25 18.325C10.85 18.525 11.45 18.625 12.05 18.625C12.65 18.625 13.25 18.525 13.85 18.325L20.05 15.825L21.35 16.325C22.35 16.725 22.35 18.125 21.25 18.525ZM13.05 16.425L21.25 13.125C22.25 12.725 22.25 11.325 21.25 10.925L13.05 7.62502C12.35 7.32502 11.65 7.32502 10.95 7.62502L2.75 10.925C1.75 11.325 1.75 12.725 2.75 13.125L10.95 16.425C11.65 16.725 12.45 16.725 13.05 16.425Z" fill="black" />
																							<path d="M11.05 11.025L2.84998 7.725C1.84998 7.325 1.84998 5.925 2.84998 5.525L11.05 2.225C11.75 1.925 12.45 1.925 13.15 2.225L21.35 5.525C22.35 5.925 22.35 7.325 21.35 7.725L13.05 11.025C12.45 11.325 11.65 11.325 11.05 11.025Z" fill="black" />
																						</svg>
																					</span>
                                          {/* end::Svg Icon */}
																				</span>
                                      </div>
                                    </th>
                                    <td className="ps-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Weekly Bestsellers</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML/CSS/JS, Python</span>
                                    </td>
                                    <td>
                                      <div className="d-flex flex-column w-100 me-3">
                                        <div className="d-flex flex-stack mb-2">
                                          <span className="text-dark me-2 fs-6 fw-bolder">Progress</span>
                                        </div>
                                        <div className="d-flex align-items-center">
                                          <div className="progress h-6px w-100 bg-light-danger">
                                            <div className="progress-bar bg-danger" role="progressbar" style={{width: "92%"}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                                          </div>
                                          <span className="text-muted fs-7 fw-bold ps-3">92%</span>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* end::Table */}
                            </div>
                            {/* end::Tap pane */}
                          </div>
                        </div>
                      </div>
                      {/* end::Table Widget 1 */}
                    </div>
                  </div>
                  {/* end::Row */}
                  {/* begin::Row */}
                  <div className="row g-0 g-xl-5 g-xxl-8">
                    <div className="col-xl-4">
                      {/* begin::Stats Widget 1 */}
                      <div className="card card-stretch mb-5 mb-xxl-8">
                        {/* begin::Header */}
                        <div className="card-header align-items-center border-0 mt-5">
                          <h3 className="card-title align-items-start flex-column">
                            <span className="fw-bolder text-dark fs-3">Sales Share</span>
                            <span className="text-muted mt-2 fw-bold fs-6">890,344 Sales</span>
                          </h3>
                          <div className="card-toolbar">
                            {/* begin::Dropdown */}
                            <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <span className="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Menu */}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                              <div className="menu-item px-3">
                                <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Manage</div>
                              </div>
                              <div className="separator mb-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add User</a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add Role</a>
                              </div>
                              <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start" data-kt-menu-flip="left-start, top">
                                <a href="#exec" className="menu-link px-3">
                                  <span className="menu-title">Add Group</span>
                                  <span className="menu-arrow"></span>
                                </a>
                                <div className="menu-sub menu-sub-dropdown w-200px py-4">
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Admin Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Staff Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Member Group</a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Reports</a>
                              </div>
                              <div className="separator mt-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <div className="menu-content px-3 py-3">
                                  <a className="btn btn-primary fw-bold btn-sm px-4" href="#exec">Create New</a>
                                </div>
                              </div>
                            </div>
                            {/* end::Menu */}
                            {/* end::Dropdown */}
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body pt-12">
                          {/* begin::Chart */}
                          <div className="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center h-175px" style={{backgroundImage: "url('/assets/media/svg/illustrations/bg-1.svg')"}}>
                            <div className="fw-bolder fs-1 text-gray-800 position-absolute">8,345</div>
                            <canvas id="kt_stats_widget_1_chart"></canvas>
                          </div>
                          {/* end::Chart */}
                          {/* begin::Items */}
                          <div className="d-flex justify-content-around pt-18">
                            {/* begin::Item */}
                            <div className="">
                              <span className="fw-bolder text-gray-800">48% SNT</span>
                              <span className="bg-info w-25px h-5px d-block rounded mt-1"></span>
                            </div>
                            {/* end::Item */}
                            {/* begin::Item */}
                            <div className="">
                              <span className="fw-bolder text-gray-800">20% REX</span>
                              <span className="bg-primary w-25px h-5px d-block rounded mt-1"></span>
                            </div>
                            {/* end::Item */}
                            {/* begin::Item */}
                            <div className="">
                              <span className="fw-bolder text-gray-800">32% SAP</span>
                              <span className="bg-warning w-25px h-5px d-block rounded mt-1"></span>
                            </div>
                            {/* end::Item */}
                          </div>
                          {/* end::Items */}
                        </div>
                        {/* end: Card Body */}
                      </div>
                      {/* end::Stats Widget 1 */}
                    </div>
                    <div className="col-xl-8">
                      {/* begin::Stats Widget 2 */}
                      <div className="card card-stretch mb-5 mb-xxl-8">
                        {/* begin::Header */}
                        <div className="card-header align-items-center border-0 mt-5">
                          <h3 className="card-title align-items-start flex-column">
                            <span className="fw-bolder text-dark fs-3">Milestones</span>
                            <span className="text-muted mt-2 fw-bold fs-6">890,344 Sales</span>
                          </h3>
                          <div className="card-toolbar">
                            {/* begin::Dropdown */}
                            <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <span className="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Form */}
                            <div className="menu menu-sub menu-sub-dropdown menu-column w-300px w-lg-350px p-5" data-kt-menu="true">
                              {/* begin::Input */}
                              <div className="input-group input-group-solid mb-5">
                                <div className="input-group-prepend">
																<span className="input-group-text">
																	{/* begin::Svg Icon | path: icons/duotune/general/gen021.svg */}
                                  <span className="svg-icon svg-icon-4">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.5" x="17.0365" y="15.1223" width="8.15546" height="2" rx="1" transform="rotate(45 17.0365 15.1223)" fill="black" />
																			<path d="M11 19C6.55556 19 3 15.4444 3 11C3 6.55556 6.55556 3 11 3C15.4444 3 19 6.55556 19 11C19 15.4444 15.4444 19 11 19ZM11 5C7.53333 5 5 7.53333 5 11C5 14.4667 7.53333 17 11 17C14.4667 17 17 14.4667 17 11C17 7.53333 14.4667 5 11 5Z" fill="black" />
																		</svg>
																	</span>
                                  {/* end::Svg Icon */}
																</span>
                                </div>

                                <InputText name="search" defaultValue="" placeholder="Filter reports" />
                              </div>
                              {/* end::Input */}
                              {/* begin::Tabs */}
                              <ul className="nav nav-line-tabs nav-line-tabs-2x border-light fw-bold mb-5">
                                <li className="nav-item">
                                  <a className="nav-link active" data-bs-toggle="tab" href="#kt_dropdown_2_tab_1">Today</a>
                                </li>
                                <li className="nav-item">
                                  <a className="nav-link" data-bs-toggle="tab" href="#kt_dropdown_2_tab_2">Last Week</a>
                                </li>
                              </ul>
                              {/* end::Tabs */}
                              {/* begin::Tab Content */}
                              <div className="tab-content">
                                {/* begin::Tab Pane */}
                                <div className="tab-pane active" id="kt_dropdown_2_tab_1">
                                  <ul className="menu menu-custom menu-column menu-rounded menu-title-gray-600 menu-icon-muted menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold">
                                    <li className="menu-item py-1">
                                      <a href="#exec" className="menu-link px-3">
																			<span className="menu-icon">
																				{/* begin::Svg Icon | path: icons/duotune/general/gen002.svg */}
                                        <span className="svg-icon svg-icon-1">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="black" />
																						<path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
																			</span>
                                        <span className="menu-title">Web &amp; App History</span>
                                      </a>
                                    </li>
                                    <li className="menu-item py-1">
                                      <a href="#exec" className="menu-link px-3">
																			<span className="menu-icon">
																				{/* begin::Svg Icon | path: icons/duotune/communication/com010.svg */}
                                        <span className="svg-icon svg-icon-1">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="black" />
																						<path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
																			</span>
                                        <span className="menu-title">Activity and Timeline</span>
                                        <span className="menu-badge badge badge-light-danger fw-bold">new</span>
                                      </a>
                                    </li>
                                    <li className="menu-item py-1">
                                      <a href="#exec" className="menu-link px-3">
																			<span className="menu-icon">
																				{/* begin::Svg Icon | path: icons/duotune/files/fil017.svg */}
                                        <span className="svg-icon svg-icon-1">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<path opacity="0.3" d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z" fill="black" />
																						<path opacity="0.3" d="M13 14.4V9C13 8.4 12.6 8 12 8C11.4 8 11 8.4 11 9V14.4H13Z" fill="black" />
																						<path d="M10.4 3.60001L12 6H21C21.6 6 22 6.4 22 7V19C22 19.6 21.6 20 21 20H3C2.4 20 2 19.6 2 19V4C2 3.4 2.4 3 3 3H9.20001C9.70001 3 10.2 3.20001 10.4 3.60001ZM13 14.4V9C13 8.4 12.6 8 12 8C11.4 8 11 8.4 11 9V14.4H8L11.3 17.7C11.7 18.1 12.3 18.1 12.7 17.7L16 14.4H13Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
																			</span>
                                        <span className="menu-title">Business Features</span>
                                      </a>
                                    </li>
                                    <li className="menu-item py-1">
                                      <a href="#exec" className="menu-link px-3">
																			<span className="menu-icon">
																				{/* begin::Svg Icon | path: icons/duotune/abstract/abs021.svg */}
                                        <span className="svg-icon svg-icon-1">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM14.5 4.5C10.4 4.5 7 7.9 7 12C7 16.1 10.4 19.5 14.5 19.5C18.6 19.5 22 16.1 22 12C22 7.9 18.6 4.5 14.5 4.5Z" fill="black" />
																						<path opacity="0.3" d="M22 12C22 16.1 18.6 19.5 14.5 19.5C10.4 19.5 7 16.1 7 12C7 7.9 10.4 4.5 14.5 4.5C18.6 4.5 22 7.9 22 12ZM12 7C9.2 7 7 9.2 7 12C7 14.8 9.2 17 12 17C14.8 17 17 14.8 17 12C17 9.2 14.8 7 12 7Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
																			</span>
                                        <span className="menu-title">Accessibility Settings</span>
                                      </a>
                                    </li>
                                    <li className="menu-item py-1">
                                      <a href="#exec" className="menu-link px-3">
																			<span className="menu-icon">
																				{/* begin::Svg Icon | path: icons/duotune/abstract/abs038.svg */}
                                        <span className="svg-icon svg-icon-1">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<path d="M12.0444 17.9444V12.1444L17.0444 15.0444C18.6444 15.9444 19.1445 18.0444 18.2445 19.6444C17.3445 21.2444 15.2445 21.7444 13.6445 20.8444C12.6445 20.2444 12.0444 19.1444 12.0444 17.9444ZM7.04445 15.0444L12.0444 12.1444L7.04445 9.24445C5.44445 8.34445 3.44444 8.84445 2.44444 10.4444C1.54444 12.0444 2.04445 14.0444 3.64445 15.0444C4.74445 15.6444 6.04445 15.6444 7.04445 15.0444ZM12.0444 6.34444V12.1444L17.0444 9.24445C18.6444 8.34445 19.1445 6.24444 18.2445 4.64444C17.3445 3.04444 15.2445 2.54445 13.6445 3.44445C12.6445 4.04445 12.0444 5.14444 12.0444 6.34444Z" fill="black" />
																						<path opacity="0.3" d="M7.04443 9.24445C6.04443 8.64445 5.34442 7.54444 5.34442 6.34444C5.34442 4.54444 6.84444 3.04443 8.64444 3.04443C10.4444 3.04443 11.9444 4.54444 11.9444 6.34444V12.1444L7.04443 9.24445ZM17.0444 15.0444C18.0444 15.6444 19.3444 15.6444 20.3444 15.0444C21.9444 14.1444 22.4444 12.0444 21.5444 10.4444C20.6444 8.84444 18.5444 8.34445 16.9444 9.24445L11.9444 12.1444L17.0444 15.0444ZM7.04443 15.0444C6.04443 15.6444 5.34442 16.7444 5.34442 17.9444C5.34442 19.7444 6.84444 21.2444 8.64444 21.2444C10.4444 21.2444 11.9444 19.7444 11.9444 17.9444V12.1444L7.04443 15.0444Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
																			</span>
                                        <span className="menu-title">Data &amp; Personalisation</span>
                                      </a>
                                    </li>
                                    <li className="menu-item py-1">
                                      <a href="#exec" className="menu-link px-3">
																			<span className="menu-icon">
																				{/* begin::Svg Icon | path: icons/duotune/general/gen007.svg */}
                                        <span className="svg-icon svg-icon-1">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<path opacity="0.3" d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z" fill="black" />
																						<path d="M19 15V18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V15C6.1 15 7 14.1 7 13V10C7 7.6 8.7 5.6 11 5.1V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V5.1C15.3 5.6 17 7.6 17 10V13C17 14.1 17.9 15 19 15ZM11 10C11 9.4 11.4 9 12 9C12.6 9 13 8.6 13 8C13 7.4 12.6 7 12 7C10.3 7 9 8.3 9 10C9 10.6 9.4 11 10 11C10.6 11 11 10.6 11 10Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
																			</span>
                                        <span className="menu-title">General Preference</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                {/* end::Tab Pane */}
                                {/* begin::Tab Pane */}
                                <div className="tab-pane" id="kt_dropdown_2_tab_2">
                                  <ul className="menu menu-custom menu-column menu-rounded menu-title-gray-600 menu-icon-muted menu-hover-bg-light-primary menu-active-bg-light-primary fw-bold">
                                    <li className="menu-item py-1">
                                      <a href="#exec" className="menu-link active px-3">
																			<span className="menu-icon">
																				{/* begin::Svg Icon | path: icons/duotune/communication/com010.svg */}
                                        <span className="svg-icon svg-icon-1">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<path d="M6 8.725C6 8.125 6.4 7.725 7 7.725H14L18 11.725V12.925L22 9.725L12.6 2.225C12.2 1.925 11.7 1.925 11.4 2.225L2 9.725L6 12.925V8.725Z" fill="black" />
																						<path opacity="0.3" d="M22 9.72498V20.725C22 21.325 21.6 21.725 21 21.725H3C2.4 21.725 2 21.325 2 20.725V9.72498L11.4 17.225C11.8 17.525 12.3 17.525 12.6 17.225L22 9.72498ZM15 11.725H18L14 7.72498V10.725C14 11.325 14.4 11.725 15 11.725Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
																			</span>
                                        <span className="menu-title">Activity and Timeline</span>
                                        <span className="menu-badge badge badge-danger fw-bold">new</span>
                                      </a>
                                    </li>
                                    <li className="menu-item py-1">
                                      <a href="#exec" className="menu-link px-3">
																			<span className="menu-icon">
																				{/* begin::Svg Icon | path: icons/duotune/files/fil017.svg */}
                                        <span className="svg-icon svg-icon-1">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<path opacity="0.3" d="M10 4H21C21.6 4 22 4.4 22 5V7H10V4Z" fill="black" />
																						<path opacity="0.3" d="M13 14.4V9C13 8.4 12.6 8 12 8C11.4 8 11 8.4 11 9V14.4H13Z" fill="black" />
																						<path d="M10.4 3.60001L12 6H21C21.6 6 22 6.4 22 7V19C22 19.6 21.6 20 21 20H3C2.4 20 2 19.6 2 19V4C2 3.4 2.4 3 3 3H9.20001C9.70001 3 10.2 3.20001 10.4 3.60001ZM13 14.4V9C13 8.4 12.6 8 12 8C11.4 8 11 8.4 11 9V14.4H8L11.3 17.7C11.7 18.1 12.3 18.1 12.7 17.7L16 14.4H13Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
																			</span>
                                        <span className="menu-title">Business Features</span>
                                      </a>
                                    </li>
                                    <li className="menu-item py-1">
                                      <a href="#exec" className="menu-link px-3">
																			<span className="menu-icon">
																				{/* begin::Svg Icon | path: icons/duotune/abstract/abs021.svg */}
                                        <span className="svg-icon svg-icon-1">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<path d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM14.5 4.5C10.4 4.5 7 7.9 7 12C7 16.1 10.4 19.5 14.5 19.5C18.6 19.5 22 16.1 22 12C22 7.9 18.6 4.5 14.5 4.5Z" fill="black" />
																						<path opacity="0.3" d="M22 12C22 16.1 18.6 19.5 14.5 19.5C10.4 19.5 7 16.1 7 12C7 7.9 10.4 4.5 14.5 4.5C18.6 4.5 22 7.9 22 12ZM12 7C9.2 7 7 9.2 7 12C7 14.8 9.2 17 12 17C14.8 17 17 14.8 17 12C17 9.2 14.8 7 12 7Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
																			</span>
                                        <span className="menu-title">Accessibility Settings</span>
                                      </a>
                                    </li>
                                    <li className="menu-item py-1">
                                      <a href="#exec" className="menu-link px-3">
																			<span className="menu-icon">
																				{/* begin::Svg Icon | path: icons/duotune/abstract/abs038.svg */}
                                        <span className="svg-icon svg-icon-1">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<path d="M12.0444 17.9444V12.1444L17.0444 15.0444C18.6444 15.9444 19.1445 18.0444 18.2445 19.6444C17.3445 21.2444 15.2445 21.7444 13.6445 20.8444C12.6445 20.2444 12.0444 19.1444 12.0444 17.9444ZM7.04445 15.0444L12.0444 12.1444L7.04445 9.24445C5.44445 8.34445 3.44444 8.84445 2.44444 10.4444C1.54444 12.0444 2.04445 14.0444 3.64445 15.0444C4.74445 15.6444 6.04445 15.6444 7.04445 15.0444ZM12.0444 6.34444V12.1444L17.0444 9.24445C18.6444 8.34445 19.1445 6.24444 18.2445 4.64444C17.3445 3.04444 15.2445 2.54445 13.6445 3.44445C12.6445 4.04445 12.0444 5.14444 12.0444 6.34444Z" fill="black" />
																						<path opacity="0.3" d="M7.04443 9.24445C6.04443 8.64445 5.34442 7.54444 5.34442 6.34444C5.34442 4.54444 6.84444 3.04443 8.64444 3.04443C10.4444 3.04443 11.9444 4.54444 11.9444 6.34444V12.1444L7.04443 9.24445ZM17.0444 15.0444C18.0444 15.6444 19.3444 15.6444 20.3444 15.0444C21.9444 14.1444 22.4444 12.0444 21.5444 10.4444C20.6444 8.84444 18.5444 8.34445 16.9444 9.24445L11.9444 12.1444L17.0444 15.0444ZM7.04443 15.0444C6.04443 15.6444 5.34442 16.7444 5.34442 17.9444C5.34442 19.7444 6.84444 21.2444 8.64444 21.2444C10.4444 21.2444 11.9444 19.7444 11.9444 17.9444V12.1444L7.04443 15.0444Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
																			</span>
                                        <span className="menu-title">Data &amp; Personalisation</span>
                                      </a>
                                    </li>
                                    <li className="menu-item py-1">
                                      <a href="#exec" className="menu-link px-3">
																			<span className="menu-icon">
																				{/* begin::Svg Icon | path: icons/duotune/general/gen007.svg */}
                                        <span className="svg-icon svg-icon-1">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<path opacity="0.3" d="M12 22C13.6569 22 15 20.6569 15 19C15 17.3431 13.6569 16 12 16C10.3431 16 9 17.3431 9 19C9 20.6569 10.3431 22 12 22Z" fill="black" />
																						<path d="M19 15V18C19 18.6 18.6 19 18 19H6C5.4 19 5 18.6 5 18V15C6.1 15 7 14.1 7 13V10C7 7.6 8.7 5.6 11 5.1V3C11 2.4 11.4 2 12 2C12.6 2 13 2.4 13 3V5.1C15.3 5.6 17 7.6 17 10V13C17 14.1 17.9 15 19 15ZM11 10C11 9.4 11.4 9 12 9C12.6 9 13 8.6 13 8C13 7.4 12.6 7 12 7C10.3 7 9 8.3 9 10C9 10.6 9.4 11 10 11C10.6 11 11 10.6 11 10Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
																			</span>
                                        <span className="menu-title">General Preference</span>
                                      </a>
                                    </li>
                                    <li className="menu-item py-1">
                                      <a href="#exec" className="menu-link px-3">
																			<span className="menu-icon">
																				{/* begin::Svg Icon | path: icons/duotune/general/gen002.svg */}
                                        <span className="svg-icon svg-icon-1">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<path opacity="0.3" d="M4.05424 15.1982C8.34524 7.76818 13.5782 3.26318 20.9282 2.01418C21.0729 1.98837 21.2216 1.99789 21.3618 2.04193C21.502 2.08597 21.6294 2.16323 21.7333 2.26712C21.8372 2.37101 21.9144 2.49846 21.9585 2.63863C22.0025 2.7788 22.012 2.92754 21.9862 3.07218C20.7372 10.4222 16.2322 15.6552 8.80224 19.9462L4.05424 15.1982ZM3.81924 17.3372L2.63324 20.4482C2.58427 20.5765 2.5735 20.7163 2.6022 20.8507C2.63091 20.9851 2.69788 21.1082 2.79503 21.2054C2.89218 21.3025 3.01536 21.3695 3.14972 21.3982C3.28408 21.4269 3.42387 21.4161 3.55224 21.3672L6.66524 20.1802L3.81924 17.3372ZM16.5002 5.99818C16.2036 5.99818 15.9136 6.08615 15.6669 6.25097C15.4202 6.41579 15.228 6.65006 15.1144 6.92415C15.0009 7.19824 14.9712 7.49984 15.0291 7.79081C15.0869 8.08178 15.2298 8.34906 15.4396 8.55884C15.6494 8.76862 15.9166 8.91148 16.2076 8.96935C16.4986 9.02723 16.8002 8.99753 17.0743 8.884C17.3484 8.77046 17.5826 8.5782 17.7474 8.33153C17.9123 8.08486 18.0002 7.79485 18.0002 7.49818C18.0002 7.10035 17.8422 6.71882 17.5609 6.43752C17.2796 6.15621 16.8981 5.99818 16.5002 5.99818Z" fill="black" />
																						<path d="M4.05423 15.1982L2.24723 13.3912C2.15505 13.299 2.08547 13.1867 2.04395 13.0632C2.00243 12.9396 1.9901 12.8081 2.00793 12.679C2.02575 12.5498 2.07325 12.4266 2.14669 12.3189C2.22013 12.2112 2.31752 12.1219 2.43123 12.0582L9.15323 8.28918C7.17353 10.3717 5.4607 12.6926 4.05423 15.1982ZM8.80023 19.9442L10.6072 21.7512C10.6994 21.8434 10.8117 21.9129 10.9352 21.9545C11.0588 21.996 11.1903 22.0083 11.3195 21.9905C11.4486 21.9727 11.5718 21.9252 11.6795 21.8517C11.7872 21.7783 11.8765 21.6809 11.9402 21.5672L15.7092 14.8442C13.6269 16.8245 11.3061 18.5377 8.80023 19.9442ZM7.04023 18.1832L12.5832 12.6402C12.7381 12.4759 12.8228 12.2577 12.8195 12.032C12.8161 11.8063 12.725 11.5907 12.5653 11.4311C12.4057 11.2714 12.1901 11.1803 11.9644 11.1769C11.7387 11.1736 11.5205 11.2583 11.3562 11.4132L5.81323 16.9562L7.04023 18.1832Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
																			</span>
                                        <span className="menu-title">Web &amp; App History</span>
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                {/* end::Tab Pane */}
                              </div>
                              {/* end::Tab Content */}
                            </div>
                            {/* end::Form */}
                            {/* end::Dropdown */}
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body pt-0">
                          <div className="d-flex flex-wrap flex-xxl-nowrap justify-content-center justify-content-md-start pt-4">
                            {/* begin::Nav */}
                            <div className="me-sm-10 me-0">
                              <ul className="nav flex-column nav-pills nav-pills-custom">
                                <li className="nav-item mb-3">
                                  <a className="nav-link active w-225px h-70px" data-bs-toggle="pill" id="kt_stats_widget_2_tab_1" href="#kt_stats_widget_2_tab_1_content">
                                    <div className="nav-icon me-3">
                                      <img alt="" src="/assets/media/svg/logo/gray/aven.svg" className="default" />
                                      <img alt="" src="/assets/media/svg/logo/colored/aven.svg" className="active" />
                                    </div>
                                    <div className="ps-1">
                                      <span className="nav-text text-gray-600 fw-bolder fs-6">Man&amp;Flower SaaS</span>
                                      <span className="text-muted fw-bold d-block pt-1">HR Solutions</span>
                                    </div>
                                  </a>
                                </li>
                                <li className="nav-item mb-3">
                                  <a className="nav-link w-225px h-70px" data-bs-toggle="pill" id="kt_stats_widget_2_tab_2" href="#kt_stats_widget_2_tab_2_content">
                                    <div className="nav-icon me-3">
                                      <img alt="" src="/assets/media/svg/logo/gray/tower.svg" className="default" />
                                      <img alt="" src="/assets/media/svg/logo/colored/tower.svg" className="active" />
                                    </div>
                                    <div className="ps-1">
                                      <span className="nav-text text-gray-600 fw-bolder fs-6">Building Studio</span>
                                      <span className="text-muted fw-bold d-block pt-1">HR Solutions</span>
                                    </div>
                                  </a>
                                </li>
                                <li className="nav-item mb-3">
                                  <a className="nav-link w-225px h-70px" data-bs-toggle="pill" id="kt_stats_widget_2_tab_3" href="#kt_stats_widget_2_tab_3_content">
                                    <div className="nav-icon me-3">
                                      <img alt="" src="/assets/media/svg/logo/gray/fox-hub-2.svg" className="default" />
                                      <img alt="" src="/assets/media/svg/logo/colored/fox-hub-2.svg" className="active" />
                                    </div>
                                    <div className="ps-1">
                                      <span className="nav-text text-gray-600 fw-bolder fs-6">Foxy Solutions</span>
                                      <span className="text-muted fw-bold d-block pt-1">HR Solutions</span>
                                    </div>
                                  </a>
                                </li>
                                <li className="nav-item mb-5">
                                  <a className="nav-link w-225px h-70px" data-bs-toggle="pill" id="kt_stats_widget_2_tab_4" href="#kt_stats_widget_2_tab_4_content">
                                    <div className="nav-icon me-3">
                                      <img alt="" src="/assets/media/svg/logo/gray/kanba.svg" className="default" />
                                      <img alt="" src="/assets/media/svg/logo/colored/kanba.svg" className="active" />
                                    </div>
                                    <div className="ps-1">
                                      <span className="nav-text text-gray-600 fw-bolder fs-6">MyStreams</span>
                                      <span className="text-muted fw-bold d-block pt-1">HR Solutions</span>
                                    </div>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            {/* end::Nav */}
                            {/* begin::Tab Content */}
                            <div className="tab-content flex-grow-1">
                              {/* begin::Tab Pane 1 */}
                              <div className="tab-pane fade show active" id="kt_stats_widget_2_tab_1_content">
                                {/* begin::Content */}
                                <div className="d-flex justify-content-center mb-10">
                                  {/* begin::Item */}
                                  <div className="px-10">
                                    <span className="text-muted fw-bold fs-7">Sale</span>
                                    <span className="text-gray-800 fw-bolder fs-3 d-block">$650</span>
                                  </div>
                                  {/* end::Item */}
                                  {/* begin::Item */}
                                  <div className="px-10">
                                    <span className="text-muted fw-bold fs-7">Commission</span>
                                    <span className="text-gray-800 fw-bolder fs-3 d-block">$2,040</span>
                                  </div>
                                  {/* end::Item */}
                                  {/* begin::Item */}
                                  <div className="px-10">
                                    <span className="text-muted fw-bold fs-7">Refers</span>
                                    <span className="text-gray-800 fw-bolder fs-3 d-block">8,926</span>
                                  </div>
                                  {/* end::Item */}
                                </div>
                                {/* end::Content */}
                                {/* begin::Chart */}
                                <div id="kt_stats_widget_2_chart_1" style={{height: "250px"}}></div>
                                {/* end::Chart */}
                              </div>
                              {/* end::Tab Pane 1 */}
                              {/* begin::Tab Pane 2 */}
                              <div className="tab-pane fade" id="kt_stats_widget_2_tab_2_content">
                                {/* begin::Content */}
                                <div className="d-flex justify-content-center mb-10">
                                  {/* begin::Item */}
                                  <div className="px-10">
                                    <span className="text-muted fw-bold fs-7">Sale</span>
                                    <span className="text-gray-800 fw-bolder fs-3 d-block">$1250</span>
                                  </div>
                                  {/* end::Item */}
                                  {/* begin::Item */}
                                  <div className="px-10">
                                    <span className="text-muted fw-bold fs-7">Commission</span>
                                    <span className="text-gray-800 fw-bolder fs-3 d-block">$5,000</span>
                                  </div>
                                  {/* end::Item */}
                                  {/* begin::Item */}
                                  <div className="px-10">
                                    <span className="text-muted fw-bold fs-7">Refers</span>
                                    <span className="text-gray-800 fw-bolder fs-3 d-block">4,926</span>
                                  </div>
                                  {/* end::Item */}
                                </div>
                                {/* end::Content */}
                                {/* begin::Chart */}
                                <div id="kt_stats_widget_2_chart_2" style={{height: "250px"}}></div>
                                {/* end::Chart */}
                              </div>
                              {/* end::Tab Pane 2 */}
                              {/* begin::Tab Pane 3 */}
                              <div className="tab-pane fade" id="kt_stats_widget_2_tab_3_content">
                                {/* begin::Content */}
                                <div className="d-flex justify-content-center mb-10">
                                  {/* begin::Item */}
                                  <div className="px-10">
                                    <span className="text-muted fw-bold fs-7">Sale</span>
                                    <span className="text-gray-800 fw-bolder fs-3 d-block">$350</span>
                                  </div>
                                  {/* end::Item */}
                                  {/* begin::Item */}
                                  <div className="px-10">
                                    <span className="text-muted fw-bold fs-7">Comission</span>
                                    <span className="text-gray-800 fw-bolder fs-3 d-block">$1,200</span>
                                  </div>
                                  {/* end::Item */}
                                  {/* begin::Item */}
                                  <div className="px-10">
                                    <span className="text-muted fw-bold fs-7">Refers</span>
                                    <span className="text-gray-800 fw-bolder fs-3 d-block">5,500</span>
                                  </div>
                                  {/* end::Item */}
                                </div>
                                {/* end::Content */}
                                {/* begin::Chart */}
                                <div id="kt_stats_widget_2_chart_3" style={{height: "250px"}}></div>
                                {/* end::Chart */}
                              </div>
                              {/* end::Tab Pane 3 */}
                              {/* begin::Tab Pane 4 */}
                              <div className="tab-pane fade" id="kt_stats_widget_2_tab_4_content">
                                {/* begin::Content */}
                                <div className="d-flex justify-content-center mb-10">
                                  {/* begin::Item */}
                                  <div className="px-10">
                                    <span className="text-muted fw-bold fs-7">Sale</span>
                                    <span className="text-gray-800 fw-bolder fs-3 d-block">$450</span>
                                  </div>
                                  {/* end::Item */}
                                  {/* begin::Item */}
                                  <div className="px-10">
                                    <span className="text-muted fw-bold fs-7">Comission</span>
                                    <span className="text-gray-800 fw-bolder fs-3 d-block">$6,500</span>
                                  </div>
                                  {/* end::Item */}
                                  {/* begin::Item */}
                                  <div className="px-10">
                                    <span className="text-muted fw-bold fs-7">Refers</span>
                                    <span className="text-gray-800 fw-bolder fs-3 d-block">500</span>
                                  </div>
                                  {/* end::Item */}
                                </div>
                                {/* end::Content */}
                                {/* begin::Chart */}
                                <div id="kt_stats_widget_2_chart_4" style={{height: "250px"}}></div>
                                {/* end::Chart */}
                              </div>
                              {/* end::Tab Pane 4 */}
                            </div>
                            {/* end::Tab Content */}
                          </div>
                        </div>
                        {/* end: Card Body */}
                      </div>
                      {/* end::Stats Widget 2 */}
                    </div>
                  </div>
                  {/* end::Row */}
                  {/* begin::Row */}
                  <div className="row g-0 g-xl-5 g-xxl-8">
                    <div className="col-xl-4">
                      {/* begin::List Widget 1 */}
                      <div className="card card-stretch mb-5 mb-xxl-8">
                        {/* begin::Header */}
                        <div className="card-header align-items-center border-0 mt-5">
                          <h3 className="card-title align-items-start flex-column">
                            <span className="fw-bolder text-dark fs-3">Timeline</span>
                            <span className="text-muted mt-2 fw-bold fs-6">Updates &amp; notifications</span>
                          </h3>
                          <div className="card-toolbar">
                            {/* begin::Dropdown */}
                            <button type="button" className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <span className="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Menu */}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                              <div className="menu-item px-3">
                                <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Manage</div>
                              </div>
                              <div className="separator mb-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add User</a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add Role</a>
                              </div>
                              <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start" data-kt-menu-flip="left-start, top">
                                <a href="#exec" className="menu-link px-3">
                                  <span className="menu-title">Add Group</span>
                                  <span className="menu-arrow"></span>
                                </a>
                                <div className="menu-sub menu-sub-dropdown w-200px py-4">
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Admin Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Staff Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Member Group</a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Reports</a>
                              </div>
                              <div className="separator mt-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <div className="menu-content px-3 py-3">
                                  <a className="btn btn-primary fw-bold btn-sm px-4" href="#exec">Create New</a>
                                </div>
                              </div>
                            </div>
                            {/* end::Menu */}
                            {/* end::Dropdown */}
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body pt-3">
                          {/* begin::Timeline */}
                          <div className="timeline-label">
                            {/* begin::Item */}
                            <div className="timeline-item">
                              {/* begin::Label */}
                              <div className="timeline-label fw-bolder text-gray-800 fs-6">08:42</div>
                              {/* end::Label */}
                              {/* begin::Badge */}
                              <div className="timeline-badge">
                                <i className="fa fa-genderless text-warning fs-1"></i>
                              </div>
                              {/* end::Badge */}
                              {/* begin::Text */}
                              <div className="fw-mormal timeline-content text-muted ps-3">Outlines keep you honest. And keep structure</div>
                              {/* end::Text */}
                            </div>
                            {/* end::Item */}
                            {/* begin::Item */}
                            <div className="timeline-item">
                              {/* begin::Label */}
                              <div className="timeline-label fw-bolder text-gray-800 fs-6">10:00</div>
                              {/* end::Label */}
                              {/* begin::Badge */}
                              <div className="timeline-badge">
                                <i className="fa fa-genderless text-success fs-1"></i>
                              </div>
                              {/* end::Badge */}
                              {/* begin::Content */}
                              <div className="timeline-content d-flex">
                                <span className="fw-bolder text-gray-800 ps-3">AEOL meeting</span>
                              </div>
                              {/* end::Content */}
                            </div>
                            {/* end::Item */}
                            {/* begin::Item */}
                            <div className="timeline-item">
                              {/* begin::Label */}
                              <div className="timeline-label fw-bolder text-gray-800 fs-6">14:37</div>
                              {/* end::Label */}
                              {/* begin::Badge */}
                              <div className="timeline-badge">
                                <i className="fa fa-genderless text-danger fs-1"></i>
                              </div>
                              {/* end::Badge */}
                              {/* begin::Desc */}
                              <div className="timeline-content fw-bolder text-gray-800 ps-3">Make deposit
                                <a href="#exec" className="text-primary">USD 700</a>. to ESL</div>
                              {/* end::Desc */}
                            </div>
                            {/* end::Item */}
                            {/* begin::Item */}
                            <div className="timeline-item">
                              {/* begin::Label */}
                              <div className="timeline-label fw-bolder text-gray-800 fs-6">16:50</div>
                              {/* end::Label */}
                              {/* begin::Badge */}
                              <div className="timeline-badge">
                                <i className="fa fa-genderless text-primary fs-1"></i>
                              </div>
                              {/* end::Badge */}
                              {/* begin::Text */}
                              <div className="timeline-content fw-mormal text-muted ps-3">Indulging in poorly driving and keep structure keep great</div>
                              {/* end::Text */}
                            </div>
                            {/* end::Item */}
                            {/* begin::Item */}
                            <div className="timeline-item">
                              {/* begin::Label */}
                              <div className="timeline-label fw-bolder text-gray-800 fs-6">21:03</div>
                              {/* end::Label */}
                              {/* begin::Badge */}
                              <div className="timeline-badge">
                                <i className="fa fa-genderless text-danger fs-1"></i>
                              </div>
                              {/* end::Badge */}
                              {/* begin::Desc */}
                              <div className="timeline-content fw-bold text-gray-800 ps-3">New order placed
                                <a href="#exec" className="text-primary">#XF-2356</a>.</div>
                              {/* end::Desc */}
                            </div>
                            {/* end::Item */}
                            {/* begin::Item */}
                            <div className="timeline-item">
                              {/* begin::Label */}
                              <div className="timeline-label fw-bolder text-gray-800 fs-6">16:50</div>
                              {/* end::Label */}
                              {/* begin::Badge */}
                              <div className="timeline-badge">
                                <i className="fa fa-genderless text-primary fs-1"></i>
                              </div>
                              {/* end::Badge */}
                              {/* begin::Text */}
                              <div className="timeline-content fw-mormal text-muted ps-3">Indulging in poorly driving and keep structure keep great</div>
                              {/* end::Text */}
                            </div>
                            {/* end::Item */}
                            {/* begin::Item */}
                            <div className="timeline-item">
                              {/* begin::Label */}
                              <div className="timeline-label fw-bolder text-gray-800 fs-6">21:03</div>
                              {/* end::Label */}
                              {/* begin::Badge */}
                              <div className="timeline-badge">
                                <i className="fa fa-genderless text-danger fs-1"></i>
                              </div>
                              {/* end::Badge */}
                              {/* begin::Desc */}
                              <div className="timeline-content fw-bold text-gray-800 ps-3">New order placed
                                <a href="#exec" className="text-primary">#XF-2356</a>.</div>
                              {/* end::Desc */}
                            </div>
                            {/* end::Item */}
                            {/* begin::Item */}
                            <div className="timeline-item">
                              {/* begin::Label */}
                              <div className="timeline-label fw-bolder text-gray-800 fs-6">10:30</div>
                              {/* end::Label */}
                              {/* begin::Badge */}
                              <div className="timeline-badge">
                                <i className="fa fa-genderless text-success fs-1"></i>
                              </div>
                              {/* end::Badge */}
                              {/* begin::Text */}
                              <div className="timeline-content fw-mormal text-muted ps-3">Finance KPI Mobile app launch preparion meeting</div>
                              {/* end::Text */}
                            </div>
                            {/* end::Item */}
                          </div>
                          {/* end::Timeline */}
                        </div>
                        {/* end: Card Body */}
                      </div>
                      {/* end::List Widget 1 */}
                    </div>
                    <div className="col-xl-8">
                      {/* begin::Table Widget 2 */}
                      <div className="card card-stretch mb-5 mb-xxl-8">
                        {/* begin::Header */}
                        <div className="card-header border-0 pt-5">
                          <h3 className="card-title align-items-start flex-column">
                            <span className="card-label fw-bolder text-dark fs-3">Achievement</span>
                            <span className="text-muted mt-2 fw-bold fs-6">890,344 Sales</span>
                          </h3>
                          <div className="card-toolbar">
                            <ul className="nav nav-pills nav-pills-sm nav-light">
                              <li className="nav-item">
                                <a className="nav-link btn btn-active-light btn-color-muted py-2 px-4 active fw-bolder me-2" data-bs-toggle="tab" href="#kt_tab_pane_2_1">Day</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder me-2" data-bs-toggle="tab" href="#kt_tab_pane_2_2">Week</a>
                              </li>
                              <li className="nav-item">
                                <a className="nav-link btn btn-active-light btn-color-muted py-2 px-4 fw-bolder" data-bs-toggle="tab" href="#kt_tab_pane_2_3">Month</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body pt-3 pb-0 mt-n3">
                          <div className="tab-content mt-4" id="myTabTables2">
                            {/* begin::Tap pane */}
                            <div className="tab-pane fade show active" id="kt_tab_pane_2_1" role="tabpanel" aria-labelledby="kt_tab_pane_2_1">
                              {/* begin::Table */}
                              <div className="table-responsive">
                                <table className="table table-borderless align-middle">
                                  <thead>
                                  <tr>
                                    <th className="p-0 w-50px"></th>
                                    <th className="p-0 min-w-150px"></th>
                                    <th className="p-0 min-w-120px"></th>
                                    <th className="p-0 min-w-70px"></th>
                                    <th className="p-0 min-w-70px"></th>
                                    <th className="p-0 min-w-50px"></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                    <td className="px-0 py-3">
                                      <div className="symbol symbol-55px mt-1 me-5">
																				<span className="symbol-label bg-light-primary align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/001-boy.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Brad Simmons</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML, CSS Coding</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$1,200,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-primary">+28%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-0 py-3">
                                      <div className="symbol symbol-55px mt-1">
																				<span className="symbol-label bg-light-danger align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/018-girl-9.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Jessie Clarcson</a>
                                      <span className="text-muted fw-bold d-block mt-1">Most Successful</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$1,200,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-danger">+52%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-0 py-3">
                                      <div className="symbol symbol-55px mt-1">
																				<span className="symbol-label bg-light-warning align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/047-girl-25.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Lebron Wayde</a>
                                      <span className="text-muted fw-bold d-block mt-1">Awesome Users</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$3,400,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-warning">+34%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-0 py-3">
                                      <div className="symbol symbol-55px mt-1">
																				<span className="symbol-label bg-light-success align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/043-boy-18.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Kevin Leonard</a>
                                      <span className="text-muted fw-bold d-block mt-1">Awesome Userss</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$35,600,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-success">+230%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="px-0 py-3">
                                      <div className="symbol symbol-55px mt-1">
																				<span className="symbol-label bg-light-info align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/024-boy-9.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Randy Trent</a>
                                      <span className="text-muted fw-bold d-block mt-1">Business Analyst</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$45,200,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-info">+340%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* end::Table */}
                            </div>
                            {/* end::Tap pane */}
                            {/* begin::Tap pane */}
                            <div className="tab-pane fade" id="kt_tab_pane_2_2" role="tabpanel" aria-labelledby="kt_tab_pane_2_2">
                              {/* begin::Table */}
                              <div className="table-responsive">
                                <table className="table table-borderless align-middle">
                                  <thead>
                                  <tr>
                                    <th className="p-0 w-50px"></th>
                                    <th className="p-0 min-w-150px"></th>
                                    <th className="p-0 min-w-120px"></th>
                                    <th className="p-0 min-w-70px"></th>
                                    <th className="p-0 min-w-70px"></th>
                                    <th className="p-0 min-w-50px"></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                    <td className="p-0 py-3">
                                      <div className="symbol symbol-55px mt-1 me-5">
																				<span className="symbol-label bg-light-warning align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/047-girl-25.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Lebron Wayde</a>
                                      <span className="text-muted fw-bold d-block mt-1">Awesome Users</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$3,400,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-warning">+34%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-0 py-3">
                                      <div className="symbol symbol-55px mt-1">
																				<span className="symbol-label bg-light-success align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/043-boy-18.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Kevin Leonard</a>
                                      <span className="text-muted fw-bold d-block mt-1">Awesome Userss</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$35,600,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-success">+230%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-0 py-3">
                                      <div className="symbol symbol-55px mt-1">
																				<span className="symbol-label bg-light-info align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/024-boy-9.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Randy Trent</a>
                                      <span className="text-muted fw-bold d-block mt-1">Business Analyst</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$45,200,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-info">+340%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-0 py-3">
                                      <div className="symbol symbol-55px me-5 mt-1">
																				<span className="symbol-label bg-light-primary align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/001-boy.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Brad Simmons</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML, CSS Coding</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$1,200,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-primary">+28%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-0 py-3">
                                      <div className="symbol symbol-55px mt-1">
																				<span className="symbol-label bg-light-danger align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/018-girl-9.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Jessie Clarcson</a>
                                      <span className="text-muted fw-bold d-block mt-1">Most Successful</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$1,200,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-danger">+52%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* end::Table */}
                            </div>
                            {/* end::Tap pane */}
                            {/* begin::Tap pane */}
                            <div className="tab-pane fade" id="kt_tab_pane_2_3" role="tabpanel" aria-labelledby="kt_tab_pane_2_3">
                              {/* begin::Table */}
                              <div className="table-responsive">
                                <table className="table table-borderless align-middle">
                                  <thead>
                                  <tr>
                                    <th className="p-0 w-50px"></th>
                                    <th className="p-0 min-w-150px"></th>
                                    <th className="p-0 min-w-120px"></th>
                                    <th className="p-0 min-w-70px"></th>
                                    <th className="p-0 min-w-70px"></th>
                                    <th className="p-0 min-w-50px"></th>
                                  </tr>
                                  </thead>
                                  <tbody>
                                  <tr>
                                    <td className="p-0 pb-3 pt-1">
                                      <div className="symbol symbol-55px mt-3 me-5">
																				<span className="symbol-label bg-light-danger align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/018-girl-9.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Jessie Clarcson</a>
                                      <span className="text-muted fw-bold d-block mt-1">Most Successful</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$1,200,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-danger">+52%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-0 pb-3 pt-1">
                                      <div className="symbol symbol-55px mt-3">
																				<span className="symbol-label bg-light-warning align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/047-girl-25.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Lebron Wayde</a>
                                      <span className="text-muted fw-bold d-block mt-1">Awesome Users</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$3,400,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-warning">+34%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-0 pb-3 pt-1">
                                      <div className="symbol symbol-55px mt-3">
																				<span className="symbol-label bg-light-success align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/043-boy-18.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Kevin Leonard</a>
                                      <span className="text-muted fw-bold d-block mt-1">Awesome Userss</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$35,600,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-success">+230%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-0 pb-3 pt-1">
                                      <div className="symbol symbol-55px me-5 mt-3">
																				<span className="symbol-label bg-light-primary align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/001-boy.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Brad Simmons</a>
                                      <span className="text-muted fw-bold d-block mt-1">HTML, CSS Coding</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$1,200,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-primary">+28%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td className="p-0 pb-3 pt-1">
                                      <div className="symbol symbol-55px mt-3">
																				<span className="symbol-label bg-light-info align-items-end">
																					<img alt="Logo" src="/assets/media/svg/avatars/024-boy-9.svg" className="mh-40px" />
																				</span>
                                      </div>
                                    </td>
                                    <td className="px-0">
                                      <a href="#exec" className="text-gray-800 fw-bolder text-hover-primary fs-6">Randy Trent</a>
                                      <span className="text-muted fw-bold d-block mt-1">Business Analyst</span>
                                    </td>
                                    <td></td>
                                    <td className="text-end">
                                      <span className="text-gray-800 fw-bolder d-block fs-6">$45,200,000</span>
                                      <span className="text-muted fw-bold d-block mt-1 fs-7">Paid</span>
                                    </td>
                                    <td className="text-end">
                                      <span className="fw-bolder text-info">+340%</span>
                                    </td>
                                    <td className="text-end pe-0">
                                      <a href="#exec" className="btn btn-icon btn-bg-light btn-active-primary btn-sm">
                                        {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                        <span className="svg-icon svg-icon-4">
																					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																						<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																						<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																					</svg>
																				</span>
                                        {/* end::Svg Icon */}
                                      </a>
                                    </td>
                                  </tr>
                                  </tbody>
                                </table>
                              </div>
                              {/* end::Table */}
                            </div>
                            {/* end::Tap pane */}
                          </div>
                        </div>
                        {/* end::Body */}
                      </div>
                      {/* end::Table Widget 2 */}
                    </div>
                  </div>
                  {/* end::Row */}
                  {/* begin::Modals */}
                  {/* begin::Modal - Create App */}
                  <div className="modal fade" id="kt_modal_create_app" tabIndex="-1" aria-hidden="true">
                    {/* begin::Modal dialog */}
                    <div className="modal-dialog modal-dialog-centered mw-900px">
                      {/* begin::Modal content */}
                      <div className="modal-content">
                        {/* begin::Modal header */}
                        <div className="modal-header">
                          {/* begin::Modal title */}
                          <h2>Create App</h2>
                          {/* end::Modal title */}
                          {/* begin::Close */}
                          <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
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
                        {/* end::Modal header */}
                        {/* begin::Modal body */}
                        <div className="modal-body py-lg-10 px-lg-10">
                          {/* begin::Stepper */}
                          <div className="stepper stepper-pills stepper-column d-flex flex-column flex-xl-row flex-row-fluid" id="kt_modal_create_app_stepper">
                            {/* begin::Aside */}
                            <div className="d-flex justify-content-center justify-content-xl-start flex-row-auto w-100 w-xl-300px">
                              {/* begin::Nav */}
                              <div className="stepper-nav ps-lg-10">
                                {/* begin::Step 1 */}
                                <div className="stepper-item current" data-kt-stepper-element="nav">
                                  {/* begin::Line */}
                                  <div className="stepper-line w-40px"></div>
                                  {/* end::Line */}
                                  {/* begin::Icon */}
                                  <div className="stepper-icon w-40px h-40px">
                                    <i className="stepper-check fas fa-check"></i>
                                    <span className="stepper-number">1</span>
                                  </div>
                                  {/* end::Icon */}
                                  {/* begin::Label */}
                                  <div className="stepper-label">
                                    <h3 className="stepper-title">Details</h3>
                                    <div className="stepper-desc">Name your App</div>
                                  </div>
                                  {/* end::Label */}
                                </div>
                                {/* end::Step 1 */}
                                {/* begin::Step 2 */}
                                <div className="stepper-item" data-kt-stepper-element="nav">
                                  {/* begin::Line */}
                                  <div className="stepper-line w-40px"></div>
                                  {/* end::Line */}
                                  {/* begin::Icon */}
                                  <div className="stepper-icon w-40px h-40px">
                                    <i className="stepper-check fas fa-check"></i>
                                    <span className="stepper-number">2</span>
                                  </div>
                                  {/* begin::Icon */}
                                  {/* begin::Label */}
                                  <div className="stepper-label">
                                    <h3 className="stepper-title">Frameworks</h3>
                                    <div className="stepper-desc">Define your app framework</div>
                                  </div>
                                  {/* begin::Label */}
                                </div>
                                {/* end::Step 2 */}
                                {/* begin::Step 3 */}
                                <div className="stepper-item" data-kt-stepper-element="nav">
                                  {/* begin::Line */}
                                  <div className="stepper-line w-40px"></div>
                                  {/* end::Line */}
                                  {/* begin::Icon */}
                                  <div className="stepper-icon w-40px h-40px">
                                    <i className="stepper-check fas fa-check"></i>
                                    <span className="stepper-number">3</span>
                                  </div>
                                  {/* end::Icon */}
                                  {/* begin::Label */}
                                  <div className="stepper-label">
                                    <h3 className="stepper-title">Database</h3>
                                    <div className="stepper-desc">Select the app database type</div>
                                  </div>
                                  {/* end::Label */}
                                </div>
                                {/* end::Step 3 */}
                                {/* begin::Step 4 */}
                                <div className="stepper-item" data-kt-stepper-element="nav">
                                  {/* begin::Line */}
                                  <div className="stepper-line w-40px"></div>
                                  {/* end::Line */}
                                  {/* begin::Icon */}
                                  <div className="stepper-icon w-40px h-40px">
                                    <i className="stepper-check fas fa-check"></i>
                                    <span className="stepper-number">4</span>
                                  </div>
                                  {/* end::Icon */}
                                  {/* begin::Label */}
                                  <div className="stepper-label">
                                    <h3 className="stepper-title">Billing</h3>
                                    <div className="stepper-desc">Provide payment details</div>
                                  </div>
                                  {/* end::Label */}
                                </div>
                                {/* end::Step 4 */}
                                {/* begin::Step 5 */}
                                <div className="stepper-item" data-kt-stepper-element="nav">
                                  {/* begin::Line */}
                                  <div className="stepper-line w-40px"></div>
                                  {/* end::Line */}
                                  {/* begin::Icon */}
                                  <div className="stepper-icon w-40px h-40px">
                                    <i className="stepper-check fas fa-check"></i>
                                    <span className="stepper-number">5</span>
                                  </div>
                                  {/* end::Icon */}
                                  {/* begin::Label */}
                                  <div className="stepper-label">
                                    <h3 className="stepper-title">Completed</h3>
                                    <div className="stepper-desc">Review and Submit</div>
                                  </div>
                                  {/* end::Label */}
                                </div>
                                {/* end::Step 5 */}
                              </div>
                              {/* end::Nav */}
                            </div>
                            {/* begin::Aside */}
                            {/* begin::Content */}
                            <div className="flex-row-fluid py-lg-5 px-lg-15">
                              {/* begin::Form */}
                              <form className="form" noValidate="noValidate" id="kt_modal_create_app_form">
                                {/* begin::Step 1 */}
                                <div className="current" data-kt-stepper-element="content">
                                  <div className="w-100">
                                    {/* begin::Input group */}
                                    <div className="fv-row mb-10">
                                      {/* begin::Label */}
                                      <label className="d-flex align-items-center fs-5 fw-bold mb-2">
                                        <span className="required">App Name</span>
                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your unique app name"></i>
                                      </label>
                                      {/* end::Label */}
                                      {/* begin::Input */}
                                      <InputText className="form-control form-control-lg form-control-solid" name="name" placeholder="" defaultValue="" />
                                      {/* end::Input */}
                                    </div>
                                    {/* end::Input group */}
                                    {/* begin::Input group */}
                                    <div className="fv-row">
                                      {/* begin::Label */}
                                      <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                                        <span className="required">Category</span>
                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select your app category"></i>
                                      </label>
                                      {/* end::Label */}
                                      {/* begin:Options */}
                                      <div className="fv-row">
                                        {/* begin:Option */}
                                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                                          {/* begin:Label */}
                                          <span className="d-flex align-items-center me-2">
																					{/* begin:Icon */}
                                            <span className="symbol symbol-50px me-6">
																						<span className="symbol-label bg-light-primary">
																							{/* begin::Svg Icon | path: icons/duotune/maps/map004.svg */}
                                              <span className="svg-icon svg-icon-1 svg-icon-primary">
																								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																									<path opacity="0.3" d="M18.4 5.59998C21.9 9.09998 21.9 14.8 18.4 18.3C14.9 21.8 9.2 21.8 5.7 18.3L18.4 5.59998Z" fill="black" />
																									<path d="M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM19.9 11H13V8.8999C14.9 8.6999 16.7 8.00005 18.1 6.80005C19.1 8.00005 19.7 9.4 19.9 11ZM11 19.8999C9.7 19.6999 8.39999 19.2 7.39999 18.5C8.49999 17.7 9.7 17.2001 11 17.1001V19.8999ZM5.89999 6.90002C7.39999 8.10002 9.2 8.8 11 9V11.1001H4.10001C4.30001 9.4001 4.89999 8.00002 5.89999 6.90002ZM7.39999 5.5C8.49999 4.7 9.7 4.19998 11 4.09998V7C9.7 6.8 8.39999 6.3 7.39999 5.5ZM13 17.1001C14.3 17.3001 15.6 17.8 16.6 18.5C15.5 19.3 14.3 19.7999 13 19.8999V17.1001ZM13 4.09998C14.3 4.29998 15.6 4.8 16.6 5.5C15.5 6.3 14.3 6.80002 13 6.90002V4.09998ZM4.10001 13H11V15.1001C9.1 15.3001 7.29999 16 5.89999 17.2C4.89999 16 4.30001 14.6 4.10001 13ZM18.1 17.1001C16.6 15.9001 14.8 15.2 13 15V12.8999H19.9C19.7 14.5999 19.1 16.0001 18.1 17.1001Z" fill="black" />
																								</svg>
																							</span>
                                              {/* end::Svg Icon */}
																						</span>
																					</span>
                                            {/* end:Icon */}
                                            {/* begin:Info */}
                                            <span className="d-flex flex-column">
																						<span className="fw-bolder fs-6">Quick Online Courses</span>
																						<span className="fs-7 text-muted">Creating a clear text structure is just one SEO</span>
																					</span>
                                            {/* end:Info */}
																				</span>
                                          {/* end:Label */}
                                          {/* begin:Input */}
                                          <span className="form-check form-check-custom form-check-solid">
																					<InputRadio type="radio" name="category" value="1" />
																				</span>
                                          {/* end:Input */}
                                        </label>
                                        {/* end::Option */}
                                        {/* begin:Option */}
                                        <label className="d-flex flex-stack mb-5 cursor-pointer">
                                          {/* begin:Label */}
                                          <span className="d-flex align-items-center me-2">
																					{/* begin:Icon */}
                                            <span className="symbol symbol-50px me-6">
																						<span className="symbol-label bg-light-danger">
																							{/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                                              <span className="svg-icon svg-icon-1 svg-icon-danger">
																								<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																									<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																										<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																										<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																										<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																										<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																									</g>
																								</svg>
																							</span>
                                              {/* end::Svg Icon */}
																						</span>
																					</span>
                                            {/* end:Icon */}
                                            {/* begin:Info */}
                                            <span className="d-flex flex-column">
																						<span className="fw-bolder fs-6">Face to Face Discussions</span>
																						<span className="fs-7 text-muted">Creating a clear text structure is just one aspect</span>
																					</span>
                                            {/* end:Info */}
																				</span>
                                          {/* end:Label */}
                                          {/* begin:Input */}
                                          <span className="form-check form-check-custom form-check-solid">
																					<InputRadio  name="category" value="2" />
																				</span>
                                          {/* end:Input */}
                                        </label>
                                        {/* end::Option */}
                                        {/* begin:Option */}
                                        <label className="d-flex flex-stack cursor-pointer">
                                          {/* begin:Label */}
                                          <span className="d-flex align-items-center me-2">
																					{/* begin:Icon */}
                                            <span className="symbol symbol-50px me-6">
																						<span className="symbol-label bg-light-success">
																							{/* begin::Svg Icon | path: icons/duotune/general/gen013.svg */}
                                              <span className="svg-icon svg-icon-1 svg-icon-success">
																								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																									<path opacity="0.3" d="M20.9 12.9C20.3 12.9 19.9 12.5 19.9 11.9C19.9 11.3 20.3 10.9 20.9 10.9H21.8C21.3 6.2 17.6 2.4 12.9 2V2.9C12.9 3.5 12.5 3.9 11.9 3.9C11.3 3.9 10.9 3.5 10.9 2.9V2C6.19999 2.5 2.4 6.2 2 10.9H2.89999C3.49999 10.9 3.89999 11.3 3.89999 11.9C3.89999 12.5 3.49999 12.9 2.89999 12.9H2C2.5 17.6 6.19999 21.4 10.9 21.8V20.9C10.9 20.3 11.3 19.9 11.9 19.9C12.5 19.9 12.9 20.3 12.9 20.9V21.8C17.6 21.3 21.4 17.6 21.8 12.9H20.9Z" fill="black" />
																									<path d="M16.9 10.9H13.6C13.4 10.6 13.2 10.4 12.9 10.2V5.90002C12.9 5.30002 12.5 4.90002 11.9 4.90002C11.3 4.90002 10.9 5.30002 10.9 5.90002V10.2C10.6 10.4 10.4 10.6 10.2 10.9H9.89999C9.29999 10.9 8.89999 11.3 8.89999 11.9C8.89999 12.5 9.29999 12.9 9.89999 12.9H10.2C10.4 13.2 10.6 13.4 10.9 13.6V13.9C10.9 14.5 11.3 14.9 11.9 14.9C12.5 14.9 12.9 14.5 12.9 13.9V13.6C13.2 13.4 13.4 13.2 13.6 12.9H16.9C17.5 12.9 17.9 12.5 17.9 11.9C17.9 11.3 17.5 10.9 16.9 10.9Z" fill="black" />
																								</svg>
																							</span>
                                              {/* end::Svg Icon */}
																						</span>
																					</span>
                                            {/* end:Icon */}
                                            {/* begin:Info */}
                                            <span className="d-flex flex-column">
																						<span className="fw-bolder fs-6">Full Intro Training</span>
																						<span className="fs-7 text-muted">Creating a clear text structure copywriting</span>
																					</span>
                                            {/* end:Info */}
																				</span>
                                          {/* end:Label */}
                                          {/* begin:Input */}
                                          <span className="form-check form-check-custom form-check-solid">
																					<InputRadio  name="category" value="3" />
																				</span>
                                          {/* end:Input */}
                                        </label>
                                        {/* end::Option */}
                                      </div>
                                      {/* end:Options */}
                                    </div>
                                    {/* end::Input group */}
                                  </div>
                                </div>
                                {/* end::Step 1 */}
                                {/* begin::Step 2 */}
                                <div data-kt-stepper-element="content">
                                  <div className="w-100">
                                    {/* begin::Input group */}
                                    <div className="fv-row">
                                      {/* begin::Label */}
                                      <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                                        <span className="required">Select Framework</span>
                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify your apps framework"></i>
                                      </label>
                                      {/* end::Label */}
                                      {/* begin:Option */}
                                      <label className="d-flex flex-stack cursor-pointer mb-5">
                                        {/* begin:Label */}
                                        <span className="d-flex align-items-center me-2">
																				{/* begin:Icon */}
                                          <span className="symbol symbol-50px me-6">
																					<span className="symbol-label bg-light-warning">
																						<i className="fab fa-html5 text-warning fs-2x"></i>
																					</span>
																				</span>
                                          {/* end:Icon */}
                                          {/* begin:Info */}
                                          <span className="d-flex flex-column">
																					<span className="fw-bolder fs-6">HTML5</span>
																					<span className="fs-7 text-muted">Base Web Projec</span>
																				</span>
                                          {/* end:Info */}
																			</span>
                                        {/* end:Label */}
                                        {/* begin:Input */}
                                        <span className="form-check form-check-custom form-check-solid">
																				<InputRadio  checked="checked" name="framework" value="1" />
																			</span>
                                        {/* end:Input */}
                                      </label>
                                      {/* end::Option */}
                                      {/* begin:Option */}
                                      <label className="d-flex flex-stack cursor-pointer mb-5">
                                        {/* begin:Label */}
                                        <span className="d-flex align-items-center me-2">
																				{/* begin:Icon */}
                                          <span className="symbol symbol-50px me-6">
																					<span className="symbol-label bg-light-success">
																						<i className="fab fa-react text-success fs-2x"></i>
																					</span>
																				</span>
                                          {/* end:Icon */}
                                          {/* begin:Info */}
                                          <span className="d-flex flex-column">
																					<span className="fw-bolder fs-6">ReactJS</span>
																					<span className="fs-7 text-muted">Robust and flexible app framework</span>
																				</span>
                                          {/* end:Info */}
																			</span>
                                        {/* end:Label */}
                                        {/* begin:Input */}
                                        <span className="form-check form-check-custom form-check-solid">
																				<InputRadio  name="framework" value="2" />
																			</span>
                                        {/* end:Input */}
                                      </label>
                                      {/* end::Option */}
                                      {/* begin:Option */}
                                      <label className="d-flex flex-stack cursor-pointer mb-5">
                                        {/* begin:Label */}
                                        <span className="d-flex align-items-center me-2">
																				{/* begin:Icon */}
                                          <span className="symbol symbol-50px me-6">
																					<span className="symbol-label bg-light-danger">
																						<i className="fab fa-angular text-danger fs-2x"></i>
																					</span>
																				</span>
                                          {/* end:Icon */}
                                          {/* begin:Info */}
                                          <span className="d-flex flex-column">
																					<span className="fw-bolder fs-6">Angular</span>
																					<span className="fs-7 text-muted">Powerful data mangement</span>
																				</span>
                                          {/* end:Info */}
																			</span>
                                        {/* end:Label */}
                                        {/* begin:Input */}
                                        <span className="form-check form-check-custom form-check-solid">
																				<InputRadio  name="framework" value="3" />
																			</span>
                                        {/* end:Input */}
                                      </label>
                                      {/* end::Option */}
                                      {/* begin:Option */}
                                      <label className="d-flex flex-stack cursor-pointer">
                                        {/* begin:Label */}
                                        <span className="d-flex align-items-center me-2">
																				{/* begin:Icon */}
                                          <span className="symbol symbol-50px me-6">
																					<span className="symbol-label bg-light-primary">
																						<i className="fab fa-vuejs text-primary fs-2x"></i>
																					</span>
																				</span>
                                          {/* end:Icon */}
                                          {/* begin:Info */}
                                          <span className="d-flex flex-column">
																					<span className="fw-bolder fs-6">Vue</span>
																					<span className="fs-7 text-muted">Lightweight and responsive framework</span>
																				</span>
                                          {/* end:Info */}
																			</span>
                                        {/* end:Label */}
                                        {/* begin:Input */}
                                        <span className="form-check form-check-custom form-check-solid">
																				<InputRadio  name="framework" value="4" />
																			</span>
                                        {/* end:Input */}
                                      </label>
                                      {/* end::Option */}
                                    </div>
                                    {/* end::Input group */}
                                  </div>
                                </div>
                                {/* end::Step 2 */}
                                {/* begin::Step 3 */}
                                <div data-kt-stepper-element="content">
                                  <div className="w-100">
                                    {/* begin::Input group */}
                                    <div className="fv-row mb-10">
                                      {/* begin::Label */}
                                      <label className="required fs-5 fw-bold mb-2">Database Name</label>
                                      {/* end::Label */}
                                      {/* begin::Input */}
                                      <InputText className="form-control form-control-lg form-control-solid" name="dbname" placeholder="" defaultValue="master_db" />
                                      {/* end::Input */}
                                    </div>
                                    {/* end::Input group */}
                                    {/* begin::Input group */}
                                    <div className="fv-row">
                                      {/* begin::Label */}
                                      <label className="d-flex align-items-center fs-5 fw-bold mb-4">
                                        <span className="required">Select Database Engine</span>
                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Select your app database engine"></i>
                                      </label>
                                      {/* end::Label */}
                                      {/* begin:Option */}
                                      <label className="d-flex flex-stack cursor-pointer mb-5">
                                        {/* begin::Label */}
                                        <span className="d-flex align-items-center me-2">
																				{/* begin::Icon */}
                                          <span className="symbol symbol-50px me-6">
																					<span className="symbol-label bg-light-success">
																						<i className="fas fa-database text-success fs-2x"></i>
																					</span>
																				</span>
                                          {/* end::Icon */}
                                          {/* begin::Info */}
                                          <span className="d-flex flex-column">
																					<span className="fw-bolder fs-6">MySQL</span>
																					<span className="fs-7 text-muted">Basic MySQL database</span>
																				</span>
                                          {/* end::Info */}
																			</span>
                                        {/* end::Label */}
                                        {/* begin::Input */}
                                        <span className="form-check form-check-custom form-check-solid">
																				<InputRadio  name="dbengine" checked="checked" value="1" />
																			</span>
                                        {/* end::Input */}
                                      </label>
                                      {/* end::Option */}
                                      {/* begin:Option */}
                                      <label className="d-flex flex-stack cursor-pointer mb-5">
                                        {/* begin::Label */}
                                        <span className="d-flex align-items-center me-2">
																				{/* begin::Icon */}
                                          <span className="symbol symbol-50px me-6">
																					<span className="symbol-label bg-light-danger">
																						<i className="fab fa-google text-danger fs-2x"></i>
																					</span>
																				</span>
                                          {/* end::Icon */}
                                          {/* begin::Info */}
                                          <span className="d-flex flex-column">
																					<span className="fw-bolder fs-6">Firebase</span>
																					<span className="fs-7 text-muted">Google based app data management</span>
																				</span>
                                          {/* end::Info */}
																			</span>
                                        {/* end::Label */}
                                        {/* begin::Input */}
                                        <span className="form-check form-check-custom form-check-solid">
																				<InputRadio  name="dbengine" value="2" />
																			</span>
                                        {/* end::Input */}
                                      </label>
                                      {/* end::Option */}
                                      {/* begin:Option */}
                                      <label className="d-flex flex-stack cursor-pointer">
                                        {/* begin::Label */}
                                        <span className="d-flex align-items-center me-2">
																				{/* begin::Icon */}
                                          <span className="symbol symbol-50px me-6">
																					<span className="symbol-label bg-light-warning">
																						<i className="fab fa-amazon text-warning fs-2x"></i>
																					</span>
																				</span>
                                          {/* end::Icon */}
                                          {/* begin::Info */}
                                          <span className="d-flex flex-column">
																					<span className="fw-bolder fs-6">DynamoDB</span>
																					<span className="fs-7 text-muted">Amazon Fast NoSQL Database</span>
																				</span>
                                          {/* end::Info */}
																			</span>
                                        {/* end::Label */}
                                        {/* begin::Input */}
                                        <span className="form-check form-check-custom form-check-solid">
																				<InputRadio  name="dbengine" value="3" />
																			</span>
                                        {/* end::Input */}
                                      </label>
                                      {/* end::Option */}
                                    </div>
                                    {/* end::Input group */}
                                  </div>
                                </div>
                                {/* end::Step 3 */}
                                {/* begin::Step 4 */}
                                <div data-kt-stepper-element="content">
                                  <div className="w-100">
                                    {/* begin::Input group */}
                                    <div className="d-flex flex-column mb-7 fv-row">
                                      {/* begin::Label */}
                                      <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                        <span className="required">Name On Card</span>
                                        <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
                                      </label>
                                      {/* end::Label */}
                                      <InputText className="form-control form-control-solid" placeholder="" name="card_name" defaultValue="Max Doe" />
                                    </div>
                                    {/* end::Input group */}
                                    {/* begin::Input group */}
                                    <div className="d-flex flex-column mb-7 fv-row">
                                      {/* begin::Label */}
                                      <label className="required fs-6 fw-bold form-label mb-2">Card Number</label>
                                      {/* end::Label */}
                                      {/* begin::Input wrapper */}
                                      <div className="position-relative">
                                        {/* begin::Input */}
                                        <InputText className="form-control form-control-solid" placeholder="Enter card number" name="card_number" defaultValue="4111 1111 1111 1111" />
                                        {/* end::Input */}
                                        {/* begin::Card logos */}
                                        <div className="position-absolute translate-middle-y top-50 end-0 me-5">
                                          <img src="/assets/media/svg/card-logos/visa.svg" alt="" className="h-25px" />
                                          <img src="/assets/media/svg/card-logos/mastercard.svg" alt="" className="h-25px" />
                                          <img src="/assets/media/svg/card-logos/american-express.svg" alt="" className="h-25px" />
                                        </div>
                                        {/* end::Card logos */}
                                      </div>
                                      {/* end::Input wrapper */}
                                    </div>
                                    {/* end::Input group */}
                                    {/* begin::Input group */}
                                    <div className="row mb-10">
                                      {/* begin::Col */}
                                      <div className="col-md-8 fv-row">
                                        {/* begin::Label */}
                                        <label className="required fs-6 fw-bold form-label mb-2">Expiration Date</label>
                                        {/* end::Label */}
                                        {/* begin::Row */}
                                        <div className="row fv-row">
                                          {/* begin::Col */}
                                          <div className="col-6">
                                            <select name="card_expiry_month" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Month">
                                              <option></option>
                                              <option value="1">1</option>
                                              <option value="2">2</option>
                                              <option value="3">3</option>
                                              <option value="4">4</option>
                                              <option value="5">5</option>
                                              <option value="6">6</option>
                                              <option value="7">7</option>
                                              <option value="8">8</option>
                                              <option value="9">9</option>
                                              <option value="10">10</option>
                                              <option value="11">11</option>
                                              <option value="12">12</option>
                                            </select>
                                          </div>
                                          {/* end::Col */}
                                          {/* begin::Col */}
                                          <div className="col-6">
                                            <select name="card_expiry_year" className="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
                                              <option></option>
                                              <option value="2022">2022</option>
                                              <option value="2023">2023</option>
                                              <option value="2024">2024</option>
                                              <option value="2025">2025</option>
                                              <option value="2026">2026</option>
                                              <option value="2027">2027</option>
                                              <option value="2028">2028</option>
                                              <option value="2029">2029</option>
                                              <option value="2030">2030</option>
                                              <option value="2031">2031</option>
                                              <option value="2032">2032</option>
                                            </select>
                                          </div>
                                          {/* end::Col */}
                                        </div>
                                        {/* end::Row */}
                                      </div>
                                      {/* end::Col */}
                                      {/* begin::Col */}
                                      <div className="col-md-4 fv-row">
                                        {/* begin::Label */}
                                        <label className="d-flex align-items-center fs-6 fw-bold form-label mb-2">
                                          <span className="required">CVV</span>
                                          <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
                                        </label>
                                        {/* end::Label */}
                                        {/* begin::Input wrapper */}
                                        <div className="position-relative">
                                          {/* begin::Input */}
                                          <InputText className="form-control form-control-solid" minLength="3" maxLength="4" placeholder="CVV" name="card_cvv" />
                                          {/* end::Input */}
                                          {/* begin::CVV icon */}
                                          <div className="position-absolute translate-middle-y top-50 end-0 me-3">
                                            {/* begin::Svg Icon | path: icons/duotune/finance/fin002.svg */}
                                            <span className="svg-icon svg-icon-2hx">
																						<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																							<path d="M22 7H2V11H22V7Z" fill="black" />
																							<path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="black" />
																						</svg>
																					</span>
                                            {/* end::Svg Icon */}
                                          </div>
                                          {/* end::CVV icon */}
                                        </div>
                                        {/* end::Input wrapper */}
                                      </div>
                                      {/* end::Col */}
                                    </div>
                                    {/* end::Input group */}
                                    {/* begin::Input group */}
                                    <div className="d-flex flex-stack">
                                      {/* begin::Label */}
                                      <div className="me-5">
                                        <label className="fs-6 fw-bold form-label">Save Card for further billing?</label>
                                        <div className="fs-7 fw-bold text-muted">If you need more info, please check budget planning</div>
                                      </div>
                                      {/* end::Label */}
                                      {/* begin::Switch */}
                                      <label className="form-check form-switch form-check-custom form-check-solid">

                                        <InputCheckbox value="1" checked="checked" />
                                        <span className="form-check-label fw-bold text-muted">Save Card</span>
                                      </label>
                                      {/* end::Switch */}
                                    </div>
                                    {/* end::Input group */}
                                  </div>
                                </div>
                                {/* end::Step 4 */}
                                {/* begin::Step 5 */}
                                <div data-kt-stepper-element="content">
                                  <div className="w-100 text-center">
                                    {/* begin::Heading */}
                                    <h1 className="fw-bolder text-dark mb-3">Release!</h1>
                                    {/* end::Heading */}
                                    {/* begin::Description */}
                                    <div className="text-muted fw-bold fs-3">Submit your app to kickstart your project.</div>
                                    {/* end::Description */}
                                    {/* begin::Illustration */}
                                    <div className="text-center px-4 py-15">
                                      <img src="/assets/media/illustrations/sigma-1/9.png" alt="" className="w-100 mh-300px" />
                                    </div>
                                    {/* end::Illustration */}
                                  </div>
                                </div>
                                {/* end::Step 5 */}
                                {/* begin::Actions */}
                                <div className="d-flex flex-stack pt-10">
                                  {/* begin::Wrapper */}
                                  <div className="me-2">
                                    <button type="button" className="btn btn-lg btn-light-primary me-3" data-kt-stepper-action="previous">
                                      {/* begin::Svg Icon | path: icons/duotune/arrows/arr063.svg */}
                                      <span className="svg-icon svg-icon-3 me-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black" />
																			<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black" />
																		</svg>
																	</span>
                                      {/* end::Svg Icon */}Back</button>
                                  </div>
                                  {/* end::Wrapper */}
                                  {/* begin::Wrapper */}
                                  <div>
                                    <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="submit">
																		<span className="indicator-label">Submit
                                      {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                      <span className="svg-icon svg-icon-3 ms-2 me-0">
																			<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																				<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																				<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																			</svg>
																		</span>
                                      {/* end::Svg Icon */}</span>
                                      <span className="indicator-progress">Please wait...
																		<span className="spinner-border spinner-border-sm align-middle ms-2"></span></span>
                                    </button>
                                    <button type="button" className="btn btn-lg btn-primary" data-kt-stepper-action="next">Continue
                                      {/* begin::Svg Icon | path: icons/duotune/arrows/arr064.svg */}
                                      <span className="svg-icon svg-icon-3 ms-1 me-0">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
																			<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
																		</svg>
																	</span>
                                      {/* end::Svg Icon */}
                                    </button>
                                  </div>
                                  {/* end::Wrapper */}
                                </div>
                                {/* end::Actions */}
                              </form>
                              {/* end::Form */}
                            </div>
                            {/* end::Content */}
                          </div>
                          {/* end::Stepper */}
                        </div>
                        {/* end::Modal body */}
                      </div>
                      {/* end::Modal content */}
                    </div>
                    {/* end::Modal dialog */}
                  </div>
                  {/* end::Modal - Create App */}
                  {/* begin::Modal - Select Location */}
                  <div className="modal fade" id="kt_modal_select_location" tabIndex="-1" aria-hidden="true">
                    {/* begin::Modal dialog */}
                    <div className="modal-dialog mw-1000px">
                      {/* begin::Modal content */}
                      <div className="modal-content">
                        {/* begin::Modal header */}
                        <div className="modal-header">
                          {/* begin::Title */}
                          <h2>Select Location</h2>
                          {/* end::Title */}
                          {/* begin::Close */}
                          <div className="btn btn-sm btn-icon btn-active-color-primary" data-bs-dismiss="modal">
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
                        {/* end::Modal header */}
                        {/* begin::Modal body */}
                        <div className="modal-body">
                          <div id="kt_modal_select_location_map" className="w-100 rounded" style={{height:"450px"}}></div>
                        </div>
                        {/* end::Modal body */}
                        {/* begin::Modal footer */}
                        <div className="modal-footer d-flex justify-content-end">
                          <a href="#exec" className="btn btn-active-light me-5" data-bs-dismiss="modal">Cancel</a>
                          <button type="button" id="kt_modal_select_location_button" className="btn btn-primary" data-bs-dismiss="modal">Apply</button>
                        </div>
                        {/* end::Modal footer */}
                      </div>
                      {/* end::Modal content */}
                    </div>
                    {/* end::Modal dialog */}
                  </div>
                  {/* end::Modal - Select Location */}
                  {/* end::Modals */}
                </div>
                {/* end::Container */}
              </div>
              {/* end::Content */}
            </div>
            {/* end::Main */}
            {/* begin::Footer */}
            <div className="footer py-4 d-flex flex-lg-column" id="kt_footer">
              {/* begin::Container */}
              <div className="container-xxl d-flex flex-column flex-md-row flex-stack">
                {/* begin::Copyright */}
                <div className="text-dark order-2 order-md-1">
                  <span className="text-muted fw-bold me-2">2022©</span>
                  <a href="https://keenthemes.com" target="_blank" rel="noreferrer"  className="text-gray-800 text-hover-primary">Keenthemes</a>
                </div>
                {/* end::Copyright */}
                {/* begin::Menu */}
                <ul className="menu menu-gray-600 menu-hover-primary fw-bold order-1">
                  <li className="menu-item">
                    <a href="https://keenthemes.com" target="_blank" rel="noreferrer"  className="menu-link px-2">About</a>
                  </li>
                  <li className="menu-item">
                    <a href="https://keenthemes.com/support" target="_blank" rel="noreferrer"  className="menu-link px-2">Support</a>
                  </li>
                  <li className="menu-item">
                    <a href="https://keenthemes.com/products%PUBLIC_URL%" target="_blank" rel="noreferrer"  className="menu-link px-2">Purchase</a>
                  </li>
                </ul>
                {/* end::Menu */}
              </div>
              {/* end::Container */}
            </div>
            {/* end::Footer */}
          </div>
          {/* end::Wrapper */}
          {/* begin::Sidebar */}
          <div id="kt_sidebar" className="sidebar bg-info" data-kt-drawer="true" data-kt-drawer-name="sidebar" data-kt-drawer-activate="{default: true, lg: false}" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'200px', '350px': '300px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_sidebar_toggler">
            {/* begin::Sidebar Content */}
            <div className="d-flex flex-column sidebar-body">
              {/* begin::Sidebar Nav */}
              <ul className="sidebar-nav nav nav-tabs pt-15 pb-5 px-5" id="kt_sidebar_tabs" role="tablist">
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#kt_sidebar_tab_pane_1" id="kt_sidebar_tab_1">
                    <img alt="" src="/assets/media/svg/logo/purple/aven.svg" className="default" />
                    <img alt="" src="/assets/media/svg/logo/colored/aven.svg" className="active" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#kt_sidebar_tab_pane_2" id="kt_sidebar_tab_2">
                    <img alt="" src="/assets/media/svg/logo/purple/kanba.svg" className="default" />
                    <img alt="" src="/assets/media/svg/logo/colored/kanba.svg" className="active" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" data-bs-toggle="tab" href="#kt_sidebar_tab_pane_3" id="kt_sidebar_tab_3">
                    <img alt="" src="/assets/media/svg/logo/purple/fox-hub-2.svg" className="default" />
                    <img alt="" src="/assets/media/svg/logo/colored/fox-hub-2.svg" className="active" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#kt_sidebar_tab_pane_4" id="kt_sidebar_tab_4">
                    <img alt="" src="/assets/media/svg/logo/purple/tower.svg" className="default" />
                    <img alt="" src="/assets/media/svg/logo/colored/tower.svg" className="active" />
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-bs-toggle="tab" href="#kt_sidebar_tab_pane_5" id="kt_sidebar_tab_5">
                    <img alt="" src="/assets/media/svg/logo/purple/treva.svg" className="default" />
                    <img alt="" src="/assets/media/svg/logo/colored/treva.svg" className="active" />
                  </a>
                </li>
              </ul>
              {/* end::Sidebar Nav */}
              {/* begin::Sidebar Content */}
              <div id="kt_sidebar_content" className="py-10 px-5 px-lg-5">
                <div className="hover-scroll-y me-lg-n2 pe-lg-2" data-kt-scroll="true" data-kt-scroll-height="auto" data-kt-scroll-offset="0px" data-kt-scroll-dependencies="#kt_sidebar_tabs, #kt_sidebar_footer" data-kt-scroll-wrappers="#kt_sidebar_content">
                  <div className="tab-content">
                    <div className="tab-pane" id="kt_sidebar_tab_pane_1" role="tabpanel">
                      {/* begin::Card */}
                      <div className="card bg-transparent">
                        {/* begin::Header */}
                        <div className="card-header align-items-center border-0">
                          <h3 className="card-title fw-bolder text-white fs-3">Aven Sales</h3>
                          <div className="card-toolbar">
                            <button type="button" className="btn btn-md btn-icon btn-icon-white btn-info" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="bottom-end">
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <span className="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Menu */}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                              <div className="menu-item px-3">
                                <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Manage</div>
                              </div>
                              <div className="separator mb-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add User</a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add Role</a>
                              </div>
                              <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start" data-kt-menu-flip="left-start, top">
                                <a href="#exec" className="menu-link px-3">
                                  <span className="menu-title">Add Group</span>
                                  <span className="menu-arrow"></span>
                                </a>
                                <div className="menu-sub menu-sub-dropdown w-200px py-4">
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Admin Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Staff Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Member Group</a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Reports</a>
                              </div>
                              <div className="separator mt-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <div className="menu-content px-3 py-3">
                                  <a className="btn btn-primary fw-bold btn-sm px-4" href="#exec">Create New</a>
                                </div>
                              </div>
                            </div>
                            {/* end::Menu */}
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body px-3 py-0">
                          {/* begin::Chart */}
                          <div id="kt_sidebar_tab_1_chart" className="apexcharts-bar-hover-danger" style={{height: "250px"}}></div>
                          {/* end::Chart */}
                        </div>
                        {/* end: Card Body */}
                      </div>
                      {/* end::Card */}
                      {/* begin::Card */}
                      <div className="card bg-transparent">
                        {/* begin::Header */}
                        <div className="card-header align-items-center border-0">
                          <h3 className="card-title fw-bolder text-white fs-3">Tasks Overview</h3>
                          <div className="card-toolbar">
                            <button type="button" className="btn btn-md btn-icon btn-icon-white btn-info" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="bottom-end">
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <span className="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Menu */}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                              <div className="menu-item px-3">
                                <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Manage</div>
                              </div>
                              <div className="separator mb-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add User</a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add Role</a>
                              </div>
                              <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start" data-kt-menu-flip="left-start, top">
                                <a href="#exec" className="menu-link px-3">
                                  <span className="menu-title">Add Group</span>
                                  <span className="menu-arrow"></span>
                                </a>
                                <div className="menu-sub menu-sub-dropdown w-200px py-4">
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Admin Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Staff Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Member Group</a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Reports</a>
                              </div>
                              <div className="separator mt-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <div className="menu-content px-3 py-3">
                                  <a className="btn btn-primary fw-bold btn-sm px-4" href="#exec">Create New</a>
                                </div>
                              </div>
                            </div>
                            {/* end::Menu */}
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body pt-0">
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-1.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Sunspots</a>
                              <span className="text-white opacity-25 fw-bold fs-7 my-1">Mark, Rowling, Esther</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                          {/* begin: Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-2.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Ocean Drive</a>
                              <span className="text-white opacity-25 fw-bold fs-7 my-1">Study the highway types</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end: Item */}
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-3.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Soar, Eco</a>
                              <span className="text-white opacity-25 fw-bold fs-7 my-1">HTML, CSS. jQuery</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-5.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Cup &amp; Green</a>
                              <span className="text-white opacity-25 fs-7 fw-bold my-1">ASP.NET Developer</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-6.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Bose QC 35 II</a>
                              <span className="text-white opacity-25 fs-7 fw-bold my-1">Study the highway types</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end: Card Body */}
                      </div>
                      {/* end::Card */}
                    </div>
                    <div className="tab-pane" id="kt_sidebar_tab_pane_2" role="tabpanel">
                      {/* begin::Card */}
                      <div className="card bg-transparent">
                        {/* begin::Header */}
                        <div className="card-header align-items-center border-0">
                          <h3 className="card-title fw-bolder text-white fs-3">Kanba Sales</h3>
                          <div className="card-toolbar">
                            <button type="button" className="btn btn-md btn-icon btn-icon-white btn-info" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="bottom-end">
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <span className="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Menu */}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                              <div className="menu-item px-3">
                                <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Manage</div>
                              </div>
                              <div className="separator mb-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add User</a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add Role</a>
                              </div>
                              <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start" data-kt-menu-flip="left-start, top">
                                <a href="#exec" className="menu-link px-3">
                                  <span className="menu-title">Add Group</span>
                                  <span className="menu-arrow"></span>
                                </a>
                                <div className="menu-sub menu-sub-dropdown w-200px py-4">
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Admin Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Staff Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Member Group</a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Reports</a>
                              </div>
                              <div className="separator mt-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <div className="menu-content px-3 py-3">
                                  <a className="btn btn-primary fw-bold btn-sm px-4" href="#exec">Create New</a>
                                </div>
                              </div>
                            </div>
                            {/* end::Menu */}
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body px-3 py-0">
                          {/* begin::Chart */}
                          <div id="kt_sidebar_tab_2_chart" className="apexcharts-bar-hover-danger" style={{height: "250px"}}></div>
                          {/* end::Chart */}
                        </div>
                        {/* end: Card Body */}
                      </div>
                      {/* end::Card */}
                      {/* begin::Card */}
                      <div className="card bg-transparent">
                        {/* begin::Header */}
                        <div className="card-header align-items-center border-0">
                          <h3 className="card-title fw-bolder text-white fs-3">Kanba Products</h3>
                          <div className="card-toolbar">
                            <button type="button" className="btn btn-md btn-icon btn-icon-white btn-info" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="bottom-end">
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <span className="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Menu */}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                              <div className="menu-item px-3">
                                <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Manage</div>
                              </div>
                              <div className="separator mb-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add User</a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add Role</a>
                              </div>
                              <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start" data-kt-menu-flip="left-start, top">
                                <a href="#exec" className="menu-link px-3">
                                  <span className="menu-title">Add Group</span>
                                  <span className="menu-arrow"></span>
                                </a>
                                <div className="menu-sub menu-sub-dropdown w-200px py-4">
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Admin Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Staff Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Member Group</a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Reports</a>
                              </div>
                              <div className="separator mt-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <div className="menu-content px-3 py-3">
                                  <a className="btn btn-primary fw-bold btn-sm px-4" href="#exec">Create New</a>
                                </div>
                              </div>
                            </div>
                            {/* end::Menu */}
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body pt-0">
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-7.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">BP Industries</a>
                              <span className="text-white opacity-25 fw-bold fs-7 my-1">Successful Fellas</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                          {/* begin: Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-8.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Automatica</a>
                              <span className="text-white opacity-25 fw-bold fs-7 my-1">Successful Fellas</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end: Item */}
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-9.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Python Inc.</a>
                              <span className="text-white opacity-25 fw-bold fs-7 my-1">Most Successful</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-19.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Cup &amp; Green</a>
                              <span className="text-white opacity-25 fs-7 fw-bold my-1">ASP.NET Developer</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-6.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Active Customers</a>
                              <span className="text-white opacity-25 fs-7 fw-bold my-1">Best Customers</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end: Card Body */}
                      </div>
                      {/* end::Card */}
                    </div>
                    <div className="tab-pane active" id="kt_sidebar_tab_pane_3" role="tabpanel">
                      {/* begin::Card */}
                      <div className="card-body px-0">
                        <div className="pt-0">
                          {/* begin::Chart */}
                          <div className="d-flex flex-center position-relative bgi-no-repeat bgi-size-contain bgi-position-x-center bgi-position-y-center" style={{backgroundImage:"url('/assets/media/svg/illustrations/bg-2.svg')"}}>
                            <div className="position-absolute mb-7">
                              <div className="symbol symbol-circle symbol-100px overflow-hidden d-flex flex-center z-index-1">
															<span className="symbol-label bg-warning align-items-end">
																<img alt="logo" src="/assets/media/svg/avatars/016-boy-7.svg" className="mh-75px" />
															</span>
                              </div>
                            </div>
                            <div id="kt_user_chart" style={{height: "200px", minHeight: "178.7px"}}><div id="apexchartsf119r43k" className="apexcharts-canvas apexchartsf119r43k apexcharts-theme-light" style={{width: "300px", height: "178.7px"}}><svg id="SvgjsSvg1784" width="300" height="178.7" xmlns="http://www.w3.org/2000/svg" version="1.1" transform="translate(0, 0)" style={{background: "transparent"}}><g id="SvgjsG1786" className="apexcharts-inner apexcharts-graphical" transform="translate(63, 0)"><defs id="SvgjsDefs1785"><clipPath id="gridRectMaskf119r43k"><rect id="SvgjsRect1788" width="182" height="200" x="-3" y="-1" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0" fill="#fff"></rect></clipPath><clipPath id="gridRectMarkerMaskf119r43k"><rect id="SvgjsRect1789" width="180" height="202" x="-2" y="-2" rx="0" ry="0" opacity="1" strokeWidth="0" stroke="none" strokeDasharray="0" fill="#fff"></rect></clipPath></defs><g id="SvgjsG1790" className="apexcharts-radialbar"><g id="SvgjsG1791"><g id="SvgjsG1792" className="apexcharts-tracks"><g id="SvgjsG1793" className="apexcharts-radialbar-track apexcharts-track" rel="1"><path id="apexcharts-radialbarTrack-0" d="M 88 18.82219512195121 A 69.17780487804879 69.17780487804879 0 1 1 87.98792619541705 18.822196175589426" fill="none" fillOpacity="1" stroke="rgba(0,163,255,0.85)" strokeOpacity="1" strokeLinecap="round" strokeWidth="3.7839024390243914" strokeDasharray="0" className="apexcharts-radialbar-area" data-path-orig="M 88 18.82219512195121 A 69.17780487804879 69.17780487804879 0 1 1 87.98792619541705 18.822196175589426"></path></g></g><g id="SvgjsG1795"><g id="SvgjsG1799" className="apexcharts-series apexcharts-radial-series" series-name="Progress" rel="1" data-real-index="0"><path id="SvgjsPath1800" d="M 88 18.82219512195121 A 69.17780487804879 69.17780487804879 0 1 1 18.990708777769825 92.82559972965186" fill="none" fillOpacity="0.85" stroke="rgba(241,65,108,0.85)" strokeOpacity="1" strokeLinecap="round" strokeWidth="3.7839024390243914" strokeDasharray="0" className="apexcharts-radialbar-area apexcharts-radialbar-slice-0" data-angle="266" data-value="74" index="0" j="0" data-path-orig="M 88 18.82219512195121 A 69.17780487804879 69.17780487804879 0 1 1 18.990708777769825 92.82559972965186"></path></g><circle id="SvgjsCircle1796" r="67.2858536585366" cx="88" cy="88" className="apexcharts-radialbar-hollow" fill="transparent"></circle><g id="SvgjsG1797" className="apexcharts-datalabels-group" transform="translate(0, 0) scale(1)" style={{opacity: "1"}}><text id="SvgjsText1798" fontFamily="inherit" x="88" y="94" textAnchor="middle" dominantBaseline="auto" fontSize="30px" fontWeight="700" fill="#5e6278" className="apexcharts-text apexcharts-datalabel-value" style={{fontFamily: "inherit"}}>74%</text></g></g></g></g><line id="SvgjsLine1801" x1="0" y1="0" x2="176" y2="0" stroke="#b6b6b6" strokeDasharray="0" strokeWidth="1" className="apexcharts-ycrosshairs"></line><line id="SvgjsLine1802" x1="0" y1="0" x2="176" y2="0" strokeDasharray="0" strokeWidth="0" className="apexcharts-ycrosshairs-hidden"></line></g><g id="SvgjsG1787" className="apexcharts-annotations"></g></svg><div className="apexcharts-legend"></div></div></div>
                            <div className="resize-triggers"><div className="expand-trigger"><div style={{width: "347px", height: "201px"}}></div></div><div className="contract-trigger"></div></div></div>
                          {/* end::Chart */}
                          {/* begin::Items */}
                          <div className="pt-4">
                            {/* begin::Title */}
                            <div className="text-center pb-4">
                              {/* begin::Username */}
                              <h3 className="fw-bolder text-white fs-2 pb-2">3.57383487 ETH</h3>
                              {/* end::Username */}
                              {/* end::Action */}
                              <span className="fw-bolder fs-6 text-primary px-4 py-2 rounded bg-white bg-opacity-10">0x6fc8...2aeb</span>
                              {/* begin::Action */}
                            </div>
                            {/* end::Title */}
                            {/* begin::Row */}
                            <div className="row row-cols-2 px-xl-12 sidebar-toolbar">




                            </div>
                            {/* end::Row */}
                          </div>
                          {/* end::Items */}
                        </div>
                      </div>

                      <div className="card bg-transparent">
                        {/* begin::Header */}
                        <div className="card-header align-items-center border-0">
                          <h3 className="card-title fw-bolder text-white fs-3">Fox Sales</h3>
                          <div className="card-toolbar">
                            <button type="button" className="btn btn-md btn-icon btn-icon-white btn-info" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="bottom-end">
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <span className="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Menu */}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                              <div className="menu-item px-3">
                                <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Manage</div>
                              </div>
                              <div className="separator mb-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add User</a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add Role</a>
                              </div>
                              <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start" data-kt-menu-flip="left-start, top">
                                <a href="#exec" className="menu-link px-3">
                                  <span className="menu-title">Add Group</span>
                                  <span className="menu-arrow"></span>
                                </a>
                                <div className="menu-sub menu-sub-dropdown w-200px py-4">
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Admin Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Staff Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Member Group</a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Reports</a>
                              </div>
                              <div className="separator mt-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <div className="menu-content px-3 py-3">
                                  <a className="btn btn-primary fw-bold btn-sm px-4" href="#exec">Create New</a>
                                </div>
                              </div>
                            </div>
                            {/* end::Menu */}
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body px-3 py-0">
                          {/* begin::Chart */}
                          <div id="kt_sidebar_tab_3_chart" className="apexcharts-bar-hover-danger" style={{height: "250px"}}></div>
                          {/* end::Chart */}
                        </div>
                        {/* end: Card Body */}
                      </div>
                      {/* end::Card */}
                    </div>
                    <div className="tab-pane" id="kt_sidebar_tab_pane_4" role="tabpanel">
                      {/* begin::Card */}
                      <div className="card bg-transparent">
                        {/* begin::Header */}
                        <div className="card-header align-items-center border-0">
                          <h3 className="card-title fw-bolder text-white fs-3">Tower Sales</h3>
                          <div className="card-toolbar">
                            <button type="button" className="btn btn-md btn-icon btn-icon-white btn-info" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="bottom-end">
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <span className="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Menu */}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                              <div className="menu-item px-3">
                                <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Manage</div>
                              </div>
                              <div className="separator mb-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add User</a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add Role</a>
                              </div>
                              <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start" data-kt-menu-flip="left-start, top">
                                <a href="#exec" className="menu-link px-3">
                                  <span className="menu-title">Add Group</span>
                                  <span className="menu-arrow"></span>
                                </a>
                                <div className="menu-sub menu-sub-dropdown w-200px py-4">
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Admin Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Staff Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Member Group</a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Reports</a>
                              </div>
                              <div className="separator mt-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <div className="menu-content px-3 py-3">
                                  <a className="btn btn-primary fw-bold btn-sm px-4" href="#exec">Create New</a>
                                </div>
                              </div>
                            </div>
                            {/* end::Menu */}
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body px-3 py-0">
                          {/* begin::Chart */}
                          <div id="kt_sidebar_tab_4_chart" className="apexcharts-bar-hover-danger" style={{height: "250px"}}></div>
                          {/* end::Chart */}
                        </div>
                        {/* end: Card Body */}
                      </div>
                      {/* end::Card */}
                      {/* begin::Card */}
                      <div className="card bg-transparent">
                        {/* begin::Header */}
                        <div className="card-header align-items-center border-0">
                          <h3 className="card-title fw-bolder text-white fs-3">Tower Latest Products</h3>
                          <div className="card-toolbar">
                            <button type="button" className="btn btn-md btn-icon btn-icon-white btn-info" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="bottom-end">
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <span className="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Menu */}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                              <div className="menu-item px-3">
                                <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Manage</div>
                              </div>
                              <div className="separator mb-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add User</a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add Role</a>
                              </div>
                              <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start" data-kt-menu-flip="left-start, top">
                                <a href="#exec" className="menu-link px-3">
                                  <span className="menu-title">Add Group</span>
                                  <span className="menu-arrow"></span>
                                </a>
                                <div className="menu-sub menu-sub-dropdown w-200px py-4">
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Admin Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Staff Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Member Group</a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Reports</a>
                              </div>
                              <div className="separator mt-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <div className="menu-content px-3 py-3">
                                  <a className="btn btn-primary fw-bold btn-sm px-4" href="#exec">Create New</a>
                                </div>
                              </div>
                            </div>
                            {/* end::Menu */}
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body pt-0">
                          {/* begin: Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-8.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Automatica</a>
                              <span className="text-white opacity-25 fw-bold fs-7 my-1">Successful Fellas</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end: Item */}
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-11.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">BP Industries</a>
                              <span className="text-white opacity-25 fw-bold fs-7 my-1">Successful Fellas</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-19.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Cup &amp; Green</a>
                              <span className="text-white opacity-25 fs-7 fw-bold my-1">ASP.NET Developer</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-9.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Python Inc.</a>
                              <span className="text-white opacity-25 fw-bold fs-7 my-1">Most Successful</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-6.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Active Customers</a>
                              <span className="text-white opacity-25 fs-7 fw-bold my-1">Best Customers</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end: Card Body */}
                      </div>
                      {/* end::Card */}
                    </div>
                    <div className="tab-pane" id="kt_sidebar_tab_pane_5" role="tabpanel">
                      {/* begin::Card */}
                      <div className="card bg-transparent">
                        {/* begin::Header */}
                        <div className="card-header align-items-center border-0">
                          <h3 className="card-title fw-bolder text-white fs-3">Treva Sales</h3>
                          <div className="card-toolbar">
                            <button type="button" className="btn btn-md btn-icon btn-icon-white btn-info" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="bottom-end">
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <span className="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Menu */}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                              <div className="menu-item px-3">
                                <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Manage</div>
                              </div>
                              <div className="separator mb-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add User</a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add Role</a>
                              </div>
                              <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start" data-kt-menu-flip="left-start, top">
                                <a href="#exec" className="menu-link px-3">
                                  <span className="menu-title">Add Group</span>
                                  <span className="menu-arrow"></span>
                                </a>
                                <div className="menu-sub menu-sub-dropdown w-200px py-4">
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Admin Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Staff Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Member Group</a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Reports</a>
                              </div>
                              <div className="separator mt-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <div className="menu-content px-3 py-3">
                                  <a className="btn btn-primary fw-bold btn-sm px-4" href="#exec">Create New</a>
                                </div>
                              </div>
                            </div>
                            {/* end::Menu */}
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body px-3 py-0">
                          {/* begin::Chart */}
                          <div id="kt_sidebar_tab_5_chart" className="apexcharts-bar-hover-danger" style={{height: "250px"}}></div>
                          {/* end::Chart */}
                        </div>
                        {/* end: Card Body */}
                      </div>
                      {/* end::Card */}
                      {/* begin::Card */}
                      <div className="card bg-transparent">
                        {/* begin::Header */}
                        <div className="card-header align-items-center border-0">
                          <h3 className="card-title fw-bolder text-white fs-3">Treva's Products</h3>
                          <div className="card-toolbar">
                            <button type="button" className="btn btn-md btn-icon btn-icon-white btn-info" data-kt-menu-trigger="click" data-kt-menu-overflow="true" data-kt-menu-placement="bottom-end">
                              {/* begin::Svg Icon | path: icons/duotune/general/gen024.svg */}
                              <span className="svg-icon svg-icon-1">
															<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																<g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
																	<rect x="5" y="5" width="5" height="5" rx="1" fill="#000000" />
																	<rect x="14" y="5" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="5" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																	<rect x="14" y="14" width="5" height="5" rx="1" fill="#000000" opacity="0.3" />
																</g>
															</svg>
														</span>
                              {/* end::Svg Icon */}
                            </button>
                            {/* begin::Menu */}
                            <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-600 menu-state-bg-light-primary fw-bold w-200px" data-kt-menu="true">
                              <div className="menu-item px-3">
                                <div className="menu-content fs-6 text-dark fw-bolder px-3 py-4">Manage</div>
                              </div>
                              <div className="separator mb-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add User</a>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Add Role</a>
                              </div>
                              <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start" data-kt-menu-flip="left-start, top">
                                <a href="#exec" className="menu-link px-3">
                                  <span className="menu-title">Add Group</span>
                                  <span className="menu-arrow"></span>
                                </a>
                                <div className="menu-sub menu-sub-dropdown w-200px py-4">
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Admin Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Staff Group</a>
                                  </div>
                                  <div className="menu-item px-3">
                                    <a href="#exec" className="menu-link px-3">Member Group</a>
                                  </div>
                                </div>
                              </div>
                              <div className="menu-item px-3">
                                <a href="#exec" className="menu-link px-3">Reports</a>
                              </div>
                              <div className="separator mt-3 opacity-75"></div>
                              <div className="menu-item px-3">
                                <div className="menu-content px-3 py-3">
                                  <a className="btn btn-primary fw-bold btn-sm px-4" href="#exec">Create New</a>
                                </div>
                              </div>
                            </div>
                            {/* end::Menu */}
                          </div>
                        </div>
                        {/* end::Header */}
                        {/* begin::Body */}
                        <div className="card-body pt-0">
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-12.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Top Authors</a>
                              <span className="text-white opacity-25 fw-bold fs-7 my-1">Successful Fellas</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                          {/* begin: Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-13.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Popular Authors</a>
                              <span className="text-white opacity-25 fw-bold fs-7 my-1">Most Successful</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end: Item */}
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-14.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">New Users</a>
                              <span className="text-white opacity-25 fw-bold fs-7 my-1">HTML, CSS. jQuery</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center mb-7">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-15.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Active Customers</a>
                              <span className="text-white opacity-25 fs-7 fw-bold my-1">Awesome Users</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                          {/* begin::Item */}
                          <div className="d-flex flex-wrap align-items-center">
                            {/* begin::Symbol */}
                            <div className="symbol symbol-40px symbol-2by3 me-4">
                              <img src="/assets/media/stock/600x400/img-16.jpg" alt="" className="mw-100" />
                            </div>
                            {/* end::Symbol */}
                            {/* begin::Title */}
                            <div className="d-flex flex-column flex-grow-1 my-lg-0 my-2 pe-3">
                              <a href="#exec" className="text-white fw-bolder text-hover-primary fs-6">Bose QC 35 II</a>
                              <span className="text-white opacity-25 fs-7 fw-bold my-1">Best Customers</span>
                            </div>
                            {/* end::Title */}
                          </div>
                          {/* end::Item */}
                        </div>
                        {/* end: Card Body */}
                      </div>
                      {/* end::Card */}
                    </div>
                  </div>
                </div>
              </div>
              {/* end::Sidebar Content */}
              {/* begin::Sidebar footer */}
              <div id="kt_sidebar_footer" className="py-2 px-5 pb-md-6 text-center">
                <a href="/dashboards/extended.html" className="btn btn-color-white bg-white bg-opacity-10 bg-hover-opacity-20 fw-bolder w-100">View Extended Layout</a>
              </div>
              {/* end::Sidebar footer */}
            </div>
            {/* end::Sidebar Content */}
          </div>
          {/* end::Sidebar */}
        </div>
        {/* end::Page */}
      </div>
    /* end::Root */
    );

  }

}

export default Root;

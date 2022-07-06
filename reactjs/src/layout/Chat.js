import React from 'react';

class Chat extends React.Component {

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

      /* begin::Chat drawer */
      <div id="kt_drawer_chat" className="bg-body" data-kt-drawer="true" data-kt-drawer-name="chat" data-kt-drawer-activate="true" data-kt-drawer-overlay="true" data-kt-drawer-width="{default:'300px', 'md': '500px'}" data-kt-drawer-direction="end" data-kt-drawer-toggle="#kt_drawer_chat_toggle" data-kt-drawer-close="#kt_drawer_chat_close">
        {/* begin::Messenger */}
        <div className="card w-100 rounded-0" id="kt_drawer_chat_messenger">
          {/* begin::Card header */}
          <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
            {/* begin::Title */}
            <div className="card-title">
              {/* begin::User */}
              <div className="d-flex justify-content-center flex-column me-3">
                <a href="#exec" className="fs-4 fw-bolder text-gray-900 text-hover-primary me-1 mb-2 lh-1">Brian Cox</a>
                {/* begin::Info */}
                <div className="mb-0 lh-1">
                  <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
                  <span className="fs-7 fw-bold text-muted">Active</span>
                </div>
                {/* end::Info */}
              </div>
              {/* end::User */}
            </div>
            {/* end::Title */}
            {/* begin::Card toolbar */}
            <div className="card-toolbar">
              {/* begin::Menu */}
              <div className="me-2">
                <button className="btn btn-sm btn-icon btn-active-light-primary" data-kt-menu-trigger="click" data-kt-menu-placement="bottom-end">
                  <i className="bi bi-three-dots fs-3"></i>
                </button>
                {/* begin::Menu 3 */}
                <div className="menu menu-sub menu-sub-dropdown menu-column menu-rounded menu-gray-800 menu-state-bg-light-primary fw-bold w-200px py-3" data-kt-menu="true">
                  {/* begin::Heading */}
                  <div className="menu-item px-3">
                    <div className="menu-content text-muted pb-2 px-3 fs-7 text-uppercase">Contacts</div>
                  </div>
                  {/* end::Heading */}
                  {/* begin::Menu item */}
                  <div className="menu-item px-3">
                    <a href="#exec" className="menu-link px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_users_search">Add Contact</a>
                  </div>
                  {/* end::Menu item */}
                  {/* begin::Menu item */}
                  <div className="menu-item px-3">
                    <a href="#exec" className="menu-link flex-stack px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_invite_friends">Invite Contacts
                      <i className="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a contact email to send an invitation"></i></a>
                  </div>
                  {/* end::Menu item */}
                  {/* begin::Menu item */}
                  <div className="menu-item px-3" data-kt-menu-trigger="hover" data-kt-menu-placement="right-start" data-kt-menu-flip="left, center, top">
                    <a href="#exec" className="menu-link px-3">
                      <span className="menu-title">Groups</span>
                      <span className="menu-arrow"></span>
                    </a>
                    {/* begin::Menu sub */}
                    <div className="menu-sub menu-sub-dropdown w-175px py-4">
                      {/* begin::Menu item */}
                      <div className="menu-item px-3">
                        <a href="#exec" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Create Group</a>
                      </div>
                      {/* end::Menu item */}
                      {/* begin::Menu item */}
                      <div className="menu-item px-3">
                        <a href="#exec" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Invite Members</a>
                      </div>
                      {/* end::Menu item */}
                      {/* begin::Menu item */}
                      <div className="menu-item px-3">
                        <a href="#exec" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
                      </div>
                      {/* end::Menu item */}
                    </div>
                    {/* end::Menu sub */}
                  </div>
                  {/* end::Menu item */}
                  {/* begin::Menu item */}
                  <div className="menu-item px-3 my-1">
                    <a href="#exec" className="menu-link px-3" data-bs-toggle="tooltip" title="Coming soon">Settings</a>
                  </div>
                  {/* end::Menu item */}
                </div>
                {/* end::Menu 3 */}
              </div>
              {/* end::Menu */}
              {/* begin::Close */}
              <div className="btn btn-sm btn-icon btn-active-light-primary" id="kt_drawer_chat_close">
                {/* begin::Svg Icon | path: icons/duotune/arrows/arr061.svg */}
                <span className="svg-icon svg-icon-2">
								<svg xmlns="http:{/*www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black" />
									<rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black" />
								</svg>
							</span>
                {/* end::Svg Icon */}
              </div>
              {/* end::Close */}
            </div>
            {/* end::Card toolbar */}
          </div>
          {/* end::Card header */}
          {/* begin::Card bod */}Y
          <div className="card-body" id="kt_drawer_chat_messenger_body">
            {/* begin::Messages */}
            <div className="scroll-y me-n5 pe-5" data-kt-element="messages" data-kt-scroll="true" data-kt-scroll-activate="true" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_drawer_chat_messenger_header, #kt_drawer_chat_messenger_footer" data-kt-scroll-wrappers="#kt_drawer_chat_messenger_body" data-kt-scroll-offset="0px">
              {/* begin::Message(in) */}
              <div className="d-flex justify-content-start mb-10">
                {/* begin::Wrapper */}
                <div className="d-flex flex-column align-items-start">
                  {/* begin::User */}
                  <div className="d-flex align-items-center mb-2">
                    {/* begin::Avatar */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="/assets/media/avatars/150-15.jpg" />
                    </div>
                    {/* end::Avatar */}
                    {/* begin::Details */}
                    <div className="ms-3">
                      <a href="#exec" className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                      <span className="text-muted fs-7 mb-1">2 mins</span>
                    </div>
                    {/* end::Details */}
                  </div>
                  {/* end::User */}
                  {/* begin::Text */}
                  <div className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">How likely are you to recommend our company to your friends and family ?</div>
                  {/* end::Text */}
                </div>
                {/* end::Wrapper */}
              </div>
              {/* end::Message(in) */}
              {/* begin::Message(out) */}
              <div className="d-flex justify-content-end mb-10">
                {/* begin::Wrapper */}
                <div className="d-flex flex-column align-items-end">
                  {/* begin::User */}
                  <div className="d-flex align-items-center mb-2">
                    {/* begin::Details */}
                    <div className="me-3">
                      <span className="text-muted fs-7 mb-1">5 mins</span>
                      <a href="#exec" className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1">You</a>
                    </div>
                    {/* end::Details */}
                    {/* begin::Avatar */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="/assets/media/avatars/150-26.jpg" />
                    </div>
                    {/* end::Avatar */}
                  </div>
                  {/* end::User */}
                  {/* begin::Text */}
                  <div className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">Hey there, we’re just writing to let you know that you’ve been subscribed to a repository on GitHub.</div>
                  {/* end::Text */}
                </div>
                {/* end::Wrapper */}
              </div>
              {/* end::Message(out) */}
              {/* begin::Message(in) */}
              <div className="d-flex justify-content-start mb-10">
                {/* begin::Wrapper */}
                <div className="d-flex flex-column align-items-start">
                  {/* begin::User */}
                  <div className="d-flex align-items-center mb-2">
                    {/* begin::Avatar */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="/assets/media/avatars/150-15.jpg" />
                    </div>
                    {/* end::Avatar */}
                    {/* begin::Details */}
                    <div className="ms-3">
                      <a href="#exec" className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                      <span className="text-muted fs-7 mb-1">1 Hour</span>
                    </div>
                    {/* end::Details */}
                  </div>
                  {/* end::User */}
                  {/* begin::Text */}
                  <div className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">Ok, Understood!</div>
                  {/* end::Text */}
                </div>
                {/* end::Wrapper */}
              </div>
              {/* end::Message(in) */}
              {/* begin::Message(out) */}
              <div className="d-flex justify-content-end mb-10">
                {/* begin::Wrapper */}
                <div className="d-flex flex-column align-items-end">
                  {/* begin::User */}
                  <div className="d-flex align-items-center mb-2">
                    {/* begin::Details */}
                    <div className="me-3">
                      <span className="text-muted fs-7 mb-1">2 Hours</span>
                      <a href="#exec" className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1">You</a>
                    </div>
                    {/* end::Details */}
                    {/* begin::Avatar */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="/assets/media/avatars/150-26.jpg" />
                    </div>
                    {/* end::Avatar */}
                  </div>
                  {/* end::User */}
                  {/* begin::Text */}
                  <div className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">You’ll receive notifications for all issues, pull requests!</div>
                  {/* end::Text */}
                </div>
                {/* end::Wrapper */}
              </div>
              {/* end::Message(out) */}
              {/* begin::Message(in) */}
              <div className="d-flex justify-content-start mb-10">
                {/* begin::Wrapper */}
                <div className="d-flex flex-column align-items-start">
                  {/* begin::User */}
                  <div className="d-flex align-items-center mb-2">
                    {/* begin::Avatar */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="/assets/media/avatars/150-15.jpg" />
                    </div>
                    {/* end::Avatar */}
                    {/* begin::Details */}
                    <div className="ms-3">
                      <a href="#exec" className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                      <span className="text-muted fs-7 mb-1">3 Hours</span>
                    </div>
                    {/* end::Details */}
                  </div>
                  {/* end::User */}
                  {/* begin::Text */}
                  <div className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">You can unwatch this repository immediately by clicking here:
                    <a href="#exec">Keenthemes.com</a></div>
                  {/* end::Text */}
                </div>
                {/* end::Wrapper */}
              </div>
              {/* end::Message(in) */}
              {/* begin::Message(out) */}
              <div className="d-flex justify-content-end mb-10">
                {/* begin::Wrapper */}
                <div className="d-flex flex-column align-items-end">
                  {/* begin::User */}
                  <div className="d-flex align-items-center mb-2">
                    {/* begin::Details */}
                    <div className="me-3">
                      <span className="text-muted fs-7 mb-1">4 Hours</span>
                      <a href="#exec" className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1">You</a>
                    </div>
                    {/* end::Details */}
                    {/* begin::Avatar */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="/assets/media/avatars/150-26.jpg" />
                    </div>
                    {/* end::Avatar */}
                  </div>
                  {/* end::User */}
                  {/* begin::Text */}
                  <div className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text">Most purchased Business courses during this sale!</div>
                  {/* end::Text */}
                </div>
                {/* end::Wrapper */}
              </div>
              {/* end::Message(out) */}
              {/* begin::Message(in) */}
              <div className="d-flex justify-content-start mb-10">
                {/* begin::Wrapper */}
                <div className="d-flex flex-column align-items-start">
                  {/* begin::User */}
                  <div className="d-flex align-items-center mb-2">
                    {/* begin::Avatar */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="/assets/media/avatars/150-15.jpg" />
                    </div>
                    {/* end::Avatar */}
                    {/* begin::Details */}
                    <div className="ms-3">
                      <a href="#exec" className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                      <span className="text-muted fs-7 mb-1">5 Hours</span>
                    </div>
                    {/* end::Details */}
                  </div>
                  {/* end::User */}
                  {/* begin::Text */}
                  <div className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">Company BBQ to celebrate the last quater achievements and goals. Food and drinks provided</div>
                  {/* end::Text */}
                </div>
                {/* end::Wrapper */}
              </div>
              {/* end::Message(in) */}
              {/* begin::Message(template for out) */}
              <div className="d-flex justify-content-end mb-10 d-none" data-kt-element="template-out">
                {/* begin::Wrapper */}
                <div className="d-flex flex-column align-items-end">
                  {/* begin::User */}
                  <div className="d-flex align-items-center mb-2">
                    {/* begin::Details */}
                    <div className="me-3">
                      <span className="text-muted fs-7 mb-1">Just now</span>
                      <a href="#exec" className="fs-5 fw-bolder text-gray-900 text-hover-primary ms-1">You</a>
                    </div>
                    {/* end::Details */}
                    {/* begin::Avatar */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="/assets/media/avatars/150-26.jpg" />
                    </div>
                    {/* end::Avatar */}
                  </div>
                  {/* end::User */}
                  {/* begin::Text */}
                  <div className="p-5 rounded bg-light-primary text-dark fw-bold mw-lg-400px text-end" data-kt-element="message-text"></div>
                  {/* end::Text */}
                </div>
                {/* end::Wrapper */}
              </div>
              {/* end::Message(template for out) */}
              {/* begin::Message(template for in) */}
              <div className="d-flex justify-content-start mb-10 d-none" data-kt-element="template-in">
                {/* begin::Wrapper */}
                <div className="d-flex flex-column align-items-start">
                  {/* begin::User */}
                  <div className="d-flex align-items-center mb-2">
                    {/* begin::Avatar */}
                    <div className="symbol symbol-35px symbol-circle">
                      <img alt="Pic" src="/assets/media/avatars/150-15.jpg" />
                    </div>
                    {/* end::Avatar */}
                    {/* begin::Details */}
                    <div className="ms-3">
                      <a href="#exec" className="fs-5 fw-bolder text-gray-900 text-hover-primary me-1">Brian Cox</a>
                      <span className="text-muted fs-7 mb-1">Just now</span>
                    </div>
                    {/* end::Details */}
                  </div>
                  {/* end::User */}
                  {/* begin::Text */}
                  <div className="p-5 rounded bg-light-info text-dark fw-bold mw-lg-400px text-start" data-kt-element="message-text">Right before vacation season we have the next Big Deal for you.</div>
                  {/* end::Text */}
                </div>
                {/* end::Wrapper */}
              </div>
              {/* end::Message(template for in) */}
            </div>
            {/* end::Messages */}
          </div>
          {/* end::Card bod */}Y
          {/* begin::Card footer */}
          <div className="card-footer pt-4" id="kt_drawer_chat_messenger_footer">
            {/* begin::Input */}
            <textarea className="form-control form-control-flush mb-3" rows="1" data-kt-element="input" placeholder="Type a message"></textarea>
            {/* end::Input */}
            {/* begin:Toolbar */}
            <div className="d-flex flex-stack">
              {/* begin::Actions */}
              <div className="d-flex align-items-center me-2">
                <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
                  <i className="bi bi-paperclip fs-3"></i>
                </button>
                <button className="btn btn-sm btn-icon btn-active-light-primary me-1" type="button" data-bs-toggle="tooltip" title="Coming soon">
                  <i className="bi bi-upload fs-3"></i>
                </button>
              </div>
              {/* end::Actions */}
              {/* begin::Send */}
              <button className="btn btn-primary" type="button" data-kt-element="send">Send</button>
              {/* end::Send */}
            </div>
            {/* end::Toolbar */}
          </div>
          {/* end::Card footer */}
        </div>
        {/* end::Messenger */}
      </div>
      /* end::Chat drawer */

    );

  }

}

export default Chat;

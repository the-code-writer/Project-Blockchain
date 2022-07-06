import React from 'react';
import Root from '../layout/Root';
import Menu from '../layout/Menu';
import Search from '../layout/Search';
import Purchase from '../layout/Purchase';
import Explorer from '../layout/Explorer';
import Chat from '../layout/Chat';
import Scroll from '../layout/Scroll';

class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userData: {
                tenant:{

                }
            },
        };

    }

    componentDidMount() {

        this.setState({
            userData: this.props.userData
        })

    }

    render() {

        return (

          <div>

            <Root />

            <Menu />

            <Search />

            <Purchase />

            {/* begin::Drawers */}

            <Explorer />

            {/* end::Drawers */}

            <Chat />

            <Scroll />

          </div>

        );

    }

}

export default Dashboard;

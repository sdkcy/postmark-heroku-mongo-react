/**
 * DemoApp
 * Main.jsx
 * Created by Sıdıka ÇAY on 2019-06-30
 */

import React from "react";
import NavigationBar from "../components/NavigationBar/NavigationBar";
import MailBox from "../components/MailBox/MailBox";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import {getInbox, getSentBox, sendEmail} from "../actions/email";
import {route} from "../constants/app";
import NewMail from "../components/NewMail/NewMail";
import MailDetail from "../components/MailDetail/MailDetail";

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: route.INBOX,
            newMailModalShow: false,
            detailedMailModalShow: false,
            emailDetail: null
        };
        this.onNavigationChange = this.onNavigationChange.bind(this);
        this.onEmailClick = this.onEmailClick.bind(this);
    }

    componentDidMount() {
        this.props.getInbox();
        this.props.getSentBox();
    }

    onNavigationChange(routeName) {
        switch (routeName) {
            case  route.INBOX:
                this.setState({route: routeName});
                this.props.getInbox();
                break;
            case route.SENT_BOX:
                this.setState({route: routeName});
                break;
            case route.NEW_EMAIL:
                this.setState({newMailModalShow: true});
                break;
            default:
                break;
        }
    }

    onMailModalClose(key) {
        this.setState({[key]: false});
    }

    onEmailClick(item) {
        this.setState({emailDetail: item, detailedMailModalShow: true});
    }


    render() {
        return (
            <React.Fragment>
                <NavigationBar onNavigate={this.onNavigationChange}/>
                <MailBox emails={this.props[this.state.route]} route={this.state.route}
                         onMailClick={this.onEmailClick}/>
                <NewMail
                    show={this.state.newMailModalShow}
                    onHide={() => this.onMailModalClose("newMailModalShow")}
                    onSendEmail={this.props.sendEmail}/>
                <MailDetail
                    show={this.state.detailedMailModalShow}
                    onHide={() => this.onMailModalClose("detailedMailModalShow")}
                    data={this.state.emailDetail}
                />
            </React.Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        inbox: state.email.inbox,
        sentBox: state.email.sentBox,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        getInbox: bindActionCreators(getInbox, dispatch),
        getSentBox: bindActionCreators(getSentBox, dispatch),
        sendEmail: bindActionCreators(sendEmail, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);

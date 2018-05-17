import React, {Component} from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        console.log("constructor");
        this.state = {str: "hello"};
    }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log("getDerivedStateFromProps");
    //     return {str: "getDerivedStateFromProps update state"};
    // }

    UNSAFE_componentWillMount() {
        console.log("UNSAFE_componentWillMount()");
    }

    componentDidMount() {
        console.log("componentDidMount");
    }

    shouldComponentUpdate() {
        console.log("shouldComponentUpdate");
        return true;        // 记得要返回true
    }

    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    setTheState() {
        let s = "hello";
        if (this.state.str === s) {
            s = "HELLO";
        }
        this.setState({
            str: s
        });
    }

    forceItUpdate() {
        this.forceUpdate();
    }

    render() {
        console.log("render");
        return (
            <div>
                <span>{"Props:"}<h2>{parseInt(this.props.num)}</h2></span>
                <br/>
                <span>{"State:"}<h2>{this.state.str}</h2></span>
            </div>
        );
    }
}

export default Message;
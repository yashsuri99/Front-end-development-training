class FluCounter extends React.Component {
    state = {
        cases: 1,
        multiplyFactor: 2,
    };

    intervals = () => {
        setInterval(incMultiplyfactor, 3000);
    };

    render() {
        const { cases, multiplyFactor } = this.state;

        return <div>{cases};</div>;
    }

    async componentDidMount() {}

    async componentDidMount() {
        console.log("componentDidMount");
    }

    async componentDidUpdate(oldProps, oldState) {
        console.log("old props and old state : ", oldProps, oldState);
        console.log("new props and new state : ", this.props, this.state);

        if (oldState.page !== this.state.page) {
            this.fetchWorkshopForPage();
        }
    }

    // before unmounting begins
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
}

const flu = new FluCounter();

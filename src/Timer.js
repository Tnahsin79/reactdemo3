import React from 'react';
//import useSound from 'use-sound';
//import boopSfx from './sos.mp3';
//const [play] = useSound(boopSfx);
class Timer extends React.Component {
    constructor() {
        super();
        this.state = {
            timer: 10
        }
    }
    startTimer = () => {
        //componentDidMount() {
        this.interval = setInterval(() => {
            //if(this.state.timer>1)
            this.setState(prevState => ({ timer: prevState.timer - 1 }))
        }, 1000);
    }
    componentDidUpdate() {
        if (this.state.timer === 0) {
            clearInterval(this.interval);
            //useSound(boopSfx);
            alert("timer stopped");
        }
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { timer } = this.state;
        return (
            <div>
                <h1>TIMER</h1>
                <h1 >{timer}</h1>
                <button class="timer btn-outline-primary" onClick={this.startTimer}>Start Timer</button>
            </div>
        )
    }
}
export default Timer
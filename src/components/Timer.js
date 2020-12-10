import React, { Component } from 'react';

class Timer extends Component {
    /*timer variables: 
        timerOn: whether timer is running or not
        timerStart: time the countdown started from
        timerTime: time the countdown is currently at
    */
    state = {
        timerOn: false,
        timerStart: 0, 
        timerTime: 1500000
    };

    //function to start and update the countdown (triggers upon clicking "start" / "resume" button)
    startTimer = () => {
        this.setState({
            timerOn:true,
            timerStart:this.state.timerTime,
            timerTime: this.state.timerTime
        });

        //updates countdown every 10 ms
        this.countdown = setInterval(() => {
            const updatedTime = this.state.timerTime - 10;
            if (updatedTime >= 0){
                this.setState({
                    timerTime: updatedTime
                });
            }
            else{ //WHEN TIMER ENDS
                clearInterval(this.countdown);
                this.setState({timerOn:false});

                //add code to play videos

            }

        },10); // end countdown function

    };

    //function allowing user to choose the length of time they want the countdown to run for
    adjustTimer = input => {
        const { timerTime, timerOn } = this.state;
        const maxTime = 3600000; //max time you can set timer for = 1 hr

        if(!timerOn){ //only runs if timer is not going
            if(input === "plusMins" && (timerTime + 60000 < maxTime) ){ 
                this.setState({timerTime: timerTime + 60000 });
            }
            else if(input === "minusMins" && (timerTime - 60000 >= 0 ) ){
                this.setState({timerTime: timerTime - 60000});
            }
            else if(input === "plusSecs" && (timerTime + 1000 < maxTime) ){
                this.setState({timerTime: timerTime + 1000});
            }
            else if(input === "minusSecs" && (timerTime - 1000 >= 0)){
                this.setState({timerTime: timerTime - 1000});
            }
        }
    }; //end adjust timer

    //stop timer function
    stopTimer = () => {
        clearInterval(this.countdown);
        this.setState({ timerOn: false });
    };

    //reset timer function
    resetTimer = () => {
        if (this.state.timerOn === false) {
            this.setState({
            timerTime: this.state.timerStart
            });
        }
    };

    //clear timer function
    clearTimer = () => {
        if(this.state.timerTime >= 1000){
            clearInterval(this.countdown);
            this.setState({
                timerOn:false,
                timerStart: 0,
                timerTime: 0
            });
        }
    }

    

    render(){
        const { timerTime, timerStart, timerOn } = this.state;
        let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
        let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
        return(
            <div className="timer justify-content-center text-center align-middle">
                <div className="timer-header">Insert Timer Here (from Timer.js)</div>
                <div className="timer-label">Mins : Secs</div>
                <div className="timer-display">
                    <button onClick={() => this.adjustTimer("plusMins")}>+</button>
                    <button onClick={() => this.adjustTimer("plusSecs")}>+</button>
                    <div className="countdown-display">
                        {minutes} : {seconds}
                    </div>
                    <button onClick={() => this.adjustTimer("minusMins")}>-</button>
                    <button onClick={() => this.adjustTimer("minusSecs")}>-</button>
                </div>
                <div className="timer-buttons">
                    {/* start */}
                    {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
                        <button onClick={this.startTimer}>Start</button>
                    )}
                    {/* stop */}
                    {timerOn === true && timerTime >= 1000 && (
                    <button onClick={this.stopTimer}>Stop</button>
                    )}
                    {/* resume */}
                    {timerOn === false &&
                    (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                        <button onClick={this.startTimer}>Resume</button>
                    )}
                    {/* reset */}
                    {(timerOn === false || timerTime < 1000) &&
                    (timerStart !== timerTime && timerStart > 0) && (
                        <button onClick={this.resetTimer}>Reset</button>
                    )}
                    {/* clear */}
                    {timerTime >= 1000 && (
                        <button onClick={this.clearTimer}>Clear</button>
                    )}
                </div>
            </div>
        );
    }
    
}

export default Timer;
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
            <div className="container justify-content-center text-center align-middle">
                <div className="timer col-5 justify-content-center align-middle text-center">
                    <div className="embed-responsive embed-responsive-1by1 text-center">
                    
                        <div className="embed-responsive-item align-middle">
                            <div className="timer-wrapper ">
                                <div className="align-middle">
                                    {/* <div className="timer-header">Insert Timer Here (from Timer.js)</div> */}
                                    <div className="timer-label">Mins : Secs</div>
                                    <div className="timer-display">
                                        <button className="adjustbtn" onClick={() => this.adjustTimer("plusMins")}>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                            </svg>
                                        </button>
                                        <button className="adjustbtn" onClick={() => this.adjustTimer("plusSecs")}>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-plus-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path fill-rule="evenodd" d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                                            </svg>
                                        </button>
                                        <div className="countdown-display">
                                            {minutes} : {seconds}
                                        </div>
                                        <button className="adjustbtn" onClick={() => this.adjustTimer("minusMins")}>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                            </svg>
                                        </button>
                                        <button className="adjustbtn" onClick={() => this.adjustTimer("minusSecs")}>
                                            <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-dash-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                                                <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="timer-buttons">
                                        {/* start */}
                                        
                                            {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
                                                <button className="select my-3 mx-md-3 timer-btn work-btn btn-inline" onClick={this.startTimer}>Start</button>
                                            )}
                                        
                                        
                                        {/* stop */}
                                        
                                            {timerOn === true && timerTime >= 1000 && (
                                            <button className="select my-3 mx-md-3 timer-btn stop-btn" onClick={this.stopTimer}>Stop</button>
                                            )}
                                        
                                        {/* resume */}
                                      
                                            {timerOn === false &&
                                            (timerStart !== 0 && timerStart !== timerTime && timerTime !== 0) && (
                                                <button className="select my-3 mx-md-3 timer-btn resume-btn" onClick={this.startTimer}>Resume</button>
                                            )}
                                        
                                        {/* reset */}
                                       
                                            {(timerOn === false || timerTime < 1000) &&
                                            (timerStart !== timerTime && timerStart > 0) && (
                                                <button className="select my-3 mx-md-3 timer-btn reset-btn" onClick={this.resetTimer}>Reset</button>
                                            )}
                                        
                                        {/* clear */}
                                        
                                            {(timerOn === true || timerStart === timerTime) && timerTime >= 1000 && (
                                                <button className="select my-3 mx-md-3 timer-btn birth-btn btn-inline" onClick={this.clearTimer}>Clear</button>
                                            )}
                                        
                                
                                    </div>
                                </div>
                            </div> {/*wrapper*/}
                        </div>
                    </div>
                </div>
            </div>      
        );
    }
    
}

export default Timer;
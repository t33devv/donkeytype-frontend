import "../css/Home.css"

function Home() {
    return(
        <>
            <div className="home">
                <div className="option-bar">
                    <div className="left-section">
                        <button>
                            time
                        </button>
                        <button>
                            words
                        </button>
                    </div>
                    <div className="split">
                        <div className="rectangle">

                        </div>
                    </div>
                    <div className="right-section">
                        <button>
                            15
                        </button>
                        <button>
                            30
                        </button>
                        <button>
                            60
                        </button>
                        <button>
                            120
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home
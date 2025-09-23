import "../css/Home.css"

import { useEffect, useMemo, useRef, useState } from "react";

function TypingWindow() {
    const wordSource = useMemo(
        () =>
            "the quick brown fox jumps over the lazy dog"
                .split(" "),
        []
    )

    const [words, setWords] = useState([]);
    const [index, setIndex] = useState(0);
    const [input, setInput] = useState("");
    const [results, setResults] = useState([]);
    const inputRef = useRef(null);

    useEffect(() => {
        const pool = [];
        while (pool.length < 30) {
            pool.push(wordSource[Math.floor(Math.random() * wordSource.length)])
        }
    }, [wordSource]);

    useEffect(() => {
        if (inputRef.current) inputRef.current.focus()
    }, [])

    function handleKeyDown(e) {
        if (e.key === " " || e.key === "Enter") {
            e.preventDefault()
            commitWord()
        }
    }

    function commitWord() {
        if (index >= words.length) return;
        const target = words[index]
        const verdict = input.trim() === target ? "correct" : "incorrect";
        console.log(verdict)
        setResults(prev => {
            const next = [...prev]
            next[index] = verdict
            return next;
        })
        setIndex(idx => idx + 1)
        setInput("")
    }

    function resetTest() {
        const pool = []
        while (pool.length < 30) {
            pool.push(wordSource[Math.floor(Math.random() * wordSource.length)])
        }
        setWords(pool)
        setIndex(0)
        setInput("")
        setResults([])
        if (inputRef.current) inputRef.current.focus();
    }

    return (
        <>
            <div className="typing-container" onClick={() => inputRef.current?.focus()}>
                
                <div className="words" aria-live="polite">
                    <span className="completed-part">
                        {words.slice(0, index).join(" ")}
                    </span>
                    {words.map((w, i) => {
                        const isCurrent = i === index
                        const status = results[i];
                        return (
                            <span
                                key={i}
                                className={[
                                    "word",
                                    isCurrent ? "current" : "",
                                    status === "correct" ? "correct" : "",
                                    status === "incorrect" ? "incorrect" : ""
                                ].join(" ").trim()}
                            >
                                {console.log(words)}
                               
                                {isCurrent ? (
                                    <span className={input.length > 0 ? "active" : "inactive"}>
                                        {input.length < w.length ? (
                                            <>
                                                <span className="completed-part">
                                                    {w.slice(0, input.length)}
                                                </span>
                                                <span className="current-letter">{w[input.length]}</span>
                                                {w.slice(input.length + 1)}
                                            </>
                                        ) : (
                                            <>
                                                <span className="completed-part">
                                                    {/* {words.slice(0, i)} */}
                                                    {w.slice(0, w.length - 1)}
                                                    <span className="current-letter">{w[w.length - 1]}</span>
                                                </span>
                                                
                                            </>
                                        )}
                                        
                                    </ span>
                                ) : (
                                    i > index ? w : ""
                                )}{" "}
                            </span>
                        )
                    })}
                </div>

                <input
                    ref={inputRef}
                    className="typing-input"
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder={words[index] ? "type here..." : "done"}
                    disabled={index >= words.length}
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                />
                <div className="typing-header">
                    <button className="reset-btn" onClick={resetTest}>⟳</button>
                </div>
            </div>
        </>
    )
}

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

            <TypingWindow />
        </>
    );
}

export default Home
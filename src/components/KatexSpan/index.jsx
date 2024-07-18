"use client";
 import "katex/dist/katex.min.css";
 import renderMathInElement from "katex/contrib/auto-render/auto-render";
 import { useEffect, useRef } from "react";

export default function KatexSpan({text, ...delegated}) {
    const katexTextRef = useRef();
    useEffect(() => {
        if (katexTextRef.current) {
            renderMathInElement(katexTextRef.current, {
                delimiters: [
                    {left: "$$", right: "$$", display: true}, 
                    {left: "$", right: "$", display: false}, 
                ],
            });
        }

    }, [text]); 
    console.log(katexTextRef.current)
    return (
        <span ref={katexTextRef} {...delegated}>{text}</span>
    )
}
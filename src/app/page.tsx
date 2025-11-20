'use client'
import {fullOctave} from "@/lib/audio";
import Key from "@/components/Key";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Slider} from "@/components/ui/slider";
import {useEffect, useState} from "react";
import DebugConsole from "@/components/DebugConsole";


export default function Home() {
    const [octaves, setOctaves] = useState<number>(0)
    const [text, setText] = useState<string>("")
    useEffect(() => {
        console.log(octaves)
    }, [octaves])
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="font-bold text-2xl mx-auto flex-col">
                <p className={"font-bold text-2xl mx-auto text-center w-fit"}> Virtual Keyboard </p>
                <p className={"font-light text-lg italic mx-auto text-center w-fit"}>(Apple Cider Bottle)</p>
            </header>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className={"grid grid-rows-1 grid-flow-col min-w-fit flex-nowrap mx-auto"}>
                    {...Array(octaves + 1).fill(fullOctave).flat().map((el, idx) => (
                        <Key text={text} setText={setText} key={`${el}${4 - octaves/2 + Math.floor(idx/12)}`} note={el} octave={4 - octaves/2 + Math.floor(idx/12)} className={"row-end-1"}/>))}
                    <Key text={text} setText={setText} note={"c"} octave={4 + octaves/2 + 1} className={"row-end-1"}/>
                </div>
                <div className={"flex flex-row items-center min-w-full justify-between mx-auto"}>
                    {/*<Card className={"w-full sm:max-w-[40vw] md:max-w-[17vw] mx-2"}>
                        <CardHeader>
                            <CardTitle>
                                About
                            </CardTitle>
                            <CardDescription>
                                More about this webpage&#39;s development.
                            </CardDescription>
                        </CardHeader>

                    </Card>*/}
                    <Card className={"w-full md:max-w-[17vw] mx-auto"}>
                        <CardHeader>
                            <CardTitle className={"w-full"}>
                                Octaves
                            </CardTitle>
                            <CardDescription className={""}>
                                How many octaves should the virtual keyboard have?
                            </CardDescription>
                        </CardHeader>
                        <CardContent className={"w-full"}>
                            <Slider title={"Keys"} defaultValue={[0]} max={6} step={2} className={"w-full"} onValueChange={async (val) => {setOctaves(val[0])}}/>
                        </CardContent>
                        <button className={"cursor-pointer bg-blue-400 w-12 h-12"} onTouchStart={() => setText("touch")} onClick={() => setText("click")}/>
                        <DebugConsole text={text}/>
                    </Card>
                </div>

            </main>
        </div>
    );
}

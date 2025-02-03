'use client'
import {fullOctave} from "@/lib/audio";
import Key from "@/components/Key";

export default function Home() {
    return (
        <div
            className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <header className="font-bold text-2xl">
                Test
            </header>
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <div className={"grid grid-rows-1 grid-flow-col min-w-fit flex-nowrap "}>
                    { ...fullOctave.map((el) => (<Key key={`${el+"4"}`} note={el} octave={4} className={"row-end-1"}/>))}
                </div>
            </main>
        </div>
    );
}

import GenericKey from "@/components/GenericKey";
import "../app/globals.css"


// we assume the note is a real sharp
export default function SharpKey({note, octave, className} : {note : string, octave : number, className : string}) {
    return (
        <div>
            <GenericKey className={"w-6 h-20 mb-2 border-2 rounded text-center flex flex-col-reverse text-xs py-2 bg-accent-foreground/10 border-accent-foreground/20 cursor-pointer" + " " + className} note={note} octave={octave}>{note}</GenericKey>
        </div>
    )
}
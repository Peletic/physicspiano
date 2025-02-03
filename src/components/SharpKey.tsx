import GenericKey from "@/components/GenericKey";
import "../app/globals.css"


// we assume the note is a real sharp
export default function SharpKey({note, octave, className} : {note : string, octave : number, className : string}) {
    return (
        <div>
            <GenericKey className={"min-w-2 min-h-4 mb-2 border-2 rounded p-2 bg-accent-foreground/10 border-accent-foreground/20 cursor-pointer" + " " + className} note={note} octave={octave}>{note}{octave}</GenericKey>
        </div>
    )
}
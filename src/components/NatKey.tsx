import GenericKey from "@/components/GenericKey";
import "../app/globals.css"


export default function NatKey({note, octave, className} : {note : string, octave : number, className : string}) {
    return (
        <div>
            <GenericKey className={"min-w-4 mt-2 min-h-5 border-2 rounded p-2 border-accent-foreground/20 cursor-pointer" + " " + className} note={note} octave={octave}>{note}{octave}</GenericKey>
        </div>
    )
}
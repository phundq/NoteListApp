import { NoteLabel } from './note-label';
import { NoteType } from './note-type';
export class Note{
    id: number;
    title: string;
    content: string;
    description: string;
    noteLabelsDTO: NoteLabel[];
    NoteTypeDTO: NoteType;
    created: number;
    modified: number;

    constructor(_id: number, title: string, content: string, description: string,
                NoteLabelsDTO: NoteLabel[], noteTypeDTO: NoteType, created: number, modified: number ){
        this.id = _id;
        this.title = title;
        this.content = content;
        this.description = description;
        this.noteLabelsDTO = this.noteLabelsDTO;
        this.NoteTypeDTO = noteTypeDTO;
        this.created = created;
        this.modified = modified;
    }
}
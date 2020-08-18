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

}
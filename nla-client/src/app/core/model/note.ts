export class Note{
    id: number;
    title: string;
    content: string;
    noteType: number;
    created: number;
    modified: number;

    constructor(_id: number, title: string, content: string,
                noteType: number, created: number, modified: number ){
        this.id = _id;
        this.title = title;
        this.content = content;
        this.noteType = noteType;
        this.created = created;
        this.modified = modified;
    }
}
export class Note{
    id: number;
    title: string;
    content: string;
    description: string;
    noteTypeId: number;
    created: number;
    modified: number;

    constructor(_id: number, title: string, content: string, description: string,
                noteTypeId: number, created: number, modified: number ){
        this.id = _id;
        this.title = title;
        this.content = content;
        this.description = description;
        this.noteTypeId = noteTypeId;
        this.created = created;
        this.modified = modified;
    }
}
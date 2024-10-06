
  export class Note {
    static id = 0;
    constructor(header, body) {
      Note.id++;
      this.id = Note.id;
      this.header = header;
      this.body = body;
    }
  }
  export class FeedbaskSystemLogic {
    notes = [];
    
    edit(id, { header, body }) {
      let newNote;
      for (let i = 0; i < this.notes.length; i++) {
        if (id === this.notes[i].id) {
          if (header && body) {
            newNote = new Note(header, body);
          } else if (header) {
            newNote = new Note(header, this.notes[i].body);
          } else if (body) {
            newNote = new Note(this.notes[i].header, body);
          }
          this.notes[i] = newNote;
          break;
        }
      }
    }
    add(header, body) {
      this.notes.push(new Note(header, body));
    }
    delete(id) {
      this.notes = this.notes.filter((e) => e.id !== id);
    }
 
  }
  
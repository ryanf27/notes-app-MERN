import "./noteeditor.css";
const NoteEditor = () => {
  return (
    <div className="note-editor">
      <h2>Notes Editor</h2>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input type="text" placeholder="Note Title" />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea placeholder="Note Content"></textarea>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default NoteEditor;

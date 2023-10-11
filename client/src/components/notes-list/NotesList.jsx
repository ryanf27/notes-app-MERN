import "./noteslist.css";

const NotesList = () => {
  return (
    <div className="notes-list">
      <h2>My Notes</h2>
      <ul>
        {/* Map through your notes and display them as a list */}
        <li>
          <a href="#">Note 1</a>
        </li>
        <li>
          <a href="#">Note 2</a>
        </li>
        {/* Add more notes as needed */}
      </ul>
    </div>
  );
};

export default NotesList;

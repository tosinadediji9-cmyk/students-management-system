
import './App.css'

function App() {
 

  return (
    <>
       <div className="app-shell">
    <header className="hero-panel">
      <div>
        <p className="eyebrow">Student Management System By <span className='ayomide-color'>Ayomide</span></p>
        <h1>Track students with confidence.</h1>
        <p>Manage student records, update details, and view your class roster in a polished dashboard.</p>
      </div>
      <div className="hero-graphic">📚</div>
    </header>

    <main className="content-grid">
      <section className="summary-card">
        <h2>Quick Actions</h2>
        <p>Use the form below to add or update a student record instantly.</p>
      </section>

      <section className="panel card form-card">
        <div className="panel-header">
          <h2>Student Form</h2>
          <span className="status-tag" id="form-status">Create</span>
        </div>
        <form id="student-form">
          <div className="field-row">
            <label for="name">Full Name</label>
            <input id="name" name="name" type="text" placeholder="Jane Doe" required />
          </div>
          <div className="field-row">
            <label for="email">Email Address</label>
            <input id="email" name="email" type="email" placeholder="jane@example.com" required />
          </div>
          <div className="field-row">
            <label for="course">Course</label>
            <input id="course" name="course" type="text" placeholder="Web Development" required />
          </div>
          <div className="field-row">
            <label for="level">Level</label>
            <select id="level" name="level" required>
              <option value="">Select Level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
            </select>
          </div>
          <div className="button-row">
            <button type="submit" className="button primary">Save Student</button>
            <button type="button" className="button secondary" id="reset-button">Reset</button>
          </div>
        </form>
      </section>

      <section className="panel card table-card">
        <div className="panel-header">
          <h2>Student Roster</h2>
          <button className="button tertiary" id="refresh-button">Refresh List</button>
        </div>
        <div className="table-scroll">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Level</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody id="student-table-body"></tbody>
          </table>
        </div>
      </section>
    </main>

    <div className="toast-container" id="toast-container"></div>
  </div>

    </>
  )
}


export default App

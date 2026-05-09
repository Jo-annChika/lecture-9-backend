const BASE_URL = "http://localhost:3000";

function setLoading(visible) {
  document.getElementById("loading").style.display = visible ? "block" : "none";
}

function showError(msg) {
  const el = document.getElementById("error");
  el.textContent = msg;
  el.style.display = msg ? "block" : "none";
}

function getMessage() {
  setLoading(true);
  showError("");
  document.getElementById("message-card").classList.remove("visible");
  document.getElementById("student-card").classList.remove("visible");

  fetch(`${BASE_URL}/api/message`)
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      document.getElementById("out-message").textContent = data.message;
      document.getElementById("out-course").textContent  = data.course;
      document.getElementById("out-year").textContent    = data.year;
      document.getElementById("out-time").textContent = new Date(data.time).toLocaleString();
      document.getElementById("message-card").classList.add("visible");
    })
    .catch(error => {
      setLoading(false);
      showError("Error: Could not reach the server. Is it running?");
      console.error("Error:", error);
    });
}

function getStudent() {
  setLoading(true);
  showError("");
  document.getElementById("message-card").classList.remove("visible");
  document.getElementById("student-card").classList.remove("visible");

  fetch(`${BASE_URL}/api/student`)
    .then(response => response.json())
    .then(data => {
      setLoading(false);
      document.getElementById("out-name").textContent = data.name;
      document.getElementById("out-role").textContent = data.role;
      document.getElementById("student-card").classList.add("visible");
    })
    .catch(error => {
      setLoading(false);
      showError("Error: Could not reach the server. Is it running?");
      console.error("Error:", error);
    });
}
const SUPABASE_URL = "https://vzqasrmmamvqmyronwrp.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ6cWFzcm1tYW12cW15cm9ud3JwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Njg3Njc5MDgsImV4cCI6MjA4NDM0MzkwOH0.lEe_fiepk2oG5jGBn38Ew21hAM09uwfgTo7tQir30yk";


async function saveMessage() {
  const name = document.getElementById("name").value;
  const message = document.getElementById("message").value;
  const status = document.getElementById("status");

  if (!name || !message) {
    status.innerText = "Please fill all fields";
    return;
  }

  const response = await fetch(`${SUPABASE_URL}/rest/v1/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "apikey": SUPABASE_ANON_KEY,
      "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
    },
    body: JSON.stringify({ name, message })
  });

  if (response.ok) {
    status.innerText = "Message saved successfully!";
    document.getElementById("name").value = "";
    document.getElementById("message").value = "";
  } else {
    status.innerText = "Error saving message";
  }
}

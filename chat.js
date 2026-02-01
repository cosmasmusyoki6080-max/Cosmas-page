function sendMessage() {
  const chatBox = document.getElementById("chat-box");
  const msgInput = document.getElementById("message");
  const sender = document.getElementById("sender").value;

  if (msgInput.value.trim() === "") return;

  const msgDiv = document.createElement("div");
  msgDiv.className = sender === "Cosjacq" ? "message me" : "message queen";

  msgDiv.innerHTML = `
    <div class="sender">${sender}</div>
    <div class="text">${msgInput.value}</div>
    <div class="msg-actions">
      <span onclick="editMsg(this)">Edit</span>
      <span onclick="deleteMsg(this)">Delete</span>
      <span onclick="copyMsg(this)">Copy</span>
      <span onclick="replyMsg(this)">Reply</span>
    </div>
  `;

  chatBox.appendChild(msgDiv);
  msgInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function deleteMsg(el) {
  el.closest(".message").remove();
}

function editMsg(el) {
  const textDiv = el.closest(".message").querySelector(".text");
  const newText = prompt("Edit message:", textDiv.textContent);
  if (newText !== null) textDiv.textContent = newText;
}

function copyMsg(el) {
  const text = el.closest(".message").querySelector(".text").textContent;
  navigator.clipboard.writeText(text);
  alert("Message copied 💜");
}

function replyMsg(el) {
  const text = el.closest(".message").querySelector(".text").textContent;
  document.getElementById("message").value = "Replying to: " + text;
}
function addEmoji(emoji) {
  const msgInput = document.getElementById("message");
  msgInput.value += emoji;
  msgInput.focus(); // keeps cursor active
}
<script>
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicBtn");

  function toggleMusic() {
    if (music.paused) {
      music.play();
      btn.innerHTML = "⏸ Pause Music";
    } else {
      music.pause();
      btn.innerHTML = "▶ Play Music";
    }
  }
</script>

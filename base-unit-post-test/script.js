const conversationData = [
    {
        userName: "user",
        userText: "สำเร็จ ! ร้านขายผักพร้อมเปิดให้บริการเเล้ว ",
    },
    {
        userName: "คุณลุง",
        userText: "ขอบใจ Theta และ user อีกครั้งที่ทำให้ร้านขายผักของชาวบ้านออกมาสมบูรณ์แบบสุด ๆ",
    },
    {
        userName: "user",
        userText: "จ้าบของเเท้ ! อยากทำอะไรสนุก ๆ ต่อแล้ว",
    },
    {
        userName: "Theta",
        userText: "งั้นเรามาเล่นเกมการ์ดจับคู่ภาพเสริมสร้างความรู้ก่อนไปช่วยชาวบ้านต่อดีไหมuser ",
    },
    {
        userName: "user",
        userText: "เยี่ยมไปเลยพี่ Theta Go Go Go",
    },
];

let currentConversationIndex = 0;

function displayInitialConversation() {
    // Call nextPage() to display the first conversation
    nextPage();
}

// Function to display the next conversation
function nextPage() {
    // Get the next conversation from the conversation data
    const conversation = conversationData[currentConversationIndex];
    // Check if there are more conversations
    if (conversation) {
        // Update the dialog box with the conversation data
        document.getElementById("userName").textContent = conversation.userName;
        document.getElementById("userText").textContent = conversation.userText;
        if(conversation.userName != 'user')
        {
            document.getElementById("userName").style.display = 'block';
        }

        // Display the appropriate character image based on the userName
        const charImages = document.querySelectorAll('.char img');
        charImages.forEach(img => {
            if (img.alt === conversation.userName) {
                img.style.display = 'block';
            } else {
                img.style.display = 'none';
            }
        });
        
        // Increment the conversation index for the next iteration
        currentConversationIndex++;
    } else {
        // If there are no more conversations, redirect to the specified URL
        window.location.href = "https://cdn-icons-png.flaticon.com/512/1505/1505465.png";
    }
}



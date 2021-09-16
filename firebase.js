        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-app.js";
        import { getStorage } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-storage.js";
        import {getAuth } from "https://www.gstatic.com/firebasejs/9.0.2/firebase-auth.js";
       
        
        const firebaseConfig = {
            apiKey: "AIzaSyDT32j2oNNot-ihw7MGUG27KHfHlNZAJQY",
            authDomain: "online-library-60b05.firebaseapp.com",
            projectId: "online-library-60b05",
            storageBucket: "online-library-60b05.appspot.com",
            messagingSenderId: "112650820295",
            appId: "1:112650820295:web:b20db161138efccaf2fce2"
        };

        // Initialize Firebase
     const app = initializeApp(firebaseConfig);
     const storage = getStorage(app)
     const auth = getAuth()
   

   

     export { storage , auth}

    
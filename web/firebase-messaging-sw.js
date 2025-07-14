// web/firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.2/firebase-messaging-compat.js');

// Inicializa Firebase con tu configuración
firebase.initializeApp({
    apiKey: "AIzaSyA5DafID3eeXLv95-cVU2MDrO7WE9zHSQQ",
    authDomain: "crestcapnlapp.firebaseapp.com",
    projectId: "crestcapnlapp",
    storageBucket: "crestcapnlapp.firebasestorage.app",
    messagingSenderId: "837493135954",
    appId: "1:837493135954:web:806333c6716c3aec429d8b",
    measurementId: "G-Z6NN51M93X"
});

// Configura el listener para notificaciones en segundo plano
const messaging = firebase.messaging();

// messaging.onBackgroundMessage(payload => {
//     console.log('[firebase-messaging-sw.js] Mensaje en background:', payload);
//     const { title, ...options } = payload.notification;
//     self.registration.showNotification(title, options);

// });
messaging.onBackgroundMessage(payload => {
    console.log('[SW] 📥 Mensaje background recibido:', payload);
    if (payload.notification) {
        const { title, ...options } = payload.notification;
        console.log('[SW] 🔔 Desplegando notificación:', title, options);
        self.registration.showNotification(title, options);
    } else {
        console.warn('[SW] ⚠️ Payload sin sección notification:', payload);
    }
});

// Además, captura el evento push directamente
self.addEventListener('push', event => {
    console.log('[SW] 🔔 Evento push raw:', event);
});
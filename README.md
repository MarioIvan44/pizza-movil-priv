# Pizza Móvil

Aplicación móvil desarrollada con React Native y Expo para la gestión de pedidos y clientes de una pizzería.

## Descripción general

Este proyecto está diseñado para funcionar como una app móvil nativa para clientes de una pizzería, con:

- Inicio de sesión y registro de usuarios
- Validación de cuenta por correo electrónico
- Navegación entre pantallas principales
- Catálogo de productos
- Carrito de compras
- Visualización de pedidos
- Integración con backend para autenticación y datos

La app se compone de:

- `src/` → screens, hooks, contextos, componentes y navegación
- `backend/` → API REST con Express y MongoDB
- `App.js` → punto de entrada principal de la aplicación

## Tecnologías principales

- React Native
- Expo
- React Navigation
- AsyncStorage
- React Native Safe Area Context
- DateTimePicker para selección de fecha
- Fetch nativo para consumo de API

## Dependencias instaladas

Estas son las dependencias principales del proyecto:

```bash
npm install expo
npm install @react-navigation/native
npm install @react-navigation/bottom-tabs
npm install @react-native-async-storage/async-storage
npm install react-native-safe-area-context
npm install react-native-screens
npm install @react-native-community/datetimepicker
npm install @expo/vector-icons
npm install expo-status-bar
```

Si deseas instalar todo desde cero con el proyecto ya generado, también puedes ejecutar:

```bash
npm install
```

## Scripts disponibles

En el archivo `package.json` se usan estos scripts:

```bash
npm start
npm run android
npm run ios
npm run web
```

### Comandos útiles

```bash
# Iniciar la app en modo desarrollo
npm start

# Ejecutar en Android
npm run android

# Ejecutar en iOS
npm run ios

# Ejecutar en web (si se habilita)
npm run web
```

## Estructura del proyecto

```bash
pizza-movil/
├── App.js
├── app.json
├── index.js
├── package.json
├── README.md
├── assets/
├── backend/
│   ├── app.js
│   ├── config.js
│   ├── database.js
│   ├── index.js
│   ├── package.json
│   └── src/
│       ├── controllers/
│       ├── models/
│       ├── routes/
│       └── utils/
├── src/
│   ├── components/
│   ├── context/
│   ├── hooks/
│   ├── navigation/
│   └── screens/
└── node_modules/
```

## Backend

El backend se encuentra dentro de la carpeta `backend/` y expone la API REST que consume la app móvil. Incluye rutas para:

- clientes
- autenticación
- registro y verificación por correo
- productos
- pedidos/carrito
- proveedores y sucursales

## Nota importante

Este proyecto está pensado para entorno móvil, no para frontend web, y se comunica con el backend mediante fetch y cookies para manejar la sesión del usuario.

## Requisitos

- Node.js
- npm o yarn
- Expo CLI
- Android Studio / emulador Android o dispositivo físico con Expo Go

## Inicio rápido

```bash
cd pizza-movil
npm install
npm start
```

Luego selecciona la opción de tu dispositivo o emulador para correr la aplicación.

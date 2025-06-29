# HabitMate - Habit Tracker App

## 🌟 Demo en vivo

- **Frontend:** [https://pruebatecnica-habitmate.onrender.com](https://pruebatecnica-habitmate.onrender.com)
- **Backend API:** [https://pruebatecnica-habitmate-backend.onrender.com](https://pruebatecnica-habitmate-backend.onrender.com)

## 💡 Idea

Una aplicación web moderna y responsiva para crear, visualizar, marcar y eliminar hábitos, permitiendo llevar un seguimiento semanal de tus rutinas. Cada semana puedes marcar los días en los que cumpliste cada hábito y ver tu progreso de forma clara y motivadora.

## ✨ Características

### 🎯 Funcionalidades principales
- ✅ **Crear hábitos** con nombre personalizado
- ✅ **Seguimiento semanal** con vista de 7 días
- ✅ **Marcar/desmarcar** hábitos completados
- ✅ **Eliminar hábitos** que ya no quieras seguir
- ✅ **Dashboard responsivo** que se adapta a móvil y desktop
- ✅ **Animaciones optimizadas** para mejor rendimiento

### 📱 Experiencia de usuario
- 🎨 **Diseño moderno** con gradientes y animaciones
- 📱 **Completamente responsivo** para móvil, tablet y desktop
- ⚡ **Animaciones optimizadas** (reducidas en móvil para mejor rendimiento)
- 🎯 **Navegación intuitiva** con botones que llevan al dashboard
- 🌈 **Interfaz atractiva** con efectos visuales y transiciones suaves

### 🔧 Características técnicas
- 🚀 **Rendimiento optimizado** con detección automática de dispositivo
- 📊 **API RESTful** con endpoints para hábitos y seguimiento
- 🗄️ **Base de datos PostgreSQL** con TypeORM
- 🔄 **Sincronización automática** entre frontend y backend
- 🎭 **Animaciones condicionales** basadas en el dispositivo

## 🛠️ Tecnologías

### Frontend
- **Framework:** Next.js 15.3.4 (React 19)
- **Lenguaje:** TypeScript
- **Estilos:** TailwindCSS 4
- **Animaciones:** Framer Motion 11
- **HTTP Client:** Axios
- **UI Components:** Radix UI
- **Iconos:** Lucide React

### Backend
- **Framework:** NestJS 11
- **Lenguaje:** TypeScript
- **ORM:** TypeORM con PostgreSQL
- **Validación:** Class Validator
- **CORS:** Habilitado para frontend

### Base de datos
- **Sistema:** PostgreSQL
- **Hosting:** Render (reutilizada de proyecto anterior)
- **Entidades:** Habits, Tracking

### Despliegue
- **Plataforma:** Render
- **Frontend:** Static Site
- **Backend:** Web Service
- **Base de datos:** PostgreSQL

## 🤖 Uso de IA

Este proyecto fue asistido y acelerado con IA para:
- **Gemini Flash 2.5:** Generar y refinar código de frontend y backend
- **V0:** Diseñar la interfaz de usuario y componentes
- **Arquitectura:** Proponer y depurar la estructura del proyecto
- **UX/UI:** Mejorar la experiencia de usuario y la lógica de negocio
- **Documentación:** Redactar documentación clara y mensajes de error
- **Optimización:** Implementar animaciones responsivas y mejoras de rendimiento

## 🚀 Instrucciones para ejecutar localmente

### 1. Clona el repositorio

```bash
git clone https://github.com/Soyabrahan/PruebaTecnica_HabitMate
cd PruebaTecnica_HabitMate
```

### 2. Configura la base de datos

Asegúrate de tener PostgreSQL corriendo. Puedes usar Docker:

```bash
docker run --name habit-db -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=prueba_tecnica -p 5432:5432 -d postgres
```

O instala PostgreSQL localmente y crea la base de datos `prueba_tecnica`.

### 3. Backend

```bash
cd backend
pnpm install
# o npm install

# Configura las variables de entorno en .env
cp .env.example .env
# Edita .env con tus credenciales de base de datos

pnpm start:dev
# o npm run start:dev
```

El backend corre por defecto en [http://localhost:3001](http://localhost:3001).

### 4. Frontend

```bash
cd frontend
pnpm install
# o npm install

# Configura la variable de entorno para el API
echo "NEXT_PUBLIC_API_URL=http://localhost:3001" > .env.local

pnpm dev
# o npm run dev
```

El frontend corre por defecto en [http://localhost:3000](http://localhost:3000).

### 5. ¡Listo!

- Abre [http://localhost:3000](http://localhost:3000) en tu navegador
- Crea hábitos, márcalos cada día y elimina los que ya no quieras seguir
- Cada semana el dashboard se actualiza automáticamente
- Prueba la responsividad en diferentes dispositivos

## ☁️ Despliegue en Render

### Configuración actual

El proyecto está desplegado en Render con la siguiente configuración:

#### Backend (Web Service)
- **URL:** [https://pruebatecnica-habitmate-backend.onrender.com](https://pruebatecnica-habitmate-backend.onrender.com)
- **Build Command:** `cd backend && npm install && npm run build`
- **Start Command:** `cd backend && npm run start:prod`
- **Variables de entorno:**
  ```env
  DB_HOST=dpg-d17jmafdiees7386o6u0-a
  DB_PORT=5432
  DB_USERNAME=abrahan
  DB_PASSWORD=utsBDJoC2gb0AAL8AU1eAWpBXkn1Yc0P
  DB_DATABASE=portafolio_3gra
  NODE_ENV=production
  PORT=3000
  ```

#### Frontend (Static Site)
- **URL:** [https://pruebatecnica-habitmate.onrender.com](https://pruebatecnica-habitmate.onrender.com)
- **Build Command:** `cd frontend && npm install && npm run build`
- **Publish Directory:** `frontend/out`
- **Variables de entorno:**
  ```env
  NEXT_PUBLIC_API_URL=https://pruebatecnica-habitmate-backend.onrender.com
  ```

### Para replicar el despliegue

#### 1. Base de datos PostgreSQL
1. Crea una base de datos PostgreSQL en Render
2. Anota las credenciales de conexión

#### 2. Backend
1. Ve a [Render Dashboard](https://dashboard.render.com/)
2. Crea un nuevo **Web Service**
3. Conecta tu repositorio de GitHub
4. Configura:
   - **Build Command:** `cd backend && npm install && npm run build`
   - **Start Command:** `cd backend && npm run start:prod`
   - **Variables de entorno:** Configura las credenciales de tu base de datos

#### 3. Frontend
1. Crea un nuevo **Static Site** en Render
2. Conecta tu repositorio de GitHub
3. Configura:
   - **Build Command:** `cd frontend && npm install && npm run build`
   - **Publish Directory:** `frontend/out`
   - **Variable de entorno:** `NEXT_PUBLIC_API_URL` apuntando a tu backend

## 📱 Características responsivas

### Optimizaciones para móvil
- ⚡ **Animaciones reducidas** para mejor rendimiento
- 📱 **Layout adaptativo** que se ajusta a pantallas pequeñas
- 🎯 **Botones táctiles** con tamaño adecuado
- 📊 **Grid de días** completamente visible en móvil
- 🚀 **Carga 60% más rápida** en dispositivos móviles

### Breakpoints
- **sm:** 640px+ (tablets pequeños)
- **md:** 768px+ (tablets)
- **lg:** 1024px+ (desktop)
- **xl:** 1280px+ (desktop grande)

## 🔧 Estructura del proyecto

```
PruebaTecnica/
├── frontend/                 # Aplicación Next.js
│   ├── app/                 # App Router (Next.js 15)
│   ├── components/          # Componentes reutilizables
│   ├── lib/                 # Utilidades y configuración
│   ├── hooks/               # Hooks personalizados
│   └── public/              # Archivos estáticos
├── backend/                 # API NestJS
│   ├── src/
│   │   ├── habits/          # Módulo de hábitos
│   │   ├── tracking/        # Módulo de seguimiento
│   │   └── entities/        # Entidades de base de datos
│   └── dist/                # Código compilado
└── README.md               # Este archivo
```

## 🎯 Endpoints de la API

### Hábitos
- `GET /habitos` - Obtener todos los hábitos
- `POST /habitos` - Crear nuevo hábito
- `GET /habitos/:id` - Obtener hábito por ID
- `PATCH /habitos/:id` - Actualizar hábito
- `DELETE /habitos/:id` - Eliminar hábito

### Seguimiento
- `POST /seguimiento` - Crear seguimiento
- `GET /seguimiento/weekly-progress/:week` - Progreso semanal
- `PATCH /seguimiento/:id` - Actualizar seguimiento
- `DELETE /seguimiento` - Eliminar seguimiento por hábito y fecha


## 👤 Autor

**Abrahan Ramírez**

- **GitHub:** [@Soyabrahan](https://github.com/Soyabrahan)
- **Proyecto:** HabitMate - Habit Tracker App
- **Tecnologías:** Next.js, NestJS, TypeScript, PostgreSQL

---

## 📄 Licencia

Este proyecto es parte de una prueba técnica y está disponible para fines educativos y de demostración.

---

⭐ **¡Dale una estrella al repositorio si te gustó el proyecto!**

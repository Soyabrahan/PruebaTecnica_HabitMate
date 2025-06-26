# Habit Tracker - Prueba Técnica

## 💡 Idea

Una aplicación web para crear, visualizar, marcar y eliminar hábitos, permitiendo llevar un seguimiento semanal de tus rutinas. Cada semana puedes marcar los días en los que cumpliste cada hábito y ver tu progreso de forma clara y motivadora.

## 🛠️ Tecnologías

- **Frontend:** Next.js (React), TypeScript, TailwindCSS, Framer Motion, Axios
- **Backend:** NestJS, TypeORM, PostgreSQL
- **Otros:** pnpm, Docker (opcional para base de datos)

## 🤖 Uso de IA

Este proyecto fue asistido y acelerado con IA (Geminis Flash 2.5) para:
- Generar y refinar código de frontend y backend.
- Proponer y depurar la arquitectura.
- Mejorar la experiencia de usuario y la lógica de negocio.
- Redactar documentación y mensajes de error claros.
 -Tambien se uso V0 para diseñar el frontend

## 🚀 Instrucciones para ejecutar localmente

### 1. Clona el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git
cd tu-repo
```

### 2. Configura la base de datos

Asegúrate de tener PostgreSQL corriendo. Puedes usar Docker:

```bash
docker run --name habit-db -e POSTGRES_PASSWORD=1234 -e POSTGRES_DB=PruebaTecnica -p 5432:5432 -d postgres
```

O instala PostgreSQL localmente y crea la base de datos `PruebaTecnica`.

### 3. Backend

```bash
cd backend
pnpm install
# o npm install
pnpm start:dev
# o npm run start:dev
```

El backend corre por defecto en [http://localhost:3001](http://localhost:3001).

### 4. Frontend

```bash
cd frontend
pnpm install
# o npm install
pnpm dev
# o npm run dev
```

El frontend corre por defecto en [http://localhost:3000](http://localhost:3000).

### 5. ¡Listo!

- Abre [http://localhost:3000](http://localhost:3000) en tu navegador.
- Crea hábitos, márcalos cada día y elimina los que ya no quieras seguir.
- Cada semana el dashboard se actualiza automáticamente.

---

## ☁️ Despliegue en Render

### 1. Backend (NestJS)

1. Ve a [https://dashboard.render.com/](https://dashboard.render.com/) y crea un nuevo servicio de tipo **Web Service**.
2. Elige tu repositorio y selecciona la carpeta `backend` como root.
3. Configura las variables de entorno necesarias (por ejemplo, `DB_HOST`, `DB_PORT`, `DB_USERNAME`, `DB_PASSWORD`, `DB_DATABASE`). Ejemplo:
   - `DB_HOST=tu_host`
   - `DB_PORT=5432`
   - `DB_USERNAME=postgres`
   - `DB_PASSWORD=1234`
   - `DB_DATABASE=PruebaTecnica`
4. En el campo de comando de inicio pon:
   ```bash
   pnpm install && pnpm start:prod
   # o
   npm install && npm run start:prod
   ```
5. Asegúrate de tener una base de datos PostgreSQL creada en Render y enlazada.

### 2. Frontend (Next.js)

1. Crea otro **Web Service** en Render y selecciona la carpeta `frontend` como root.
2. Configura la variable de entorno `NEXT_PUBLIC_API_URL` apuntando al endpoint público del backend desplegado en Render (por ejemplo, `https://tu-backend.onrender.com`).
3. En el comando de inicio pon:
   ```bash
   pnpm install && pnpm build && pnpm start
   # o
   npm install && npm run build && npm start
   ```
4. Elige el puerto 3000 (por defecto Next.js lo usa).

### 3. Notas

- Render instala automáticamente las dependencias si usas `pnpm` o `npm`.
- Si usas dominios personalizados, configura los CORS en el backend.
- Puedes usar los servicios gratuitos de Render para pruebas.

---

## 👤 Autor

Creado por **Abrahan Ramírez**

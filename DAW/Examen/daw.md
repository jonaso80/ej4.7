# 📝 CHULETAS EXAMEN: DESPLIEGUE DE APLICACIONES WEB (DAW)

---

## 🟢 I. GIT: CONTROL DE VERSIONES

### 1. ⚙️ Configuración y Fundamentos
| Tarea | Comando Clave | Detalle | 💡 Caso Práctico (Según Práctica 1) |
| :--- | :--- | :--- | :--- |
| **Inicializar Repo** | `git init` | Crea el repositorio local (la carpeta `.git`). | `git init` |
| **Config. Global** | `git config --global user.name "Tu Nombre"` | Identificación del autor de los *commits*. | `git config --global user.name "Izan"` |
| **Estado** | `git status` | Muestra archivos Untracked, Modified y Staged. | `git status` (Muestra `README.txt` como Untracked) |
| **Historial Completo** | `git log --oneline --graph --all` | Historial conciso, con gráfico de ramas y todas las referencias. | `git log --oneline` |
| **Ignorar Archivos**| `.gitignore` | Archivo que define patrones que Git debe ignorar. | `printf "log.txt\n*.log\n" > .gitignore` (Para ignorar archivos de logs) |

### 2. 💾 Ciclo de Commit (Guardar Cambios)
| Tarea | Comando Clave | Detalle | 💡 Caso Práctico (Según Práctica 1) |
| :--- | :--- | :--- | :--- |
| **Preparar Archivos**| `git add .` | Mueve todos los cambios del Área de Trabajo al **Área de Staging**. | `git add .` (Prepara el `.gitignore` y `README.txt` para el commit) |
| **Confirmar (Commit)**| `git commit -m "Mensaje"` | Crea una instantánea permanente en el repositorio local. | `git commit -m "Añadida estructura inicial del proyecto"` |
| **Corregir Commit** | `git commit --amend` | Combina los cambios preparados con el commit **anterior** (si aún no se ha subido). | (Después de un `add` de un archivo olvidado): `git commit --amend --no-edit` |

### 3. 🌳 Gestión de Ramas (Temario y Práctica 2)
| Tarea | Comando Clave | Detalle | 💡 Caso Práctico (Según Práctica 2) |
| :--- | :--- | :--- | :--- |
| **Crear y Cambiar** | `git checkout -b <nombre_rama>` | Crea una rama **y** se mueve a ella. | `git checkout -b feature/login` (Crea la rama para la funcionalidad de login) |
| **Cambiar de Rama** | `git checkout <nombre_rama>` | Mueve el `HEAD` a la rama especificada. | `git checkout master` |
| **Eliminar Rama** | `git branch -d <nombre_rama>` | Elimina una rama que ya ha sido fusionada. | `git branch -d feature/login` |

### 4. 🔄 Integración de Cambios (Merge vs Rebase)
| Tarea | Comando Clave | Detalle | 💡 Caso Práctico (Según Práctica 2) |
| :--- | :--- | :--- | :--- |
| **Fusión (Merge)** | `git merge <rama_origen>` | Integra los commits de otra rama, creando un **Commit de Fusión**. | (Estando en `master`): `git merge feature/login` |
| **Reorganizar (Rebase)**| `git rebase <rama_destino>` | **Reescribe el historial** moviendo los commits. | (Estando en `feature/otra`): `git rebase master` |
| **Seleccionar Commit** | `git cherry-pick <SHA>` | Copia **un solo commit** específico de una rama a la rama actual. | `git cherry-pick 743af2a` (Copia el commit de hotfix a la rama principal) |

### 5. ⏪ Deshacer Errores (Práctica 1 y 2)
| Tarea | Comando Clave | Detalle | 💡 Caso Práctico (Según Práctica 1/2) |
| :--- | :--- | :--- | :--- |
| **Deshacer `git add`** | `git reset HEAD <archivo>` | Saca el archivo del Área de Staging. | `git reset HEAD archivo.txt` |
| **Descartar Cambios** | `git checkout -- <archivo>` | Descarta los cambios locales en el Área de Trabajo (vuelve al último *commit*). | `git checkout -- archivo_modificado.js` |
| **Revertir (Seguro)** | `git revert <SHA_commit>` | Crea un **nuevo commit** que invierte los cambios. **Seguro para código compartido.** | `git revert 743af2a` (Deshace el commit de la funcionalidad fallida) |
| **Reset (Local)** | `git reset --hard HEAD^` | Elimina el último commit y los cambios locales. **Solo para código NO compartido.** | `git reset --hard HEAD^` (Elimina el último commit por error tipográfico) |

---

## 🔵 II. DOCKER: CONTENEDORES Y REGISTROS

### 1. 📦 Dockerfile: Construcción de Imágenes
| Instrucción | Uso Clave | 💡 Caso Práctico (Según Práctica 1) |
| :--- | :--- | :--- |
| **`FROM <imagen>`** | Define la imagen base (la capa inicial). | `FROM mariadb:10.5` |
| **`ENV clave=valor`** | Establece variables de entorno permanentes dentro de la imagen. | `ENV MYSQL_ROOT_PASSWORD=secret_root` |
| **`COPY <origen> <destino>`**| Copia archivos del host al contenedor. | `COPY ./sql/ /docker-entrypoint-initdb.d/` (Copia el script de inicialización) |
| **Inicialización BD**| Scripts SQL en `/docker-entrypoint-initdb.d/` se ejecutan al iniciar el contenedor. | (Ver `COPY` anterior). |
| **`EXPOSE <puerto>`** | Documenta el puerto de escucha del servicio (informativo). | `EXPOSE 3306` |

### 2. 🐳 Comandos del Contenedor
| Tarea | Comando Clave | Detalle | 💡 Caso Práctico (Según Práctica 1) |
| :--- | :--- | :--- | :--- |
| **Construir** | `docker build -t <usuario>/<repo>:<tag> .` | Construye la imagen localmente. | `docker build -t mi_usuario/db-personalizada:v1 .` |
| **Etiquetar (Hub)** | `docker tag <imagen_local> <usuario>/<repo>:<tag>` | Etiqueta una imagen local para cumplir con la nomenclatura de Docker Hub. | `docker tag db-personalizada:latest mi_usuario/db-personalizada:v1` |
| **Publicar** | `docker push <usuario>/<repo>:<tag>` | Sube la imagen etiquetada a tu repositorio en Docker Hub. | `docker push mi_usuario/db-personalizada:v1` |
| **Ejecutar** | `docker run -d -p <host>:<cont> <imagen>` | Arranca un contenedor en segundo plano (`-d`). | `docker run -d -p 3306:3306 mi_usuario/db-personalizada:v1` |
| **Entrar al Shell** | `docker exec -it <ID/nombre> /bin/bash` | Abre una terminal interactiva en un contenedor en ejecución. | `docker exec -it mariadb_prod /bin/bash` |
| **Limpieza Rápida**| `docker rm $(docker ps -aq)` | Elimina **todos** los contenedores detenidos. | `docker rm $(docker ps -aq)` |

---

## 🟣 III. DOCKER COMPOSE: APLICACIONES MULTI-CONTENEDOR

### 1. ⚡ Ciclo de Vida (Práctica 2)
| Tarea | Comando Clave | Detalle | 💡 Caso Práctico (Según Práctica 2) |
| :--- | :--- | :--- | :--- |
| **Levantar (Arrancar)** | `docker compose up -d` | Construye/descarga, crea la red y arranca **todos los servicios** en segundo plano (`-d`). | `docker compose up -d` (Arranca `db` y `web` de WordPress) |
| **Detener/Limpiar** | `docker compose down` | Detiene y elimina contenedores y la red (conserva volúmenes por defecto). | `docker compose down` (Detiene la aplicación sin borrar datos de la BD) |
| **Limpieza Total** | `docker compose down -v` | Detiene, elimina contenedores/red **Y elimina los volúmenes de datos**. | `docker compose down -v` (Elimina la aplicación y los datos de `data_mysql`) |
| **Logs** | `docker compose logs -ft` | Muestra logs de todos los servicios en tiempo real. | `docker compose logs -f web` (Muestra solo los logs del contenedor de WordPress) |
| **Ejecutar Shell** | `docker compose exec <servicio> /bin/bash` | Entra al contenedor de un servicio en ejecución. | `docker compose exec web /bin/bash` (Entra al contenedor de WordPress) |

### 2. 📝 Estructura de `docker-compose.yml` (WordPress + MariaDB)
| Sección/Campo | Propósito Clave | 💡 Caso Práctico (Según Práctica 2) |
| :--- | :--- | :--- |
| **`services`** | Definición de cada contenedor/microservicio. | `web:` y `db:` |
| **`image`** | Imagen a utilizar (descargada de un registro). | `image: wordpress:4.9.8` |
| **`ports`** | Mapeo de puertos: `[host]:[contenedor]`. | `ports: - "8080:80"` (Acceso a WordPress por el puerto 8080 del host) |
| **`volumes` (Persistencia)**| Montaje de un volumen para la persistencia de datos. | `data_mysql:/var/lib/mysql` (Ruta interna de la BD) |
| **`depends_on`** | Define el orden de inicio (el servicio listado arranca antes). | `depends_on: - db` (Asegura que `db` arranque antes que `web`) |
| **`environment`** | Variables de entorno para configuración interna. | `MYSQL_ROOT_PASSWORD: supersecret` (Configuración de la contraseña de root de la DB) |

### 3. 🌐 Redes y Comunicación
| Concepto | Detalle Crucial | 💡 Caso Práctico (Según Práctica 2) |
| :--- | :--- | :--- |
| **Comunicación Interna**| Los servicios se comunican usando el **nombre del servicio** como nombre de host DNS. | **`WORDPRESS_DB_HOST: db`** (WordPress usa `db` para encontrar el contenedor de MariaDB) |
| **Aislamiento** | Compose crea una red interna por defecto. Los contenedores están aislados del host, excepto por los puertos mapeados. | El contenedor `db` no necesita mapear puertos (`ports` vacío), solo el contenedor `web` (`8080:80`). |

#### 📄 Código Completo del Dockerfile (Práctica 1: MariaDB)
```dockerfile
# 1. Imagen base
FROM mariadb:10.5

# 2. Metadatos (Opcional, aunque MAINTAINER es antiguo)
MAINTAINER JL Gonzalez "joseluis@docker.com"

# 3. Variables de entorno: esenciales para la configuración de la BD
ENV MYSQL_ROOT_PASSWORD=secret_root \
    MYSQL_DATABASE=app_data \
    MYSQL_USER=manager \
    MYSQL_PASSWORD=secret_manager

# 4. Copia el script SQL al directorio de inicialización (Mecanismo de Entrypoint)
COPY ./sql/ /docker-entrypoint-initdb.d/

# 5. Exponer el puerto por defecto (solo informativo)
EXPOSE 3306

```

#### Código del Docker Compose 
```yml
version: '3.7' # Especifica la versión de la sintaxis

services:
  # Servicio 1: Base de Datos MariaDB
  db:
    image: mariadb:10.5 # Imagen de la BD
    container_name: mariadb_prod # Nombre específico del contenedor (Opcional)
    volumes:
      # Monta un volumen para persistencia de datos de la DB
      - data_mysql:/var/lib/mysql
    environment:
      # Variables de entorno para configuración interna de la BD
      MYSQL_ROOT_PASSWORD: supersecret
      MYSQL_DATABASE: wordpress_db
      MYSQL_USER: wp_user
      MYSQL_PASSWORD: wp_secret
    # Nota: No lleva 'ports' para ser accesible solo internamente

  # Servicio 2: Servidor Web WordPress
  web:
    image: wordpress:4.9.8 # Imagen de WordPress
    container_name: wordpress_prod
    depends_on:
      - db # Asegura que db inicie antes que WordPress
    # volumes:
      # Bind Mount para desarrollo/código (Comentado: Opcional, solo si editas código local)
      # - ./app_data:/var/www/html 
    environment:
      # Configuración de WP para conectarse a la BD: utiliza el nombre del servicio 'db'
      WORDPRESS_DB_HOST: db 
      WORDPRESS_DB_USER: wp_user
      WORDPRESS_DB_PASSWORD: wp_secret
      WORDPRESS_DB_NAME: wordpress_db
    ports:
      # Mapeo de puertos: Host 8080 -> Contenedor 80 (Acceso público)
      - "8080:80"

volumes:
  # Definición global del volumen persistente para la DB
  data_mysql:
  ```
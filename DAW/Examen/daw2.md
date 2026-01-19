# 📚 CHULETA: DESPLIEGUE DE APLICACIONES WEB (2DAW 2025/2026)

## I. CONTROL DE VERSIONES Y DOCUMENTACIÓN (Tema 01)

### 1. Conceptos Fundamentales de Git

| Concepto | Definición Clave | Citas |
| :--- | :--- | :--- |
| **Git** | Software de **control de versiones distribuido**. Cada desarrollador tiene una copia local completa del historial [1]. | [1] |
| **Repositorio** | Lugar donde se almacena el historial completo de cambios del proyecto [2]. | [2] |
| **Commit** | Una "instantánea" del proyecto en un momento específico. Se identifica de forma única por un código **hash SHA-1 de 40 caracteres** [2]. | [2] |
| **Rama (Branch)** | Línea de desarrollo independiente, un simple **puntero** a una confirmación específica [2]. Crearlas y destruirlas es rápido y económico [2]. | [2] |
| **Staging Area / Index** | Zona intermedia donde se **seleccionan los cambios** que se incluirán en el próximo commit (`git add`) [2, 3]. | [2, 3] |
| **HEAD** | Puntero a la rama actual y al **último commit** realizado en esa rama [2]. | [2] |
| **Ciclo de Vida** | Los archivos pasan por el flujo: Modificado $\rightarrow$ Preparado (`git add`) $\rightarrow$ Confirmado (`git commit`) [3]. | [3, 4] |

### 2. Comandos Esenciales de Git

| Categoría | Comando | Descripción | Citas |
| :--- | :--- | :--- | :--- |
| **Configuración** | `git config --global user.name "..."` | Configura la identidad del autor [5]. | [5] |
| **Inicio** | `git init` | Inicializa un nuevo repositorio Git local [5]. | [5] |
| **Obtención** | `git clone <URL>` | Descarga una copia idéntica del repositorio remoto [5]. | [5] |
| **Preparación** | `git status` | Muestra el estado del directorio de trabajo y del área de preparación [6]. | [6] |
| **Preparación** | `git add .` o `git add <archivo>` | Añade cambios al área de preparación (Staging Area) [6]. | [6] |
| **Confirmación** | `git commit -m "mensaje"` | Crea una instantánea (commit) de los cambios preparados [6]. | [6] |
| **Sincronización** | `git push origin <rama>` | Sube los commits locales al repositorio remoto [7]. | [7] |
| **Sincronización** | `git pull origin <rama>` | Descarga cambios remotos y los fusiona automáticamente (Fetch + Merge) [7]. | [7] |
| **Historial** | `git log` | Muestra el historial de commits cronológicamente [8]. | [8] |
| **Deshacer (Seguro)** | `git revert <hash>` | Deshace cambios creando un **nuevo commit** (mantiene el historial intacto) [8]. | [8] |
| **Deshacer (Peligroso)** | `git reset --hard HEAD` | **Elimina cambios no guardados** en el directorio de trabajo y Staging Area, volviendo al último commit [8]. | [8] |
| **Ignorar** | `.gitignore` | Archivo de texto que lista ficheros/patrones que Git debe ignorar [9]. | [9] |

### 3. Colaboración y Flujos

*   **Pull Request (PR):** Herramienta de **comunicación fundamental** para proponer cambios, explicar el trabajo y solicitar una **revisión de código** antes de fusionar en una rama principal [10-12].
*   **Fork:** Crear una **copia de un repositorio existente en tu propia cuenta** de GitHub para trabajar de forma independiente [13].
*   **GitHub Flow:** Flujo ágil donde la rama `master`/`main` **siempre está lista para ser desplegada en producción** [14].
*   **GitFlow:** Flujo estructurado con **dos ramas de larga vida**: `master` (producción estable) y `develop` (integración activa) [14].

### 4. Documentación de Código

| Tipo | Propósito | Sintaxis Clave | Citas |
| :--- | :--- | :--- | :--- |
| **Markdown** | **Lenguaje de marcado ligero** (texto plano con sintaxis sencilla). Estándar para archivos `README.md` en GitHub [15, 16]. | `# Encabezado`, `**negrita**`, `[enlace](url)`, ````código```` [17]. | [15-17] |
| **Javadoc (Java)** | Utilidad que genera documentación de APIs en formato **HTML** a partir de comentarios especiales [18]. | Comentarios: `/** ... */`. Etiquetas: **`@param`**, **`@return`**, `@author`, `@see` [19, 20]. | [18-20] |
| **XMLdoc (C#)** | Mecanismo que usa comentarios con **texto en formato XML** para documentar el código [21]. | Comentarios: `///`. Etiquetas: **`<summary>`**, **`<param>`**, **`<returns>`**, **`<seealso>`** [22, 23]. | [21-23] |

---

## II. VIRTUALIZACIÓN CON CONTENEDORES (Tema 02)

### 1. Conceptos Fundamentales de Docker

*   **Docker:** Plataforma de **código abierto** para **automatizar el despliegue de aplicaciones** dentro de contenedores [24, 25].
*   **Contenedores vs. MV** [26, 27]:
    *   **Contenedor:** No simula hardware, **comparte el núcleo (*kernel*)** del sistema operativo anfitrión [26, 28]. Son más **ligeros** y arrancan en **segundos** [27].
    *   **MV:** Virtualiza hardware, ejecuta un **SO completo** sobre un hipervisor [26].
*   **Imágenes (Images):** **Plantillas de solo lectura e inmutables** que contienen las instrucciones para crear un contenedor [29]. Se construyen a través de un **Dockerfile** [29].
*   **Contenedores (Containers):** Una instancia **ejecutable y modificable** de una imagen [30]. Son **efímeros**; si se eliminan, los datos internos desaparecen si no se usa persistencia [30, 31].
*   **Docker Engine:** Aplicación cliente-servidor que incluye el **Docker Daemon (Dockerd)**, que gestiona objetos como imágenes, contenedores, redes y volúmenes [32].

### 2. Comandos Esenciales de Docker CLI

| Comando | Descripción | Citas |
| :--- | :--- | :--- |
| `docker run -d <imagen>` | Ejecuta el contenedor en **modo separado (-d)** (segundo plano) para servicios de larga duración [33]. | [33] |
| `docker run -p 8080:80 <imagen>` | **Mapea/publica** el puerto 8080 del host al puerto 80 del contenedor [34]. | [34] |
| `docker run -e CLAVE=VALOR <imagen>` | Pasa **variables de entorno** para configurar la aplicación [35]. | [35] |
| `docker exec -it <id> /bin/bash` | Ejecuta un comando (shell interactiva) dentro de un contenedor que **ya está en ejecución** [36]. | [36] |
| `docker ps` | Muestra solo los contenedores **activos/en ejecución** [37]. | [37] |
| `docker ps -a` | Muestra **todos** los contenedores (activos y detenidos) [37]. | [37] |
| `docker logs -f <id/name>` | Muestra la salida del contenedor en tiempo real (`-f` de *follow*) [38]. | [38] |
| `docker rm <id/name>` | Elimina un contenedor (debe estar detenido, o usar `-f` para forzar) [37]. | [37] |
| `docker commit <id> <nueva_imagen>` | Crea una nueva imagen a partir del estado actual de un contenedor (práctica **no recomendada** para producción) [39, 40]. | [39, 40] |

### 3. Imágenes y Dockerfile

*   **Dockerfile:** Archivo de texto plano que es la **receta** para construir una imagen [41]. Cada instrucción genera una **nueva capa inmutable** [41].
*   **Instrucciones Clave:**
    *   **FROM:** **Primera instrucción obligatoria**, define la imagen base [42].
    *   **RUN:** Ejecuta comandos **durante la construcción** de la imagen (ej., instalar software). Cada RUN crea una capa [42].
    *   **COPY / ADD:** Copian archivos desde el contexto de construcción (host) al contenedor [42]. **COPY es la preferida** [42].
    *   **EXPOSE:** **Solo informa** qué puertos usa el servicio (no los publica automáticamente) [34, 43].
    *   **CMD / ENTRYPOINT:** Definen el comando a ejecutar al iniciar el contenedor. CMD son **argumentos por defecto** para ENTRYPOINT [44, 45].
*   **Optimización y Seguridad:**
    *   **Build Multi-Stage (Multi-etapa):** Usar una etapa de *build* pesada y una etapa final ligera, copiando **solo los artefactos binarios** [46].
    *   **Consolidar RUN:** Fusionar múltiples RUN en uno con `&& \` para minimizar el número de capas [46].
    *   **Denegar Root:** Usar la instrucción `USER` para ejecutar el contenedor con un usuario **no privilegiado** [47, 48].

### 4. Persistencia y Orquestación

*   **Persistencia:** Si un contenedor se elimina, **los datos internos desaparecen** [31].
    *   **Volúmenes:** Mecanismo **preferido**. Objetos gestionados por Docker que persisten más allá del ciclo de vida del contenedor (ideal para BBDD) [49].
    *   **Bind Mounts (Enlaces):** Mapea un directorio del **host** con uno del contenedor (ideal para código fuente/desarrollo) [50, 51].
*   **Redes Definidas por Usuario:** Es la mejor práctica. Permiten **resolución DNS integrada** entre contenedores conectados (pueden comunicarse usando el nombre del servicio) [52].
*   **Docker Compose:** Herramienta para definir y gestionar **aplicaciones multi-contenedor en un único host** [53, 54]. Usa el archivo `docker-compose.yml` (YAML) [53].
    *   `docker-compose up -d`: Inicia los servicios en segundo plano [55].
    *   `docker-compose down -v`: Detiene y **elimina contenedores, redes Y volúmenes** [56, 57].
*   **Docker Swarm:** Herramienta **nativa de Docker** para **orquestación distribuida** en un **clúster multi-host** [58, 59].
    *   **Objetivo:** Alta disponibilidad y escalabilidad [59].
    *   **Roles:** **Manager** (gestiona y delega tareas) y **Worker** (ejecuta tareas/contenedores) [60].
    *   **Redes Overlay:** Redes **virtuales y distribuidas** necesarias para la comunicación transparente entre contenedores en diferentes hosts del clúster [61].
    *   **Despliegue:** Se usa `docker stack deploy` con el archivo Compose (v3+) [62, 63].

---

## III. ARQUITECTURA WEB Y FUNDAMENTOS DEL DESPLIEGUE (Tema 03)

*(Resumen conciso de los conceptos fundamentales)*

### 1. Componentes y Arquitectura

*   **Front-end (Cliente):** Se ejecuta en el navegador (HTML, CSS, JavaScript). Responsable de la interfaz, el diseño y la interactividad [64, 65].
*   **Back-end (Servidor):** Se ejecuta en el servidor (Java, PHP, Python, etc.). Responsable de la **lógica de negocio** y la interacción con **bases de datos** [65, 66].
*   **Back-end Agnóstico:** El servidor expone su funcionalidad a través de **APIs (JSON/XML)** para ser consumido por cualquier tipo de cliente (web, móvil, escritorio) [67, 68].
*   **Página Web Dinámica:** Contenido generado en el servidor "sobre la marcha" mediante scripts (ej., PHP) y consultas a BBDD, resultando en **HTML para el usuario final** [69-71].
*   **Servicio Web (API):** Interfaz para la comunicación entre aplicaciones. Responde con **datos estructurados** (JSON, XML), no con la interfaz gráfica [69, 72].

### 2. Modelos de Arquitectura Software

| Modelo | Descripción Breve | Ventajas Clave | Desventajas Clave | Citas |
| :--- | :--- | :--- | :--- | :--- |
| **Monolítica** | Todos los componentes de la aplicación agrupados en un solo bloque [73]. | Fácil desarrollo y despliegue inicial [73, 74]. | Difícil de escalar componentes individuales; la complejidad aumenta con el tamaño [73, 74]. | [73, 74] |
| **Microservicios** | Componentes pequeños y autónomos. Cada uno se enfoca en una tarea específica [73]. | **Alta escalabilidad** e independencia; resiliencia (el fallo de uno no afecta al resto) [73, 74]. | **Alta complejidad de gestión y despliegue** [74]. | [73-75] |
| **Serverless** | El proveedor de nube gestiona toda la infraestructura [73]. | Escalabilidad automática y pago por uso [73, 74]. | Latencia de "arranque en frío" [74]. | [73, 74] |
| **MVC** | Separa la aplicación en **Modelo** (datos/BBDD), **Vista** (interfaz) y **Controlador** (lógica/coordinación) [76, 77]. | Mejora la organización y reutilización del código [77]. | Cada petición implica un refresco completo de la pantalla [78]. | [76-78] |

### 3. Protocolo HTTP y Métodos

*   **HTTP:** Protocolo **sin estado** (cada petición es independiente) [79]. El estado se mantiene con *cookies* y sesiones [79].
*   **HTTPS:** Versión segura (Secure). Usa **certificados digitales** y protocolos **SSL/TLS** para **cifrar** la información [80, 81].

| Método HTTP (Verbo) | Propósito | Citas |
| :--- | :--- | :--- |
| **GET** | **Recuperar** un recurso. Parámetros en la URL [82]. | [82] |
| **POST** | **Añadir** un nuevo recurso. Datos en el cuerpo de la petición [82]. | [82] |
| **PUT** | **Actualizar** o **reemplazar** completamente un recurso [82]. | [82] |
| **DELETE** | **Borrar** un recurso o entidad [82]. | [82] |
| **HEAD** | Solicita las cabeceras de respuesta sin el cuerpo (útil para verificar existencia) [82]. | [82] |

### 4. Códigos de Estado y Despliegue

| Clase de Código | Rango | Significado (Ejemplos clave) | Citas |
| :--- | :--- | :--- | :--- |
| **Éxito** | **2XX** | La acción fue recibida y aceptada. **200 OK** [83]. | [83] |
| **Redirección** | **3XX** | El cliente necesita una acción adicional [83]. | [83] |
| **Error Cliente** | **4XX** | Error en la petición del cliente. **404 Not Found**, **403 Forbidden** [83]. | [83] |
| **Error Servidor** | **5XX** | El servidor falló al completar la petición [83]. | [83] |

*   **Escalabilidad:** Capacidad para soportar aumento de carga [84].
    *   **Vertical (Scale Up):** Aumentar recursos (CPU, RAM) de un único servidor [84].
    *   **Horizontal (Scale Out):** Añadir más servidores (nodos). Requiere **Balanceadores de Carga** [84].
*   **Balanceador de Carga:** Distribuye el tráfico de red de forma inteligente entre múltiples servidores para maximizar el rendimiento y evitar sobrecarga [84].
*   **Integración Continua (CI):** Automatización de la **construcción y ejecución de pruebas** tras cada *commit* para detectar errores tempranamente [85].
*   **Despliegue Continuo (CD):** Cada cambio que supera las pruebas se despliega **automáticamente** en producción [85].

---
*Este documento fue codificado con :sparkling\_heart: y está licenciado bajo Creative Commons, por favor cite al autor si lo comparte o usa con fines formativos [86-88].*

# 🟢 Práctica GIT 1: Gestión de Ramas y Flujo de Trabajo (Merge vs Rebase)

**Objetivo:**\
Practicar la creación de ramas de desarrollo y la integración de
cambios, contrastando *merge* y *rebase* para ver cómo afectan al
historial.

## 📝 Pasos y Solución

### 🔹 Preparación

    git init
    echo "Proyecto" > R.md
    git commit -am "Inicial"

### 🔹 Desvío 1

    git checkout -b feature/desc
    git commit -am "C2: Descuento"

### 🔹 Hotfix en Master

    git checkout master
    git commit -am "C3: Hotfix"

### 🔹 Integración 1 (Merge)

    git merge feature/desc

### 🔹 Desvío 2

    git checkout -b feature/tax
    git commit -am "C5: Impuesto"

### 🔹 Segundo Hotfix

    git checkout master
    git commit -am "C6: Hotfix 2"

### 🔹 Rebase

    git checkout feature/tax
    git rebase master

### 🔹 Integración 2 (Merge)

    git checkout master
    git merge feature/tax

------------------------------------------------------------------------

# 🟢 Práctica GIT 2: Uso de Cherry-Pick y Revert

## 📝 Pasos y Solución

### 🔹 Preparación

    git checkout master

### 🔹 Desarrollo incompleto

    git checkout -b feature/pago-online
    echo "Logica de calculo ok" > A.txt
    git commit -am "feat: Commit A"
    echo "Pasarela no lista" > B.txt
    git commit -am "feat: Commit B"

### 🔹 Cherry-pick

    git checkout master
    git cherry-pick <SHA_del_Commit_A>

### 🔹 Error y reversión

    echo "Error grave aqui" >> bug.txt
    git commit -am "fix: Commit C"
    git revert HEAD

------------------------------------------------------------------------

# 🔵 Práctica DOCKER 1: Persistencia y Debugging

### 🔹 Crear volumen

    docker volume create db_volumen

### 🔹 Ejecutar DB

    docker run -d --name db_unica   -e MYSQL_ROOT_PASSWORD=secret   -v db_volumen:/var/lib/mysql   mariadb:10.5

### 🔹 Acceder al shell

    docker exec -it db_unica /bin/bash

### 🔹 Test de persistencia

    docker stop db_unica
    docker rm db_unica
    docker run ... -v db_volumen:/var/lib/mysql ...

------------------------------------------------------------------------

# 🟣 Práctica DOCKER 2: Docker Compose

### 🔹 Despliegue

    docker compose up -d

### 🔹 Verificar comunicación

    docker compose exec web /bin/bash
    ping db

### 🔹 Limpieza

    docker compose down -v

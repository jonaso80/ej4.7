### TEORÍA

- **Sobrescribir estilos correctamente**: Para sobrescribir estilos en Bootstrap correctamente, la clave es la especificidad y el orden: asegúrate de que tu archivo CSS personalizado se cargue después del de Bootstrap en el HTML, usa seletores más específicos (ID, clases compuestas) para tus estilos, o sobrescribe variables Sass antes de importar Bootstrap si usas Sass, y en casos extremos, usa !important con moderación. 

- **Uso de variables CSS**: "etiquetas" con valores (como colores o tamaños) que el navegador entiende directamente. Se guardan con el prefijo --bs- y permiten cambiar el diseño de la web en tiempo real sin tener que recompilar código. Puedes usarlas para modificar un componente específico o toda la página a la vez, facilitando enormemente tareas como la creación de un modo oscuro o la personalización de temas desde JavaScript.

- **Cargar una hoja adicional style.css**:  la forma más común y efectiva es añadir otra etiqueta link en el head de tu HTML, después de la que carga Bootstrap, para que tus estilos personalizados tengan prioridad, o usar la directiva @import dentro de tu archivo Sass principal (styles.scss) antes de @import 'bootstrap/scss/bootstrap', lo que te permite personalizar variables antes de que se carguen los estilos base de Bootstrap. 

- **Introduccion a Sass**: SASS es un preprocesador de CSS, es decir, una herramienta que extiende las capacidades del CSS estándar permitiéndote programar tus estilos. Funciona como un "superconjunto" que añade funciones, variables propias y anidamiento, pero requiere ser compilado (convertido) a archivos .css normales para que el navegador pueda leerlos. Es el motor que Bootstrap usa internamente para generar toda su estructura y temas de forma eficiente.

- **Temas: cambiar color primario, tipografía y bordes**: 
    - Cambiar color primario: Es sustituir el azul clásico de Bootstrap (#0d6efd) por el color de tu marca en botones, enlaces y estados activos.

    - Tipografía: Define las fuentes (fuente principal para textos y fuente para títulos), así como su tamaño y grosor.

    - Bordes: Controla el redondeo de las esquinas (border-radius) y el grosor de las líneas en tarjetas, botones e inputs.


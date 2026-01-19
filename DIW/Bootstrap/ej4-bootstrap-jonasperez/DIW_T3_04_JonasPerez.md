## TEORÍA

- **Modals**: Ventanas emergentes (pop-ups) que aparecen sobre el contenido principal de una página web.
```html
<div class="mb-4">
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Lanzar Modal
    </button>

    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Título de la Modal</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                </div>
                <div class="modal-body">
                    ¡Hola! Soy una simple ventana modal de Bootstrap.
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-primary">Guardar Cambios</button>
                </div>
            </div>
        </div>
    </div>
</div>
```

- **Offcanvas**: Componente de barra lateral deslizable que aparece desde los bordes (izquierda, derecha, arriba o abajo) de la pantalla, ocultando parte del contenido principal para mostrar menús de navegación, carritos de compra o paneles de configuración.
```html
<div class="mb-4">
    <button class="btn btn-dark" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
        Abrir Menú Lateral
    </button>

    <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
        <div class="offcanvas-header">
            <h5 class="offcanvas-title" id="offcanvasExampleLabel">Menú Offcanvas</h5>
            <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
        </div>
        <div class="offcanvas-body">
            <div>
                Este contenido se desliza desde el lado izquierdo de la pantalla.
            </div>
            <a class="btn btn-primary mt-3" href="#">Enlace de Ejemplo</a>
        </div>
    </div>
</div>
```

- **Collapse**: Funcionalidad de JavaScript que permite mostrar u ocultar contenido HTML de forma interactiva, usando botones o enlaces como disparadores para expandir o contraer secciones.
```html
<div class="mb-4">
    <p>
        <a class="btn btn-info text-white" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
            Mostrar/Ocultar Contenido
        </a>
    </p>

    <div class="collapse" id="collapseExample">
        <div class="card card-body">
            ¡Hola! Soy un contenido que puedes mostrar u ocultar con un clic.
        </div>
    </div>
</div>
```

- **Carousel**: Componente interactivo de presentación de diapositivas que permite mostrar una serie de contenidos (imágenes, texto, videos) de forma rotativa en un espacio limitado, como un slider o banner.
```html
<div class="mb-4" style="max-width: 400px;">
    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            <div class="carousel-item active">
                <div class="bg-primary text-white p-5 text-center">Diapositiva UNO</div>
            </div>
            <div class="carousel-item">
                <div class="bg-success text-white p-5 text-center">Diapositiva DOS</div>
            </div>
            <div class="carousel-item">
                <div class="bg-danger text-white p-5 text-center">Diapositiva TRES</div>
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Anterior</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Siguiente</span>
        </button>
    </div>
</div>
```

- **Toasts**: Componentes de notificaciones ligeras, similares a las alertas emergentes de sistemas operativos móviles, que se usan para dar feedback breve y temporal al usuario.
```html
<div class="mb-4">
    <button type="button" class="btn btn-success" id="liveToastBtn">
        Mostrar Toast
    </button>

    <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div id="liveToast" class="toast hide" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <strong class="me-auto">Notificación Bootstrap</strong>
                <small>Ahora mismo</small>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Cerrar"></button>
            </div>
            <div class="toast-body">
                ¡El Toast se ha mostrado correctamente!
            </div>
        </div>
    </div>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        var toastEl = document.getElementById('liveToast');
        var toast = new bootstrap.Toast(toastEl);
        var toastTrigger = document.getElementById('liveToastBtn');

        if (toastTrigger) {
            toastTrigger.addEventListener('click', function() {
                toast.show();
            });
        }
    });
</script>
```
import Login from "../Login";

// En la pantalla de Home se deberá mostrar, además de los platos que conforman el menú:
// ● Acumulativo de precio del menú.
// ● Promedio de tiempo de preparación entre todos los platos.
// ● Promedio de Healt Score entre todos los platos.
// ● El menú debe tener 4 platos. Debe haber 2 veganos y 2 que no lo sean. Esto debe validarse al intentar agregar un nuevo plato.
// ● Se deberá poder eliminar un plato del menú, lo que generará nuevamente los promedios y acumulativos (los mismos deben estar almacenados en el estado del componente utilizando Hooks)

const Home = ({ login }) => {
  return (
    <>
      <div className="home-container">
        <img
          src="https://i.pinimg.com/originals/07/2e/1f/072e1fc60ccfa29a3299c1c842edb411.jpg"
          alt="food"
        ></img>
        <Login login={login} />
      </div>
    </>
  );
};

export default Home;

// Platos: El Home de la aplicación mostrará los platos del menú en un listado. Cada ítem (el cuál debe ser un componente separado) del listado contendrá:
// ● Nombre del plato.
// ● Imagen.
// ● Características del plato.
// ● Acciones para ver el detalle o eliminarlo del menú.
// 3. Buscador de Platos
// Para agregar un plato al menú, se deberá visualizar un formulario que realice una petición GET al endpoint de búsqueda y muestre los resultados disponibles en un grid, utilizando el componente de

// ítem del punto anterior.

// El formulario deberá buscar únicamente si hay más de 2 caracteres en el filtro, caso contrario no debe mostrar nada. La validación deberá realizarse utilizando la librería Formik.
// 4. Detalle del Plato
// Al hacer click en un plato del menú, se mostrarán los detalles de los campos acumulados y promediados en el menú.
// 5. Navegación entre secciones
// Las diferentes secciones que tendrá la app deberán protegerse verificando que el usuario autenticado disponga de un token que se almacenará en localStorage. El mismo, se obtendrá de una API con datos de muestra. Si un usuario intenta ingresar a cualquier ruta sin estar autenticado, deberá ser redirigido al login. Para el manejo de rutas se deberá utilizar ReactRouterDom.
// Criterios a evaluar
// ● Almacenamiento y consulta del token en local storage
// ● Peticiones a los endpoints de autenticación de la API
// ● Actualizar estado de la aplicación si el usuario está autenticado
// ● Generar un mensaje para informar al usuario mientras hace una operación. ● Crear componentes de formularios con campos tipo texto y numérico que persistan el input del usuario en el estado. Por ejemplo: nombre de usuario, password, datos personales.
// ● Validar el contenido de los campos de formularios.
// ● Desarrollar componentes que puedan mostrar datos recibidos por propiedades. ● Renderizar una lista recibida por propiedades realizando una iteración sobre la misma. ● Desarrollar un componente de navegación que utilice una librería para manejar las rutas (por ejemplo ReactRouterDom).
// ● Renderizar el contenido de forma dinámica según la ruta actual de la aplicación. ● Utilizar una librería de frontend para estandarizar los estilos de los elementos visuales en la aplicación (por ejemplo bootstrap).
// ● Utilizando axios, realizar peticiones HTTP desde los componentes. Por ejemplo, GET y POST.
// ● Manejar las excepciones en el caso de que las peticiones no puedan realizarse correctamente.
// ● Agregar elementos visuales (como alerta, editor de texto enriquecido) utilizando un SDK específico en base a los requerimientos.
// ● Utilizar Hooks.


        // Selecciona el botón por su ID
        const btn = document.getElementById("btn");

        // Añade el event listener al botón para el evento 'click'
        function eventListener() {
            btn.addEventListener("click", cambiar);
        }

        // Define la función que cambiará el color del botón
        function cambiar() {
            // Array de colores posibles
            const colores = ["red", "blue", "green", "yellow", "purple", "orange"];
            // Selecciona un color aleatorio del array
            const colorAleatorio = colores[Math.floor(Math.random() * colores.length)];
            // Cambia el color de fondo del botón
            btn.style.backgroundColor = colorAleatorio;
        }

        // Llama a la función para añadir el event listener
        eventListener();


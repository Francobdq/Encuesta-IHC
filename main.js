let daltActivo = false;
let disActivo = false;

let checkDaltonismo = () => {
    if (daltActivo) {
        invDaltonismo();
        document.getElementById("btn-Daltonismo").innerHTML = "Activar Daltonismo";
    } else {
        aplicarDaltonismo();
        document.getElementById("btn-Daltonismo").innerHTML = "Desactivar Daltonismo";
    }
};
let checkDislexia = () => {
    if (disActivo) {
        document.getElementById("btn-Dislexia").innerHTML = "Activar Dislexia";
        invDislexia();
    } else {
        document.getElementById("btn-Dislexia").innerHTML = "Desactivar Dislexia";
        aplicarDislexia();
    }
};

let checkInit = () => {
    if (daltActivo) {
        document.getElementById("btn-Daltonismo").innerHTML = "Desactivar Daltonismo";
    } else {
        document.getElementById("btn-Daltonismo").innerHTML = "Activar Daltonismo";
    }
    if (disActivo) {
        document.getElementById("btn-Dislexia").innerHTML = "Desactivar Dislexia";
    } else {
        document.getElementById("btn-Dislexia").innerHTML = "Activar Dislexia";
    }
};

document.addEventListener(
    "DOMContentLoaded",
    function() {
        checkInit();
    },
    false
);

const aplicarDislexia = () => {
    disActivo = true;
    let body = document.querySelector("body");
    (body.style.fontFamily = "opendislexic"), "Arial";
    console.log("Aplico dislexia");
};
const aplicarDaltonismo = () => {
    daltActivo = true;
    let section = document.querySelectorAll(".seccion-container");
    let comentarios = document.querySelector("#comentarios");
    let body = document.querySelector("body");
    let inputEdad = document.querySelector("#input-edad");
    inputEdad.style.backgroundColor = "#FF8039";
    body.style.background = "linear-gradient(to bottom, #cf8539 0%, rgba(233, 160, 65, 1) 100%)";
    comentarios.style.backgroundColor = "#f0ce9e";
    section.forEach((el) => {
        el.style.backgroundColor = "#f0ce9e";
    });
    console.log("Aplico daltonismo");
    let select = document.querySelectorAll('.select');
    select.forEach((el) => {
        el.style.backgroundColor = "#FF8039";
    })
};

const invDaltonismo = () => {
    daltActivo = false;
    let section = document.querySelectorAll(".seccion-container");
    let comentarios = document.querySelector("#comentarios");
    let body = document.querySelector("body");
    let inputEdad = document.querySelector("#input-edad");
    body.style.background = "linear-gradient(to bottom, rgba(233, 191, 124, 0.9) 0%, rgba(233, 160, 65, 0.5) 100%)";
    inputEdad.style.backgroundColor = "rgba(233, 191, 124, 0.9)";
    comentarios.style.backgroundColor = "#e6b570";
    section.forEach((el) => {
        el.style.backgroundColor = "#e6b570";
    });
    console.log("Invierto daltonismo ");
    let select = document.querySelectorAll('.select');
    select.forEach((el) => {
        el.style.backgroundColor = "rgba(233, 191, 124, 0.9)";
    })
};

const invDislexia = () => {
    disActivo = false;
    let body = document.querySelector("body");
    (body.style.fontFamily = "Roboto"), "Arial";
    dislexiaActiva = false;
    console.log("Invierto dislexia");
    let invDislexia = document.getElementById("btn-invDislexia");
    invDislexia.style.display = "none";
};

if (bowser.name.toLowerCase() !== "chrome") {
    Swal.fire({
        title: `Navegador desactualizado!`,
        text: `Estas usando ${bowser.name} ${bowser.version}. Para que la encuesta funcione correctamente, te recomendamos utilizar un navegador actual.`,
        icon: `warning`,
        confirmButtonText: `Entendido`,
    });
}

(async() => {
    const { value: disc } = await Swal.fire({
        title: `¿Tienes una discapacidad visual?`,
        showCancelButton: true,
        showCloseButton: true,
        confirmButtonText: `Si`,
        cancelButtonColor: "#d33",
        cancelButtonText: `No`,
        icon: `question`,
    });
    let html = `
            <section class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="checkBoxDislexia">
                  <label class="form-check-label" for="checkBoxDislexia">
                        Dislexia
                  </label>
            </section>
            <section class="form-check">
                  <input class="form-check-input" type="checkbox" value="" id="checkBoxDaltonismo">
                  <label class="form-check-label" for="checkBoxDaltonismo">
                        Daltonismo
                  </label>
            </section>
            `;
    if (disc) {
        Swal.fire({
            title: `¿Cuál?`,
            icon: `question`,
            html: html,
            inputValue: 2,
            confirmButtonText: "¡Listo!",
            showCancelButton: true,
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                if (document.getElementById("checkBoxDaltonismo").checked) {
                    aplicarDaltonismo();
                }
                if (document.getElementById("checkBoxDislexia").checked) {
                    aplicarDislexia();
                }
            }
            checkInit();
        });
    }
})();
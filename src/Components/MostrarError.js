import React from "react";
import Swal from "sweetalert2";

export function mostrarError(mensaje) {
  Swal.fire({
    title: "Error!",
    text: mensaje,
    icon: "error",
    confirmButtonText: "Try again",
  });
}

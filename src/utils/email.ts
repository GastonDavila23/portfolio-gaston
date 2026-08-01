// src/utils/email.ts
import { MouseEvent } from "react";

/**
 * Detecta el dispositivo del usuario y abre el cliente de correo nativo (móvil)
 * o Gmail en una pestaña nueva (escritorio).
 */
export const handleEmailClick = (
  e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  email: string
) => {
  e.preventDefault();

  // Detectamos si es un dispositivo móvil mediante el User Agent
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // En móviles / tablets, abrimos la aplicación de correo nativa
    window.location.href = `mailto:${email}`;
  } else {
    // En escritorio, abrimos el redactor web de Gmail en una nueva pestaña
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank",
      "noopener,noreferrer"
    );
  }
};
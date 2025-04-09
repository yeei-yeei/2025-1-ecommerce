# Mini Ecommerce Angular

Este proyecto es una evaluación final para estudiantes del curso de Angular. Consiste en crear una aplicación base de ecommerce utilizando `localStorage` como fuente de datos.

## 🌟 Objetivo

Demostrar el dominio de los conceptos vistos durante el curso mediante la creación de una aplicación funcional que incluya:

- Vista de productos
- Vista del carrito
- Vista de checkout
- Vista de confirmación de compra

---

## ✅ Qué se espera que hagas

1. Haz un **fork** de este repositorio.
2. Clona tu fork:
   ```bash
   git clone https://github.com/<tu-usuario>/mini-ecommerce-angular.git
   cd mini-ecommerce-angular
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```
4. Inicia el proyecto:
   ```bash
   ng serve
   ```
5. Crea las siguientes vistas:
   - `/productos`: Muestra una lista de productos.
   - `/carrito`: Muestra los productos agregados.
   - `/checkout`: Formulario para ingresar datos del comprador.
   - `/confirmacion`: Muestra un resumen de la compra.
6. Usa `localStorage` para almacenar:
   - El carrito.
   - Los datos del pedido confirmado.
7. Sube tus cambios a tu repositorio.
8. Entrega el link de tu repositorio.

---

## 📊 Evaluación

| Criterio                           | Peso |
|-----------------------------------|------|
| Data Binding                      | 25%  |
| Directivas                        | 25%  |
| Servicios                         | 15%  |
| Ruteo                             | 15%  |
| Uso de localStorage               | 20%  |

> ✨ Extra (opcional): Publicación en GitHub Pages con ayuda del equipo docente.

---

## 📂 Estructura recomendada

```
src/
├── app/
│   ├── product-list/
│   ├── cart/
│   ├── checkout/
│   ├── confirmation/
│   ├── services/
│   │   ├── cart.service.ts
│   │   └── product.service.ts
│   └── app-routing.module.ts
```

---

## 📅 Fecha de entrega

La entrega del proyecto se realiza subiendo el código a GitHub y compartiendo el link con el docente antes de la fecha establecida en clase.

---

🚀 ¡Buena suerte y deja volar tu creatividad!

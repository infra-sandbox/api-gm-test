# api-gm-test

Este repositorio contiene un microservicio básico desarrollado en **Node.js + Express** que forma parte de un mini ecosistema de prueba. El servicio expone una ruta HTTP (`/gm`) que permite interactuar con una base de datos **PostgreSQL**.

Está diseñado para interactuar con:

- `api-core-test`: Microservicio hermano, también conectado al cliente.
- `client-test`: Un cliente frontend que hace peticiones a este servicio.

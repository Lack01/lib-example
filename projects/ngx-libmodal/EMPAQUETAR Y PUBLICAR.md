# Empaquetar y publicar en NPM.

## Asegurar archivos.

Para empaquetar la librería se debe configurar los archivos de styles.css y/o index.html (como en nuestro caso) de la librería, ingresándola en *ng-package.json*,
tambien se debe agregar las exportaciones de los archivos necesarios en el archivo *public-api.ts*, por ejemplo: *export * from './modal/modal.component';*

## Ingresar ng build.

Para empaquetar la librería, en este caso se debe ingresar el siguiente comando en la terminal:

```
ng build ngx-libmodal

```

Con este comando estamos compilando y generando la carpeta dist de la librería.

(para generar librería y probarla, antes de publicar se debe leer README).

## Crear cuenta en NPM y login.

Una vez comprobado que la librería funciona correctamente en un proyecto generado desde 0, se puede publicar en https://www.npmjs.com/, se debe crear una cuenta antes.

ya con la cuenta generada, en la terminal posicionados dentro de carpeta dist, por ejemplo en nuestro caso: "dist\ngx-libmodal", se ingresa el comando:

```
ng login

```

Se abrirá la web de *npmjs* para confirmar la sesión.

## Publicar librería.

Antes de publicar la librería en la web puedes agregar tus datos como autor, en el archivo *package.json* por ejemplo con esta estructura, agregándolo en la última línea,

```
"author":{
    "name": "Tu-nombre",
    "email": "Tu-correo",
    "url": "Tu-web o repositorio"
  }

```

Finalmente ejecuta run `npm publish`, y puedes entrar en la web para comprobar que está publicada tu librería.



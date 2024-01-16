# Curso de backend con NestJS

Estado: Iniciado
Fecha de inicio: December 29, 2023 1:10 PM

# Introducción a NestJS

## ¿Qué es NestJS?

NestJS es un marco de desarrollo para construir aplicaciones del lado del servidor (backend) utilizando TypeScript. Se basa en Node.js y combina elementos de programación orientada a objetos (OOP), programación funcional y programación reactiva. NestJS sigue el patrón de arquitectura Modelo-Vista-Controlador (MVC), lo que facilita la organización y la estructura del código.

Algunas características clave de NestJS incluyen:

1. **TypeScript:** NestJS está escrito en TypeScript, que es una extensión de JavaScript que agrega tipado estático al lenguaje. Esto mejora la robustez y la mantenibilidad del código.
2. **Decoradores:** NestJS utiliza decoradores para definir y configurar varios elementos, como controladores, módulos y rutas. Esto permite una sintaxis más limpia y declarativa.
3. **Inyección de dependencias:** La inyección de dependencias es una técnica que facilita la gestión de las dependencias y mejora la modularidad del código. NestJS utiliza un sistema de inyección de dependencias para gestionar la creación y la resolución de las dependencias.
4. **Arquitectura modular:** La aplicación en NestJS se organiza en módulos, que son bloques autónomos de funcionalidad. Cada módulo puede tener sus propios controladores, servicios y otros componentes.
5. **Soporte para WebSockets:** NestJS incluye soporte nativo para la comunicación en tiempo real a través de WebSockets, lo que facilita la construcción de aplicaciones en tiempo real.
6. **Interceptores, filtros y tuberías:** Estos son conceptos que permiten la manipulación y el control de las solicitudes HTTP antes de que lleguen a los controladores, proporcionando flexibilidad en la ejecución de lógica adicional.

En resumen, NestJS es una opción popular para el desarrollo de aplicaciones del lado del servidor en TypeScript, especialmente aquellas que buscan una estructura organizada, modular y basada en estándares conocidos como MVC.

## Crea tu primera proyecto con NestJS.

Para instalar NestJS, puedes seguir estos pasos básicos. Asegúrate de tener Node.js y npm (el administrador de paquetes de Node.js) instalados en tu sistema antes de comenzar.

### **Paso 1: Instalar NestJS CLI**

NestJS proporciona una interfaz de línea de comandos (CLI) que facilita la creación y gestión de proyectos. Puedes instalar la CLI globalmente ejecutando el siguiente comando en tu terminal:

```bash
npm install -g @nestjs/cli
```

### **Paso 2: Crear un nuevo proyecto NestJS**

Después de instalar la CLI, puedes crear un nuevo proyecto NestJS ejecutando el siguiente comando:

```bash
nest new nombre-del-proyecto
```

Reemplaza "nombre-del-proyecto" con el nombre que desees para tu aplicación.

### **Paso 3: Entrar al directorio del proyecto**

Una vez que se haya creado el proyecto, navega al directorio del proyecto utilizando el siguiente comando:

```bash
cd nombre-del-proyecto
```

### **Paso 4: Iniciar la aplicación**

Puedes iniciar tu aplicación NestJS ejecutando el siguiente comando:

```bash
npm run start
```

Esto iniciará el servidor y tu aplicación estará disponible en **`http://localhost:3000/`** por defecto.

### **Paso 5: Verificar la instalación**

Abre tu navegador y visita **`http://localhost:3000/`** para asegurarte de que la aplicación se esté ejecutando correctamente.

¡Eso es básicamente todo! Ahora tienes un proyecto NestJS básico configurado y en funcionamiento. Puedes comenzar a desarrollar tu aplicación y explorar las características y la estructura que NestJS proporciona.

## Estructura de aplicaciones en NestJS.

NestJS sigue una arquitectura basada en módulos y sigue el patrón de diseño Modelo-Vista-Controlador (MVC). A continuación, te proporcionaré una descripción general de la estructura de una aplicación NestJS típica:

### **1. Directorio del Proyecto:**

Al crear un nuevo proyecto con el comando **`nest new nombre-del-proyecto`**, se crea una estructura básica de directorios que incluye:

- **node_modules:** Contiene las dependencias del proyecto.
- **src:** Es el directorio principal de tu aplicación NestJS.

### **2. Directorio `src`:**

Dentro del directorio **`src`**, encontrarás varios archivos y carpetas que constituyen la estructura de tu aplicación:

- **app.controller.ts:** Un controlador de ejemplo creado por defecto. Los controladores manejan las solicitudes HTTP y devuelven respuestas.
- **app.module.ts:** El módulo principal de la aplicación. Los módulos son bloques autónomos de funcionalidad y son una parte clave de la arquitectura de NestJS.
- **main.ts:** El punto de entrada de tu aplicación. Aquí se inicia la aplicación NestJS.

### **3. Estructura del Módulo (`app.module.ts`):**

El archivo **`app.module.ts`** define el módulo principal de la aplicación y suele tener la siguiente estructura:

```tsx
typescriptCopy code
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

```

- **Controllers:** Los controladores gestionan las solicitudes HTTP. Se registran dentro del array **`controllers`**.
- **Providers:** Los proveedores son componentes que pueden ser inyectados en otros componentes. Esto incluye servicios, repositorios, etc. Se registran dentro del array **`providers`**.

### **4. Directorios de Controladores y Servicios:**

Dentro del directorio **`src`**, puedes crear carpetas adicionales para organizar tus controladores y servicios. Por ejemplo:

- **controllers:** Contiene los controladores que manejan las solicitudes HTTP.
- **services:** Contiene los servicios que contienen la lógica de negocio.

### **5. Decoradores:**

NestJS hace un uso extensivo de decoradores para configurar y organizar la aplicación. Algunos de los decoradores comunes incluyen **`@Controller()`**, **`@Module()`**, **`@Injectable()`**, **`@Get()`**, **`@Post()`**, etc.

### **6. Configuración Adicional:**

- **main.ts:** Este archivo inicia la aplicación NestJS. Puede configurarse para establecer opciones de configuración adicionales.
- **Configuración del Middleware:** NestJS utiliza middleware para manejar tareas como la autenticación, el registro de solicitudes, etc.

Esta es solo una descripción general y la estructura exacta puede variar según las necesidades de tu aplicación y cómo decidas organizar tu código. La modularidad y la organización basada en módulos son principios fundamentales en NestJS, lo que facilita la creación de aplicaciones escalables y mantenibles.

## Repaso a Typescript: Tipos POO

TypeScript es un lenguaje de programación desarrollado por Microsoft que se construye sobre JavaScript y agrega características de tipado estático al lenguaje. A diferencia de JavaScript, donde los tipos son dinámicos y se resuelven en tiempo de ejecución, en TypeScript, los tipos son estáticos y se conocen en tiempo de compilación.

### **Características de TypeScript:**

1. **Tipado Estático:** TypeScript permite asignar tipos de datos a variables, parámetros de funciones, propiedades de objetos, etc. Esto ayuda a detectar errores en tiempo de compilación antes de ejecutar el código.
    
    ```tsx
    let nombre: string = "Juan";
    let edad: number = 30;
    let esMayor: boolean = true;
    ```
    
2. **Inferencia de Tipos:** TypeScript puede inferir automáticamente el tipo de una variable según el valor asignado.
    
    ```tsx
    let mensaje = "Hola"; // TypeScript infiere que mensaje es de tipo string
    ```
    
3. **Interfaces:** Permiten definir la forma de un objeto, especificando los tipos de sus propiedades.
    
    ```tsx
    interface Persona {
      nombre: string;
      edad: number;
    }
    
    let persona: Persona = { nombre: "Ana", edad: 25 };
    ```
    
4. **Tipos Unión y Tipos Literal:** TypeScript permite trabajar con tipos de unión y tipos literales.
    
    ```tsx
    let resultado: "éxito" | "error";
    ```
    
5. **Clases y Herencia:** TypeScript soporta la programación orientada a objetos, con clases y herencia.
    
    ```tsx
    class Animal {
      nombre: string;
    
      constructor(nombre: string) {
        this.nombre = nombre;
      }
    
      hacerSonido() {
        console.log("Haciendo sonido");
      }
    }
    
    class Perro extends Animal {
      ladrar() {
        console.log("¡Guau!");
      }
    }
    
    let miPerro = new Perro("Buddy");
    miPerro.hacerSonido(); // Heredado de la clase Animal
    miPerro.ladrar(); // Propio de la clase Perro
    ```
    
6. **Genéricos:** Permiten escribir funciones y clases que trabajan con un conjunto de tipos sin especificarlos de antemano.
    
    ```tsx
    function identity<T>(arg: T): T {
      return arg;
    }
    
    let numero = identity<number>(5);
    let texto = identity<string>("Hola");
    ```
    
7. **Módulos y Espacios de Nombres:** TypeScript ofrece una manera de organizar el código en módulos y espacios de nombres, facilitando la modularidad y la reutilización de código.

Estas son solo algunas de las características de TypeScript. Su objetivo principal es mejorar la productividad de desarrollo al proporcionar un sistema de tipos sólido y otras características modernas de programación.

# REST API

## Introducción a controladores.

El término "controlador" se refiere a una parte de la arquitectura que maneja las solicitudes HTTP entrantes y define la lógica de manejo de esas solicitudes. En el contexto de NestJS, los controladores son clases decoradas con el decorador **`@Controller()`** y son responsables de manejar las rutas y las solicitudes HTTP.

Aquí hay un ejemplo básico de un controlador en NestJS:

```tsx
// usuarios.controller.ts
import { Controller, Get } from '@nestjs/common';

@Controller('usuarios')
export class UsuariosController {
  @Get()
  obtenerUsuarios(): string {
    return 'Lista de usuarios';
  }
}
```

En este ejemplo:

- La clase **`UsuariosController`** está decorada con **`@Controller('usuarios')`**, lo que significa que este controlador manejará las solicitudes que coincidan con la ruta base "/usuarios".
- El método **`obtenerUsuarios()`** está decorado con **`@Get()`**, indicando que responderá a solicitudes HTTP GET a la ruta "/usuarios".
- La lógica dentro de **`obtenerUsuarios()`** devuelve simplemente una cadena como ejemplo, pero en un caso real, este método podría interactuar con servicios, bases de datos u otras lógicas de negocio para obtener la información de los usuarios.

Luego, este controlador se integra en el módulo principal de la aplicación. Un módulo en NestJS puede agrupar controladores, servicios y otros componentes relacionados.

```tsx
// app.module.ts
import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';

@Module({
  controllers: [UsuariosController],
})
export class AppModule {}
```

En resumen, en NestJS, un controlador es una clase responsable de manejar solicitudes HTTP específicas y define cómo se debe responder a esas solicitudes. El uso de controladores proporciona una forma estructurada y modular de manejar las rutas en una aplicación NestJS.

## GET: Cómo recibir parámetros.

En Nest.js, puedes recibir parámetros en una ruta por GET utilizando los decoradores proporcionados por el framework. Aquí algunos ejemplos:

1. **Parámetros de Ruta:**
    
    Para recibir parámetros de la ruta, puedes usar el decorador **`@Param`** en tu controlador. Aquí hay un ejemplo:
    
    ```tsx
    typescriptCopy code
    // Importa los módulos necesarios de Nest.js
    import { Controller, Get, Param } from '@nestjs/common';
    
    // Define el controlador
    @Controller('ejemplo')
    export class EjemploController {
      // Maneja la solicitud GET en la ruta /ejemplo/:id
      @Get(':id')
      // Utiliza el decorador Param para recibir el parámetro :id
      getEjemplo(@Param('id') id: string): string {
        return `Ejemplo con ID: ${id}`;
      }
    }
    
    ```
    
    En este ejemplo, el parámetro **`id`** se obtiene de la ruta y se utiliza en la lógica del controlador.
    
2. **Parámetros de Consulta (Query Parameters):**
    
    También puedes recibir parámetros de consulta utilizando el decorador **`@Query`**:
    
    ```tsx
    typescriptCopy code
    // Importa los módulos necesarios de Nest.js
    import { Controller, Get, Query } from '@nestjs/common';
    
    // Define el controlador
    @Controller('ejemplo')
    export class EjemploController {
      // Maneja la solicitud GET en la ruta /ejemplo
      @Get()
      // Utiliza el decorador Query para recibir el parámetro de consulta llamado 'nombre'
      getEjemplo(@Query('nombre') nombre: string): string {
        return `Hola, ${nombre}!`;
      }
    }
    
    ```
    
    En este caso, el parámetro **`nombre`** se obtiene de la cadena de consulta de la URL.
    

Recuerda que debes instalar las dependencias necesarias para Nest.js y configurar tu aplicación adecuadamente. Además, estos son solo ejemplos básicos, y puedes personalizarlos según las necesidades específicas de tu aplicación.

## ¿Qué es el método POST?

El método POST se utiliza para crear recursos en el servidor. A través de una solicitud POST, los clientes pueden enviar datos al servidor para que este los procese y cree un nuevo recurso. En el contexto de un controlador en Nest.js, puedes usar el decorador **`@Post`** para manejar solicitudes POST.

Aquí hay un ejemplo simple de un controlador POST en Nest.js:

```tsx
typescriptCopy code
// Importa los módulos necesarios de Nest.js
import { Controller, Post, Body } from '@nestjs/common';
import { CreateProductoDto } from '../dto/create-producto.dto';
import { ProductService } from '../services/product.service';

// Define el controlador
@Controller('productos')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  // Maneja la solicitud POST en la ruta /productos
  @Post()
  // Utiliza el decorador Body para recibir los datos del cuerpo de la solicitud
  createProducto(@Body() createProductoDto: CreateProductoDto): string {
    // Aquí puedes utilizar el servicio para procesar los datos y crear un nuevo producto
    const nuevoProducto = this.productService.createProducto(createProductoDto);

    // Devuelve una respuesta al cliente
    return `Producto creado: ${nuevoProducto.nombre}`;
  }
}

```

En este ejemplo:

- **`@Post()`** indica que este método manejará solicitudes POST.
- **`@Body()`** se utiliza para extraer los datos del cuerpo de la solicitud. Puedes definir un DTO (Data Transfer Object) para especificar la estructura de los datos esperados en el cuerpo de la solicitud. En este caso, se asume que existe un DTO llamado **`CreateProductoDto`**.

A continuación, un ejemplo de cómo podría ser el DTO **`CreateProductoDto`**:

```tsx
typescriptCopy code
// create-producto.dto.ts
export class CreateProductoDto {
  readonly nombre: string;
  readonly precio: number;
  readonly descripcion: string;
}

```

Este DTO define la estructura de los datos que se esperan en el cuerpo de la solicitud POST para crear un nuevo producto. Puedes personalizar este DTO según los campos y validaciones específicas que necesites para tu aplicación.

Cuando un cliente hace una solicitud POST a la ruta **`/productos`**, los datos proporcionados en el cuerpo de la solicitud se pasan al método **`createProducto`** del controlador, donde pueden ser procesados y utilizados para crear un nuevo producto mediante el servicio correspondiente.

## Métodos PATCH, PUT y DELETE para editar y eliminar.

### **Método PATCH:**

El método PATCH se utiliza para actualizar parcialmente un recurso existente. En Nest.js, puedes manejar solicitudes PATCH utilizando el decorador **`@Patch`** en tu controlador.

Ejemplo:

```tsx
typescriptCopy code
import { Controller, Patch, Param, Body } from '@nestjs/common';
import { UpdateProductoDto } from '../dto/update-producto.dto';
import { ProductService } from '../services/product.service';

@Controller('productos')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Patch(':id')
  updateProducto(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto): string {
    const updatedProducto = this.productService.updateProducto(id, updateProductoDto);
    return `Producto actualizado: ${updatedProducto.nombre}`;
  }
}

```

En este ejemplo, **`@Patch(':id')`** indica que este método manejará solicitudes PATCH en la ruta **`/productos/:id`**. Se utiliza el decorador **`@Body()`** para extraer los datos del cuerpo de la solicitud, que se espera que estén en un formato específico definido por el DTO **`UpdateProductoDto`**.

### **Método PUT:**

El método PUT se utiliza para actualizar completamente un recurso existente o crearlo si no existe. Al igual que con PATCH, puedes manejar solicitudes PUT utilizando el decorador **`@Put`** en tu controlador.

Ejemplo:

```tsx
typescriptCopy code
import { Controller, Put, Param, Body } from '@nestjs/common';
import { UpdateProductoDto } from '../dto/update-producto.dto';
import { ProductService } from '../services/product.service';

@Controller('productos')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Put(':id')
  updateOrCreateProducto(@Param('id') id: string, @Body() updateProductoDto: UpdateProductoDto): string {
    const updatedOrCreateProducto = this.productService.updateOrCreateProducto(id, updateProductoDto);
    return `Producto actualizado o creado: ${updatedOrCreateProducto.nombre}`;
  }
}

```

En este ejemplo, **`@Put(':id')`** indica que este método manejará solicitudes PUT en la ruta **`/productos/:id`**.

### **Método DELETE:**

El método DELETE se utiliza para eliminar un recurso existente en el servidor.

Ejemplo:

```tsx
typescriptCopy code
import { Controller, Delete, Param } from '@nestjs/common';
import { ProductService } from '../services/product.service';

@Controller('productos')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Delete(':id')
  deleteProducto(@Param('id') id: string): string {
    const deletedProducto = this.productService.deleteProducto(id);
    return `Producto eliminado: ${deletedProducto.nombre}`;
  }
}

```

En este ejemplo, **`@Delete(':id')`** indica que este método manejará solicitudes DELETE en la ruta **`/productos/:id`**. El parámetro **`id`** se extrae de la URL y se utiliza para identificar el producto que se eliminará.

Estos son ejemplos básicos y debes ajustarlos según las necesidades específicas de tu aplicación. También puedes utilizar DTOs para definir la estructura de los datos esperados en las solicitudes PATCH y PUT.

## Códigos de estado HTTP response status code.

En Nest.js, puedes controlar los códigos de estado HTTP que se envían como respuesta a las solicitudes HTTP utilizando los decoradores y las funciones proporcionadas por el framework. Aquí hay algunos ejemplos de cómo puedes especificar códigos de estado en Nest.js:

### **Ejemplo 1: Utilizando los Decoradores**

```tsx
typescriptCopy code
import { Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller('ejemplo')
export class EjemploController {
  @Get()
  getEjemplo(@Res() res: Response) {
    // Enviar una respuesta con el código de estado 200 (OK)
    res.status(HttpStatus.OK).send('Operación exitosa');
  }

  @Post()
  postEjemplo(@Res() res: Response) {
    // Enviar una respuesta con el código de estado 201 (Created)
    res.status(HttpStatus.CREATED).send('Recurso creado');
  }
}

```

### **Ejemplo 2: Utilizando el Decorador @HttpCode**

Puedes utilizar el decorador **`@HttpCode`** para establecer directamente el código de estado sin tener que utilizar el objeto **`Response`**.

```tsx
typescriptCopy code
import { Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('ejemplo')
export class EjemploController {
  @Get()
  getEjemplo() {
    // Enviar una respuesta con el código de estado 200 (OK)
    return 'Operación exitosa';
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  postEjemplo() {
    // Enviar una respuesta con el código de estado 201 (Created)
    return 'Recurso creado';
  }
}

```

Estos son solo ejemplos básicos, y hay muchas otras formas de personalizar y controlar los códigos de estado en Nest.js, dependiendo de tus necesidades específicas. Además, es importante entender el significado de los diferentes códigos de estado HTTP y usarlos de acuerdo con las convenciones y estándares de la API REST que estás desarrollando.

# Integridad de datos

## Introducción a servicios: crea tu primer servicio.

En Nest.js, los servicios son clases que contienen la lógica de negocio de una aplicación. Se utilizan para encapsular y organizar la funcionalidad relacionada en módulos reutilizables. Los servicios son inyectables, lo que significa que pueden ser utilizados en controladores, otros servicios y módulos.

### **¿Para qué sirve un servicio en Nest.js?**

1. **Encapsulación de la Lógica de Negocio:** Los servicios ayudan a encapsular la lógica de negocio de una aplicación, separándola de los controladores y otros componentes.
2. **Reutilización de Código:** Al organizar la lógica de negocio en servicios, puedes reutilizar fácilmente ese código en diferentes partes de tu aplicación.
3. **Inyección de Dependencias:** Nest.js utiliza la inyección de dependencias para proporcionar instancias de servicios a los componentes que los necesitan, facilitando la gestión de dependencias y la creación de pruebas unitarias.

### **¿Cómo crear un servicio en Nest.js?**

A continuación, se muestra un ejemplo básico de cómo crear un servicio en Nest.js:

1. **Usa el Generador de Nest para crear un servicio:**
    
    Utiliza el generador de Nest CLI para crear un servicio. Desde la línea de comandos, ejecuta:
    
    ```bash
    bashCopy code
    nest generate service nombre-del-servicio
    ```
    
    Esto creará un archivo **`nombre-del-servicio.service.ts`** en el directorio correspondiente.
    
2. **Implementa el Servicio:**
    
    Abre el archivo del servicio generado y agrega la lógica de negocio. Por ejemplo:
    
    ```tsx
    typescriptCopy code
    // nombre-del-servicio.service.ts
    import { Injectable } from '@nestjs/common';
    
    @Injectable()
    export class NombreDelServicioService {
      obtenerMensaje(): string {
        return '¡Hola desde el servicio!';
      }
    }
    
    ```
    
3. **Usa el Servicio en un Controlador o en otro Servicio:**
    
    Ahora, puedes utilizar el servicio en un controlador o en otro servicio. Por ejemplo, en un controlador:
    
    ```tsx
    typescriptCopy code
    // nombre-del-controlador.controller.ts
    import { Controller, Get } from '@nestjs/common';
    import { NombreDelServicioService } from './nombre-del-servicio.service';
    
    @Controller('ejemplo')
    export class EjemploController {
      constructor(private readonly nombreDelServicioService: NombreDelServicioService) {}
    
      @Get()
      obtenerMensaje(): string {
        return this.nombreDelServicioService.obtenerMensaje();
      }
    }
    
    ```
    
    Aquí, el servicio **`NombreDelServicioService`** se inyecta en el controlador a través del constructor, y luego se utiliza para obtener un mensaje.
    

Este es un ejemplo simple, pero los servicios en Nest.js pueden ser más complejos y pueden incluir métodos para interactuar con bases de datos, realizar llamadas a API externas, o cualquier otra lógica de negocio específica de tu aplicación. La organización y reutilización de la lógica de negocio a través de servicios es fundamental para desarrollar aplicaciones escalables y mantenibles en Nest.js.

## Manejo de errores con throw y NotFoundException.

En Nest.js, puedes manejar errores utilizando el mecanismo de excepciones. Uno de los tipos de excepciones comunes es **`NotFoundException`**, que se utiliza para indicar que un recurso no fue encontrado. A continuación, te mostraré cómo puedes utilizar el manejo de errores y **`NotFoundException`** en Nest.js:

1. **Importa NotFoundException:**
    
    En primer lugar, asegúrate de importar **`NotFoundException`** desde el paquete **`@nestjs/common`**.
    
    ```tsx
    typescriptCopy code
    import { NotFoundException } from '@nestjs/common';
    
    ```
    
2. **Ejemplo de uso en un Servicio:**
    
    Imagina que tienes un servicio que busca un producto por su ID en una base de datos. Si el producto no se encuentra, puedes lanzar una **`NotFoundException`**. Aquí hay un ejemplo:
    
    ```tsx
    typescriptCopy code
    // producto.service.ts
    import { Injectable, NotFoundException } from '@nestjs/common';
    
    @Injectable()
    export class ProductoService {
      private productos = [
        { id: 1, nombre: 'Producto A' },
        { id: 2, nombre: 'Producto B' },
      ];
    
      obtenerProductoPorId(id: number) {
        const producto = this.productos.find((p) => p.id === id);
    
        if (!producto) {
          throw new NotFoundException(`Producto con ID ${id} no encontrado`);
        }
    
        return producto;
      }
    }
    
    ```
    
    En este ejemplo, si el producto no se encuentra en el array de productos, se lanza una **`NotFoundException`** con un mensaje personalizado.
    
3. **Manejo de Excepciones en un Controlador:**
    
    Ahora, en tu controlador, puedes capturar la excepción y manejarla de la manera que desees. Aquí hay un ejemplo:
    
    ```tsx
    typescriptCopy code
    // producto.controller.ts
    import { Controller, Get, Param } from '@nestjs/common';
    import { ProductoService } from './producto.service';
    
    @Controller('productos')
    export class ProductoController {
      constructor(private readonly productoService: ProductoService) {}
    
      @Get(':id')
      obtenerProducto(@Param('id') id: string) {
        try {
          const producto = this.productoService.obtenerProductoPorId(parseInt(id, 10));
          return { producto };
        } catch (error) {
          if (error instanceof NotFoundException) {
            // Manejar la NotFoundException aquí
            return { mensaje: 'Producto no encontrado' };
          }
          throw error; // Vuelve a lanzar cualquier otro tipo de error no manejado
        }
      }
    }
    
    ```
    
    En este ejemplo, el controlador llama al método **`obtenerProductoPorId`** del servicio y captura cualquier **`NotFoundException`**. Puedes manejar la excepción de la manera que desees y enviar una respuesta adecuada al cliente.
    

Es importante señalar que Nest.js proporciona también un mecanismo de filtro de excepciones global que te permite manejar excepciones de manera centralizada en tu aplicación. Esto es útil para casos en los que deseas manejar todas las excepciones de manera uniforme, independientemente de dónde se originen en tu código.

## Pipes en nest

En el contexto de NestJS, los "pipes" son una característica que te permite transformar y validar datos antes de que lleguen a los controladores de tu aplicación. Son similares a los middleware en Express, pero están diseñados específicamente para la manipulación y validación de datos.

### **¿Qué son los pipes en NestJS?**

Los pipes en NestJS son clases decoradas con **`@Injectable()`** que implementan la interfaz **`PipeTransform`**. Esta interfaz requiere la implementación de un método llamado **`transform`**, donde se realiza la lógica de transformación o validación de datos.

### **¿Para qué sirven los pipes en NestJS?**

Los pipes en NestJS tienen varios propósitos:

1. **Validación de datos:** Puedes usar pipes para validar los datos de entrada antes de que lleguen a tus controladores. Esto ayuda a garantizar que los datos cumplen con ciertos criterios antes de ser procesados.
2. **Transformación de datos:** Los pipes pueden transformar los datos de entrada en un formato específico antes de que lleguen a los controladores. Esto es útil para normalizar datos o realizar cambios necesarios antes de la manipulación adicional.
3. **Manipulación de errores:** Los pipes pueden manejar errores específicos relacionados con la validación de datos y transformación. Esto facilita la gestión de errores de manera centralizada.

### **¿Cómo implementar pipes en NestJS?**

A continuación, te proporciono un ejemplo básico de cómo implementar un pipe en NestJS:

1. **Crear un pipe:**
    1. **Abre tu terminal o línea de comandos.**
    2. **Ejecuta el siguiente comando:**
        
        ```bash
        bashCopy code
        nest generate pipe nombre-del-pipe
        
        ```
        
        Asegúrate de reemplazar "nombre-del-pipe" con el nombre que deseas para tu nuevo pipe.
        
        ```bash
        bashCopy code
        nest generate pipe positive-int
        
        ```
        
    3. **Verifica la salida del comando.**
        
        La CLI de NestJS generará automáticamente los archivos necesarios para tu nuevo pipe en la ubicación adecuada dentro de tu proyecto.
        
        ```scss
        scssCopy code
        CREATE src/positive-int.pipe.spec.ts (456 bytes)
        CREATE src/positive-int.pipe.ts (87 bytes)
        UPDATE src/app.module.ts (315 bytes)
        
        ```
        
    4. **Utiliza tu nuevo pipe en un controlador o módulo.**
        
        El paso anterior modifica automáticamente tu archivo **`app.module.ts`** para incluir la referencia al nuevo pipe. Ahora, puedes importar y utilizar el pipe en tu controlador o en otros lugares donde sea necesario.
        
        ```tsx
        typescriptCopy code
        import { Controller, Get, Param, UsePipes } from '@nestjs/common';
        import { PositiveIntPipe } from './positive-int.pipe';
        
        @Controller('ejemplo')
        export class EjemploController {
          @Get(':id')
          @UsePipes(new PositiveIntPipe())
          getById(@Param('id') id: number) {
            return `El número proporcionado es: ${id}`;
          }
        }
        
        ```
        
    
    Con estos pasos, has creado un nuevo pipe utilizando la CLI de NestJS y lo has integrado en tu aplicación. Este nuevo pipe estará listo para ser utilizado para validar y transformar datos según tus necesidades específicas.
    
2. **Aplicar el pipe en un controlador:**
    
    ```tsx
    typescriptCopy code
    import { Controller, Get, Param, UsePipes } from '@nestjs/common';
    import { PositiveIntPipe } from './positive-int.pipe';
    
    @Controller('ejemplo')
    export class EjemploController {
      @Get(':id')
      @UsePipes(new PositiveIntPipe())
      getById(@Param('id') id: number) {
        return `El número proporcionado es: ${id}`;
      }
    }
    
    ```
    

En este ejemplo, el pipe **`PositiveIntPipe`** se encarga de validar que el parámetro de ruta **`id`** sea un número entero positivo. Luego, se aplica ese pipe al controlador usando el decorador **`@UsePipes`**.

## Creando Data Transfers Objects

Los DTOs (Data Transfer Objects) en NestJS son objetos que se utilizan para definir la estructura de los datos que se transmiten entre las capas de una aplicación. Estos objetos actúan como modelos de datos simplificados y específicos para ciertos casos de uso. Los DTOs son particularmente útiles al manejar la entrada y salida de datos en las operaciones de controladores.

### **¿Qué son los DTOs en NestJS?**

Los DTOs se utilizan para:

1. **Validación de datos de entrada:** Permiten validar y deserializar los datos de entrada recibidos en las solicitudes antes de ser procesados por los controladores.
2. **Encapsulación de datos:** Ayudan a encapsular la estructura de los datos transmitidos entre las capas de la aplicación, proporcionando un formato consistente y predecible.

### **¿Cómo crear e implementar DTOs en NestJS?**

A continuación, se muestra un ejemplo paso a paso de cómo crear e implementar un DTO en NestJS:

1. **Crear un DTO:**
    
    ```bash
    nest generate dto create-user
    ```
    
    Este comando generará un nuevo archivo llamado **`create-user.dto.ts`** en el directorio adecuado con la siguiente estructura:
    
    ```tsx
    typescriptCopy code
    // src/create-user.dto.ts
    export class CreateUserDto {}
    
    ```
    
2. **Definir las propiedades del DTO:**
    
    Modifica el DTO para incluir las propiedades que deseas recibir en las solicitudes. Puedes agregar decoradores de validación para definir restricciones en los datos.
    
    ```tsx
    typescriptCopy code
    // src/create-user.dto.ts
    import { IsString, IsEmail } from 'class-validator';
    
    export class CreateUserDto {
      @IsString()
      readonly username: string;
    
      @IsEmail()
      readonly email: string;
    
      @IsString()
      readonly password: string;
    }
    
    ```
    
    En este ejemplo, se utilizan decoradores de la librería **`class-validator`** para especificar que **`username`** y **`password`** deben ser cadenas de texto, y **`email`** debe ser una dirección de correo electrónico válida.
    
3. **Utilizar el DTO en un controlador:**
    
    Ahora puedes utilizar el DTO en un controlador para manejar la entrada de datos en una solicitud.
    
    ```tsx
    typescriptCopy code
    // src/users.controller.ts
    import { Controller, Post, Body } from '@nestjs/common';
    import { CreateUserDto } from './create-user.dto';
    
    @Controller('users')
    export class UsersController {
      @Post()
      createUser(@Body() createUserDto: CreateUserDto) {
        // Aquí puedes acceder a createUserDto para procesar los datos recibidos
        console.log(createUserDto);
        return 'Usuario creado exitosamente.';
      }
    }
    
    ```
    
    En este ejemplo, el decorador **`@Body()`** se utiliza para obtener el cuerpo de la solicitud y deserializarlo en una instancia del DTO **`CreateUserDto`**.
    
    Recuerda que puedes personalizar tu DTO según las necesidades específicas de tu aplicación y agregar más validaciones o propiedades según sea necesario. Los DTOs son una herramienta poderosa para manejar la entrada y salida de datos de manera eficiente y segura en una aplicación NestJS.
    

## Activar de forma global nuestros DTO.

Para activar la validación global de DTOs en toda tu aplicación NestJS, puedes hacer uso de los "pipes" de validación integrados, que utilizan la librería **`class-validator`**. Aquí te dejo un ejemplo de cómo puedes configurar esto:

1. **Instalar las dependencias necesarias:**
    
    Asegúrate de tener instaladas las siguientes dependencias:
    
    ```bash
    npm install class-validator class-transformer
    ```
    
2. **Configurar la validación global en tu aplicación:**
    
    Modifica tu archivo **`main.ts`** o **`main.js`** (donde se inicializa tu aplicación NestJS) para configurar la validación global. Puedes hacer esto mediante el uso de la clase **`ValidationPipe`** proporcionada por NestJS.
    
    ```tsx
    typescriptCopy code
    import { NestFactory } from '@nestjs/core';
    import { AppModule } from './app.module';
    import { ValidationPipe } from '@nestjs/common';
    
    async function bootstrap() {
      const app = await NestFactory.create(AppModule);
    
      // Configurar el ValidationPipe global
      app.useGlobalPipes(
        new ValidationPipe({
          transform: true, // Transformar automáticamente las solicitudes en instancias de DTO
          whitelist: true, // Eliminar propiedades desconocidas del DTO
          forbidNonWhitelisted: true, // Lanzar un error si hay propiedades no permitidas en el DTO
        }),
      );
    
      await app.listen(3000);
    }
    bootstrap();
    
    ```
    
    Aquí, **`ValidationPipe`** se configura con las opciones **`transform`**, **`whitelist`**, y **`forbidNonWhitelisted`** para realizar la validación de DTOs de forma global en toda la aplicación. Esto transformará automáticamente las solicitudes entrantes en instancias de DTO y aplicará las validaciones definidas en los DTOs.
    
    Puedes ajustar las opciones según tus necesidades específicas.
    
3. **Uso en controladores:**
    
    Ahora, en tus controladores, no necesitas utilizar el decorador **`@Body()`** para aplicar la validación del DTO; el **`ValidationPipe`** lo hará automáticamente.
    
    ```tsx
    typescriptCopy code
    // src/users.controller.ts
    import { Controller, Post, Body } from '@nestjs/common';
    import { CreateUserDto } from './create-user.dto';
    
    @Controller('users')
    export class UsersController {
      @Post()
      createUser(@Body() createUserDto: CreateUserDto) {
        // No es necesario validar manualmente aquí, ya que ValidationPipe lo hace automáticamente
        console.log(createUserDto);
        return 'Usuario creado exitosamente.';
      }
    }
    
    ```
    

Con estos cambios, la validación global de DTOs estará habilitada en toda tu aplicación NestJS, y el **`ValidationPipe`** se encargará automáticamente de la validación de los DTOs en tus controladores. Esto ayuda a mantener un código más limpio y evita la necesidad de repetir la lógica de validación en cada controlador.

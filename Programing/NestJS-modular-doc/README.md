# Curso de NestJS: Programación Modular, Documentación con Swagger y Deploy

- Valoración: ⭐⭐⭐⭐⭐
- Estado: Iniciado
- Fecha de inicio: January 16, 2024 8:01 PM
- Página: Platzi

# 1. Módulos de NestJS

## 1.1. Encapsular lógica en módulos.

En el contexto de NestJS, la encapsulación de lógica en módulos es una práctica fundamental para organizar y estructurar una aplicación de manera modular. NestJS es un marco de desarrollo de backend para Node.js que se basa en conceptos de Angular y está diseñado para crear aplicaciones escalables y mantenibles.

Aquí hay algunas razones por las que encapsular la lógica en módulos en NestJS es beneficioso:

1. **Organización y estructura:** Los módulos ayudan a organizar y estructurar el código de la aplicación de una manera más limpia y comprensible. Cada módulo puede tener su propio conjunto de controladores, servicios, middleware y otros componentes relacionados, lo que facilita la navegación y la comprensión del código.
2. **Reutilización de código:** La encapsulación en módulos facilita la reutilización del código. Puedes tener módulos independientes que proporcionan cierta funcionalidad y luego reutilizar esos módulos en diferentes partes de la aplicación o en diferentes aplicaciones NestJS.
3. **Mantenimiento:** Al dividir la aplicación en módulos, el mantenimiento se vuelve más manejable. Puedes actualizar o hacer cambios en un módulo sin afectar directamente a otros, siempre y cuando mantengas bien definidas las interfaces y dependencias entre módulos.
4. **Inyección de dependencias:** NestJS utiliza la inyección de dependencias para gestionar las dependencias entre diferentes componentes de la aplicación. Los módulos son el contexto principal para la inyección de dependencias en NestJS. Al encapsular la lógica en módulos, puedes definir claramente qué servicios y controladores están disponibles para inyección en ese módulo específico.
5. **Escalabilidad:** A medida que tu aplicación crece, los módulos permiten escalar la arquitectura de tu aplicación de manera ordenada. Puedes agregar nuevos módulos para nuevas funcionalidades sin afectar las partes existentes de la aplicación.

En resumen, encapsular la lógica en módulos en NestJS ayuda a organizar, estructurar, reutilizar y mantener el código de manera efectiva, proporcionando una base sólida para el desarrollo de aplicaciones backend escalables y mantenibles.

## 1.2. Interacción entre módulos.

En NestJS, los módulos son una parte fundamental de la arquitectura. Puedes hacer que los módulos interactúen entre ellos de varias maneras, y aquí te proporcionaré algunos enfoques comunes:

1. **Importación de Módulos:**
    - En NestJS, puedes importar un módulo dentro de otro utilizando la función **`imports`** en el decorador **`@Module`**. Esto permite que los servicios y controladores del módulo importado estén disponibles en el módulo que lo importa.
    
    ```tsx
    typescriptCopy code
    // moduloA.module.ts
    import { Module } from '@nestjs/common';
    import { ModuloBModule } from './moduloB.module';
    
    @Module({
      imports: [ModuloBModule],
    })
    export class ModuloAModule {}
    
    ```
    
    ```tsx
    typescriptCopy code
    // moduloB.module.ts
    import { Module } from '@nestjs/common';
    import { ModuloBService } from './moduloB.service';
    
    @Module({
      providers: [ModuloBService],
      exports: [ModuloBService],
    })
    export class ModuloBModule {}
    
    ```
    
2. **Inyección de Dependencias:**
    - Utiliza la inyección de dependencias para acceder a servicios de otros módulos. Asegúrate de que los servicios que deseas compartir estén debidamente registrados y exportados.
    
    ```tsx
    typescriptCopy code
    // moduloA.service.ts
    import { Injectable } from '@nestjs/common';
    import { ModuloBService } from './moduloB.service';
    
    @Injectable()
    export class ModuloAService {
      constructor(private moduloBService: ModuloBService) {}
    
      // Usa this.moduloBService para interactuar con ModuloBService.
    }
    
    ```
    
3. **Exportación de Servicios:**
    - Asegúrate de exportar los servicios que deseas compartir desde el módulo. Puedes hacer esto en el array **`exports`** del decorador **`@Module`**.
    
    ```tsx
    typescriptCopy code
    // moduloB.module.ts
    import { Module } from '@nestjs/common';
    import { ModuloBService } from './moduloB.service';
    
    @Module({
      providers: [ModuloBService],
      exports: [ModuloBService],
    })
    export class ModuloBModule {}
    
    ```
    
4. **Dynamic Modules:**
    - Utiliza módulos dinámicos si necesitas configuración o personalización en tiempo de ejecución.
    
    ```tsx
    typescriptCopy code
    // moduloA.module.ts
    import { Module } from '@nestjs/common';
    import { createModuloBModule } from './moduloB.module';
    
    @Module({
      imports: [createModuloBModule({ /* configuración opcional */ })],
    })
    export class ModuloAModule {}
    
    ```
    

## 1.3. Entendiendo la inyección de dependencia.

La inyección de dependencias es un patrón de diseño utilizado en NestJS (y en muchos otros marcos y lenguajes) que permite la gestión eficiente y desacoplada de las dependencias dentro de una aplicación. En el contexto de NestJS, la inyección de dependencias se utiliza principalmente para administrar la creación y el suministro de instancias de servicios en diferentes partes de la aplicación.

En lugar de que un componente o clase cree directamente sus dependencias, las dependencias se "inyectan" desde el exterior. Esto ayuda a desacoplar los componentes y facilita la prueba unitaria, ya que puedes reemplazar las dependencias reales con versiones de prueba.

En NestJS, la inyección de dependencias se realiza principalmente mediante el uso de decoradores como **`@Injectable()`**, **`@Inject()`**, y la función **`constructor`** en las clases. Aquí hay un ejemplo básico:

```tsx
typescriptCopy code
import { Injectable } from '@nestjs/common';

@Injectable()
export class MiServicio {
  obtenerDatos(): string {
    return 'Datos desde MiServicio';
  }
}

```

En este ejemplo, **`MiServicio`** es un servicio decorado con **`@Injectable()`**. Ahora, en otro componente (por ejemplo, un controlador o otro servicio), puedes inyectar **`MiServicio`** de la siguiente manera:

```tsx
typescriptCopy code
import { Controller, Get } from '@nestjs/common';
import { MiServicio } from './mi-servicio';

@Controller('ejemplo')
export class EjemploController {
  constructor(private readonly miServicio: MiServicio) {}

  @Get()
  obtenerDatos(): string {
    return this.miServicio.obtenerDatos();
  }
}

```

Aquí, el servicio **`MiServicio`** se inyecta en el controlador **`EjemploController`** a través del constructor. NestJS se encarga automáticamente de crear y proporcionar una instancia de **`MiServicio`** cuando se crea una instancia de **`EjemploController`**.

La inyección de dependencias en NestJS facilita la gestión de la complejidad de las aplicaciones al promover la modularidad, el desacoplamiento y la reutilización de código. Además, ayuda en gran medida en la prueba unitaria al permitir la sustitución sencilla de dependencias por versiones de prueba o simuladas.

## 1.4. useValue y useClass.

En NestJS, **`useValue`** y **`useClass`** son opciones utilizadas para configurar proveedores dentro de los módulos. Estas opciones se utilizan al proporcionar dependencias mediante la inyección de dependencias. Aquí hay una explicación de cada una junto con ejemplos:

### **`useValue`**

**`useValue`** se utiliza cuando deseas proporcionar un valor específico como dependencia. Esto puede ser útil cuando la dependencia no requiere lógica adicional o cuando deseas proporcionar un valor constante.

### Ejemplo:

```tsx
typescriptCopy code
// ejemplo.module.ts
import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';

@Module({
  providers: [
    {
      provide: 'CONFIG', // Identificador único
      useValue: {
        apiKey: 'mi_clave_secreta',
        apiUrl: 'https://api.ejemplo.com',
      },
    },
    ConfigService,
  ],
  exports: [ConfigService],
})
export class EjemploModule {}

```

En este ejemplo, se proporciona un valor constante (un objeto con claves **`apiKey`** y **`apiUrl`**) con la clave **`'CONFIG'`**. Luego, este valor se puede inyectar en otros componentes que necesiten la configuración.

### **`useClass`**

**`useClass`** se utiliza cuando deseas proporcionar una clase como dependencia. Puedes utilizar esta opción para proporcionar lógica personalizada o configuración a través de la instancia de la clase.

### Ejemplo:

```tsx
typescriptCopy code
// ejemplo.module.ts
import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModule } from './config.module';

@Module({
  imports: [ConfigModule], // Importa el módulo que contiene la ConfigService
  providers: [
    {
      provide: 'CONFIG',
      useClass: ConfigService,
    },
  ],
  exports: ['CONFIG'],
})
export class EjemploModule {}

```

En este ejemplo, **`ConfigService`** es una clase que puede contener lógica para cargar la configuración desde diferentes fuentes (base de datos, archivos de configuración, etc.). Al usar **`useClass`**, le estás diciendo a NestJS que, cuando se solicite **`'CONFIG'`**, debe crear una instancia de **`ConfigService`** y proporcionarla como dependencia.

Ambos enfoques (**`useValue`** y **`useClass`**) son útiles en diferentes situaciones y proporcionan flexibilidad en la configuración de dependencias en una aplicación NestJS. La elección entre ellos dependerá de tus requisitos específicos y del tipo de dependencia que estés proporcionando.

## 1.5. useFactory.

La opción **`useFactory`** en NestJS se utiliza cuando necesitas proporcionar una dependencia que debe ser construida dinámicamente en tiempo de ejecución. Permite que un factoría (una función) cree la instancia de la dependencia antes de ser inyectada en el componente correspondiente.

La estructura básica de uso de **`useFactory`** es la siguiente:

```tsx

{
  provide: 'NOMBRE_DEPENDENCIA',
  useFactory: (argumentos: any) => {
    // Lógica para construir la instancia de la dependencia
    return new Dependencia(argumentos);
  },
  inject: [/* Lista de dependencias inyectadas en la factoría */],
}

```

Aquí hay un ejemplo más detallado:

```tsx
// ejemplo.module.ts
import { Module } from '@nestjs/common';
import { ConfigService } from './config.service';
import { ConfigModule } from './config.module';

@Module({
  imports: [ConfigModule],
  providers: [
    {
      provide: 'CONFIG',
      useFactory: (configService: ConfigService) => {
        // Lógica para construir la instancia de configuración
        return configService.getConfig();
      },
      inject: [ConfigService], // Lista de dependencias inyectadas en la factoría
    },
  ],
  exports: ['CONFIG'],
})
export class EjemploModule {}

```

En este ejemplo, la dependencia **`'CONFIG'`** se proporciona utilizando **`useFactory`**. La factoría recibe una instancia de **`ConfigService`** (inyectada mediante el array **`inject`**). La lógica dentro de **`useFactory`** puede ser personalizada para construir la instancia de la dependencia de acuerdo con las necesidades específicas.

En resumen, **`useFactory`** es útil cuando necesitas realizar una lógica personalizada para la creación de instancias de dependencias, permitiendo una mayor flexibilidad y control sobre el proceso de inyección de dependencias en NestJS.

## 1.6. Global Module.

Al desarrollar una aplicación con NestJS, existen necesidades de importar módulos cruzados o de importar un mismo servicio en varios módulos. Lo anterior, hace que la cantidad de imports en cada módulo crezca y se vuelva complicado de escalar.

## Cómo usar el módulo global

NestJS otorga la posibilidad de crear módulos globales que se importarán automáticamente en todos los otros módulos de la aplicación, sin necesidad de importarlos explícitamente.

```tsx
import { Module, Global } from '@nestjs/common';

@Global()
@Module({
  // ...
})
export class MyCustomModule {}

```

Todos los servicios que importes en este módulo, estarán disponibles para su utilización en cualquier otro módulo.

Es importante no abusar de esta característica y no tener más de un módulo global para controlar las importaciones. Pueden ocurrir **errores de dependencias circulares** que suceden cuando el **Módulo A** importa al **Módulo B** y este a su vez importa al **Módulo A**. El decorador `@Global()` te ayudará a resolver estos problemas.

## Cuadro de código para uso de *global module*

```
// src/database/database.module.ts

import { Module, Global } from '@nestjs/common';

const API_KEY = '12345634';
const API_KEY_PROD = 'PROD1212121SA';

@Global()
@Module({
  providers: [
    {
      provide: 'API_KEY',
      useValue: process.env.NODE_ENV === 'prod' ? API_KEY_PROD : API_KEY,
    },
  ],
  exports: ['API_KEY'],
})
export class DatabaseModule {}

```

```
// src/app.module.ts
...
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    HttpModule,
    UsersModule,
    ProductsModule,
    DatabaseModule // 👈 Use DatabaseModule like global Module
   ],
  ...
})
export class AppModule {}

```

```
// src/users/services/users.service.ts

import { Injectable, NotFoundException, Inject } from '@nestjs/common';
..

@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    @Inject('API_KEY') private apiKey: string, // 👈 Inject API_KEY
  ) {}

}

```

# 2. Configuración de entornos.

## 2.1. Módulo de configuración.

A medida que tu aplicación crezca, puedes llegar a necesitar decenas de **variables de entorno**. Variables que cambian de valor dependiendo si estás en un entorno de desarrollo, de pruebas o de producción.

## Variables de entorno en NestJS

El manejo de variables de entorno en NestJS se realiza de una forma muy sencilla. Instala la dependencia `@nestjs/config` e importa el módulo **ConfigModule** en el módulo principal de tu aplicación.

```tsx
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      isGlobal: true
    }),
  ],
})
export class AppModule {}

```

El archivo que almacena las variables de entorno suele llamarse `.env`. Créalo en la raíz de tu proyecto con las variables que necesitas.

```
API_KEY=1324567890
API_SECRET=ABCDEFGHI

```

De esta manera, las variables de entorno estarán disponibles en tu aplicación y utilizando el objeto global de **NodeJS** llamado `process` puedes acceder a estos valores de la siguiente manera:

```tsx
process.env.API_KEY
process.env.API_SECRET

```

## Consejos sobre las variables de entorno

Es muy importante **NO VERSIONAR** el archivo `.env` en el repositorio de tu proyecto. No guardes las claves secretas de tu aplicación en **GIT**.

Para asegurar esto, agrega el archivo `.env` a la configuración del archivo `.gitignore` para que no sea reconocido por Git y este no lo guarde en el repositorio.

Lo que puedes hacer es crear un archivo llamado `.env.example` que contendrá un modelo de las variables de entorno que tu aplicación necesita, pero no sus valores.

```
API_KEY=
API_SECRET=

```

De este modo, cuidas tu aplicación y guardas un archivo para que cualquier desarrollador que tome el proyecto, sepa qué variables necesita configurar para el funcionamiento de la misma.

## Cuadro de código para usar el módulo de configuración

`npm i --save @nestjs/config`

```
// .gitignore
*.env

```

```
// .env
DATABASE_NAME=my_db
API_KEY='1234'

```

```
// src/app.module.ts
...
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({ // 👈 Implement ConfigModule
      envFilePath: '.env',
      isGlobal: true,
    }),
    ...
  ],
})
export class AppModule {}

```

```
// src/users/services/users.service.ts
import { ConfigService } from '@nestjs/config';
...

@Injectable()
export class UsersService {
  constructor(
    private productsService: ProductsService,
    private configService: ConfigService, // 👈 inject ConfigService
  ) {}
  ...

  findAll() {
    const apiKey = this.configService.get('API_KEY'); // 👈 get API_KEY
    const dbName = this.configService.get('DATABASE_NAME');  // 👈 get DATABASE_NAME
    console.log(apiKey, dbName);
    return this.users;
  }

  ...
}
```

## 2.2. Configuración por ambientes.

**Una aplicación profesional suele tener más de un ambiente**. Ambiente local, ambiente de desarrollo, ambiente de pruebas, producción, entre otros, dependiendo la necesidad del equipo y de la organización. Veamos cómo puedes administrar N cantidad de ambientes en NestJS.

## Configuración dinámica del entorno

Configuremos la aplicación para intercambiar fácilmente entre diversos ambientes, cada uno con su propia configuración.

### 1. Archivo principal para manejo de ambientes

Crea un archivo llamado `enviroments.ts` (o el nombre que prefieras) que contendrá un objeto con una propiedad por cada ambiente que tenga tu aplicación.

```tsx
// src/enviroments.ts
export const enviroments = {
  dev: '.env',
  test: '.test.env',
  prod: '.prod.env',
};

```

### 2. Configuración por ambiente

Crea un archivo `.env` por cada ambiente que necesites. Recuerda que todos los archivos finalizados en `.env` no deben guardarse en **GIT**.

```
// .test.env
DATABASE_NAME=my_db_test
API_KEY=12345

```

```
// .prod.env
DATABASE_NAME=my_db_prod
API_KEY=67890

```

### 3. Importando variables de entorno

Importa en el módulo principal de tu aplicación el archivo principal para manejo de ambientes y, a través de una única variable de entorno llamada **NODE_ENV**, elegirás qué configuración usar.

> NODE_ENV es una variable de entorno propia de NodeJS y del framework Express que se encuentra preseteada en tu aplicación.
> 

```tsx
import { enviroments } from './enviroments'; // 👈

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env', // 👈
      isGlobal: true,
    }),
  ],
})
export class AppModule {}

```

### 4. Inicio de la aplicación

Finalmente, para iniciar tu aplicación basta con el comando `NODE_ENV=test npm run start:dev` o `NODE_ENV=prod npm run start:dev` para configurar la variable de entorno principal **NODE_ENV** y escoger qué configuración utilizar.

### 5. Utilizando las variables de entorno

Puedes utilizar las variables de entorno en tu aplicación de dos maneras. Con el objeto global de **NodeJS** llamado `process`:

```tsx
process.env.DATABASE_NAME
process.env.API_KEY

```

O puedes usar estas variables a través del servicio **ConfigService** proveniente de `@nestjs/config`.

```tsx
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {

  constructor(private config: ConfigService) {}

  getEnvs(): string {
    const apiKey = this.config.get<string>('API_KEY');
    const name = this.config.get('DATABASE_NAME');
    return `Envs: ${apiKey} ${name}`;
  }
}

```

De este modo, configura de la mejor manera que necesites para tu aplicación el manejo de múltiples ambientes, cada uno con su propia configuración.

## Cuadro de código para la configuración de ambientes

```
// .stag.env
DATABASE_NAME=my_db_stag
API_KEY=333

```

```
// .prod.env
DATABASE_NAME=my_db_prod
API_KEY=999

```

```
// src/enviroments.ts
export const enviroments = {
  dev: '.env',
  stag: '.stag.env',
  prod: '.prod.env',
};

```

```
// src/app.module.ts
...

import { enviroments } from './enviroments'; // 👈

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env', // 👈
      isGlobal: true,
    }),
    ...
  ],
  ...
})
export class AppModule {}

```

```
// src/app.service.ts
import { ConfigService } from '@nestjs/config'; // 👈

@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    private config: ConfigService,  // 👈
  ) {}
  getHello(): string {
    const apiKey = this.config.get<string>('API_KEY');  // 👈
    const name = this.config.get('DATABASE_NAME');  // 👈
    return `Hello World! ${apiKey} ${name}`;
  }
}

```

Rin with NODE_ENV // 👈

`NODE_ENV=prod npm run start:dev`

`NODE_ENV=stag npm run start:dev`

## 2.3. Tipado en config.

A medida que tu aplicación acumule más y más variables de entorno, puede volverse inmanejable y es propenso a tener errores el no recordar sus nombres o escribirlos mal. A continuación verás como tipar variables.

## Cómo hacer el tipado de variables de entorno

Seguriza tu lista de variables de entorno de manera que evites errores que son difíciles de visualizar. Veamos cómo puedes tipar tus variables.

### 1. Archivo de tipado de variables

Crea un archivo al que denominaremos `config.ts` que contendrá el tipado de tu aplicación con ayuda de la dependencia `@nestjs/config`.

```tsx
// src/config.ts
import { registerAs } from "@nestjs/config";

export default registerAs('config', () => {
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    apiKey: process.env.API_KEY,
  }
})

```

Importa `registerAs` desde `@nestjs/config` que servirá para crear el tipado de datos. Crea un objeto con la estructura de datos que necesita tu aplicación. Este objeto contiene los valores de las variables de entorno tomados con el objeto global de **NodeJS**, `process`.

### 2. Importación del tipado de datos

Importa el nuevo archivo de configuración en el módulo de tu proyecto de la siguiente manera para que este sea reconocido.

```tsx
import { ConfigModule } from '@nestjs/config';
import config from './config';

@Global()
@Module({
  imports: [
    HttpModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true
    }),
  ],
})
export class AppModule {}

```

### 3. Tipado de variables de entorno

Es momento de utilizar este objeto que genera una interfaz entre nuestra aplicación y las variables de entorno para no confundir el nombre de cada variable.

```tsx
import { Controller, Inject } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import config from './config';

@Controller()
export class AppController {

  constructor(
    @Inject(config.KEY) private configService: ConfigType<typeof config>
  ) {}

  getEnvs(): string {
    const apiKey = this.configService.apiKey;
    const name = this.configService.database.name;
    return `Envs: ${apiKey} ${name}`;
  }
}

```

Observa la configuración necesaria para inyectar y tipar tus variables de entorno. Ahora ya no tendrás que preocuparte por posibles errores al invocar a una de estas variables y evitar dolores de cabeza debugueando estos errores.

## Cuadro de código para tipado en config

```
// .env
DATABASE_NAME=my_db_prod
API_KEY=999
DATABASE_PORT=8091 // 👈

```

```
// .stag.env
DATABASE_NAME=my_db_stag
API_KEY=333
DATABASE_PORT=8091 // 👈

```

```
// .prod.env
DATABASE_NAME=my_db_prod
API_KEY=999
DATABASE_PORT=8091 // 👈

```

```
// src/config.ts // 👈 new file
import { registerAs } from '@nestjs/config';

export default registerAs('config', () => { // 👈 export default
  return {
    database: {
      name: process.env.DATABASE_NAME,
      port: process.env.DATABASE_PORT,
    },
    apiKey: process.env.API_KEY,
  };
});

```

```
// src/app.module.ts
import config from './config'; // 👈

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config], // 👈
      isGlobal: true,
    }),
    ...
  ],
  ...
})
export class AppModule {}

```

```
// src/app.service.ts
import { ConfigType } from '@nestjs/config'; // 👈 Import ConfigType
import config from './config'; // 👈 config file

@Injectable()
export class AppService {
  constructor(
    @Inject('TASKS') private tasks: any[],
    @Inject(config.KEY) private configService: ConfigType<typeof config>, // 👈
  ) {}
  getHello(): string {
    const apiKey = this.configService.apiKey; // 👈
    const name = this.configService.database.name; // 👈
    return `Hello World! ${apiKey} ${name}`;
  }
}

```

## 2.4. Validación de esquemas en .envs con Joi.

Las variables de entorno son sensibles, pueden ser requeridas o no, pueden ser un *string* o un *number*. **Validemos tus variables de entorno para evitar errores** u omisiones de las mismas.

## Validando variables de entorno

Instala la dependencia [Joi](https://www.npmjs.com/package/joi) con el comando `npm instal joi --save`. La misma nos dará las herramientas para realizar validaciones de nuestras variables de entorno.

Importa **Joi** en el módulo de tu aplicación y a través de la propiedad `validationSchema` del objeto que recibe el **ConfigModule** crea el tipado y las validaciones de tus variables de entorno.

```tsx
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';

import config from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({
        API_KEY: Joi.string().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      })
    }),
  ],
  ],
})
export class AppModule {}

```

Lo que hace **Joi** es asegurar que, en el archivo `.env`, existan las variables de entorno indicadas dependiendo si son obligatorias o no, además de validar el tipo para no ingresar un *string* donde debería ir un *number*.

En equipos de trabajo profesional, quienes suelen desplegar las aplicaciones en los entornos es el equipo **DevOps**y ellos **no necesariamente saben qué variables de entorno necesita tu aplicación** y de qué tipo son. Gracias a esta configuración, **tu app emitirá mensajes de error** claros por consola cuando alguna variable no sea correcta.

> Curso Profesional de DevOps
> 

---

## Cuadro de código para variables de entorno

`npm install --save joi`

```
// src/app.module.ts

import * as Joi from 'joi';  // 👈

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [config],
      isGlobal: true,
      validationSchema: Joi.object({ // 👈
        API_KEY: Joi.number().required(),
        DATABASE_NAME: Joi.string().required(),
        DATABASE_PORT: Joi.number().required(),
      }),
    }),
    ...
  ],
  ...
})
export class AppModule {}
```

# 3. Documentación.

## 3.1. Integración Swagger y PartialType con Open API.

**Una API profesional debe estar documentada**. Cuando hablamos de documentación, nos suena a una tarea tediosa que nadie quiere realizar. Afortunadamente, NestJS permite automatizar fácilmente la creación de la misma.

## Cómo hacer la documentación API Rest

**[Swagger](https://swagger.io/)** es un reconocido set de herramientas para la documentación de API Rest. Instala las dependencias necesarias con el comando `npm install --save @nestjs/swagger swagger-ui-express` y configura el archivo `main.ts` con el siguiente código.

```tsx
// main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración Swagger en NestJS
  const config = new DocumentBuilder()
    .setTitle('Platzi API')
    .setDescription('Documentación Platzi API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  // URL API
  SwaggerModule.setup('docs', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();

```

Setea el título, descripción y versión de tu documentación. Lo más importante es la URL para acceder a la misma.

Levanta el servidor con `npm run start:dev` y accede a `localhost:3000/docs` para visualizar la documentación autogenerada que mapea automáticamente todos los endpoints de tu aplicación.

## Tipado de la documentación

La documentación autogenerada por Swagger es bastante simple, puedes volverla más completa tipando los datos de entrada y salida de cada endpoint gracias a los DTO.

Busca el archivo `nest-cli.json` en la raíz de tu proyecto y agrega el siguiente plugin:

```json
{
  "$schema": "https://json.schemastore.org/nest-cli",
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compileOptions": {
    "plugins": ["@nestjs/swagger"]
  }
}

```

A continuación, prepara tus DTO de la siguiente manera:

```tsx
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty, PartialType, OmitType } from '@nestjs/swagger';

export class CreateProductDTO {

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
}

export class UpdateAuthorDto extends PartialType(
  OmitType(CreateProductDTO, ['name']),
) {}

```

Lo más relevante aquí es importar **PartialType** y **OmitType** desde `@nestjs/swagger` en lugar de importarlo desde `@nestjs/mapped-types`. Coloca también el decorador `@ApiProperty()` en cada una de las propiedades que el DTO necesita.

![https://static.platzi.com/media/user_upload/Screenshot%20from%202022-06-17%2014-08-51%281%29-436e5207-765c-4d51-94b4-b3f72d1b8c93.jpg](https://static.platzi.com/media/user_upload/Screenshot%20from%202022-06-17%2014-08-51%281%29-436e5207-765c-4d51-94b4-b3f72d1b8c93.jpg)

De esta manera, observarás en la documentación que indica el tipo de dato que requiere cada uno de tus endpoints.

## Cuadro de código para uso de swagger

`npm install --save @nestjs/swagger swagger-ui-express`

```
// src/main.ts

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  ...
  const config = new DocumentBuilder()
    .setTitle('API')
    .setDescription('PLATZI STORE')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  ...
  await app.listen(3000);
}
bootstrap();

```

```json
# nest-cli.json
{
  "collection": "@nestjs/schematics",
  "sourceRoot": "src",
  "compilerOptions": {
    "plugins": ["@nestjs/swagger/plugin"]
  }
}

```

```
// src/products/dtos/brand.dtos.ts
import { PartialType } from '@nestjs/swagger';

```

```
// src/products/dtos/category.dtos.ts
import { PartialType } from '@nestjs/swagger';

```

```
// src/products/dtos/products.dtos.ts
import { PartialType } from '@nestjs/swagger';

```

```
// src/users/dtos/customer.dto.ts
import { PartialType } from '@nestjs/swagger';

```

```
// src/users/dtos/user.dto.ts
import { PartialType } from '@nestjs/swagger';
```

## 3.2. Extendiendo la documentación.

La documentación automática que genera NestJS y Swagger es muy fácil de implementar y otorga una buena base. **La documentación de tu aplicación puede ser aún más completa y detallada,** si así lo quieres con algo de trabajo de tu parte.

## Cómo hacer la documentación personalizada

Veamos varios decoradores que te servirán para ampliar la documentación de tu API.

### Descripción de las propiedades

En tus DTO, puedes dar detalle sobre qué se espera recibir en cada propiedad de tus endpoints gracias al decorador `@ApiProperty()`

```tsx
import { IsNotEmpty, IsString, IsNumber } from 'class-validator';
import { ApiProperty, PartialType, OmitType } from '@nestjs/swagger';

export class CreateProductDTO {

  @ApiProperty({ description: 'Nombre del producto' })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({ description: 'Descripción del producto' })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty({ description: 'Precio del producto' })
  @IsNotEmpty()
  @IsNumber()
  readonly price: number;
}

```

### Descripción de los controladores

Puedes agrupar los endpoints en la documentación por controlador con el decorador `@ApiTags()` y describir, endpoint por endpoint, la funcionalidad de cada uno con el decorador `@ApiOperation()`.

```tsx
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Productos')
@Controller()
export class AppController {

  @ApiOperation({ summary: 'Obtener lista de productos.' })
  @Get('products')
  getProducts() {
    // ...
  }
}

```

Para obtener un resultado en la documentación de tu API como el siguiente:

![https://static.platzi.com/media/user_upload/Screenshot%20from%202022-06-17%2015-42-27-5241b1e3-815e-483c-895c-f7387b19d55d.jpg](https://static.platzi.com/media/user_upload/Screenshot%20from%202022-06-17%2015-42-27-5241b1e3-815e-483c-895c-f7387b19d55d.jpg)

De este modo, la documentación de tu aplicación es súper profesional y está lista para ser recibida por el equipo front-end o por clientes externos que consumirán el servicio.

## Cuadro de código para documentación personalizada

```
// src/products/dtos/products.dtos.ts

import { PartialType, ApiProperty } from '@nestjs/swagger';

import {
  IsString,
  IsNumber,
  IsUrl,
  IsNotEmpty,
  IsPositive,
} from 'class-validator';
import { PartialType, ApiProperty } from '@nestjs/swagger'; // 👈

export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ description: `product's name` }) // 👈
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty() // 👈
  readonly description: string;

  @IsNumber()
  @IsNotEmpty()
  @IsPositive()
  @ApiProperty() // 👈
  readonly price: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty() // 👈
  readonly stock: number;

  @IsUrl()
  @IsNotEmpty()
  @ApiProperty() // 👈
  readonly image: string;
}

export class UpdateProductDto extends PartialType(CreateProductDto) {}

```

```
// src/products/controllers/products.controller.ts
import { ApiTags, ApiOperation } from '@nestjs/swagger'; // 👈

@ApiTags('products') // 👈
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'List of products' }) // 👈
  getProducts(
    @Query('limit') limit = 100,
    @Query('offset') offset = 0,
    @Query('brand') brand: string,
  ) {
    // return {
    //   message: `products limit=> ${limit} offset=> ${offset} brand=> ${brand}`,
    // };
    return this.productsService.findAll();
  }
}

```

```
// src/products/controllers/brands.controller.ts
import { ApiTags } from '@nestjs/swagger';

@ApiTags('brands') // 👈
@Controller('brands')
export class BrandsController {
  ...
}
```
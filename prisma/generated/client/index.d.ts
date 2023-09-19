
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Organ
 * 
 */
export type Organ = $Result.DefaultSelection<Prisma.$OrganPayload>
/**
 * Model Acesso
 * 
 */
export type Acesso = $Result.DefaultSelection<Prisma.$AcessoPayload>
/**
 * Model Usuario
 * 
 */
export type Usuario = $Result.DefaultSelection<Prisma.$UsuarioPayload>
/**
 * Model Facc
 * 
 */
export type Facc = $Result.DefaultSelection<Prisma.$FaccPayload>
/**
 * Model Pessoa
 * 
 */
export type Pessoa = $Result.DefaultSelection<Prisma.$PessoaPayload>
/**
 * Model Evento
 * 
 */
export type Evento = $Result.DefaultSelection<Prisma.$EventoPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Organs
 * const organs = await prisma.organ.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Organs
   * const organs = await prisma.organ.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.organ`: Exposes CRUD operations for the **Organ** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organs
    * const organs = await prisma.organ.findMany()
    * ```
    */
  get organ(): Prisma.OrganDelegate<ExtArgs>;

  /**
   * `prisma.acesso`: Exposes CRUD operations for the **Acesso** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Acessos
    * const acessos = await prisma.acesso.findMany()
    * ```
    */
  get acesso(): Prisma.AcessoDelegate<ExtArgs>;

  /**
   * `prisma.usuario`: Exposes CRUD operations for the **Usuario** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Usuarios
    * const usuarios = await prisma.usuario.findMany()
    * ```
    */
  get usuario(): Prisma.UsuarioDelegate<ExtArgs>;

  /**
   * `prisma.facc`: Exposes CRUD operations for the **Facc** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Faccs
    * const faccs = await prisma.facc.findMany()
    * ```
    */
  get facc(): Prisma.FaccDelegate<ExtArgs>;

  /**
   * `prisma.pessoa`: Exposes CRUD operations for the **Pessoa** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pessoas
    * const pessoas = await prisma.pessoa.findMany()
    * ```
    */
  get pessoa(): Prisma.PessoaDelegate<ExtArgs>;

  /**
   * `prisma.evento`: Exposes CRUD operations for the **Evento** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Eventos
    * const eventos = await prisma.evento.findMany()
    * ```
    */
  get evento(): Prisma.EventoDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.2.0
   * Query Engine version: 2804dc98259d2ea960602aca6b8e7fdc03c1758f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Organ: 'Organ',
    Acesso: 'Acesso',
    Usuario: 'Usuario',
    Facc: 'Facc',
    Pessoa: 'Pessoa',
    Evento: 'Evento'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'organ' | 'acesso' | 'usuario' | 'facc' | 'pessoa' | 'evento'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Organ: {
        payload: Prisma.$OrganPayload<ExtArgs>
        fields: Prisma.OrganFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganPayload>
          }
          findFirst: {
            args: Prisma.OrganFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganPayload>
          }
          findMany: {
            args: Prisma.OrganFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganPayload>[]
          }
          create: {
            args: Prisma.OrganCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganPayload>
          }
          createMany: {
            args: Prisma.OrganCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.OrganDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganPayload>
          }
          update: {
            args: Prisma.OrganUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganPayload>
          }
          deleteMany: {
            args: Prisma.OrganDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.OrganUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.OrganUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$OrganPayload>
          }
          aggregate: {
            args: Prisma.OrganAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateOrgan>
          }
          groupBy: {
            args: Prisma.OrganGroupByArgs<ExtArgs>,
            result: $Utils.Optional<OrganGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganCountArgs<ExtArgs>,
            result: $Utils.Optional<OrganCountAggregateOutputType> | number
          }
        }
      }
      Acesso: {
        payload: Prisma.$AcessoPayload<ExtArgs>
        fields: Prisma.AcessoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AcessoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AcessoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>
          }
          findFirst: {
            args: Prisma.AcessoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AcessoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>
          }
          findMany: {
            args: Prisma.AcessoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>[]
          }
          create: {
            args: Prisma.AcessoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>
          }
          createMany: {
            args: Prisma.AcessoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AcessoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>
          }
          update: {
            args: Prisma.AcessoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>
          }
          deleteMany: {
            args: Prisma.AcessoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AcessoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AcessoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AcessoPayload>
          }
          aggregate: {
            args: Prisma.AcessoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAcesso>
          }
          groupBy: {
            args: Prisma.AcessoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AcessoGroupByOutputType>[]
          }
          count: {
            args: Prisma.AcessoCountArgs<ExtArgs>,
            result: $Utils.Optional<AcessoCountAggregateOutputType> | number
          }
        }
      }
      Usuario: {
        payload: Prisma.$UsuarioPayload<ExtArgs>
        fields: Prisma.UsuarioFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UsuarioFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UsuarioFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findFirst: {
            args: Prisma.UsuarioFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UsuarioFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          findMany: {
            args: Prisma.UsuarioFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>[]
          }
          create: {
            args: Prisma.UsuarioCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          createMany: {
            args: Prisma.UsuarioCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UsuarioDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          update: {
            args: Prisma.UsuarioUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          deleteMany: {
            args: Prisma.UsuarioDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UsuarioUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UsuarioUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UsuarioPayload>
          }
          aggregate: {
            args: Prisma.UsuarioAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUsuario>
          }
          groupBy: {
            args: Prisma.UsuarioGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioGroupByOutputType>[]
          }
          count: {
            args: Prisma.UsuarioCountArgs<ExtArgs>,
            result: $Utils.Optional<UsuarioCountAggregateOutputType> | number
          }
        }
      }
      Facc: {
        payload: Prisma.$FaccPayload<ExtArgs>
        fields: Prisma.FaccFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FaccFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaccPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FaccFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaccPayload>
          }
          findFirst: {
            args: Prisma.FaccFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaccPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FaccFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaccPayload>
          }
          findMany: {
            args: Prisma.FaccFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaccPayload>[]
          }
          create: {
            args: Prisma.FaccCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaccPayload>
          }
          createMany: {
            args: Prisma.FaccCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.FaccDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaccPayload>
          }
          update: {
            args: Prisma.FaccUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaccPayload>
          }
          deleteMany: {
            args: Prisma.FaccDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.FaccUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.FaccUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$FaccPayload>
          }
          aggregate: {
            args: Prisma.FaccAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateFacc>
          }
          groupBy: {
            args: Prisma.FaccGroupByArgs<ExtArgs>,
            result: $Utils.Optional<FaccGroupByOutputType>[]
          }
          count: {
            args: Prisma.FaccCountArgs<ExtArgs>,
            result: $Utils.Optional<FaccCountAggregateOutputType> | number
          }
        }
      }
      Pessoa: {
        payload: Prisma.$PessoaPayload<ExtArgs>
        fields: Prisma.PessoaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PessoaFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PessoaFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          findFirst: {
            args: Prisma.PessoaFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PessoaFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          findMany: {
            args: Prisma.PessoaFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>[]
          }
          create: {
            args: Prisma.PessoaCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          createMany: {
            args: Prisma.PessoaCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PessoaDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          update: {
            args: Prisma.PessoaUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          deleteMany: {
            args: Prisma.PessoaDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PessoaUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PessoaUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PessoaPayload>
          }
          aggregate: {
            args: Prisma.PessoaAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePessoa>
          }
          groupBy: {
            args: Prisma.PessoaGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PessoaGroupByOutputType>[]
          }
          count: {
            args: Prisma.PessoaCountArgs<ExtArgs>,
            result: $Utils.Optional<PessoaCountAggregateOutputType> | number
          }
        }
      }
      Evento: {
        payload: Prisma.$EventoPayload<ExtArgs>
        fields: Prisma.EventoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventoFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventoFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findFirst: {
            args: Prisma.EventoFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventoFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          findMany: {
            args: Prisma.EventoFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>[]
          }
          create: {
            args: Prisma.EventoCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          createMany: {
            args: Prisma.EventoCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.EventoDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          update: {
            args: Prisma.EventoUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          deleteMany: {
            args: Prisma.EventoDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.EventoUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.EventoUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$EventoPayload>
          }
          aggregate: {
            args: Prisma.EventoAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateEvento>
          }
          groupBy: {
            args: Prisma.EventoGroupByArgs<ExtArgs>,
            result: $Utils.Optional<EventoGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventoCountArgs<ExtArgs>,
            result: $Utils.Optional<EventoCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type OrganCountOutputType
   */

  export type OrganCountOutputType = {
    usuarios: number
  }

  export type OrganCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    usuarios?: boolean | OrganCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes

  /**
   * OrganCountOutputType without action
   */
  export type OrganCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganCountOutputType
     */
    select?: OrganCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * OrganCountOutputType without action
   */
  export type OrganCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }



  /**
   * Count Type AcessoCountOutputType
   */

  export type AcessoCountOutputType = {
    usuarios: number
  }

  export type AcessoCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    usuarios?: boolean | AcessoCountOutputTypeCountUsuariosArgs
  }

  // Custom InputTypes

  /**
   * AcessoCountOutputType without action
   */
  export type AcessoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AcessoCountOutputType
     */
    select?: AcessoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AcessoCountOutputType without action
   */
  export type AcessoCountOutputTypeCountUsuariosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
  }



  /**
   * Count Type FaccCountOutputType
   */

  export type FaccCountOutputType = {
    pessoas: number
  }

  export type FaccCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    pessoas?: boolean | FaccCountOutputTypeCountPessoasArgs
  }

  // Custom InputTypes

  /**
   * FaccCountOutputType without action
   */
  export type FaccCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FaccCountOutputType
     */
    select?: FaccCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * FaccCountOutputType without action
   */
  export type FaccCountOutputTypeCountPessoasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PessoaWhereInput
  }



  /**
   * Count Type EventoCountOutputType
   */

  export type EventoCountOutputType = {
    pessoas: number
  }

  export type EventoCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    pessoas?: boolean | EventoCountOutputTypeCountPessoasArgs
  }

  // Custom InputTypes

  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventoCountOutputType
     */
    select?: EventoCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * EventoCountOutputType without action
   */
  export type EventoCountOutputTypeCountPessoasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PessoaWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Organ
   */

  export type AggregateOrgan = {
    _count: OrganCountAggregateOutputType | null
    _avg: OrganAvgAggregateOutputType | null
    _sum: OrganSumAggregateOutputType | null
    _min: OrganMinAggregateOutputType | null
    _max: OrganMaxAggregateOutputType | null
  }

  export type OrganAvgAggregateOutputType = {
    id: number | null
  }

  export type OrganSumAggregateOutputType = {
    id: number | null
  }

  export type OrganMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OrganMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type OrganCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type OrganAvgAggregateInputType = {
    id?: true
  }

  export type OrganSumAggregateInputType = {
    id?: true
  }

  export type OrganMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type OrganMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type OrganCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type OrganAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organ to aggregate.
     */
    where?: OrganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organs to fetch.
     */
    orderBy?: OrganOrderByWithRelationInput | OrganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organs
    **/
    _count?: true | OrganCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganMaxAggregateInputType
  }

  export type GetOrganAggregateType<T extends OrganAggregateArgs> = {
        [P in keyof T & keyof AggregateOrgan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrgan[P]>
      : GetScalarType<T[P], AggregateOrgan[P]>
  }




  export type OrganGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: OrganWhereInput
    orderBy?: OrganOrderByWithAggregationInput | OrganOrderByWithAggregationInput[]
    by: OrganScalarFieldEnum[] | OrganScalarFieldEnum
    having?: OrganScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganCountAggregateInputType | true
    _avg?: OrganAvgAggregateInputType
    _sum?: OrganSumAggregateInputType
    _min?: OrganMinAggregateInputType
    _max?: OrganMaxAggregateInputType
  }

  export type OrganGroupByOutputType = {
    id: number
    name: string
    _count: OrganCountAggregateOutputType | null
    _avg: OrganAvgAggregateOutputType | null
    _sum: OrganSumAggregateOutputType | null
    _min: OrganMinAggregateOutputType | null
    _max: OrganMaxAggregateOutputType | null
  }

  type GetOrganGroupByPayload<T extends OrganGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganGroupByOutputType[P]>
            : GetScalarType<T[P], OrganGroupByOutputType[P]>
        }
      >
    >


  export type OrganSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    usuarios?: boolean | Organ$usuariosArgs<ExtArgs>
    _count?: boolean | OrganCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organ"]>

  export type OrganSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type OrganInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Organ$usuariosArgs<ExtArgs>
    _count?: boolean | OrganCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $OrganPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Organ"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
    }, ExtArgs["result"]["organ"]>
    composites: {}
  }


  type OrganGetPayload<S extends boolean | null | undefined | OrganDefaultArgs> = $Result.GetResult<Prisma.$OrganPayload, S>

  type OrganCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<OrganFindManyArgs, 'select' | 'include'> & {
      select?: OrganCountAggregateInputType | true
    }

  export interface OrganDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organ'], meta: { name: 'Organ' } }
    /**
     * Find zero or one Organ that matches the filter.
     * @param {OrganFindUniqueArgs} args - Arguments to find a Organ
     * @example
     * // Get one Organ
     * const organ = await prisma.organ.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends OrganFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, OrganFindUniqueArgs<ExtArgs>>
    ): Prisma__OrganClient<$Result.GetResult<Prisma.$OrganPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Organ that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {OrganFindUniqueOrThrowArgs} args - Arguments to find a Organ
     * @example
     * // Get one Organ
     * const organ = await prisma.organ.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends OrganFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__OrganClient<$Result.GetResult<Prisma.$OrganPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Organ that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganFindFirstArgs} args - Arguments to find a Organ
     * @example
     * // Get one Organ
     * const organ = await prisma.organ.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends OrganFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganFindFirstArgs<ExtArgs>>
    ): Prisma__OrganClient<$Result.GetResult<Prisma.$OrganPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Organ that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganFindFirstOrThrowArgs} args - Arguments to find a Organ
     * @example
     * // Get one Organ
     * const organ = await prisma.organ.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends OrganFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__OrganClient<$Result.GetResult<Prisma.$OrganPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Organs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organs
     * const organs = await prisma.organ.findMany()
     * 
     * // Get first 10 Organs
     * const organs = await prisma.organ.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organWithIdOnly = await prisma.organ.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends OrganFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Organ.
     * @param {OrganCreateArgs} args - Arguments to create a Organ.
     * @example
     * // Create one Organ
     * const Organ = await prisma.organ.create({
     *   data: {
     *     // ... data to create a Organ
     *   }
     * })
     * 
    **/
    create<T extends OrganCreateArgs<ExtArgs>>(
      args: SelectSubset<T, OrganCreateArgs<ExtArgs>>
    ): Prisma__OrganClient<$Result.GetResult<Prisma.$OrganPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Organs.
     *     @param {OrganCreateManyArgs} args - Arguments to create many Organs.
     *     @example
     *     // Create many Organs
     *     const organ = await prisma.organ.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends OrganCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Organ.
     * @param {OrganDeleteArgs} args - Arguments to delete one Organ.
     * @example
     * // Delete one Organ
     * const Organ = await prisma.organ.delete({
     *   where: {
     *     // ... filter to delete one Organ
     *   }
     * })
     * 
    **/
    delete<T extends OrganDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, OrganDeleteArgs<ExtArgs>>
    ): Prisma__OrganClient<$Result.GetResult<Prisma.$OrganPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Organ.
     * @param {OrganUpdateArgs} args - Arguments to update one Organ.
     * @example
     * // Update one Organ
     * const organ = await prisma.organ.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends OrganUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, OrganUpdateArgs<ExtArgs>>
    ): Prisma__OrganClient<$Result.GetResult<Prisma.$OrganPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Organs.
     * @param {OrganDeleteManyArgs} args - Arguments to filter Organs to delete.
     * @example
     * // Delete a few Organs
     * const { count } = await prisma.organ.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends OrganDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, OrganDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organs
     * const organ = await prisma.organ.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends OrganUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, OrganUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Organ.
     * @param {OrganUpsertArgs} args - Arguments to update or create a Organ.
     * @example
     * // Update or create a Organ
     * const organ = await prisma.organ.upsert({
     *   create: {
     *     // ... data to create a Organ
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organ we want to update
     *   }
     * })
    **/
    upsert<T extends OrganUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, OrganUpsertArgs<ExtArgs>>
    ): Prisma__OrganClient<$Result.GetResult<Prisma.$OrganPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Organs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganCountArgs} args - Arguments to filter Organs to count.
     * @example
     * // Count the number of Organs
     * const count = await prisma.organ.count({
     *   where: {
     *     // ... the filter for the Organs we want to count
     *   }
     * })
    **/
    count<T extends OrganCountArgs>(
      args?: Subset<T, OrganCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganAggregateArgs>(args: Subset<T, OrganAggregateArgs>): Prisma.PrismaPromise<GetOrganAggregateType<T>>

    /**
     * Group by Organ.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganGroupByArgs['orderBy'] }
        : { orderBy?: OrganGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organ model
   */
  readonly fields: OrganFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organ.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuarios<T extends Organ$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Organ$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Organ model
   */ 
  interface OrganFieldRefs {
    readonly id: FieldRef<"Organ", 'Int'>
    readonly name: FieldRef<"Organ", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Organ findUnique
   */
  export type OrganFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organ
     */
    select?: OrganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganInclude<ExtArgs> | null
    /**
     * Filter, which Organ to fetch.
     */
    where: OrganWhereUniqueInput
  }


  /**
   * Organ findUniqueOrThrow
   */
  export type OrganFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organ
     */
    select?: OrganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganInclude<ExtArgs> | null
    /**
     * Filter, which Organ to fetch.
     */
    where: OrganWhereUniqueInput
  }


  /**
   * Organ findFirst
   */
  export type OrganFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organ
     */
    select?: OrganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganInclude<ExtArgs> | null
    /**
     * Filter, which Organ to fetch.
     */
    where?: OrganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organs to fetch.
     */
    orderBy?: OrganOrderByWithRelationInput | OrganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organs.
     */
    cursor?: OrganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organs.
     */
    distinct?: OrganScalarFieldEnum | OrganScalarFieldEnum[]
  }


  /**
   * Organ findFirstOrThrow
   */
  export type OrganFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organ
     */
    select?: OrganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganInclude<ExtArgs> | null
    /**
     * Filter, which Organ to fetch.
     */
    where?: OrganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organs to fetch.
     */
    orderBy?: OrganOrderByWithRelationInput | OrganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organs.
     */
    cursor?: OrganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organs.
     */
    distinct?: OrganScalarFieldEnum | OrganScalarFieldEnum[]
  }


  /**
   * Organ findMany
   */
  export type OrganFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organ
     */
    select?: OrganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganInclude<ExtArgs> | null
    /**
     * Filter, which Organs to fetch.
     */
    where?: OrganWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organs to fetch.
     */
    orderBy?: OrganOrderByWithRelationInput | OrganOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organs.
     */
    cursor?: OrganWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organs.
     */
    skip?: number
    distinct?: OrganScalarFieldEnum | OrganScalarFieldEnum[]
  }


  /**
   * Organ create
   */
  export type OrganCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organ
     */
    select?: OrganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganInclude<ExtArgs> | null
    /**
     * The data needed to create a Organ.
     */
    data: XOR<OrganCreateInput, OrganUncheckedCreateInput>
  }


  /**
   * Organ createMany
   */
  export type OrganCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organs.
     */
    data: OrganCreateManyInput | OrganCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Organ update
   */
  export type OrganUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organ
     */
    select?: OrganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganInclude<ExtArgs> | null
    /**
     * The data needed to update a Organ.
     */
    data: XOR<OrganUpdateInput, OrganUncheckedUpdateInput>
    /**
     * Choose, which Organ to update.
     */
    where: OrganWhereUniqueInput
  }


  /**
   * Organ updateMany
   */
  export type OrganUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organs.
     */
    data: XOR<OrganUpdateManyMutationInput, OrganUncheckedUpdateManyInput>
    /**
     * Filter which Organs to update
     */
    where?: OrganWhereInput
  }


  /**
   * Organ upsert
   */
  export type OrganUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organ
     */
    select?: OrganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganInclude<ExtArgs> | null
    /**
     * The filter to search for the Organ to update in case it exists.
     */
    where: OrganWhereUniqueInput
    /**
     * In case the Organ found by the `where` argument doesn't exist, create a new Organ with this data.
     */
    create: XOR<OrganCreateInput, OrganUncheckedCreateInput>
    /**
     * In case the Organ was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganUpdateInput, OrganUncheckedUpdateInput>
  }


  /**
   * Organ delete
   */
  export type OrganDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organ
     */
    select?: OrganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganInclude<ExtArgs> | null
    /**
     * Filter which Organ to delete.
     */
    where: OrganWhereUniqueInput
  }


  /**
   * Organ deleteMany
   */
  export type OrganDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organs to delete
     */
    where?: OrganWhereInput
  }


  /**
   * Organ.usuarios
   */
  export type Organ$usuariosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Organ without action
   */
  export type OrganDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organ
     */
    select?: OrganSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: OrganInclude<ExtArgs> | null
  }



  /**
   * Model Acesso
   */

  export type AggregateAcesso = {
    _count: AcessoCountAggregateOutputType | null
    _avg: AcessoAvgAggregateOutputType | null
    _sum: AcessoSumAggregateOutputType | null
    _min: AcessoMinAggregateOutputType | null
    _max: AcessoMaxAggregateOutputType | null
  }

  export type AcessoAvgAggregateOutputType = {
    id: number | null
  }

  export type AcessoSumAggregateOutputType = {
    id: number | null
  }

  export type AcessoMinAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type AcessoMaxAggregateOutputType = {
    id: number | null
    title: string | null
  }

  export type AcessoCountAggregateOutputType = {
    id: number
    title: number
    _all: number
  }


  export type AcessoAvgAggregateInputType = {
    id?: true
  }

  export type AcessoSumAggregateInputType = {
    id?: true
  }

  export type AcessoMinAggregateInputType = {
    id?: true
    title?: true
  }

  export type AcessoMaxAggregateInputType = {
    id?: true
    title?: true
  }

  export type AcessoCountAggregateInputType = {
    id?: true
    title?: true
    _all?: true
  }

  export type AcessoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acesso to aggregate.
     */
    where?: AcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessos to fetch.
     */
    orderBy?: AcessoOrderByWithRelationInput | AcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Acessos
    **/
    _count?: true | AcessoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AcessoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AcessoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AcessoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AcessoMaxAggregateInputType
  }

  export type GetAcessoAggregateType<T extends AcessoAggregateArgs> = {
        [P in keyof T & keyof AggregateAcesso]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAcesso[P]>
      : GetScalarType<T[P], AggregateAcesso[P]>
  }




  export type AcessoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AcessoWhereInput
    orderBy?: AcessoOrderByWithAggregationInput | AcessoOrderByWithAggregationInput[]
    by: AcessoScalarFieldEnum[] | AcessoScalarFieldEnum
    having?: AcessoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AcessoCountAggregateInputType | true
    _avg?: AcessoAvgAggregateInputType
    _sum?: AcessoSumAggregateInputType
    _min?: AcessoMinAggregateInputType
    _max?: AcessoMaxAggregateInputType
  }

  export type AcessoGroupByOutputType = {
    id: number
    title: string
    _count: AcessoCountAggregateOutputType | null
    _avg: AcessoAvgAggregateOutputType | null
    _sum: AcessoSumAggregateOutputType | null
    _min: AcessoMinAggregateOutputType | null
    _max: AcessoMaxAggregateOutputType | null
  }

  type GetAcessoGroupByPayload<T extends AcessoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AcessoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AcessoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AcessoGroupByOutputType[P]>
            : GetScalarType<T[P], AcessoGroupByOutputType[P]>
        }
      >
    >


  export type AcessoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    usuarios?: boolean | Acesso$usuariosArgs<ExtArgs>
    _count?: boolean | AcessoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["acesso"]>

  export type AcessoSelectScalar = {
    id?: boolean
    title?: boolean
  }

  export type AcessoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    usuarios?: boolean | Acesso$usuariosArgs<ExtArgs>
    _count?: boolean | AcessoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AcessoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Acesso"
    objects: {
      usuarios: Prisma.$UsuarioPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      title: string
    }, ExtArgs["result"]["acesso"]>
    composites: {}
  }


  type AcessoGetPayload<S extends boolean | null | undefined | AcessoDefaultArgs> = $Result.GetResult<Prisma.$AcessoPayload, S>

  type AcessoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AcessoFindManyArgs, 'select' | 'include'> & {
      select?: AcessoCountAggregateInputType | true
    }

  export interface AcessoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Acesso'], meta: { name: 'Acesso' } }
    /**
     * Find zero or one Acesso that matches the filter.
     * @param {AcessoFindUniqueArgs} args - Arguments to find a Acesso
     * @example
     * // Get one Acesso
     * const acesso = await prisma.acesso.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AcessoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AcessoFindUniqueArgs<ExtArgs>>
    ): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Acesso that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AcessoFindUniqueOrThrowArgs} args - Arguments to find a Acesso
     * @example
     * // Get one Acesso
     * const acesso = await prisma.acesso.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AcessoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AcessoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Acesso that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoFindFirstArgs} args - Arguments to find a Acesso
     * @example
     * // Get one Acesso
     * const acesso = await prisma.acesso.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AcessoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AcessoFindFirstArgs<ExtArgs>>
    ): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Acesso that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoFindFirstOrThrowArgs} args - Arguments to find a Acesso
     * @example
     * // Get one Acesso
     * const acesso = await prisma.acesso.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AcessoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AcessoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Acessos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Acessos
     * const acessos = await prisma.acesso.findMany()
     * 
     * // Get first 10 Acessos
     * const acessos = await prisma.acesso.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const acessoWithIdOnly = await prisma.acesso.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AcessoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AcessoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Acesso.
     * @param {AcessoCreateArgs} args - Arguments to create a Acesso.
     * @example
     * // Create one Acesso
     * const Acesso = await prisma.acesso.create({
     *   data: {
     *     // ... data to create a Acesso
     *   }
     * })
     * 
    **/
    create<T extends AcessoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AcessoCreateArgs<ExtArgs>>
    ): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Acessos.
     *     @param {AcessoCreateManyArgs} args - Arguments to create many Acessos.
     *     @example
     *     // Create many Acessos
     *     const acesso = await prisma.acesso.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AcessoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AcessoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Acesso.
     * @param {AcessoDeleteArgs} args - Arguments to delete one Acesso.
     * @example
     * // Delete one Acesso
     * const Acesso = await prisma.acesso.delete({
     *   where: {
     *     // ... filter to delete one Acesso
     *   }
     * })
     * 
    **/
    delete<T extends AcessoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AcessoDeleteArgs<ExtArgs>>
    ): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Acesso.
     * @param {AcessoUpdateArgs} args - Arguments to update one Acesso.
     * @example
     * // Update one Acesso
     * const acesso = await prisma.acesso.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AcessoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AcessoUpdateArgs<ExtArgs>>
    ): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Acessos.
     * @param {AcessoDeleteManyArgs} args - Arguments to filter Acessos to delete.
     * @example
     * // Delete a few Acessos
     * const { count } = await prisma.acesso.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AcessoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AcessoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Acessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Acessos
     * const acesso = await prisma.acesso.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AcessoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AcessoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Acesso.
     * @param {AcessoUpsertArgs} args - Arguments to update or create a Acesso.
     * @example
     * // Update or create a Acesso
     * const acesso = await prisma.acesso.upsert({
     *   create: {
     *     // ... data to create a Acesso
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Acesso we want to update
     *   }
     * })
    **/
    upsert<T extends AcessoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AcessoUpsertArgs<ExtArgs>>
    ): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Acessos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoCountArgs} args - Arguments to filter Acessos to count.
     * @example
     * // Count the number of Acessos
     * const count = await prisma.acesso.count({
     *   where: {
     *     // ... the filter for the Acessos we want to count
     *   }
     * })
    **/
    count<T extends AcessoCountArgs>(
      args?: Subset<T, AcessoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AcessoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Acesso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AcessoAggregateArgs>(args: Subset<T, AcessoAggregateArgs>): Prisma.PrismaPromise<GetAcessoAggregateType<T>>

    /**
     * Group by Acesso.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AcessoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AcessoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AcessoGroupByArgs['orderBy'] }
        : { orderBy?: AcessoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AcessoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAcessoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Acesso model
   */
  readonly fields: AcessoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Acesso.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AcessoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    usuarios<T extends Acesso$usuariosArgs<ExtArgs> = {}>(args?: Subset<T, Acesso$usuariosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Acesso model
   */ 
  interface AcessoFieldRefs {
    readonly id: FieldRef<"Acesso", 'Int'>
    readonly title: FieldRef<"Acesso", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Acesso findUnique
   */
  export type AcessoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * Filter, which Acesso to fetch.
     */
    where: AcessoWhereUniqueInput
  }


  /**
   * Acesso findUniqueOrThrow
   */
  export type AcessoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * Filter, which Acesso to fetch.
     */
    where: AcessoWhereUniqueInput
  }


  /**
   * Acesso findFirst
   */
  export type AcessoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * Filter, which Acesso to fetch.
     */
    where?: AcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessos to fetch.
     */
    orderBy?: AcessoOrderByWithRelationInput | AcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acessos.
     */
    cursor?: AcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acessos.
     */
    distinct?: AcessoScalarFieldEnum | AcessoScalarFieldEnum[]
  }


  /**
   * Acesso findFirstOrThrow
   */
  export type AcessoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * Filter, which Acesso to fetch.
     */
    where?: AcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessos to fetch.
     */
    orderBy?: AcessoOrderByWithRelationInput | AcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Acessos.
     */
    cursor?: AcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Acessos.
     */
    distinct?: AcessoScalarFieldEnum | AcessoScalarFieldEnum[]
  }


  /**
   * Acesso findMany
   */
  export type AcessoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * Filter, which Acessos to fetch.
     */
    where?: AcessoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Acessos to fetch.
     */
    orderBy?: AcessoOrderByWithRelationInput | AcessoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Acessos.
     */
    cursor?: AcessoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Acessos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Acessos.
     */
    skip?: number
    distinct?: AcessoScalarFieldEnum | AcessoScalarFieldEnum[]
  }


  /**
   * Acesso create
   */
  export type AcessoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * The data needed to create a Acesso.
     */
    data: XOR<AcessoCreateInput, AcessoUncheckedCreateInput>
  }


  /**
   * Acesso createMany
   */
  export type AcessoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Acessos.
     */
    data: AcessoCreateManyInput | AcessoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Acesso update
   */
  export type AcessoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * The data needed to update a Acesso.
     */
    data: XOR<AcessoUpdateInput, AcessoUncheckedUpdateInput>
    /**
     * Choose, which Acesso to update.
     */
    where: AcessoWhereUniqueInput
  }


  /**
   * Acesso updateMany
   */
  export type AcessoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Acessos.
     */
    data: XOR<AcessoUpdateManyMutationInput, AcessoUncheckedUpdateManyInput>
    /**
     * Filter which Acessos to update
     */
    where?: AcessoWhereInput
  }


  /**
   * Acesso upsert
   */
  export type AcessoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * The filter to search for the Acesso to update in case it exists.
     */
    where: AcessoWhereUniqueInput
    /**
     * In case the Acesso found by the `where` argument doesn't exist, create a new Acesso with this data.
     */
    create: XOR<AcessoCreateInput, AcessoUncheckedCreateInput>
    /**
     * In case the Acesso was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AcessoUpdateInput, AcessoUncheckedUpdateInput>
  }


  /**
   * Acesso delete
   */
  export type AcessoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcessoInclude<ExtArgs> | null
    /**
     * Filter which Acesso to delete.
     */
    where: AcessoWhereUniqueInput
  }


  /**
   * Acesso deleteMany
   */
  export type AcessoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Acessos to delete
     */
    where?: AcessoWhereInput
  }


  /**
   * Acesso.usuarios
   */
  export type Acesso$usuariosArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    cursor?: UsuarioWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Acesso without action
   */
  export type AcessoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Acesso
     */
    select?: AcessoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AcessoInclude<ExtArgs> | null
  }



  /**
   * Model Usuario
   */

  export type AggregateUsuario = {
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  export type UsuarioAvgAggregateOutputType = {
    id: number | null
    acessoId: number | null
    organId: number | null
  }

  export type UsuarioSumAggregateOutputType = {
    id: number | null
    acessoId: number | null
    organId: number | null
  }

  export type UsuarioMinAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    acessoId: number | null
    organId: number | null
  }

  export type UsuarioMaxAggregateOutputType = {
    id: number | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
    acessoId: number | null
    organId: number | null
  }

  export type UsuarioCountAggregateOutputType = {
    id: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    acessoId: number
    organId: number
    _all: number
  }


  export type UsuarioAvgAggregateInputType = {
    id?: true
    acessoId?: true
    organId?: true
  }

  export type UsuarioSumAggregateInputType = {
    id?: true
    acessoId?: true
    organId?: true
  }

  export type UsuarioMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    acessoId?: true
    organId?: true
  }

  export type UsuarioMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    acessoId?: true
    organId?: true
  }

  export type UsuarioCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
    acessoId?: true
    organId?: true
    _all?: true
  }

  export type UsuarioAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuario to aggregate.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Usuarios
    **/
    _count?: true | UsuarioCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsuarioAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsuarioSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsuarioMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsuarioMaxAggregateInputType
  }

  export type GetUsuarioAggregateType<T extends UsuarioAggregateArgs> = {
        [P in keyof T & keyof AggregateUsuario]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsuario[P]>
      : GetScalarType<T[P], AggregateUsuario[P]>
  }




  export type UsuarioGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UsuarioWhereInput
    orderBy?: UsuarioOrderByWithAggregationInput | UsuarioOrderByWithAggregationInput[]
    by: UsuarioScalarFieldEnum[] | UsuarioScalarFieldEnum
    having?: UsuarioScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsuarioCountAggregateInputType | true
    _avg?: UsuarioAvgAggregateInputType
    _sum?: UsuarioSumAggregateInputType
    _min?: UsuarioMinAggregateInputType
    _max?: UsuarioMaxAggregateInputType
  }

  export type UsuarioGroupByOutputType = {
    id: number
    email: string
    name: string | null
    createdAt: Date
    updatedAt: Date
    acessoId: number
    organId: number
    _count: UsuarioCountAggregateOutputType | null
    _avg: UsuarioAvgAggregateOutputType | null
    _sum: UsuarioSumAggregateOutputType | null
    _min: UsuarioMinAggregateOutputType | null
    _max: UsuarioMaxAggregateOutputType | null
  }

  type GetUsuarioGroupByPayload<T extends UsuarioGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsuarioGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsuarioGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
            : GetScalarType<T[P], UsuarioGroupByOutputType[P]>
        }
      >
    >


  export type UsuarioSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    acessoId?: boolean
    organId?: boolean
    acesso?: boolean | AcessoDefaultArgs<ExtArgs>
    organ?: boolean | OrganDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["usuario"]>

  export type UsuarioSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    acessoId?: boolean
    organId?: boolean
  }

  export type UsuarioInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    acesso?: boolean | AcessoDefaultArgs<ExtArgs>
    organ?: boolean | OrganDefaultArgs<ExtArgs>
  }


  export type $UsuarioPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Usuario"
    objects: {
      acesso: Prisma.$AcessoPayload<ExtArgs>
      organ: Prisma.$OrganPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      email: string
      name: string | null
      createdAt: Date
      updatedAt: Date
      acessoId: number
      organId: number
    }, ExtArgs["result"]["usuario"]>
    composites: {}
  }


  type UsuarioGetPayload<S extends boolean | null | undefined | UsuarioDefaultArgs> = $Result.GetResult<Prisma.$UsuarioPayload, S>

  type UsuarioCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UsuarioFindManyArgs, 'select' | 'include'> & {
      select?: UsuarioCountAggregateInputType | true
    }

  export interface UsuarioDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Usuario'], meta: { name: 'Usuario' } }
    /**
     * Find zero or one Usuario that matches the filter.
     * @param {UsuarioFindUniqueArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UsuarioFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioFindUniqueArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Usuario that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UsuarioFindUniqueOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UsuarioFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Usuario that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UsuarioFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Usuario that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindFirstOrThrowArgs} args - Arguments to find a Usuario
     * @example
     * // Get one Usuario
     * const usuario = await prisma.usuario.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UsuarioFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Usuarios that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Usuarios
     * const usuarios = await prisma.usuario.findMany()
     * 
     * // Get first 10 Usuarios
     * const usuarios = await prisma.usuario.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usuarioWithIdOnly = await prisma.usuario.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UsuarioFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Usuario.
     * @param {UsuarioCreateArgs} args - Arguments to create a Usuario.
     * @example
     * // Create one Usuario
     * const Usuario = await prisma.usuario.create({
     *   data: {
     *     // ... data to create a Usuario
     *   }
     * })
     * 
    **/
    create<T extends UsuarioCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioCreateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Usuarios.
     *     @param {UsuarioCreateManyArgs} args - Arguments to create many Usuarios.
     *     @example
     *     // Create many Usuarios
     *     const usuario = await prisma.usuario.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UsuarioCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Usuario.
     * @param {UsuarioDeleteArgs} args - Arguments to delete one Usuario.
     * @example
     * // Delete one Usuario
     * const Usuario = await prisma.usuario.delete({
     *   where: {
     *     // ... filter to delete one Usuario
     *   }
     * })
     * 
    **/
    delete<T extends UsuarioDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioDeleteArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Usuario.
     * @param {UsuarioUpdateArgs} args - Arguments to update one Usuario.
     * @example
     * // Update one Usuario
     * const usuario = await prisma.usuario.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UsuarioUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Usuarios.
     * @param {UsuarioDeleteManyArgs} args - Arguments to filter Usuarios to delete.
     * @example
     * // Delete a few Usuarios
     * const { count } = await prisma.usuario.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UsuarioDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UsuarioDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Usuarios
     * const usuario = await prisma.usuario.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UsuarioUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Usuario.
     * @param {UsuarioUpsertArgs} args - Arguments to update or create a Usuario.
     * @example
     * // Update or create a Usuario
     * const usuario = await prisma.usuario.upsert({
     *   create: {
     *     // ... data to create a Usuario
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Usuario we want to update
     *   }
     * })
    **/
    upsert<T extends UsuarioUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UsuarioUpsertArgs<ExtArgs>>
    ): Prisma__UsuarioClient<$Result.GetResult<Prisma.$UsuarioPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Usuarios.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioCountArgs} args - Arguments to filter Usuarios to count.
     * @example
     * // Count the number of Usuarios
     * const count = await prisma.usuario.count({
     *   where: {
     *     // ... the filter for the Usuarios we want to count
     *   }
     * })
    **/
    count<T extends UsuarioCountArgs>(
      args?: Subset<T, UsuarioCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsuarioCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsuarioAggregateArgs>(args: Subset<T, UsuarioAggregateArgs>): Prisma.PrismaPromise<GetUsuarioAggregateType<T>>

    /**
     * Group by Usuario.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsuarioGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UsuarioGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UsuarioGroupByArgs['orderBy'] }
        : { orderBy?: UsuarioGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UsuarioGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsuarioGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Usuario model
   */
  readonly fields: UsuarioFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Usuario.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UsuarioClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    acesso<T extends AcessoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AcessoDefaultArgs<ExtArgs>>): Prisma__AcessoClient<$Result.GetResult<Prisma.$AcessoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    organ<T extends OrganDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganDefaultArgs<ExtArgs>>): Prisma__OrganClient<$Result.GetResult<Prisma.$OrganPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Usuario model
   */ 
  interface UsuarioFieldRefs {
    readonly id: FieldRef<"Usuario", 'Int'>
    readonly email: FieldRef<"Usuario", 'String'>
    readonly name: FieldRef<"Usuario", 'String'>
    readonly createdAt: FieldRef<"Usuario", 'DateTime'>
    readonly updatedAt: FieldRef<"Usuario", 'DateTime'>
    readonly acessoId: FieldRef<"Usuario", 'Int'>
    readonly organId: FieldRef<"Usuario", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Usuario findUnique
   */
  export type UsuarioFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findUniqueOrThrow
   */
  export type UsuarioFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario findFirst
   */
  export type UsuarioFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findFirstOrThrow
   */
  export type UsuarioFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuario to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Usuarios.
     */
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario findMany
   */
  export type UsuarioFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter, which Usuarios to fetch.
     */
    where?: UsuarioWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Usuarios to fetch.
     */
    orderBy?: UsuarioOrderByWithRelationInput | UsuarioOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Usuarios.
     */
    cursor?: UsuarioWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Usuarios from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Usuarios.
     */
    skip?: number
    distinct?: UsuarioScalarFieldEnum | UsuarioScalarFieldEnum[]
  }


  /**
   * Usuario create
   */
  export type UsuarioCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to create a Usuario.
     */
    data: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
  }


  /**
   * Usuario createMany
   */
  export type UsuarioCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Usuarios.
     */
    data: UsuarioCreateManyInput | UsuarioCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Usuario update
   */
  export type UsuarioUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The data needed to update a Usuario.
     */
    data: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
    /**
     * Choose, which Usuario to update.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario updateMany
   */
  export type UsuarioUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Usuarios.
     */
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyInput>
    /**
     * Filter which Usuarios to update
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario upsert
   */
  export type UsuarioUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * The filter to search for the Usuario to update in case it exists.
     */
    where: UsuarioWhereUniqueInput
    /**
     * In case the Usuario found by the `where` argument doesn't exist, create a new Usuario with this data.
     */
    create: XOR<UsuarioCreateInput, UsuarioUncheckedCreateInput>
    /**
     * In case the Usuario was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UsuarioUpdateInput, UsuarioUncheckedUpdateInput>
  }


  /**
   * Usuario delete
   */
  export type UsuarioDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
    /**
     * Filter which Usuario to delete.
     */
    where: UsuarioWhereUniqueInput
  }


  /**
   * Usuario deleteMany
   */
  export type UsuarioDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Usuarios to delete
     */
    where?: UsuarioWhereInput
  }


  /**
   * Usuario without action
   */
  export type UsuarioDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Usuario
     */
    select?: UsuarioSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UsuarioInclude<ExtArgs> | null
  }



  /**
   * Model Facc
   */

  export type AggregateFacc = {
    _count: FaccCountAggregateOutputType | null
    _avg: FaccAvgAggregateOutputType | null
    _sum: FaccSumAggregateOutputType | null
    _min: FaccMinAggregateOutputType | null
    _max: FaccMaxAggregateOutputType | null
  }

  export type FaccAvgAggregateOutputType = {
    id: number | null
  }

  export type FaccSumAggregateOutputType = {
    id: number | null
  }

  export type FaccMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FaccMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type FaccCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type FaccAvgAggregateInputType = {
    id?: true
  }

  export type FaccSumAggregateInputType = {
    id?: true
  }

  export type FaccMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type FaccMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type FaccCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type FaccAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Facc to aggregate.
     */
    where?: FaccWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faccs to fetch.
     */
    orderBy?: FaccOrderByWithRelationInput | FaccOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FaccWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faccs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faccs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Faccs
    **/
    _count?: true | FaccCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: FaccAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: FaccSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FaccMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FaccMaxAggregateInputType
  }

  export type GetFaccAggregateType<T extends FaccAggregateArgs> = {
        [P in keyof T & keyof AggregateFacc]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFacc[P]>
      : GetScalarType<T[P], AggregateFacc[P]>
  }




  export type FaccGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: FaccWhereInput
    orderBy?: FaccOrderByWithAggregationInput | FaccOrderByWithAggregationInput[]
    by: FaccScalarFieldEnum[] | FaccScalarFieldEnum
    having?: FaccScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FaccCountAggregateInputType | true
    _avg?: FaccAvgAggregateInputType
    _sum?: FaccSumAggregateInputType
    _min?: FaccMinAggregateInputType
    _max?: FaccMaxAggregateInputType
  }

  export type FaccGroupByOutputType = {
    id: number
    name: string
    _count: FaccCountAggregateOutputType | null
    _avg: FaccAvgAggregateOutputType | null
    _sum: FaccSumAggregateOutputType | null
    _min: FaccMinAggregateOutputType | null
    _max: FaccMaxAggregateOutputType | null
  }

  type GetFaccGroupByPayload<T extends FaccGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FaccGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FaccGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FaccGroupByOutputType[P]>
            : GetScalarType<T[P], FaccGroupByOutputType[P]>
        }
      >
    >


  export type FaccSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    pessoas?: boolean | Facc$pessoasArgs<ExtArgs>
    _count?: boolean | FaccCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["facc"]>

  export type FaccSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type FaccInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    pessoas?: boolean | Facc$pessoasArgs<ExtArgs>
    _count?: boolean | FaccCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $FaccPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Facc"
    objects: {
      pessoas: Prisma.$PessoaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
    }, ExtArgs["result"]["facc"]>
    composites: {}
  }


  type FaccGetPayload<S extends boolean | null | undefined | FaccDefaultArgs> = $Result.GetResult<Prisma.$FaccPayload, S>

  type FaccCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<FaccFindManyArgs, 'select' | 'include'> & {
      select?: FaccCountAggregateInputType | true
    }

  export interface FaccDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Facc'], meta: { name: 'Facc' } }
    /**
     * Find zero or one Facc that matches the filter.
     * @param {FaccFindUniqueArgs} args - Arguments to find a Facc
     * @example
     * // Get one Facc
     * const facc = await prisma.facc.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends FaccFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, FaccFindUniqueArgs<ExtArgs>>
    ): Prisma__FaccClient<$Result.GetResult<Prisma.$FaccPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Facc that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {FaccFindUniqueOrThrowArgs} args - Arguments to find a Facc
     * @example
     * // Get one Facc
     * const facc = await prisma.facc.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends FaccFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FaccFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__FaccClient<$Result.GetResult<Prisma.$FaccPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Facc that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccFindFirstArgs} args - Arguments to find a Facc
     * @example
     * // Get one Facc
     * const facc = await prisma.facc.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends FaccFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, FaccFindFirstArgs<ExtArgs>>
    ): Prisma__FaccClient<$Result.GetResult<Prisma.$FaccPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Facc that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccFindFirstOrThrowArgs} args - Arguments to find a Facc
     * @example
     * // Get one Facc
     * const facc = await prisma.facc.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends FaccFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, FaccFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__FaccClient<$Result.GetResult<Prisma.$FaccPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Faccs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Faccs
     * const faccs = await prisma.facc.findMany()
     * 
     * // Get first 10 Faccs
     * const faccs = await prisma.facc.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const faccWithIdOnly = await prisma.facc.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends FaccFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FaccFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FaccPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Facc.
     * @param {FaccCreateArgs} args - Arguments to create a Facc.
     * @example
     * // Create one Facc
     * const Facc = await prisma.facc.create({
     *   data: {
     *     // ... data to create a Facc
     *   }
     * })
     * 
    **/
    create<T extends FaccCreateArgs<ExtArgs>>(
      args: SelectSubset<T, FaccCreateArgs<ExtArgs>>
    ): Prisma__FaccClient<$Result.GetResult<Prisma.$FaccPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Faccs.
     *     @param {FaccCreateManyArgs} args - Arguments to create many Faccs.
     *     @example
     *     // Create many Faccs
     *     const facc = await prisma.facc.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends FaccCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FaccCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Facc.
     * @param {FaccDeleteArgs} args - Arguments to delete one Facc.
     * @example
     * // Delete one Facc
     * const Facc = await prisma.facc.delete({
     *   where: {
     *     // ... filter to delete one Facc
     *   }
     * })
     * 
    **/
    delete<T extends FaccDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, FaccDeleteArgs<ExtArgs>>
    ): Prisma__FaccClient<$Result.GetResult<Prisma.$FaccPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Facc.
     * @param {FaccUpdateArgs} args - Arguments to update one Facc.
     * @example
     * // Update one Facc
     * const facc = await prisma.facc.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends FaccUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, FaccUpdateArgs<ExtArgs>>
    ): Prisma__FaccClient<$Result.GetResult<Prisma.$FaccPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Faccs.
     * @param {FaccDeleteManyArgs} args - Arguments to filter Faccs to delete.
     * @example
     * // Delete a few Faccs
     * const { count } = await prisma.facc.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends FaccDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, FaccDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Faccs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Faccs
     * const facc = await prisma.facc.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends FaccUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, FaccUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Facc.
     * @param {FaccUpsertArgs} args - Arguments to update or create a Facc.
     * @example
     * // Update or create a Facc
     * const facc = await prisma.facc.upsert({
     *   create: {
     *     // ... data to create a Facc
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Facc we want to update
     *   }
     * })
    **/
    upsert<T extends FaccUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, FaccUpsertArgs<ExtArgs>>
    ): Prisma__FaccClient<$Result.GetResult<Prisma.$FaccPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Faccs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccCountArgs} args - Arguments to filter Faccs to count.
     * @example
     * // Count the number of Faccs
     * const count = await prisma.facc.count({
     *   where: {
     *     // ... the filter for the Faccs we want to count
     *   }
     * })
    **/
    count<T extends FaccCountArgs>(
      args?: Subset<T, FaccCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FaccCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Facc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FaccAggregateArgs>(args: Subset<T, FaccAggregateArgs>): Prisma.PrismaPromise<GetFaccAggregateType<T>>

    /**
     * Group by Facc.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FaccGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FaccGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FaccGroupByArgs['orderBy'] }
        : { orderBy?: FaccGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FaccGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFaccGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Facc model
   */
  readonly fields: FaccFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Facc.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FaccClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pessoas<T extends Facc$pessoasArgs<ExtArgs> = {}>(args?: Subset<T, Facc$pessoasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Facc model
   */ 
  interface FaccFieldRefs {
    readonly id: FieldRef<"Facc", 'Int'>
    readonly name: FieldRef<"Facc", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Facc findUnique
   */
  export type FaccFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facc
     */
    select?: FaccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaccInclude<ExtArgs> | null
    /**
     * Filter, which Facc to fetch.
     */
    where: FaccWhereUniqueInput
  }


  /**
   * Facc findUniqueOrThrow
   */
  export type FaccFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facc
     */
    select?: FaccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaccInclude<ExtArgs> | null
    /**
     * Filter, which Facc to fetch.
     */
    where: FaccWhereUniqueInput
  }


  /**
   * Facc findFirst
   */
  export type FaccFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facc
     */
    select?: FaccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaccInclude<ExtArgs> | null
    /**
     * Filter, which Facc to fetch.
     */
    where?: FaccWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faccs to fetch.
     */
    orderBy?: FaccOrderByWithRelationInput | FaccOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faccs.
     */
    cursor?: FaccWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faccs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faccs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faccs.
     */
    distinct?: FaccScalarFieldEnum | FaccScalarFieldEnum[]
  }


  /**
   * Facc findFirstOrThrow
   */
  export type FaccFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facc
     */
    select?: FaccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaccInclude<ExtArgs> | null
    /**
     * Filter, which Facc to fetch.
     */
    where?: FaccWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faccs to fetch.
     */
    orderBy?: FaccOrderByWithRelationInput | FaccOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Faccs.
     */
    cursor?: FaccWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faccs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faccs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Faccs.
     */
    distinct?: FaccScalarFieldEnum | FaccScalarFieldEnum[]
  }


  /**
   * Facc findMany
   */
  export type FaccFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facc
     */
    select?: FaccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaccInclude<ExtArgs> | null
    /**
     * Filter, which Faccs to fetch.
     */
    where?: FaccWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Faccs to fetch.
     */
    orderBy?: FaccOrderByWithRelationInput | FaccOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Faccs.
     */
    cursor?: FaccWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Faccs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Faccs.
     */
    skip?: number
    distinct?: FaccScalarFieldEnum | FaccScalarFieldEnum[]
  }


  /**
   * Facc create
   */
  export type FaccCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facc
     */
    select?: FaccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaccInclude<ExtArgs> | null
    /**
     * The data needed to create a Facc.
     */
    data: XOR<FaccCreateInput, FaccUncheckedCreateInput>
  }


  /**
   * Facc createMany
   */
  export type FaccCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Faccs.
     */
    data: FaccCreateManyInput | FaccCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Facc update
   */
  export type FaccUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facc
     */
    select?: FaccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaccInclude<ExtArgs> | null
    /**
     * The data needed to update a Facc.
     */
    data: XOR<FaccUpdateInput, FaccUncheckedUpdateInput>
    /**
     * Choose, which Facc to update.
     */
    where: FaccWhereUniqueInput
  }


  /**
   * Facc updateMany
   */
  export type FaccUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Faccs.
     */
    data: XOR<FaccUpdateManyMutationInput, FaccUncheckedUpdateManyInput>
    /**
     * Filter which Faccs to update
     */
    where?: FaccWhereInput
  }


  /**
   * Facc upsert
   */
  export type FaccUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facc
     */
    select?: FaccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaccInclude<ExtArgs> | null
    /**
     * The filter to search for the Facc to update in case it exists.
     */
    where: FaccWhereUniqueInput
    /**
     * In case the Facc found by the `where` argument doesn't exist, create a new Facc with this data.
     */
    create: XOR<FaccCreateInput, FaccUncheckedCreateInput>
    /**
     * In case the Facc was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FaccUpdateInput, FaccUncheckedUpdateInput>
  }


  /**
   * Facc delete
   */
  export type FaccDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facc
     */
    select?: FaccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaccInclude<ExtArgs> | null
    /**
     * Filter which Facc to delete.
     */
    where: FaccWhereUniqueInput
  }


  /**
   * Facc deleteMany
   */
  export type FaccDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Faccs to delete
     */
    where?: FaccWhereInput
  }


  /**
   * Facc.pessoas
   */
  export type Facc$pessoasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PessoaInclude<ExtArgs> | null
    where?: PessoaWhereInput
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    cursor?: PessoaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }


  /**
   * Facc without action
   */
  export type FaccDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Facc
     */
    select?: FaccSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: FaccInclude<ExtArgs> | null
  }



  /**
   * Model Pessoa
   */

  export type AggregatePessoa = {
    _count: PessoaCountAggregateOutputType | null
    _avg: PessoaAvgAggregateOutputType | null
    _sum: PessoaSumAggregateOutputType | null
    _min: PessoaMinAggregateOutputType | null
    _max: PessoaMaxAggregateOutputType | null
  }

  export type PessoaAvgAggregateOutputType = {
    id: number | null
    faccId: number | null
    eventoId: number | null
  }

  export type PessoaSumAggregateOutputType = {
    id: number | null
    faccId: number | null
    eventoId: number | null
  }

  export type PessoaMinAggregateOutputType = {
    id: number | null
    name: string | null
    vulgo: string | null
    mae: string | null
    pai: string | null
    rg: string | null
    cpf: string | null
    foto: string | null
    faccId: number | null
    eventoId: number | null
  }

  export type PessoaMaxAggregateOutputType = {
    id: number | null
    name: string | null
    vulgo: string | null
    mae: string | null
    pai: string | null
    rg: string | null
    cpf: string | null
    foto: string | null
    faccId: number | null
    eventoId: number | null
  }

  export type PessoaCountAggregateOutputType = {
    id: number
    name: number
    vulgo: number
    mae: number
    pai: number
    rg: number
    cpf: number
    foto: number
    faccId: number
    eventoId: number
    _all: number
  }


  export type PessoaAvgAggregateInputType = {
    id?: true
    faccId?: true
    eventoId?: true
  }

  export type PessoaSumAggregateInputType = {
    id?: true
    faccId?: true
    eventoId?: true
  }

  export type PessoaMinAggregateInputType = {
    id?: true
    name?: true
    vulgo?: true
    mae?: true
    pai?: true
    rg?: true
    cpf?: true
    foto?: true
    faccId?: true
    eventoId?: true
  }

  export type PessoaMaxAggregateInputType = {
    id?: true
    name?: true
    vulgo?: true
    mae?: true
    pai?: true
    rg?: true
    cpf?: true
    foto?: true
    faccId?: true
    eventoId?: true
  }

  export type PessoaCountAggregateInputType = {
    id?: true
    name?: true
    vulgo?: true
    mae?: true
    pai?: true
    rg?: true
    cpf?: true
    foto?: true
    faccId?: true
    eventoId?: true
    _all?: true
  }

  export type PessoaAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pessoa to aggregate.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Pessoas
    **/
    _count?: true | PessoaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PessoaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PessoaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PessoaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PessoaMaxAggregateInputType
  }

  export type GetPessoaAggregateType<T extends PessoaAggregateArgs> = {
        [P in keyof T & keyof AggregatePessoa]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePessoa[P]>
      : GetScalarType<T[P], AggregatePessoa[P]>
  }




  export type PessoaGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: PessoaWhereInput
    orderBy?: PessoaOrderByWithAggregationInput | PessoaOrderByWithAggregationInput[]
    by: PessoaScalarFieldEnum[] | PessoaScalarFieldEnum
    having?: PessoaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PessoaCountAggregateInputType | true
    _avg?: PessoaAvgAggregateInputType
    _sum?: PessoaSumAggregateInputType
    _min?: PessoaMinAggregateInputType
    _max?: PessoaMaxAggregateInputType
  }

  export type PessoaGroupByOutputType = {
    id: number
    name: string
    vulgo: string
    mae: string
    pai: string
    rg: string
    cpf: string
    foto: string
    faccId: number
    eventoId: number
    _count: PessoaCountAggregateOutputType | null
    _avg: PessoaAvgAggregateOutputType | null
    _sum: PessoaSumAggregateOutputType | null
    _min: PessoaMinAggregateOutputType | null
    _max: PessoaMaxAggregateOutputType | null
  }

  type GetPessoaGroupByPayload<T extends PessoaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PessoaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PessoaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PessoaGroupByOutputType[P]>
            : GetScalarType<T[P], PessoaGroupByOutputType[P]>
        }
      >
    >


  export type PessoaSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    vulgo?: boolean
    mae?: boolean
    pai?: boolean
    rg?: boolean
    cpf?: boolean
    foto?: boolean
    faccId?: boolean
    eventoId?: boolean
    facc?: boolean | FaccDefaultArgs<ExtArgs>
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["pessoa"]>

  export type PessoaSelectScalar = {
    id?: boolean
    name?: boolean
    vulgo?: boolean
    mae?: boolean
    pai?: boolean
    rg?: boolean
    cpf?: boolean
    foto?: boolean
    faccId?: boolean
    eventoId?: boolean
  }

  export type PessoaInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    facc?: boolean | FaccDefaultArgs<ExtArgs>
    evento?: boolean | EventoDefaultArgs<ExtArgs>
  }


  export type $PessoaPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Pessoa"
    objects: {
      facc: Prisma.$FaccPayload<ExtArgs>
      evento: Prisma.$EventoPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      name: string
      vulgo: string
      mae: string
      pai: string
      rg: string
      cpf: string
      foto: string
      faccId: number
      eventoId: number
    }, ExtArgs["result"]["pessoa"]>
    composites: {}
  }


  type PessoaGetPayload<S extends boolean | null | undefined | PessoaDefaultArgs> = $Result.GetResult<Prisma.$PessoaPayload, S>

  type PessoaCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<PessoaFindManyArgs, 'select' | 'include'> & {
      select?: PessoaCountAggregateInputType | true
    }

  export interface PessoaDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Pessoa'], meta: { name: 'Pessoa' } }
    /**
     * Find zero or one Pessoa that matches the filter.
     * @param {PessoaFindUniqueArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PessoaFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PessoaFindUniqueArgs<ExtArgs>>
    ): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Pessoa that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PessoaFindUniqueOrThrowArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PessoaFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PessoaFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Pessoa that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindFirstArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PessoaFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PessoaFindFirstArgs<ExtArgs>>
    ): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Pessoa that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindFirstOrThrowArgs} args - Arguments to find a Pessoa
     * @example
     * // Get one Pessoa
     * const pessoa = await prisma.pessoa.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PessoaFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PessoaFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Pessoas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pessoas
     * const pessoas = await prisma.pessoa.findMany()
     * 
     * // Get first 10 Pessoas
     * const pessoas = await prisma.pessoa.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pessoaWithIdOnly = await prisma.pessoa.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PessoaFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PessoaFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Pessoa.
     * @param {PessoaCreateArgs} args - Arguments to create a Pessoa.
     * @example
     * // Create one Pessoa
     * const Pessoa = await prisma.pessoa.create({
     *   data: {
     *     // ... data to create a Pessoa
     *   }
     * })
     * 
    **/
    create<T extends PessoaCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PessoaCreateArgs<ExtArgs>>
    ): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Pessoas.
     *     @param {PessoaCreateManyArgs} args - Arguments to create many Pessoas.
     *     @example
     *     // Create many Pessoas
     *     const pessoa = await prisma.pessoa.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PessoaCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PessoaCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pessoa.
     * @param {PessoaDeleteArgs} args - Arguments to delete one Pessoa.
     * @example
     * // Delete one Pessoa
     * const Pessoa = await prisma.pessoa.delete({
     *   where: {
     *     // ... filter to delete one Pessoa
     *   }
     * })
     * 
    **/
    delete<T extends PessoaDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PessoaDeleteArgs<ExtArgs>>
    ): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Pessoa.
     * @param {PessoaUpdateArgs} args - Arguments to update one Pessoa.
     * @example
     * // Update one Pessoa
     * const pessoa = await prisma.pessoa.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PessoaUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PessoaUpdateArgs<ExtArgs>>
    ): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Pessoas.
     * @param {PessoaDeleteManyArgs} args - Arguments to filter Pessoas to delete.
     * @example
     * // Delete a few Pessoas
     * const { count } = await prisma.pessoa.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PessoaDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PessoaDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pessoas
     * const pessoa = await prisma.pessoa.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PessoaUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PessoaUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pessoa.
     * @param {PessoaUpsertArgs} args - Arguments to update or create a Pessoa.
     * @example
     * // Update or create a Pessoa
     * const pessoa = await prisma.pessoa.upsert({
     *   create: {
     *     // ... data to create a Pessoa
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pessoa we want to update
     *   }
     * })
    **/
    upsert<T extends PessoaUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PessoaUpsertArgs<ExtArgs>>
    ): Prisma__PessoaClient<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Pessoas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaCountArgs} args - Arguments to filter Pessoas to count.
     * @example
     * // Count the number of Pessoas
     * const count = await prisma.pessoa.count({
     *   where: {
     *     // ... the filter for the Pessoas we want to count
     *   }
     * })
    **/
    count<T extends PessoaCountArgs>(
      args?: Subset<T, PessoaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PessoaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PessoaAggregateArgs>(args: Subset<T, PessoaAggregateArgs>): Prisma.PrismaPromise<GetPessoaAggregateType<T>>

    /**
     * Group by Pessoa.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PessoaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PessoaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PessoaGroupByArgs['orderBy'] }
        : { orderBy?: PessoaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PessoaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPessoaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Pessoa model
   */
  readonly fields: PessoaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Pessoa.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PessoaClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    facc<T extends FaccDefaultArgs<ExtArgs> = {}>(args?: Subset<T, FaccDefaultArgs<ExtArgs>>): Prisma__FaccClient<$Result.GetResult<Prisma.$FaccPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    evento<T extends EventoDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventoDefaultArgs<ExtArgs>>): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Pessoa model
   */ 
  interface PessoaFieldRefs {
    readonly id: FieldRef<"Pessoa", 'Int'>
    readonly name: FieldRef<"Pessoa", 'String'>
    readonly vulgo: FieldRef<"Pessoa", 'String'>
    readonly mae: FieldRef<"Pessoa", 'String'>
    readonly pai: FieldRef<"Pessoa", 'String'>
    readonly rg: FieldRef<"Pessoa", 'String'>
    readonly cpf: FieldRef<"Pessoa", 'String'>
    readonly foto: FieldRef<"Pessoa", 'String'>
    readonly faccId: FieldRef<"Pessoa", 'Int'>
    readonly eventoId: FieldRef<"Pessoa", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Pessoa findUnique
   */
  export type PessoaFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where: PessoaWhereUniqueInput
  }


  /**
   * Pessoa findUniqueOrThrow
   */
  export type PessoaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where: PessoaWhereUniqueInput
  }


  /**
   * Pessoa findFirst
   */
  export type PessoaFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pessoas.
     */
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }


  /**
   * Pessoa findFirstOrThrow
   */
  export type PessoaFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoa to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Pessoas.
     */
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }


  /**
   * Pessoa findMany
   */
  export type PessoaFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter, which Pessoas to fetch.
     */
    where?: PessoaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Pessoas to fetch.
     */
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Pessoas.
     */
    cursor?: PessoaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Pessoas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Pessoas.
     */
    skip?: number
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }


  /**
   * Pessoa create
   */
  export type PessoaCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * The data needed to create a Pessoa.
     */
    data: XOR<PessoaCreateInput, PessoaUncheckedCreateInput>
  }


  /**
   * Pessoa createMany
   */
  export type PessoaCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Pessoas.
     */
    data: PessoaCreateManyInput | PessoaCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Pessoa update
   */
  export type PessoaUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * The data needed to update a Pessoa.
     */
    data: XOR<PessoaUpdateInput, PessoaUncheckedUpdateInput>
    /**
     * Choose, which Pessoa to update.
     */
    where: PessoaWhereUniqueInput
  }


  /**
   * Pessoa updateMany
   */
  export type PessoaUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Pessoas.
     */
    data: XOR<PessoaUpdateManyMutationInput, PessoaUncheckedUpdateManyInput>
    /**
     * Filter which Pessoas to update
     */
    where?: PessoaWhereInput
  }


  /**
   * Pessoa upsert
   */
  export type PessoaUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * The filter to search for the Pessoa to update in case it exists.
     */
    where: PessoaWhereUniqueInput
    /**
     * In case the Pessoa found by the `where` argument doesn't exist, create a new Pessoa with this data.
     */
    create: XOR<PessoaCreateInput, PessoaUncheckedCreateInput>
    /**
     * In case the Pessoa was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PessoaUpdateInput, PessoaUncheckedUpdateInput>
  }


  /**
   * Pessoa delete
   */
  export type PessoaDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PessoaInclude<ExtArgs> | null
    /**
     * Filter which Pessoa to delete.
     */
    where: PessoaWhereUniqueInput
  }


  /**
   * Pessoa deleteMany
   */
  export type PessoaDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Pessoas to delete
     */
    where?: PessoaWhereInput
  }


  /**
   * Pessoa without action
   */
  export type PessoaDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PessoaInclude<ExtArgs> | null
  }



  /**
   * Model Evento
   */

  export type AggregateEvento = {
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  export type EventoAvgAggregateOutputType = {
    id: number | null
  }

  export type EventoSumAggregateOutputType = {
    id: number | null
  }

  export type EventoMinAggregateOutputType = {
    id: number | null
    title: string | null
    data: string | null
    status: string | null
    relato: string | null
    ufc: string | null
    municipio: string | null
  }

  export type EventoMaxAggregateOutputType = {
    id: number | null
    title: string | null
    data: string | null
    status: string | null
    relato: string | null
    ufc: string | null
    municipio: string | null
  }

  export type EventoCountAggregateOutputType = {
    id: number
    title: number
    data: number
    status: number
    relato: number
    ufc: number
    municipio: number
    _all: number
  }


  export type EventoAvgAggregateInputType = {
    id?: true
  }

  export type EventoSumAggregateInputType = {
    id?: true
  }

  export type EventoMinAggregateInputType = {
    id?: true
    title?: true
    data?: true
    status?: true
    relato?: true
    ufc?: true
    municipio?: true
  }

  export type EventoMaxAggregateInputType = {
    id?: true
    title?: true
    data?: true
    status?: true
    relato?: true
    ufc?: true
    municipio?: true
  }

  export type EventoCountAggregateInputType = {
    id?: true
    title?: true
    data?: true
    status?: true
    relato?: true
    ufc?: true
    municipio?: true
    _all?: true
  }

  export type EventoAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Evento to aggregate.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Eventos
    **/
    _count?: true | EventoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventoMaxAggregateInputType
  }

  export type GetEventoAggregateType<T extends EventoAggregateArgs> = {
        [P in keyof T & keyof AggregateEvento]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvento[P]>
      : GetScalarType<T[P], AggregateEvento[P]>
  }




  export type EventoGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: EventoWhereInput
    orderBy?: EventoOrderByWithAggregationInput | EventoOrderByWithAggregationInput[]
    by: EventoScalarFieldEnum[] | EventoScalarFieldEnum
    having?: EventoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventoCountAggregateInputType | true
    _avg?: EventoAvgAggregateInputType
    _sum?: EventoSumAggregateInputType
    _min?: EventoMinAggregateInputType
    _max?: EventoMaxAggregateInputType
  }

  export type EventoGroupByOutputType = {
    id: number
    title: string
    data: string
    status: string
    relato: string
    ufc: string
    municipio: string
    _count: EventoCountAggregateOutputType | null
    _avg: EventoAvgAggregateOutputType | null
    _sum: EventoSumAggregateOutputType | null
    _min: EventoMinAggregateOutputType | null
    _max: EventoMaxAggregateOutputType | null
  }

  type GetEventoGroupByPayload<T extends EventoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventoGroupByOutputType[P]>
            : GetScalarType<T[P], EventoGroupByOutputType[P]>
        }
      >
    >


  export type EventoSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    data?: boolean
    status?: boolean
    relato?: boolean
    ufc?: boolean
    municipio?: boolean
    pessoas?: boolean | Evento$pessoasArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["evento"]>

  export type EventoSelectScalar = {
    id?: boolean
    title?: boolean
    data?: boolean
    status?: boolean
    relato?: boolean
    ufc?: boolean
    municipio?: boolean
  }

  export type EventoInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    pessoas?: boolean | Evento$pessoasArgs<ExtArgs>
    _count?: boolean | EventoCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $EventoPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Evento"
    objects: {
      pessoas: Prisma.$PessoaPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      title: string
      data: string
      status: string
      relato: string
      ufc: string
      municipio: string
    }, ExtArgs["result"]["evento"]>
    composites: {}
  }


  type EventoGetPayload<S extends boolean | null | undefined | EventoDefaultArgs> = $Result.GetResult<Prisma.$EventoPayload, S>

  type EventoCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<EventoFindManyArgs, 'select' | 'include'> & {
      select?: EventoCountAggregateInputType | true
    }

  export interface EventoDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Evento'], meta: { name: 'Evento' } }
    /**
     * Find zero or one Evento that matches the filter.
     * @param {EventoFindUniqueArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends EventoFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, EventoFindUniqueArgs<ExtArgs>>
    ): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Evento that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {EventoFindUniqueOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends EventoFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventoFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Evento that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends EventoFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, EventoFindFirstArgs<ExtArgs>>
    ): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Evento that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindFirstOrThrowArgs} args - Arguments to find a Evento
     * @example
     * // Get one Evento
     * const evento = await prisma.evento.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends EventoFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, EventoFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Eventos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Eventos
     * const eventos = await prisma.evento.findMany()
     * 
     * // Get first 10 Eventos
     * const eventos = await prisma.evento.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventoWithIdOnly = await prisma.evento.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends EventoFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventoFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Evento.
     * @param {EventoCreateArgs} args - Arguments to create a Evento.
     * @example
     * // Create one Evento
     * const Evento = await prisma.evento.create({
     *   data: {
     *     // ... data to create a Evento
     *   }
     * })
     * 
    **/
    create<T extends EventoCreateArgs<ExtArgs>>(
      args: SelectSubset<T, EventoCreateArgs<ExtArgs>>
    ): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Eventos.
     *     @param {EventoCreateManyArgs} args - Arguments to create many Eventos.
     *     @example
     *     // Create many Eventos
     *     const evento = await prisma.evento.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends EventoCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventoCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Evento.
     * @param {EventoDeleteArgs} args - Arguments to delete one Evento.
     * @example
     * // Delete one Evento
     * const Evento = await prisma.evento.delete({
     *   where: {
     *     // ... filter to delete one Evento
     *   }
     * })
     * 
    **/
    delete<T extends EventoDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, EventoDeleteArgs<ExtArgs>>
    ): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Evento.
     * @param {EventoUpdateArgs} args - Arguments to update one Evento.
     * @example
     * // Update one Evento
     * const evento = await prisma.evento.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends EventoUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, EventoUpdateArgs<ExtArgs>>
    ): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Eventos.
     * @param {EventoDeleteManyArgs} args - Arguments to filter Eventos to delete.
     * @example
     * // Delete a few Eventos
     * const { count } = await prisma.evento.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends EventoDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, EventoDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Eventos
     * const evento = await prisma.evento.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends EventoUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, EventoUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Evento.
     * @param {EventoUpsertArgs} args - Arguments to update or create a Evento.
     * @example
     * // Update or create a Evento
     * const evento = await prisma.evento.upsert({
     *   create: {
     *     // ... data to create a Evento
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Evento we want to update
     *   }
     * })
    **/
    upsert<T extends EventoUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, EventoUpsertArgs<ExtArgs>>
    ): Prisma__EventoClient<$Result.GetResult<Prisma.$EventoPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Eventos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoCountArgs} args - Arguments to filter Eventos to count.
     * @example
     * // Count the number of Eventos
     * const count = await prisma.evento.count({
     *   where: {
     *     // ... the filter for the Eventos we want to count
     *   }
     * })
    **/
    count<T extends EventoCountArgs>(
      args?: Subset<T, EventoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventoAggregateArgs>(args: Subset<T, EventoAggregateArgs>): Prisma.PrismaPromise<GetEventoAggregateType<T>>

    /**
     * Group by Evento.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventoGroupByArgs['orderBy'] }
        : { orderBy?: EventoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Evento model
   */
  readonly fields: EventoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Evento.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventoClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    pessoas<T extends Evento$pessoasArgs<ExtArgs> = {}>(args?: Subset<T, Evento$pessoasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PessoaPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Evento model
   */ 
  interface EventoFieldRefs {
    readonly id: FieldRef<"Evento", 'Int'>
    readonly title: FieldRef<"Evento", 'String'>
    readonly data: FieldRef<"Evento", 'String'>
    readonly status: FieldRef<"Evento", 'String'>
    readonly relato: FieldRef<"Evento", 'String'>
    readonly ufc: FieldRef<"Evento", 'String'>
    readonly municipio: FieldRef<"Evento", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Evento findUnique
   */
  export type EventoFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }


  /**
   * Evento findUniqueOrThrow
   */
  export type EventoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where: EventoWhereUniqueInput
  }


  /**
   * Evento findFirst
   */
  export type EventoFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }


  /**
   * Evento findFirstOrThrow
   */
  export type EventoFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Evento to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Eventos.
     */
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }


  /**
   * Evento findMany
   */
  export type EventoFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter, which Eventos to fetch.
     */
    where?: EventoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Eventos to fetch.
     */
    orderBy?: EventoOrderByWithRelationInput | EventoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Eventos.
     */
    cursor?: EventoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Eventos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Eventos.
     */
    skip?: number
    distinct?: EventoScalarFieldEnum | EventoScalarFieldEnum[]
  }


  /**
   * Evento create
   */
  export type EventoCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to create a Evento.
     */
    data: XOR<EventoCreateInput, EventoUncheckedCreateInput>
  }


  /**
   * Evento createMany
   */
  export type EventoCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Eventos.
     */
    data: EventoCreateManyInput | EventoCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Evento update
   */
  export type EventoUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The data needed to update a Evento.
     */
    data: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
    /**
     * Choose, which Evento to update.
     */
    where: EventoWhereUniqueInput
  }


  /**
   * Evento updateMany
   */
  export type EventoUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Eventos.
     */
    data: XOR<EventoUpdateManyMutationInput, EventoUncheckedUpdateManyInput>
    /**
     * Filter which Eventos to update
     */
    where?: EventoWhereInput
  }


  /**
   * Evento upsert
   */
  export type EventoUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * The filter to search for the Evento to update in case it exists.
     */
    where: EventoWhereUniqueInput
    /**
     * In case the Evento found by the `where` argument doesn't exist, create a new Evento with this data.
     */
    create: XOR<EventoCreateInput, EventoUncheckedCreateInput>
    /**
     * In case the Evento was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventoUpdateInput, EventoUncheckedUpdateInput>
  }


  /**
   * Evento delete
   */
  export type EventoDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventoInclude<ExtArgs> | null
    /**
     * Filter which Evento to delete.
     */
    where: EventoWhereUniqueInput
  }


  /**
   * Evento deleteMany
   */
  export type EventoDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Eventos to delete
     */
    where?: EventoWhereInput
  }


  /**
   * Evento.pessoas
   */
  export type Evento$pessoasArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Pessoa
     */
    select?: PessoaSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PessoaInclude<ExtArgs> | null
    where?: PessoaWhereInput
    orderBy?: PessoaOrderByWithRelationInput | PessoaOrderByWithRelationInput[]
    cursor?: PessoaWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PessoaScalarFieldEnum | PessoaScalarFieldEnum[]
  }


  /**
   * Evento without action
   */
  export type EventoDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Evento
     */
    select?: EventoSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: EventoInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const OrganScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type OrganScalarFieldEnum = (typeof OrganScalarFieldEnum)[keyof typeof OrganScalarFieldEnum]


  export const AcessoScalarFieldEnum: {
    id: 'id',
    title: 'title'
  };

  export type AcessoScalarFieldEnum = (typeof AcessoScalarFieldEnum)[keyof typeof AcessoScalarFieldEnum]


  export const UsuarioScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    acessoId: 'acessoId',
    organId: 'organId'
  };

  export type UsuarioScalarFieldEnum = (typeof UsuarioScalarFieldEnum)[keyof typeof UsuarioScalarFieldEnum]


  export const FaccScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type FaccScalarFieldEnum = (typeof FaccScalarFieldEnum)[keyof typeof FaccScalarFieldEnum]


  export const PessoaScalarFieldEnum: {
    id: 'id',
    name: 'name',
    vulgo: 'vulgo',
    mae: 'mae',
    pai: 'pai',
    rg: 'rg',
    cpf: 'cpf',
    foto: 'foto',
    faccId: 'faccId',
    eventoId: 'eventoId'
  };

  export type PessoaScalarFieldEnum = (typeof PessoaScalarFieldEnum)[keyof typeof PessoaScalarFieldEnum]


  export const EventoScalarFieldEnum: {
    id: 'id',
    title: 'title',
    data: 'data',
    status: 'status',
    relato: 'relato',
    ufc: 'ufc',
    municipio: 'municipio'
  };

  export type EventoScalarFieldEnum = (typeof EventoScalarFieldEnum)[keyof typeof EventoScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type OrganWhereInput = {
    AND?: OrganWhereInput | OrganWhereInput[]
    OR?: OrganWhereInput[]
    NOT?: OrganWhereInput | OrganWhereInput[]
    id?: IntFilter<"Organ"> | number
    name?: StringFilter<"Organ"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type OrganOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type OrganWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: OrganWhereInput | OrganWhereInput[]
    OR?: OrganWhereInput[]
    NOT?: OrganWhereInput | OrganWhereInput[]
    usuarios?: UsuarioListRelationFilter
  }, "id" | "name">

  export type OrganOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: OrganCountOrderByAggregateInput
    _avg?: OrganAvgOrderByAggregateInput
    _max?: OrganMaxOrderByAggregateInput
    _min?: OrganMinOrderByAggregateInput
    _sum?: OrganSumOrderByAggregateInput
  }

  export type OrganScalarWhereWithAggregatesInput = {
    AND?: OrganScalarWhereWithAggregatesInput | OrganScalarWhereWithAggregatesInput[]
    OR?: OrganScalarWhereWithAggregatesInput[]
    NOT?: OrganScalarWhereWithAggregatesInput | OrganScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Organ"> | number
    name?: StringWithAggregatesFilter<"Organ"> | string
  }

  export type AcessoWhereInput = {
    AND?: AcessoWhereInput | AcessoWhereInput[]
    OR?: AcessoWhereInput[]
    NOT?: AcessoWhereInput | AcessoWhereInput[]
    id?: IntFilter<"Acesso"> | number
    title?: StringFilter<"Acesso"> | string
    usuarios?: UsuarioListRelationFilter
  }

  export type AcessoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    usuarios?: UsuarioOrderByRelationAggregateInput
  }

  export type AcessoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    title?: string
    AND?: AcessoWhereInput | AcessoWhereInput[]
    OR?: AcessoWhereInput[]
    NOT?: AcessoWhereInput | AcessoWhereInput[]
    usuarios?: UsuarioListRelationFilter
  }, "id" | "title">

  export type AcessoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    _count?: AcessoCountOrderByAggregateInput
    _avg?: AcessoAvgOrderByAggregateInput
    _max?: AcessoMaxOrderByAggregateInput
    _min?: AcessoMinOrderByAggregateInput
    _sum?: AcessoSumOrderByAggregateInput
  }

  export type AcessoScalarWhereWithAggregatesInput = {
    AND?: AcessoScalarWhereWithAggregatesInput | AcessoScalarWhereWithAggregatesInput[]
    OR?: AcessoScalarWhereWithAggregatesInput[]
    NOT?: AcessoScalarWhereWithAggregatesInput | AcessoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Acesso"> | number
    title?: StringWithAggregatesFilter<"Acesso"> | string
  }

  export type UsuarioWhereInput = {
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    id?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    name?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    acessoId?: IntFilter<"Usuario"> | number
    organId?: IntFilter<"Usuario"> | number
    acesso?: XOR<AcessoRelationFilter, AcessoWhereInput>
    organ?: XOR<OrganRelationFilter, OrganWhereInput>
  }

  export type UsuarioOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    acessoId?: SortOrder
    organId?: SortOrder
    acesso?: AcessoOrderByWithRelationInput
    organ?: OrganOrderByWithRelationInput
  }

  export type UsuarioWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UsuarioWhereInput | UsuarioWhereInput[]
    OR?: UsuarioWhereInput[]
    NOT?: UsuarioWhereInput | UsuarioWhereInput[]
    name?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    acessoId?: IntFilter<"Usuario"> | number
    organId?: IntFilter<"Usuario"> | number
    acesso?: XOR<AcessoRelationFilter, AcessoWhereInput>
    organ?: XOR<OrganRelationFilter, OrganWhereInput>
  }, "id" | "email">

  export type UsuarioOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    acessoId?: SortOrder
    organId?: SortOrder
    _count?: UsuarioCountOrderByAggregateInput
    _avg?: UsuarioAvgOrderByAggregateInput
    _max?: UsuarioMaxOrderByAggregateInput
    _min?: UsuarioMinOrderByAggregateInput
    _sum?: UsuarioSumOrderByAggregateInput
  }

  export type UsuarioScalarWhereWithAggregatesInput = {
    AND?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    OR?: UsuarioScalarWhereWithAggregatesInput[]
    NOT?: UsuarioScalarWhereWithAggregatesInput | UsuarioScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Usuario"> | number
    email?: StringWithAggregatesFilter<"Usuario"> | string
    name?: StringNullableWithAggregatesFilter<"Usuario"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Usuario"> | Date | string
    acessoId?: IntWithAggregatesFilter<"Usuario"> | number
    organId?: IntWithAggregatesFilter<"Usuario"> | number
  }

  export type FaccWhereInput = {
    AND?: FaccWhereInput | FaccWhereInput[]
    OR?: FaccWhereInput[]
    NOT?: FaccWhereInput | FaccWhereInput[]
    id?: IntFilter<"Facc"> | number
    name?: StringFilter<"Facc"> | string
    pessoas?: PessoaListRelationFilter
  }

  export type FaccOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    pessoas?: PessoaOrderByRelationAggregateInput
  }

  export type FaccWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: FaccWhereInput | FaccWhereInput[]
    OR?: FaccWhereInput[]
    NOT?: FaccWhereInput | FaccWhereInput[]
    pessoas?: PessoaListRelationFilter
  }, "id" | "name">

  export type FaccOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: FaccCountOrderByAggregateInput
    _avg?: FaccAvgOrderByAggregateInput
    _max?: FaccMaxOrderByAggregateInput
    _min?: FaccMinOrderByAggregateInput
    _sum?: FaccSumOrderByAggregateInput
  }

  export type FaccScalarWhereWithAggregatesInput = {
    AND?: FaccScalarWhereWithAggregatesInput | FaccScalarWhereWithAggregatesInput[]
    OR?: FaccScalarWhereWithAggregatesInput[]
    NOT?: FaccScalarWhereWithAggregatesInput | FaccScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Facc"> | number
    name?: StringWithAggregatesFilter<"Facc"> | string
  }

  export type PessoaWhereInput = {
    AND?: PessoaWhereInput | PessoaWhereInput[]
    OR?: PessoaWhereInput[]
    NOT?: PessoaWhereInput | PessoaWhereInput[]
    id?: IntFilter<"Pessoa"> | number
    name?: StringFilter<"Pessoa"> | string
    vulgo?: StringFilter<"Pessoa"> | string
    mae?: StringFilter<"Pessoa"> | string
    pai?: StringFilter<"Pessoa"> | string
    rg?: StringFilter<"Pessoa"> | string
    cpf?: StringFilter<"Pessoa"> | string
    foto?: StringFilter<"Pessoa"> | string
    faccId?: IntFilter<"Pessoa"> | number
    eventoId?: IntFilter<"Pessoa"> | number
    facc?: XOR<FaccRelationFilter, FaccWhereInput>
    evento?: XOR<EventoRelationFilter, EventoWhereInput>
  }

  export type PessoaOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    vulgo?: SortOrder
    mae?: SortOrder
    pai?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    foto?: SortOrder
    faccId?: SortOrder
    eventoId?: SortOrder
    facc?: FaccOrderByWithRelationInput
    evento?: EventoOrderByWithRelationInput
  }

  export type PessoaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: PessoaWhereInput | PessoaWhereInput[]
    OR?: PessoaWhereInput[]
    NOT?: PessoaWhereInput | PessoaWhereInput[]
    name?: StringFilter<"Pessoa"> | string
    vulgo?: StringFilter<"Pessoa"> | string
    mae?: StringFilter<"Pessoa"> | string
    pai?: StringFilter<"Pessoa"> | string
    rg?: StringFilter<"Pessoa"> | string
    cpf?: StringFilter<"Pessoa"> | string
    foto?: StringFilter<"Pessoa"> | string
    faccId?: IntFilter<"Pessoa"> | number
    eventoId?: IntFilter<"Pessoa"> | number
    facc?: XOR<FaccRelationFilter, FaccWhereInput>
    evento?: XOR<EventoRelationFilter, EventoWhereInput>
  }, "id">

  export type PessoaOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    vulgo?: SortOrder
    mae?: SortOrder
    pai?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    foto?: SortOrder
    faccId?: SortOrder
    eventoId?: SortOrder
    _count?: PessoaCountOrderByAggregateInput
    _avg?: PessoaAvgOrderByAggregateInput
    _max?: PessoaMaxOrderByAggregateInput
    _min?: PessoaMinOrderByAggregateInput
    _sum?: PessoaSumOrderByAggregateInput
  }

  export type PessoaScalarWhereWithAggregatesInput = {
    AND?: PessoaScalarWhereWithAggregatesInput | PessoaScalarWhereWithAggregatesInput[]
    OR?: PessoaScalarWhereWithAggregatesInput[]
    NOT?: PessoaScalarWhereWithAggregatesInput | PessoaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Pessoa"> | number
    name?: StringWithAggregatesFilter<"Pessoa"> | string
    vulgo?: StringWithAggregatesFilter<"Pessoa"> | string
    mae?: StringWithAggregatesFilter<"Pessoa"> | string
    pai?: StringWithAggregatesFilter<"Pessoa"> | string
    rg?: StringWithAggregatesFilter<"Pessoa"> | string
    cpf?: StringWithAggregatesFilter<"Pessoa"> | string
    foto?: StringWithAggregatesFilter<"Pessoa"> | string
    faccId?: IntWithAggregatesFilter<"Pessoa"> | number
    eventoId?: IntWithAggregatesFilter<"Pessoa"> | number
  }

  export type EventoWhereInput = {
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    id?: IntFilter<"Evento"> | number
    title?: StringFilter<"Evento"> | string
    data?: StringFilter<"Evento"> | string
    status?: StringFilter<"Evento"> | string
    relato?: StringFilter<"Evento"> | string
    ufc?: StringFilter<"Evento"> | string
    municipio?: StringFilter<"Evento"> | string
    pessoas?: PessoaListRelationFilter
  }

  export type EventoOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    data?: SortOrder
    status?: SortOrder
    relato?: SortOrder
    ufc?: SortOrder
    municipio?: SortOrder
    pessoas?: PessoaOrderByRelationAggregateInput
  }

  export type EventoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventoWhereInput | EventoWhereInput[]
    OR?: EventoWhereInput[]
    NOT?: EventoWhereInput | EventoWhereInput[]
    title?: StringFilter<"Evento"> | string
    data?: StringFilter<"Evento"> | string
    status?: StringFilter<"Evento"> | string
    relato?: StringFilter<"Evento"> | string
    ufc?: StringFilter<"Evento"> | string
    municipio?: StringFilter<"Evento"> | string
    pessoas?: PessoaListRelationFilter
  }, "id">

  export type EventoOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    data?: SortOrder
    status?: SortOrder
    relato?: SortOrder
    ufc?: SortOrder
    municipio?: SortOrder
    _count?: EventoCountOrderByAggregateInput
    _avg?: EventoAvgOrderByAggregateInput
    _max?: EventoMaxOrderByAggregateInput
    _min?: EventoMinOrderByAggregateInput
    _sum?: EventoSumOrderByAggregateInput
  }

  export type EventoScalarWhereWithAggregatesInput = {
    AND?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    OR?: EventoScalarWhereWithAggregatesInput[]
    NOT?: EventoScalarWhereWithAggregatesInput | EventoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Evento"> | number
    title?: StringWithAggregatesFilter<"Evento"> | string
    data?: StringWithAggregatesFilter<"Evento"> | string
    status?: StringWithAggregatesFilter<"Evento"> | string
    relato?: StringWithAggregatesFilter<"Evento"> | string
    ufc?: StringWithAggregatesFilter<"Evento"> | string
    municipio?: StringWithAggregatesFilter<"Evento"> | string
  }

  export type OrganCreateInput = {
    name: string
    usuarios?: UsuarioCreateNestedManyWithoutOrganInput
  }

  export type OrganUncheckedCreateInput = {
    id?: number
    name: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutOrganInput
  }

  export type OrganUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutOrganNestedInput
  }

  export type OrganUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutOrganNestedInput
  }

  export type OrganCreateManyInput = {
    id?: number
    name: string
  }

  export type OrganUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrganUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type AcessoCreateInput = {
    title: string
    usuarios?: UsuarioCreateNestedManyWithoutAcessoInput
  }

  export type AcessoUncheckedCreateInput = {
    id?: number
    title: string
    usuarios?: UsuarioUncheckedCreateNestedManyWithoutAcessoInput
  }

  export type AcessoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUpdateManyWithoutAcessoNestedInput
  }

  export type AcessoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    usuarios?: UsuarioUncheckedUpdateManyWithoutAcessoNestedInput
  }

  export type AcessoCreateManyInput = {
    id?: number
    title: string
  }

  export type AcessoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type AcessoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type UsuarioCreateInput = {
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acesso: AcessoCreateNestedOneWithoutUsuariosInput
    organ: OrganCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessoId: number
    organId: number
  }

  export type UsuarioUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acesso?: AcessoUpdateOneRequiredWithoutUsuariosNestedInput
    organ?: OrganUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessoId?: IntFieldUpdateOperationsInput | number
    organId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateManyInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessoId: number
    organId: number
  }

  export type UsuarioUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UsuarioUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessoId?: IntFieldUpdateOperationsInput | number
    organId?: IntFieldUpdateOperationsInput | number
  }

  export type FaccCreateInput = {
    name: string
    pessoas?: PessoaCreateNestedManyWithoutFaccInput
  }

  export type FaccUncheckedCreateInput = {
    id?: number
    name: string
    pessoas?: PessoaUncheckedCreateNestedManyWithoutFaccInput
  }

  export type FaccUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    pessoas?: PessoaUpdateManyWithoutFaccNestedInput
  }

  export type FaccUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    pessoas?: PessoaUncheckedUpdateManyWithoutFaccNestedInput
  }

  export type FaccCreateManyInput = {
    id?: number
    name: string
  }

  export type FaccUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FaccUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PessoaCreateInput = {
    name: string
    vulgo: string
    mae: string
    pai: string
    rg: string
    cpf: string
    foto: string
    facc: FaccCreateNestedOneWithoutPessoasInput
    evento: EventoCreateNestedOneWithoutPessoasInput
  }

  export type PessoaUncheckedCreateInput = {
    id?: number
    name: string
    vulgo: string
    mae: string
    pai: string
    rg: string
    cpf: string
    foto: string
    faccId: number
    eventoId: number
  }

  export type PessoaUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    vulgo?: StringFieldUpdateOperationsInput | string
    mae?: StringFieldUpdateOperationsInput | string
    pai?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    facc?: FaccUpdateOneRequiredWithoutPessoasNestedInput
    evento?: EventoUpdateOneRequiredWithoutPessoasNestedInput
  }

  export type PessoaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vulgo?: StringFieldUpdateOperationsInput | string
    mae?: StringFieldUpdateOperationsInput | string
    pai?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    faccId?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
  }

  export type PessoaCreateManyInput = {
    id?: number
    name: string
    vulgo: string
    mae: string
    pai: string
    rg: string
    cpf: string
    foto: string
    faccId: number
    eventoId: number
  }

  export type PessoaUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    vulgo?: StringFieldUpdateOperationsInput | string
    mae?: StringFieldUpdateOperationsInput | string
    pai?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
  }

  export type PessoaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vulgo?: StringFieldUpdateOperationsInput | string
    mae?: StringFieldUpdateOperationsInput | string
    pai?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    faccId?: IntFieldUpdateOperationsInput | number
    eventoId?: IntFieldUpdateOperationsInput | number
  }

  export type EventoCreateInput = {
    title: string
    data: string
    status: string
    relato: string
    ufc: string
    municipio: string
    pessoas?: PessoaCreateNestedManyWithoutEventoInput
  }

  export type EventoUncheckedCreateInput = {
    id?: number
    title: string
    data: string
    status: string
    relato: string
    ufc: string
    municipio: string
    pessoas?: PessoaUncheckedCreateNestedManyWithoutEventoInput
  }

  export type EventoUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relato?: StringFieldUpdateOperationsInput | string
    ufc?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    pessoas?: PessoaUpdateManyWithoutEventoNestedInput
  }

  export type EventoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relato?: StringFieldUpdateOperationsInput | string
    ufc?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
    pessoas?: PessoaUncheckedUpdateManyWithoutEventoNestedInput
  }

  export type EventoCreateManyInput = {
    id?: number
    title: string
    data: string
    status: string
    relato: string
    ufc: string
    municipio: string
  }

  export type EventoUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relato?: StringFieldUpdateOperationsInput | string
    ufc?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
  }

  export type EventoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relato?: StringFieldUpdateOperationsInput | string
    ufc?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type UsuarioListRelationFilter = {
    every?: UsuarioWhereInput
    some?: UsuarioWhereInput
    none?: UsuarioWhereInput
  }

  export type UsuarioOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OrganAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type OrganMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OrganMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type OrganSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type AcessoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type AcessoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AcessoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type AcessoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
  }

  export type AcessoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AcessoRelationFilter = {
    is?: AcessoWhereInput
    isNot?: AcessoWhereInput
  }

  export type OrganRelationFilter = {
    is?: OrganWhereInput
    isNot?: OrganWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UsuarioCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    acessoId?: SortOrder
    organId?: SortOrder
  }

  export type UsuarioAvgOrderByAggregateInput = {
    id?: SortOrder
    acessoId?: SortOrder
    organId?: SortOrder
  }

  export type UsuarioMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    acessoId?: SortOrder
    organId?: SortOrder
  }

  export type UsuarioMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    acessoId?: SortOrder
    organId?: SortOrder
  }

  export type UsuarioSumOrderByAggregateInput = {
    id?: SortOrder
    acessoId?: SortOrder
    organId?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PessoaListRelationFilter = {
    every?: PessoaWhereInput
    some?: PessoaWhereInput
    none?: PessoaWhereInput
  }

  export type PessoaOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FaccCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FaccAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FaccMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FaccMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type FaccSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FaccRelationFilter = {
    is?: FaccWhereInput
    isNot?: FaccWhereInput
  }

  export type EventoRelationFilter = {
    is?: EventoWhereInput
    isNot?: EventoWhereInput
  }

  export type PessoaCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vulgo?: SortOrder
    mae?: SortOrder
    pai?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    foto?: SortOrder
    faccId?: SortOrder
    eventoId?: SortOrder
  }

  export type PessoaAvgOrderByAggregateInput = {
    id?: SortOrder
    faccId?: SortOrder
    eventoId?: SortOrder
  }

  export type PessoaMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vulgo?: SortOrder
    mae?: SortOrder
    pai?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    foto?: SortOrder
    faccId?: SortOrder
    eventoId?: SortOrder
  }

  export type PessoaMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    vulgo?: SortOrder
    mae?: SortOrder
    pai?: SortOrder
    rg?: SortOrder
    cpf?: SortOrder
    foto?: SortOrder
    faccId?: SortOrder
    eventoId?: SortOrder
  }

  export type PessoaSumOrderByAggregateInput = {
    id?: SortOrder
    faccId?: SortOrder
    eventoId?: SortOrder
  }

  export type EventoCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    data?: SortOrder
    status?: SortOrder
    relato?: SortOrder
    ufc?: SortOrder
    municipio?: SortOrder
  }

  export type EventoAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type EventoMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    data?: SortOrder
    status?: SortOrder
    relato?: SortOrder
    ufc?: SortOrder
    municipio?: SortOrder
  }

  export type EventoMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    data?: SortOrder
    status?: SortOrder
    relato?: SortOrder
    ufc?: SortOrder
    municipio?: SortOrder
  }

  export type EventoSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UsuarioCreateNestedManyWithoutOrganInput = {
    create?: XOR<UsuarioCreateWithoutOrganInput, UsuarioUncheckedCreateWithoutOrganInput> | UsuarioCreateWithoutOrganInput[] | UsuarioUncheckedCreateWithoutOrganInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrganInput | UsuarioCreateOrConnectWithoutOrganInput[]
    createMany?: UsuarioCreateManyOrganInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutOrganInput = {
    create?: XOR<UsuarioCreateWithoutOrganInput, UsuarioUncheckedCreateWithoutOrganInput> | UsuarioCreateWithoutOrganInput[] | UsuarioUncheckedCreateWithoutOrganInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrganInput | UsuarioCreateOrConnectWithoutOrganInput[]
    createMany?: UsuarioCreateManyOrganInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type UsuarioUpdateManyWithoutOrganNestedInput = {
    create?: XOR<UsuarioCreateWithoutOrganInput, UsuarioUncheckedCreateWithoutOrganInput> | UsuarioCreateWithoutOrganInput[] | UsuarioUncheckedCreateWithoutOrganInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrganInput | UsuarioCreateOrConnectWithoutOrganInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutOrganInput | UsuarioUpsertWithWhereUniqueWithoutOrganInput[]
    createMany?: UsuarioCreateManyOrganInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutOrganInput | UsuarioUpdateWithWhereUniqueWithoutOrganInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutOrganInput | UsuarioUpdateManyWithWhereWithoutOrganInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UsuarioUncheckedUpdateManyWithoutOrganNestedInput = {
    create?: XOR<UsuarioCreateWithoutOrganInput, UsuarioUncheckedCreateWithoutOrganInput> | UsuarioCreateWithoutOrganInput[] | UsuarioUncheckedCreateWithoutOrganInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutOrganInput | UsuarioCreateOrConnectWithoutOrganInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutOrganInput | UsuarioUpsertWithWhereUniqueWithoutOrganInput[]
    createMany?: UsuarioCreateManyOrganInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutOrganInput | UsuarioUpdateWithWhereUniqueWithoutOrganInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutOrganInput | UsuarioUpdateManyWithWhereWithoutOrganInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioCreateNestedManyWithoutAcessoInput = {
    create?: XOR<UsuarioCreateWithoutAcessoInput, UsuarioUncheckedCreateWithoutAcessoInput> | UsuarioCreateWithoutAcessoInput[] | UsuarioUncheckedCreateWithoutAcessoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutAcessoInput | UsuarioCreateOrConnectWithoutAcessoInput[]
    createMany?: UsuarioCreateManyAcessoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUncheckedCreateNestedManyWithoutAcessoInput = {
    create?: XOR<UsuarioCreateWithoutAcessoInput, UsuarioUncheckedCreateWithoutAcessoInput> | UsuarioCreateWithoutAcessoInput[] | UsuarioUncheckedCreateWithoutAcessoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutAcessoInput | UsuarioCreateOrConnectWithoutAcessoInput[]
    createMany?: UsuarioCreateManyAcessoInputEnvelope
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
  }

  export type UsuarioUpdateManyWithoutAcessoNestedInput = {
    create?: XOR<UsuarioCreateWithoutAcessoInput, UsuarioUncheckedCreateWithoutAcessoInput> | UsuarioCreateWithoutAcessoInput[] | UsuarioUncheckedCreateWithoutAcessoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutAcessoInput | UsuarioCreateOrConnectWithoutAcessoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutAcessoInput | UsuarioUpsertWithWhereUniqueWithoutAcessoInput[]
    createMany?: UsuarioCreateManyAcessoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutAcessoInput | UsuarioUpdateWithWhereUniqueWithoutAcessoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutAcessoInput | UsuarioUpdateManyWithWhereWithoutAcessoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type UsuarioUncheckedUpdateManyWithoutAcessoNestedInput = {
    create?: XOR<UsuarioCreateWithoutAcessoInput, UsuarioUncheckedCreateWithoutAcessoInput> | UsuarioCreateWithoutAcessoInput[] | UsuarioUncheckedCreateWithoutAcessoInput[]
    connectOrCreate?: UsuarioCreateOrConnectWithoutAcessoInput | UsuarioCreateOrConnectWithoutAcessoInput[]
    upsert?: UsuarioUpsertWithWhereUniqueWithoutAcessoInput | UsuarioUpsertWithWhereUniqueWithoutAcessoInput[]
    createMany?: UsuarioCreateManyAcessoInputEnvelope
    set?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    disconnect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    delete?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    connect?: UsuarioWhereUniqueInput | UsuarioWhereUniqueInput[]
    update?: UsuarioUpdateWithWhereUniqueWithoutAcessoInput | UsuarioUpdateWithWhereUniqueWithoutAcessoInput[]
    updateMany?: UsuarioUpdateManyWithWhereWithoutAcessoInput | UsuarioUpdateManyWithWhereWithoutAcessoInput[]
    deleteMany?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
  }

  export type AcessoCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<AcessoCreateWithoutUsuariosInput, AcessoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: AcessoCreateOrConnectWithoutUsuariosInput
    connect?: AcessoWhereUniqueInput
  }

  export type OrganCreateNestedOneWithoutUsuariosInput = {
    create?: XOR<OrganCreateWithoutUsuariosInput, OrganUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: OrganCreateOrConnectWithoutUsuariosInput
    connect?: OrganWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AcessoUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<AcessoCreateWithoutUsuariosInput, AcessoUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: AcessoCreateOrConnectWithoutUsuariosInput
    upsert?: AcessoUpsertWithoutUsuariosInput
    connect?: AcessoWhereUniqueInput
    update?: XOR<XOR<AcessoUpdateToOneWithWhereWithoutUsuariosInput, AcessoUpdateWithoutUsuariosInput>, AcessoUncheckedUpdateWithoutUsuariosInput>
  }

  export type OrganUpdateOneRequiredWithoutUsuariosNestedInput = {
    create?: XOR<OrganCreateWithoutUsuariosInput, OrganUncheckedCreateWithoutUsuariosInput>
    connectOrCreate?: OrganCreateOrConnectWithoutUsuariosInput
    upsert?: OrganUpsertWithoutUsuariosInput
    connect?: OrganWhereUniqueInput
    update?: XOR<XOR<OrganUpdateToOneWithWhereWithoutUsuariosInput, OrganUpdateWithoutUsuariosInput>, OrganUncheckedUpdateWithoutUsuariosInput>
  }

  export type PessoaCreateNestedManyWithoutFaccInput = {
    create?: XOR<PessoaCreateWithoutFaccInput, PessoaUncheckedCreateWithoutFaccInput> | PessoaCreateWithoutFaccInput[] | PessoaUncheckedCreateWithoutFaccInput[]
    connectOrCreate?: PessoaCreateOrConnectWithoutFaccInput | PessoaCreateOrConnectWithoutFaccInput[]
    createMany?: PessoaCreateManyFaccInputEnvelope
    connect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
  }

  export type PessoaUncheckedCreateNestedManyWithoutFaccInput = {
    create?: XOR<PessoaCreateWithoutFaccInput, PessoaUncheckedCreateWithoutFaccInput> | PessoaCreateWithoutFaccInput[] | PessoaUncheckedCreateWithoutFaccInput[]
    connectOrCreate?: PessoaCreateOrConnectWithoutFaccInput | PessoaCreateOrConnectWithoutFaccInput[]
    createMany?: PessoaCreateManyFaccInputEnvelope
    connect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
  }

  export type PessoaUpdateManyWithoutFaccNestedInput = {
    create?: XOR<PessoaCreateWithoutFaccInput, PessoaUncheckedCreateWithoutFaccInput> | PessoaCreateWithoutFaccInput[] | PessoaUncheckedCreateWithoutFaccInput[]
    connectOrCreate?: PessoaCreateOrConnectWithoutFaccInput | PessoaCreateOrConnectWithoutFaccInput[]
    upsert?: PessoaUpsertWithWhereUniqueWithoutFaccInput | PessoaUpsertWithWhereUniqueWithoutFaccInput[]
    createMany?: PessoaCreateManyFaccInputEnvelope
    set?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    disconnect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    delete?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    connect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    update?: PessoaUpdateWithWhereUniqueWithoutFaccInput | PessoaUpdateWithWhereUniqueWithoutFaccInput[]
    updateMany?: PessoaUpdateManyWithWhereWithoutFaccInput | PessoaUpdateManyWithWhereWithoutFaccInput[]
    deleteMany?: PessoaScalarWhereInput | PessoaScalarWhereInput[]
  }

  export type PessoaUncheckedUpdateManyWithoutFaccNestedInput = {
    create?: XOR<PessoaCreateWithoutFaccInput, PessoaUncheckedCreateWithoutFaccInput> | PessoaCreateWithoutFaccInput[] | PessoaUncheckedCreateWithoutFaccInput[]
    connectOrCreate?: PessoaCreateOrConnectWithoutFaccInput | PessoaCreateOrConnectWithoutFaccInput[]
    upsert?: PessoaUpsertWithWhereUniqueWithoutFaccInput | PessoaUpsertWithWhereUniqueWithoutFaccInput[]
    createMany?: PessoaCreateManyFaccInputEnvelope
    set?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    disconnect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    delete?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    connect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    update?: PessoaUpdateWithWhereUniqueWithoutFaccInput | PessoaUpdateWithWhereUniqueWithoutFaccInput[]
    updateMany?: PessoaUpdateManyWithWhereWithoutFaccInput | PessoaUpdateManyWithWhereWithoutFaccInput[]
    deleteMany?: PessoaScalarWhereInput | PessoaScalarWhereInput[]
  }

  export type FaccCreateNestedOneWithoutPessoasInput = {
    create?: XOR<FaccCreateWithoutPessoasInput, FaccUncheckedCreateWithoutPessoasInput>
    connectOrCreate?: FaccCreateOrConnectWithoutPessoasInput
    connect?: FaccWhereUniqueInput
  }

  export type EventoCreateNestedOneWithoutPessoasInput = {
    create?: XOR<EventoCreateWithoutPessoasInput, EventoUncheckedCreateWithoutPessoasInput>
    connectOrCreate?: EventoCreateOrConnectWithoutPessoasInput
    connect?: EventoWhereUniqueInput
  }

  export type FaccUpdateOneRequiredWithoutPessoasNestedInput = {
    create?: XOR<FaccCreateWithoutPessoasInput, FaccUncheckedCreateWithoutPessoasInput>
    connectOrCreate?: FaccCreateOrConnectWithoutPessoasInput
    upsert?: FaccUpsertWithoutPessoasInput
    connect?: FaccWhereUniqueInput
    update?: XOR<XOR<FaccUpdateToOneWithWhereWithoutPessoasInput, FaccUpdateWithoutPessoasInput>, FaccUncheckedUpdateWithoutPessoasInput>
  }

  export type EventoUpdateOneRequiredWithoutPessoasNestedInput = {
    create?: XOR<EventoCreateWithoutPessoasInput, EventoUncheckedCreateWithoutPessoasInput>
    connectOrCreate?: EventoCreateOrConnectWithoutPessoasInput
    upsert?: EventoUpsertWithoutPessoasInput
    connect?: EventoWhereUniqueInput
    update?: XOR<XOR<EventoUpdateToOneWithWhereWithoutPessoasInput, EventoUpdateWithoutPessoasInput>, EventoUncheckedUpdateWithoutPessoasInput>
  }

  export type PessoaCreateNestedManyWithoutEventoInput = {
    create?: XOR<PessoaCreateWithoutEventoInput, PessoaUncheckedCreateWithoutEventoInput> | PessoaCreateWithoutEventoInput[] | PessoaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: PessoaCreateOrConnectWithoutEventoInput | PessoaCreateOrConnectWithoutEventoInput[]
    createMany?: PessoaCreateManyEventoInputEnvelope
    connect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
  }

  export type PessoaUncheckedCreateNestedManyWithoutEventoInput = {
    create?: XOR<PessoaCreateWithoutEventoInput, PessoaUncheckedCreateWithoutEventoInput> | PessoaCreateWithoutEventoInput[] | PessoaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: PessoaCreateOrConnectWithoutEventoInput | PessoaCreateOrConnectWithoutEventoInput[]
    createMany?: PessoaCreateManyEventoInputEnvelope
    connect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
  }

  export type PessoaUpdateManyWithoutEventoNestedInput = {
    create?: XOR<PessoaCreateWithoutEventoInput, PessoaUncheckedCreateWithoutEventoInput> | PessoaCreateWithoutEventoInput[] | PessoaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: PessoaCreateOrConnectWithoutEventoInput | PessoaCreateOrConnectWithoutEventoInput[]
    upsert?: PessoaUpsertWithWhereUniqueWithoutEventoInput | PessoaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: PessoaCreateManyEventoInputEnvelope
    set?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    disconnect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    delete?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    connect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    update?: PessoaUpdateWithWhereUniqueWithoutEventoInput | PessoaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: PessoaUpdateManyWithWhereWithoutEventoInput | PessoaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: PessoaScalarWhereInput | PessoaScalarWhereInput[]
  }

  export type PessoaUncheckedUpdateManyWithoutEventoNestedInput = {
    create?: XOR<PessoaCreateWithoutEventoInput, PessoaUncheckedCreateWithoutEventoInput> | PessoaCreateWithoutEventoInput[] | PessoaUncheckedCreateWithoutEventoInput[]
    connectOrCreate?: PessoaCreateOrConnectWithoutEventoInput | PessoaCreateOrConnectWithoutEventoInput[]
    upsert?: PessoaUpsertWithWhereUniqueWithoutEventoInput | PessoaUpsertWithWhereUniqueWithoutEventoInput[]
    createMany?: PessoaCreateManyEventoInputEnvelope
    set?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    disconnect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    delete?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    connect?: PessoaWhereUniqueInput | PessoaWhereUniqueInput[]
    update?: PessoaUpdateWithWhereUniqueWithoutEventoInput | PessoaUpdateWithWhereUniqueWithoutEventoInput[]
    updateMany?: PessoaUpdateManyWithWhereWithoutEventoInput | PessoaUpdateManyWithWhereWithoutEventoInput[]
    deleteMany?: PessoaScalarWhereInput | PessoaScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UsuarioCreateWithoutOrganInput = {
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acesso: AcessoCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutOrganInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessoId: number
  }

  export type UsuarioCreateOrConnectWithoutOrganInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutOrganInput, UsuarioUncheckedCreateWithoutOrganInput>
  }

  export type UsuarioCreateManyOrganInputEnvelope = {
    data: UsuarioCreateManyOrganInput | UsuarioCreateManyOrganInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutOrganInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutOrganInput, UsuarioUncheckedUpdateWithoutOrganInput>
    create: XOR<UsuarioCreateWithoutOrganInput, UsuarioUncheckedCreateWithoutOrganInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutOrganInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutOrganInput, UsuarioUncheckedUpdateWithoutOrganInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutOrganInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutOrganInput>
  }

  export type UsuarioScalarWhereInput = {
    AND?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    OR?: UsuarioScalarWhereInput[]
    NOT?: UsuarioScalarWhereInput | UsuarioScalarWhereInput[]
    id?: IntFilter<"Usuario"> | number
    email?: StringFilter<"Usuario"> | string
    name?: StringNullableFilter<"Usuario"> | string | null
    createdAt?: DateTimeFilter<"Usuario"> | Date | string
    updatedAt?: DateTimeFilter<"Usuario"> | Date | string
    acessoId?: IntFilter<"Usuario"> | number
    organId?: IntFilter<"Usuario"> | number
  }

  export type UsuarioCreateWithoutAcessoInput = {
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organ: OrganCreateNestedOneWithoutUsuariosInput
  }

  export type UsuarioUncheckedCreateWithoutAcessoInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organId: number
  }

  export type UsuarioCreateOrConnectWithoutAcessoInput = {
    where: UsuarioWhereUniqueInput
    create: XOR<UsuarioCreateWithoutAcessoInput, UsuarioUncheckedCreateWithoutAcessoInput>
  }

  export type UsuarioCreateManyAcessoInputEnvelope = {
    data: UsuarioCreateManyAcessoInput | UsuarioCreateManyAcessoInput[]
    skipDuplicates?: boolean
  }

  export type UsuarioUpsertWithWhereUniqueWithoutAcessoInput = {
    where: UsuarioWhereUniqueInput
    update: XOR<UsuarioUpdateWithoutAcessoInput, UsuarioUncheckedUpdateWithoutAcessoInput>
    create: XOR<UsuarioCreateWithoutAcessoInput, UsuarioUncheckedCreateWithoutAcessoInput>
  }

  export type UsuarioUpdateWithWhereUniqueWithoutAcessoInput = {
    where: UsuarioWhereUniqueInput
    data: XOR<UsuarioUpdateWithoutAcessoInput, UsuarioUncheckedUpdateWithoutAcessoInput>
  }

  export type UsuarioUpdateManyWithWhereWithoutAcessoInput = {
    where: UsuarioScalarWhereInput
    data: XOR<UsuarioUpdateManyMutationInput, UsuarioUncheckedUpdateManyWithoutAcessoInput>
  }

  export type AcessoCreateWithoutUsuariosInput = {
    title: string
  }

  export type AcessoUncheckedCreateWithoutUsuariosInput = {
    id?: number
    title: string
  }

  export type AcessoCreateOrConnectWithoutUsuariosInput = {
    where: AcessoWhereUniqueInput
    create: XOR<AcessoCreateWithoutUsuariosInput, AcessoUncheckedCreateWithoutUsuariosInput>
  }

  export type OrganCreateWithoutUsuariosInput = {
    name: string
  }

  export type OrganUncheckedCreateWithoutUsuariosInput = {
    id?: number
    name: string
  }

  export type OrganCreateOrConnectWithoutUsuariosInput = {
    where: OrganWhereUniqueInput
    create: XOR<OrganCreateWithoutUsuariosInput, OrganUncheckedCreateWithoutUsuariosInput>
  }

  export type AcessoUpsertWithoutUsuariosInput = {
    update: XOR<AcessoUpdateWithoutUsuariosInput, AcessoUncheckedUpdateWithoutUsuariosInput>
    create: XOR<AcessoCreateWithoutUsuariosInput, AcessoUncheckedCreateWithoutUsuariosInput>
    where?: AcessoWhereInput
  }

  export type AcessoUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: AcessoWhereInput
    data: XOR<AcessoUpdateWithoutUsuariosInput, AcessoUncheckedUpdateWithoutUsuariosInput>
  }

  export type AcessoUpdateWithoutUsuariosInput = {
    title?: StringFieldUpdateOperationsInput | string
  }

  export type AcessoUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
  }

  export type OrganUpsertWithoutUsuariosInput = {
    update: XOR<OrganUpdateWithoutUsuariosInput, OrganUncheckedUpdateWithoutUsuariosInput>
    create: XOR<OrganCreateWithoutUsuariosInput, OrganUncheckedCreateWithoutUsuariosInput>
    where?: OrganWhereInput
  }

  export type OrganUpdateToOneWithWhereWithoutUsuariosInput = {
    where?: OrganWhereInput
    data: XOR<OrganUpdateWithoutUsuariosInput, OrganUncheckedUpdateWithoutUsuariosInput>
  }

  export type OrganUpdateWithoutUsuariosInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type OrganUncheckedUpdateWithoutUsuariosInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PessoaCreateWithoutFaccInput = {
    name: string
    vulgo: string
    mae: string
    pai: string
    rg: string
    cpf: string
    foto: string
    evento: EventoCreateNestedOneWithoutPessoasInput
  }

  export type PessoaUncheckedCreateWithoutFaccInput = {
    id?: number
    name: string
    vulgo: string
    mae: string
    pai: string
    rg: string
    cpf: string
    foto: string
    eventoId: number
  }

  export type PessoaCreateOrConnectWithoutFaccInput = {
    where: PessoaWhereUniqueInput
    create: XOR<PessoaCreateWithoutFaccInput, PessoaUncheckedCreateWithoutFaccInput>
  }

  export type PessoaCreateManyFaccInputEnvelope = {
    data: PessoaCreateManyFaccInput | PessoaCreateManyFaccInput[]
    skipDuplicates?: boolean
  }

  export type PessoaUpsertWithWhereUniqueWithoutFaccInput = {
    where: PessoaWhereUniqueInput
    update: XOR<PessoaUpdateWithoutFaccInput, PessoaUncheckedUpdateWithoutFaccInput>
    create: XOR<PessoaCreateWithoutFaccInput, PessoaUncheckedCreateWithoutFaccInput>
  }

  export type PessoaUpdateWithWhereUniqueWithoutFaccInput = {
    where: PessoaWhereUniqueInput
    data: XOR<PessoaUpdateWithoutFaccInput, PessoaUncheckedUpdateWithoutFaccInput>
  }

  export type PessoaUpdateManyWithWhereWithoutFaccInput = {
    where: PessoaScalarWhereInput
    data: XOR<PessoaUpdateManyMutationInput, PessoaUncheckedUpdateManyWithoutFaccInput>
  }

  export type PessoaScalarWhereInput = {
    AND?: PessoaScalarWhereInput | PessoaScalarWhereInput[]
    OR?: PessoaScalarWhereInput[]
    NOT?: PessoaScalarWhereInput | PessoaScalarWhereInput[]
    id?: IntFilter<"Pessoa"> | number
    name?: StringFilter<"Pessoa"> | string
    vulgo?: StringFilter<"Pessoa"> | string
    mae?: StringFilter<"Pessoa"> | string
    pai?: StringFilter<"Pessoa"> | string
    rg?: StringFilter<"Pessoa"> | string
    cpf?: StringFilter<"Pessoa"> | string
    foto?: StringFilter<"Pessoa"> | string
    faccId?: IntFilter<"Pessoa"> | number
    eventoId?: IntFilter<"Pessoa"> | number
  }

  export type FaccCreateWithoutPessoasInput = {
    name: string
  }

  export type FaccUncheckedCreateWithoutPessoasInput = {
    id?: number
    name: string
  }

  export type FaccCreateOrConnectWithoutPessoasInput = {
    where: FaccWhereUniqueInput
    create: XOR<FaccCreateWithoutPessoasInput, FaccUncheckedCreateWithoutPessoasInput>
  }

  export type EventoCreateWithoutPessoasInput = {
    title: string
    data: string
    status: string
    relato: string
    ufc: string
    municipio: string
  }

  export type EventoUncheckedCreateWithoutPessoasInput = {
    id?: number
    title: string
    data: string
    status: string
    relato: string
    ufc: string
    municipio: string
  }

  export type EventoCreateOrConnectWithoutPessoasInput = {
    where: EventoWhereUniqueInput
    create: XOR<EventoCreateWithoutPessoasInput, EventoUncheckedCreateWithoutPessoasInput>
  }

  export type FaccUpsertWithoutPessoasInput = {
    update: XOR<FaccUpdateWithoutPessoasInput, FaccUncheckedUpdateWithoutPessoasInput>
    create: XOR<FaccCreateWithoutPessoasInput, FaccUncheckedCreateWithoutPessoasInput>
    where?: FaccWhereInput
  }

  export type FaccUpdateToOneWithWhereWithoutPessoasInput = {
    where?: FaccWhereInput
    data: XOR<FaccUpdateWithoutPessoasInput, FaccUncheckedUpdateWithoutPessoasInput>
  }

  export type FaccUpdateWithoutPessoasInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type FaccUncheckedUpdateWithoutPessoasInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type EventoUpsertWithoutPessoasInput = {
    update: XOR<EventoUpdateWithoutPessoasInput, EventoUncheckedUpdateWithoutPessoasInput>
    create: XOR<EventoCreateWithoutPessoasInput, EventoUncheckedCreateWithoutPessoasInput>
    where?: EventoWhereInput
  }

  export type EventoUpdateToOneWithWhereWithoutPessoasInput = {
    where?: EventoWhereInput
    data: XOR<EventoUpdateWithoutPessoasInput, EventoUncheckedUpdateWithoutPessoasInput>
  }

  export type EventoUpdateWithoutPessoasInput = {
    title?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relato?: StringFieldUpdateOperationsInput | string
    ufc?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
  }

  export type EventoUncheckedUpdateWithoutPessoasInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    data?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    relato?: StringFieldUpdateOperationsInput | string
    ufc?: StringFieldUpdateOperationsInput | string
    municipio?: StringFieldUpdateOperationsInput | string
  }

  export type PessoaCreateWithoutEventoInput = {
    name: string
    vulgo: string
    mae: string
    pai: string
    rg: string
    cpf: string
    foto: string
    facc: FaccCreateNestedOneWithoutPessoasInput
  }

  export type PessoaUncheckedCreateWithoutEventoInput = {
    id?: number
    name: string
    vulgo: string
    mae: string
    pai: string
    rg: string
    cpf: string
    foto: string
    faccId: number
  }

  export type PessoaCreateOrConnectWithoutEventoInput = {
    where: PessoaWhereUniqueInput
    create: XOR<PessoaCreateWithoutEventoInput, PessoaUncheckedCreateWithoutEventoInput>
  }

  export type PessoaCreateManyEventoInputEnvelope = {
    data: PessoaCreateManyEventoInput | PessoaCreateManyEventoInput[]
    skipDuplicates?: boolean
  }

  export type PessoaUpsertWithWhereUniqueWithoutEventoInput = {
    where: PessoaWhereUniqueInput
    update: XOR<PessoaUpdateWithoutEventoInput, PessoaUncheckedUpdateWithoutEventoInput>
    create: XOR<PessoaCreateWithoutEventoInput, PessoaUncheckedCreateWithoutEventoInput>
  }

  export type PessoaUpdateWithWhereUniqueWithoutEventoInput = {
    where: PessoaWhereUniqueInput
    data: XOR<PessoaUpdateWithoutEventoInput, PessoaUncheckedUpdateWithoutEventoInput>
  }

  export type PessoaUpdateManyWithWhereWithoutEventoInput = {
    where: PessoaScalarWhereInput
    data: XOR<PessoaUpdateManyMutationInput, PessoaUncheckedUpdateManyWithoutEventoInput>
  }

  export type UsuarioCreateManyOrganInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    acessoId: number
  }

  export type UsuarioUpdateWithoutOrganInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acesso?: AcessoUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutOrganInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessoId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioUncheckedUpdateManyWithoutOrganInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    acessoId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioCreateManyAcessoInput = {
    id?: number
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    organId: number
  }

  export type UsuarioUpdateWithoutAcessoInput = {
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organ?: OrganUpdateOneRequiredWithoutUsuariosNestedInput
  }

  export type UsuarioUncheckedUpdateWithoutAcessoInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organId?: IntFieldUpdateOperationsInput | number
  }

  export type UsuarioUncheckedUpdateManyWithoutAcessoInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organId?: IntFieldUpdateOperationsInput | number
  }

  export type PessoaCreateManyFaccInput = {
    id?: number
    name: string
    vulgo: string
    mae: string
    pai: string
    rg: string
    cpf: string
    foto: string
    eventoId: number
  }

  export type PessoaUpdateWithoutFaccInput = {
    name?: StringFieldUpdateOperationsInput | string
    vulgo?: StringFieldUpdateOperationsInput | string
    mae?: StringFieldUpdateOperationsInput | string
    pai?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    evento?: EventoUpdateOneRequiredWithoutPessoasNestedInput
  }

  export type PessoaUncheckedUpdateWithoutFaccInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vulgo?: StringFieldUpdateOperationsInput | string
    mae?: StringFieldUpdateOperationsInput | string
    pai?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    eventoId?: IntFieldUpdateOperationsInput | number
  }

  export type PessoaUncheckedUpdateManyWithoutFaccInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vulgo?: StringFieldUpdateOperationsInput | string
    mae?: StringFieldUpdateOperationsInput | string
    pai?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    eventoId?: IntFieldUpdateOperationsInput | number
  }

  export type PessoaCreateManyEventoInput = {
    id?: number
    name: string
    vulgo: string
    mae: string
    pai: string
    rg: string
    cpf: string
    foto: string
    faccId: number
  }

  export type PessoaUpdateWithoutEventoInput = {
    name?: StringFieldUpdateOperationsInput | string
    vulgo?: StringFieldUpdateOperationsInput | string
    mae?: StringFieldUpdateOperationsInput | string
    pai?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    facc?: FaccUpdateOneRequiredWithoutPessoasNestedInput
  }

  export type PessoaUncheckedUpdateWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vulgo?: StringFieldUpdateOperationsInput | string
    mae?: StringFieldUpdateOperationsInput | string
    pai?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    faccId?: IntFieldUpdateOperationsInput | number
  }

  export type PessoaUncheckedUpdateManyWithoutEventoInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    vulgo?: StringFieldUpdateOperationsInput | string
    mae?: StringFieldUpdateOperationsInput | string
    pai?: StringFieldUpdateOperationsInput | string
    rg?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    foto?: StringFieldUpdateOperationsInput | string
    faccId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use OrganCountOutputTypeDefaultArgs instead
     */
    export type OrganCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = OrganCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AcessoCountOutputTypeDefaultArgs instead
     */
    export type AcessoCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AcessoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FaccCountOutputTypeDefaultArgs instead
     */
    export type FaccCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FaccCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventoCountOutputTypeDefaultArgs instead
     */
    export type EventoCountOutputTypeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EventoCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use OrganDefaultArgs instead
     */
    export type OrganArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = OrganDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AcessoDefaultArgs instead
     */
    export type AcessoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AcessoDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UsuarioDefaultArgs instead
     */
    export type UsuarioArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UsuarioDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FaccDefaultArgs instead
     */
    export type FaccArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = FaccDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PessoaDefaultArgs instead
     */
    export type PessoaArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = PessoaDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventoDefaultArgs instead
     */
    export type EventoArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = EventoDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
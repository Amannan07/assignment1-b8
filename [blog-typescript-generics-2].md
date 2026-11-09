TypeScript generics are a way to create reusable, type-safe components, functions, or classes. Instead of locking a component into a single data type (or losing safety by falling back to any), we use a type parameter (conventionally denoted as <T>) as a placeholder for whichever type is passed in.

When we call the generic component, TypeScript either infers the type automatically from the arguments we provide or allows us to explicitly specify it using angle brackets (<Type>).

Generics help make asynchronous functions reusable and type-safe when working with Promise<T> responses.
The key idea is that T represents the type of value that a Promise will return when it resolves.

Consider this generic function:
	async function getData<T>(): Promise<T> {
  	const result = await someAsyncOperation();
  	return result as T;
	}
	
The important relationship is Promise<T>
Before resolution: The function returns a Promise<T>.
After resolution: await extracts the resolved value of type T.
	const user: User = await getData<User>();
The variable user has the type User, not Promise<User>.
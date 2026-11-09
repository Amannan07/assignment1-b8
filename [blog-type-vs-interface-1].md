In TypeScript, both type aliases and interface are used to define the structure and shape of data. They have many similarities, but also some important differences.
The core difference is that interfaces are open structures designed primarily to define object shapes, while type aliases are closed wrappers capable of renaming or composing any valid TypeScript type.A more details below:

1. Declaration Merging vs. Closed Names:

Interfaces are "open". If we declare two interfaces with the exact same name in the same scope, TypeScript automatically merges their properties. Type aliases are "closed" and cannot be changed once created.
Example:
	interface User {
    	name: string;
	}

	interface User {
    	age: number;
	}

	const user: User = {
    	name: "Abdul",
    	age: 25
	};

However, we cannot redeclare a type alias with the same name.
	type User = {
   	 name: string;
	};

	// Error: Duplicate identifier 'User'
	type User = {
    	age: number;
	};

2. Type Alis uses intersection operator (&) for Extension Syntax, while Interface uses the 'extends' keyword.
3. In case of Tuples & Arrays, Type Alias (type) is supported natively. Interface does not directly supported as a root declaration.

4. When should we choose one over the other?
We choose interface when defining object structures. For example:
	- User/Employee objects
	- API response structures

We choose type when defining complex or flexible types:
	- Union types
	- Intersection types
	- Tuples
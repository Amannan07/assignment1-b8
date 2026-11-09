// (1)
const multiplyValue = (value: number, multiplier?: number) => {
    if(multiplier === undefined){
        return value * 2;
    }
    return value * multiplier;
};

// (2)
type Input = string | number | boolean
const processInput = (value: Input) : string | number => {

    if(typeof value === "string"){
        return value.trim().toLowerCase();
    } else if (typeof value === "number"){
        return value * 10;
    } else {
        return value ? "Active" : "Inactive";
    }

};


// (3)
const formatCoordinate = 
(coordinate: readonly[number, number, string]) : string => {
    const [latitude, longitude, locationName] = coordinate;

    return `Location: ${locationName} (${latitude}, ${longitude})`;

};


// (4)
const concatenateArrays = <T>(...arrays: T[][]): T[] => {

    return arrays.flat();
};


// (5)
interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}

const getPopularCourses = (courses: Course[], minStudents: number) : Course[] => {
    return courses.filter(course => course.isPublished === true &&
        course.students >= minStudents
    );
    
};



// (6)
const pluckValues = <T, k extends keyof T>(
    items: T[], 
    key: k
): T[k][] => {
    return items.map(item => item[key]);
};



// (7)
class Employee {
    protected name: string;
    private baseSalary: number;

    constructor (name: string, baseSalary: number) {
        this.name = name;
        this.baseSalary = baseSalary;
    };

    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    };
};

class Manager extends Employee {
    private department: string;

    constructor(name: string, baseSalary: number, department: string){
        super(name, baseSalary);
        this.department = department;
    };

    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    };
};


// (8)
const validateAgeAsync = (age: number) : Promise<string> => {
    return new Promise ((resolve, reject) => {
        if(age >= 18){
            setTimeout(() => {
                resolve("Access Granted")
            }, 1000)

        } else {
            reject(new Error("Access Denied: Must be 18 or older"));            
        }
    });    
};

//  await validateAgeAsync(12)
//     .then((result) => console.log(result))
//     .catch((error) => console.log(error.message));
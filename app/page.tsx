export default function Home(props: { user: string; email: string }) {
  type User = {
    name: string;
    age: number | string;
    role?: string;
  };

  interface Person {
    name: string;
    age: number | string;
    email: string;
  }

  interface Student extends Person {
    studentId: string;
  }

  const userObj: User = {
    name: "John",
    age: "sss",
    role: "Admin",
  };

  const personObj: Person = {
    name: "Jane",
    age: "sssss",
    email: "jane@abc.com",
  };

  const personArr: Person[] = [
    {
      name: "Jane",
      age: "sssss",
      email: "jane@abc.com",
    },
    {
      name: "Ife",
      age: "sssss",
      email: "jane@abc.com",
    },
    {
      name: "Tomiwa",
      age: "sssss",
      email: "jane@abc.com",
    },
  ];

  const studentObj: Student = {
    studentId: "12244",
    name: "Tomiwa",
    age: "20",
    email: "sdj@sss.com",
  };
  return (
    <div className="text-4xl text-green-500 text-center">
      <h1>Welcome to my homepage</h1>
      {personArr.map((user, i) => (
        <>
          <div key={i}>
            <h1>Name: {user.name}</h1>
            <h1>Age: {user.age}</h1>
            <h1>Address: {user.email}</h1>
            <hr />
          </div>
        </>
      ))}
    </div>
  );
}

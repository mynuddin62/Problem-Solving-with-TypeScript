## any, unknown এবং never টাইপের পার্থক্য

TypeScript এর টাইপ সিস্টেম আমাদের কোডকে সেফ এবং মেইনটেইনেবল রাখে। তবে কখনও কখনও আমরা ভ্যারিয়েবলকে "ডাইনামিক" রাখতে চাই। এই ক্ষেত্রে আসে any, unknown এবং never টাইপ।

১. any — টাইপস্ক্রিপ্ট বন্ধ
any টাইপ দিয়ে ডিক্লেয়ার করলে TypeScript টাইপ চেককে বাদ দেয়।
ফলে যেকোনো অপারেশন করা যায়।
কিন্তু এতে টাইপ সেফটি হারায়, এবং ভুল শুধুমাত্র রানটাইমে ধরা পড়ে।

যেমন:
```
let data: any;
data = 42;
data = "Hello";
data.toFixed(); // ভুল হতে পারে, কিন্তু টাইপস্ক্রিপ্ট কিছু বলে না
```
#### _any ব্যবহার কোডের রিডেবিলিটি এবং মেইনটেনেবিলিটিতে সমস্যা হতে পারে।_

২. unknown — any এর নিরাপদ বিকল্প

unknown টাইপও যেকোনো মান রাখতে পারে, কিন্তু ব্যবহার করার আগে টাইপ চেক করতে হবে।
ফলে টাইপ সেফটির সাথে ডাইনামিক কোড লিখা যায়।

যেমন:

```
let value: unknown;
value = 10;
value = "Hello";

if (typeof value === "string") {
    console.log(value.toUpperCase()); // টাইপ চেকের পর কাজ করবে
}
```

৩. never — অসম্ভব টাইপ

never টাইপ নির্দেশ করে যে, এই ভ্যালুটি কখনোই বিদ্যমান হবে না।
এটি সাধারণত ফাংশন যা কখনো রিটার্ন করবে না বা এরর থ্রো করবে সেই ক্ষেত্রে ব্যবহার হয়।

যেমন:

```
const throwError = (message: string): never => {
    throw new Error(message);
}

throwError("Number Format Error!");
```
#### _never টাইপ দিয়ে আমরা বুঝাই, এই কোড কখনো স্বাভাবিকভাবে শেষ হবে না।_

## TypeScript এ Union এবং Intersection টাইপের ব্যবহার

Union টাইপ (|)

Union টাইপ একটি ভ্যারিয়েবলকে একাধিক টাইপের মধ্যে যেকোনো একটি ব্যবহার করতে দেয়।

যেমন:
```
let value: string | number;
value = "Hello";
value = 123;
```

Intersection টাইপ (&)

Intersection টাইপ একাধিক টাইপকে একত্রিত করে। এতে ভ্যারিয়েবলটি সব টাইপের শর্ত পূরণ করতে হবে।

যেমন:

```
interface Person {
    name: string;
    age: number;
}

interface Employee {
    employeeId: number;
    department: string;
}

type Staff = Person & Employee;

const staffMember: Staff = {
    name: "Alice",
    age: 30,
    employeeId: 101,
    department: "IT"
};
```

এখানে Staff টাইপটি Person এবং Employee উভয় বৈশিষ্ট্যই ধারণ করছে।

সংক্ষেপে:

- **any = টাইপস্ক্রিপ্ট বন্ধ করে দেয়।**
- **unknown = যেকোনো মান রাখে, কিন্তু ব্যবহার আগে টাইপ চেক প্রয়োজন।**
- **never = কখনো বিদ্যমান নয়।**
- **Union (|) = একাধিক টাইপের যেকোনো একটি।**
- **Intersection (&) = একাধিক টাইপ একসাথে।**
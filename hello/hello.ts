const langage: string = "TypeScript";
const nodeVersion = (globalThis as typeof globalThis & { process: { version: string } }).process.version;
console.log(`Hello PROG5 depuis ${langage}, Node ${nodeVersion}`);
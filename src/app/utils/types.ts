// types.ts
export interface Post {
    id: number;
    title: string;
    content: string;
    image: string;
  }
  
  export type post = {
    id: number; // or string, depending on your data structure
    title: string;
    content: string;
    image: string;
  };
// data/posts.ts
import { Post } from '../types';

export const posts: Post[] = [
  {
    id: 0,
    title: "Photography",
    content: "Photographs are often the best souvenir of your travels. But the worst thing is when they come out blurry, blown out, or just not all that exciting to look at. If you want to learn how to take better pictures on your travels around the world, this article is packed with everything you need to improve your photography skills..",
    image: "https://dynamic-blog-gamma.vercel.app/_next/image?url=%2Fvirtual-tour.webp&w=640&q=75",
  },
  {
    id: 2,
    title: "Next.js 15.1",
    content: "Next.js 15.1 introduces core upgrades, new APIs, and improvements to the developer experience including:.",
    image: "https://dynamic-blog-gamma.vercel.app/_next/image?url=%2Fblog.webp&w=828&q=75",
  },
  {
    id: 1,
    title: "Welcome",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium ligula ut lectus gravida, eu porttitor orci ultricies. Nulla facilisi. Nam euismod, nulla sit amet pretium volutpat, erat lorem fermentum augue, non vestibulum mi felis et purus. Morbi feugiat orci vel risus scelerisque, sit amet bibendum eros volutpat.",
    image: "https://dynamic-blog-gamma.vercel.app/_next/image?url=%2Fnextjs15-1.jpg&w=640&q=75",
  },
  // Add more posts here
];

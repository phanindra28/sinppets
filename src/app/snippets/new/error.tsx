"use client";
interface ErrorPageProps{
    error: Error;
    reset: () => void;
}
export default function ({error, reset} : ErrorPageProps){
    return  <div>{error.message}</div>
}
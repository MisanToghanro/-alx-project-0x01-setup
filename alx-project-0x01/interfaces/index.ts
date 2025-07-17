
export interface PostProps{
    userId: number,
    id:number,
    title:string,
    body:string

}

export interface PostPageProp{
    posts:PostProps[]
}
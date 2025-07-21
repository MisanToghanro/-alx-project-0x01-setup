
export interface PostProps{
    userId: number,
    title: string,
    body: string
    id: number,


}

export interface PostPageProps{
    posts:PostProps[]
}


 export interface UserProps{
    id: number;
    name: string;
    username: string;
    email: string;

    address:{
     street: string;
    suite:string;
    city:string;
    zipcode:string;
    geo:{
    lat:string;
    lng:string;
    };
    };

    phone:string;
    website:string;
    company:{
     name:string;
    catchPhrase: string;
    bs:string;
    }

}

export interface UserListProps{
    users:UserProps[];
}

export interface PostData{
    userId: number;
    title: string;
    body: string;
    id?: number;

}

export interface PostModalProps{
    onClose:()=>void;
    onSubmit: (post: PostData) => void;
}
export interface UserData{
    id:number;
    name:string;
    username:string;
    email:string;

    address:{
     street:string;
    suite:string;
    city:string;
    zipcode:string;
    geo:{
    lat:string;
    lng:string;
    };
    };

    phone:string;
    website:string;
    company:{
     name:string;
    catchPhrase:string;
    bs:string;
    }
}

export interface UserModalProps{
    onClose: () => void;
    onSubmit:(post: UserData) => void;
}

export const userColumns = [
    { field: "id", headerName: "ID", width: 70 },
    {
        field: "user",
        headerName: "User",
        width: 230,
        renderCell: (params) => {
            return (
                <div className="cell_with_image">
                    <img className="cell_image" src={params.row.img} alt="avatar" />
                    {params.row.username}
                </div>
            );
        },
    },
    {
        field: "email",
        headerName: "Email",
        width: 230,
    },

    {
        field: "age",
        headerName: "Age",
        width: 100,
    },
    // {
    //     field: "status",
    //     headerName: "Status",
    //     width: 160,
    //     renderCell: (params) => {
    //         return (
    //             <div className={`cell_with_status ${params.row.status}`}>
    //                 {params.row.status}
    //             </div>
    //         );
    //     },
    // },
    {
        field: "gender",
        headerName: "Gender",
        width: 160,
    }
];

export const userRows = [
    {
        id: 1,
        username: "Ndubiusi Offor",
        img: "https://res.cloudinary.com/dg0sck16v/image/upload/v1681923532/Avatar/luis-villasmil-hh3ViD0r0Rc-unsplash_vxmjqh.jpg",
        status: "active",
        email: "offor.ndu@mail.com",
        age: 35,
        gender: "Male",
    },
    {
        id: 2,
        username: "John Akpomera",
        img: "https://res.cloudinary.com/dg0sck16v/image/upload/v1681923544/Avatar/ayo-ogunseinde-sibVwORYqs0-unsplash_zarq04.jpg",
        email: "John.Akpomera@mail.com",
        age: 42,
        gender: "Male",
    },
    {
        id: 3,
        username: "John Iyamu",
        img: "https://res.cloudinary.com/dg0sck16v/image/upload/v1681923553/Avatar/joseph-gonzalez-iFgRcqHznqg-unsplash_urvnxz.jpg",
        email: "j.iyamu@mail.com",
        age: 45,
        gender: "Male",
    },
    {
        id: 4,
        username: "Osasu Ogunrobo",
        img: "https://res.cloudinary.com/dg0sck16v/image/upload/v1681923762/Avatar/mustafa-omar-RGtSTDmmcCk-unsplash_qqhtqv.jpg",
        email: "ogunrobo.osas@mail.com",
        age: 16,
        gender: "Female",
    },
    {
        id: 5,
        username: "Harold Rhodes-Vivour",
        img: "https://res.cloudinary.com/dg0sck16v/image/upload/v1681923569/Avatar/ben-den-engelsen-YUu9UAcOKZ4-unsplash_vocbsp.jpg",
        email: "hrv@mail.com",
        age: 22,
        gender: "Male",
    },
    {
        id: 6,
        username: "Melissa Osagie",
        img: "https://res.cloudinary.com/dg0sck16v/image/upload/v1681923527/Avatar/matheus-ferrero-W7b3eDUb_2I-unsplash_udi38k.jpg",
        email: "mel.osas@mail.com",
        age: 25,
        gender: "Female",
    },
    {
        id: 7,
        username: "Paul Scholes",
        img: "https://res.cloudinary.com/dg0sck16v/image/upload/v1680738694/Avatar/pexels-muhammadtaha-ibrahim-3778211_reb9a5.jpg",
        email: "paul.scholes@manutd.com",
        age: 44,
        gender: "Male",
    },
    {
        id: 8,
        username: "Frances",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "8snow@gmail.com",
        age: 36,
        gender: "Female",
    },
    {
        id: 9,
        username: "Roxie",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "snow@gmail.com",
        age: 65,
        gender: "Female",
    },
    {
        id: 10,
        username: "Malcolm X",
        img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        email: "x@mail.com",
        age: 65,
        gender: "Male",
    },
];
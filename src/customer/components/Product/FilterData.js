export const color=[
    "white",
    "Black",
    "Red",
    "Marun",
    "Being",
    "Pink",
    "Green",
    "Yellow"
];

export const Filters = [
    {
        id:"color",
        name:"color",
        options:[
            {value:"white",label:"White"},
            {value:"beige",label:"Beige"},
            {value:"blue",label:"Blue"},
            {value:"brown",label:"Brown"},
            {value:"green",label:"Green"},
            {value:"beige",label:"Beige"},
            {value:"white",label:"White"},
            {value:"beige",label:"Beige"}
        ],
    },
    {
        id:"size",
        name:"Size",
        options:[
            {value:"S",label:"S"},
            {value:"M",label:"M"},
            {value:"L",label:"L"},
        ],
    },
]

export const singleFilters = [
    {
        id:"price",
        name:"price",
        options:[
            {value:"159-399",label:"$159 to $399"},
            {value:"399-999",label:"$399 to $999"},
            {value:"999-1999",label:"$999 to $ $1999"},
            {value:"1999-2999",label:"$1999 to $2999"},
            {value:"3999-4999",label:"$3999 to $4999"},
        ],
    },
    {
        id:"disccount",
        name:"disccount range",
        options:[
            {value:"20",label:"20% And Above"},
            {value:"30",label:"30% And Above"},
            {value:"40",label:"40% And Above"},
            {value:"50",label:"50% And Above"},
            {value:"60",label:"60% And Above"},
            {value:"70",label:"70% And Above"},
            {value:"80",label:"80% And Above"},
        ],
    },
    {
        id:"stock",
        name:"Availability",
        options:[
            {value:"in_stock",label:"In stock"},
            {value:"out_of_stock",label:"Out of stock"},
        ],
    },
]
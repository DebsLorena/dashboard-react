import {
    UilEstate,
    UilClipboardAlt,
    UilUsersAlt,
    UilPackage,
    UilChart,
} from "@iconscout/react-unicons";


import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";
/*import { keyboard } from "@testing-library/user-event/dist/keyboard";*/



// Img
import Joao from "../img/Joao.png";
import Neto from "../img/Neto.png";
import Laura from "../img/Laura.png";


/*sidebar data*/
export const SidebarData = [
    {
        icon: UilEstate,
        heading: "Dashboard",
    },
    {
        icon: UilClipboardAlt,
        heading: "Orders",
    },
    {
        icon: UilUsersAlt,
        heading: "Customers",
    },
    {
        icon: UilPackage,
        heading: "Products",
    },
    {
        icon: UilChart,
        heading: "Analytics",
    },
];

export const CardsData = [
    {
        title: "Sales",
        color: {
            background: "var(--color-blue)",
            boxShadow: "0px 10px 20px 0px #c8ccf0",
        },
        barValue: 70,
        value: "25,970",
        png: UilUsdSquare,
        series: [
            {
                name: "Sales",
                data: [31, 40, 28, 51, 42, 109, 100],
            },
        ],
    },
    {
        title: "Revenue",
        color: {
            background: "var(--color-pink)",
            boxShadow: "0px 10px 20px 0px #f5cfd2",
        },
        barValue: 80,
        value: "14,270",
        png: UilMoneyWithdrawal,
        series: [
            {
                name: "Revenue",
                data: [10, 100, 50, 70, 80, 30, 40],
            },
        ],
    },
    {
        title: "Expenses",
        color: {
            background: "var(--color-green)",
            boxShadow: "0px 10px 20px 0px #d6f1e8",
        },
        barValue: 60,
        value: "4,270",
        png: UilClipboardAlt,
        series: [
            {
                name: "Expenses",
                data: [10, 25, 15, 30, 12, 15, 20],
            },
        ],
    },
]

//Update Card 
export const UpdatesData = [
    {
        img: Joao,
        name: "Joao Thomas",
        noti: "has ordered Apple smart watch 2500mh battery.",
        time: "25 seconds ago",
    },
    {
        img: Neto,
        name: "Neto Bond",
        noti: "has received Samsung gadget for charging battery.",
        time: "30 minutes ago",
    },
    {
        img: Laura,
        name: "Laura Man",
        noti: "has ordered Apple smart watch, samsung Gear 2500mh battery.",
        time: "2 hours ago",
    },
];

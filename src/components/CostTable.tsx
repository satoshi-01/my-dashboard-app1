// import type { NextPage } from "next";
// // import { useTable, Column } from "react-table";
// import styles from "./CostTable.module.css";

// interface Data {
//   title: string;
//   sato: number;
//   haru: number;
//   total: number;
//   acutalAmount: number;
// }

// // export const columns: Column<Data>[] = [
// //   { Header: "タイトル", accessor: "title" },
// //   { Header: "サト", accessor: "sato" },
// //   { Header: "ハル", accessor: "haru" },
// //   { Header: "合計", accessor: "total" },
// //   { Header: "実際の金額", accessor: "acutalAmount" },
// // ];

// export async function getStaticProps() {
//   const req = await fetch("http://localhost:3000/cost.json");
//   const data = await req.json();

//   // const d = data.map((v: any) => {
//   //   return {
//   //     props: {
//   //       cost: data
//   //     }
//   //   }
//   // })
//   return {
//     params: data,
//     fallback: false, // getstaticpathが無いと404を返却
//   };
// }

// export const data: Data[] = [
//   {
//     title: "家賃",
//     sato: 7,
//     haru: 5,
//     total: 12,
//     acutalAmount: 12,
//   },
//   {
//     title: "食費",
//     sato: 1,
//     haru: 1,
//     total: 2,
//     acutalAmount: 2,
//   },
//   {
//     title: "日用品",
//     sato: 0.5,
//     haru: 0.5,
//     total: 1,
//     acutalAmount: 1,
//   },
//   {
//     title: "光熱費・ネット",
//     sato: 1.5,
//     haru: 1.5,
//     total: 3,
//     acutalAmount: 2.9,
//   },
//   {
//     title: "家計費",
//     sato: 1,
//     haru: 1,
//     total: 2,
//     acutalAmount: 2,
//   },
//   {
//     title: "修繕積立金",
//     sato: 0.5,
//     haru: 0.5,
//     total: 1,
//     acutalAmount: 1,
//   },
//   {
//     title: "固定資産税",
//     sato: 0.5,
//     haru: 0.5,
//     total: 1,
//     acutalAmount: 1,
//   },
// ];

// const CostTable: NextPage = () => {
//   // const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
//   // useTable<Data>({
//   //   columns,
//   //   data,
//   // });

//   return (
//     <div>
//       <table className="table-auto">
//         <thead>
//           <tr>
//             <th className="border px-4 py-2">タイトル</th>
//             <th className="border px-4 py-2">サト</th>
//             <th className="border px-4 py-2">ハル</th>
//             <th className="border px-4 py-2">合計</th>
//             <th className="border px-4 py-2">実際の金額</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((data, i) => (
//             <tr key={i}>
//               <td className="border px-4 py-2">{data.title}</td>
//               <td className="border px-4 py-2">{data.sato}</td>
//               <td className="border px-4 py-2">{data.haru}</td>
//               <td className="border px-4 py-2">{data.total}</td>
//               <td
//                 className={`border px-4 py-2 ${
//                   data.acutalAmount > data.total ? "bg-red-500" : ""
//                 }`}
//               >
//                 {data.acutalAmount}
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CostTable;

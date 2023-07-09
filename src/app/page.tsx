import Test from "../components/test";
import Shopping from "../components/shooping";
import Link from "next/link";
// import { useState } from "react";
import type { NextPage, GetStaticProps, GetServerSideProps } from "next";
// import CostTable from "../components/CostTable";
import { BarChart } from "../components/InfraBar";
// import Test from "../components/test";
import { data } from "../lib/json-data";

type Expense = {
  item: string;
  amount: number;
};

type Expenses = Expense[];

// type HomeProps = {
//   expenses: Expenses;
// };

const Home: NextPage<any> = () => {
  let month = new Date().getMonth();

  // const [monthlyExpenses, setMonthlyExpenses] = useState<Expenses>([]);

  // useEffect(() => {
  //   setMonthlyExpenses(expenses);
  // }, [expenses]);

  // function handleClick() {
  //   // クリック時に実行したい処理をここに記述します
  //   console.log("クリックされました");
  // }

  const electric = 9732;
  const gas = 10832;
  const water = 9142 / 2;
  const net = 4300;
  const total = electric + gas + water + net;
  const barChartData = [
    [6830, 5297, 7409 / 2, 4300, 6830 + 5297 + 7409 / 2 + 4300, 3],
    [electric, gas, water, net, total, 6830 + 5297 + 7409 / 2 + 4300],
  ];
  // const graphData = barChartData.map((data) => {
  //   return {
  //     labels: ["電気", "ガス", "水道", "ネット", "合計", "先月"],
  //     datasets: [
  //       {
  //         data,
  //         backgroundColor: [
  //           "rgba(255, 99, 132, 0.2)",
  //           "rgba(54, 162, 235, 0.2)",
  //           "rgba(255, 206, 86, 0.2)",
  //           "rgba(75, 192, 192, 0.2)",
  //           "rgba(153, 102, 255, 0.2)",
  //           "rgba(255, 159, 64, 0.2)",
  //         ],
  //         borderColor: [
  //           "rgba(255, 99, 132, 1)",
  //           "rgba(54, 162, 235, 1)",
  //           "rgba(255, 206, 86, 1)",
  //           "rgba(75, 192, 192, 1)",
  //           "rgba(153, 102, 255, 1)",
  //           "rgba(255, 159, 64, 1)",
  //         ],
  //         borderWidth: 1,
  //       },
  //     ],
  //   };
  // });

  return (
    <div>
      {/* <div>{expenses.test}</div> */}
      {/* <BarChart /> */}
      <div className="max-w-lg m-auto">
        <h1 className="text-2xl">{month}月分</h1>
        <span className="text-1xl text-red-500">※赤枠はオーバー</span>
        {/* <span>{monthlyExpenses[0].amount}</span> */}
        {/* <CostTable /> */}
      </div>
      <section className="container flex items-center justify-center h-screen m-auto mb-12 bg-fixed bg-center bg-cover bg-[url('/img/haru.jpg')]">
        <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          買い物リスト
        </div>
        <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
          買い物リスト
        </div>
      </section>
      <Test />
      <Shopping />
      {/* <div className="hidden opacity-0 transition-opacity duration-1000 ease-in-out delay-300">
        test
      </div> */}
      {/* <div
        className="fixed h-21 w-21 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl  bottom-10 right-10"
        onClick={handleClick}
      >
        ボタン
      </div> */}
      {/* <div className="fixed w-30 h-30 border-5 border-solid border-gray-400 bottom-10 right-10 p-5 border-t-gray-600 border-l-transparent border-r-transparent transform rotate-45"></div> */}
      {/* <div
        className="w-30 h-30 border-5 border-solid border-gray-600 border-t-gray-600 border-l-transparent border-r-transparent transform rotate-45"
        onClick={() => {
          window.open("https://www.google.com/?hl=ja");
        }}
      >
        bottun
      </div> */}
    </div>
  );
};

// export const getStaticProps: GetStaticProps = async (context) => {
//   // const params = context.params as Params
//   // const postData = await getPostData(params.id)
//   const postData = { test: "test" };
//   return {
//     props: {
//       postData,
//     },
//   };
// };

// export const getStaticProps: GetServerSideProps = async () => {
//   // JSONデータの読み込みを行う箇所です。実際のデータソースに応じて適切なコードを追加してください。
//   const expenses: Expenses = [
//     { item: "電気代", amount: 10000 },
//     { item: "水道代", amount: 5000 },
//     { item: "ガス代", amount: 7000 },
//   ];

//   console.log(expenses);
//   return {
//     props: {
//       test: "expenses",
//     },
//   };
// };
export default Home;

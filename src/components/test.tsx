"use client";

// import { useState } from "react";

type Expense = {
  item: string;
  amount: number;
};

type Expenses = Expense[];

type HomeProps = {
  expenses?: Expenses;
};

export default function Test({ expenses }: HomeProps) {
  // const [monthlyExpenses, setMonthlyExpenses] = useState<Expenses>([]);

  const monthlyExpenses: Expenses = [
    { item: "電気代", amount: 10000 },
    { item: "水道代", amount: 5000 },
    { item: "ガス代", amount: 7000 },
  ];

  // useEffect(() => {
  //   setMonthlyExpenses(expenses);
  // }, [expenses]);

  return (
    <div className="p-4 my-4 js-show-on-scroll">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">毎月の生活費</h1>
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">項目</th>
              <th className="py-2 px-4 border-b">金額</th>
            </tr>
          </thead>
          <tbody>
            {monthlyExpenses.map((expense, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{expense.item}</td>
                <td className="py-2 px-4 border-b">{expense.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  // JSONデータの読み込みを行う箇所です。実際のデータソースに応じて適切なコードを追加してください。
  const expenses: Expenses = [
    { item: "電気代", amount: 10000 },
    { item: "水道代", amount: 5000 },
    { item: "ガス代", amount: 7000 },
  ];

  return {
    props: {
      expenses,
    },
  };
}

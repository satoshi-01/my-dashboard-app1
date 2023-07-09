"use client";

import { useEffect } from "react";
import { ScrollFadeIn } from "./scrollFadeIn";
import { shoopingList } from "../lib/json-data";

export default function Shopping() {
  const heads = ["購入日", "商品面", "金額", "購入場所", "保証期間"].map(
    (head, i) => <th key={i}>{head}</th>
  );

  let totalAmount = shoopingList.reduce(
    (sum, current) => sum + Number(current.amount),
    0
  );

  useEffect(() => {
    ScrollFadeIn(); // useEffectで実行しないとアニメーションが実行されない。
  }, []);

  return (
    <div className="h-screen p-4 my-4 js-show-on-scroll">
      <h1 className="p-5 text-5xl bg-purple-500 bg-opacity-50 rounded-xl">
        買い物リスト
      </h1>
      <table className="table-auto">
        <thead>
          <tr>{heads}</tr>
        </thead>
        <tbody>
          {shoopingList.map((row, i) => (
            <tr key={i}>
              <td className="border px-4 py-2">{row.datePurchase}</td>
              <td className="border px-4 py-2">{row.name}</td>
              <td className="border px-4 py-2">{row.amount}</td>
              <td className="border px-4 py-2">{row.shoop}</td>
              <td className="border px-4 py-2">{row.warrantyPeriod}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p>合計：{totalAmount.toLocaleString()}円　※7割、3割</p>
    </div>
  );
}

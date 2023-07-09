import Link from "next/link";

const header = () => {
  return (
    <header className="flex items-center justify-center h-96 mb-12 bg-fixed bg-center bg-cover custom-img">
      <div className="p-5 text-2xl text-white bg-purple-300 bg-opacity-50 rounded-xl absolute top-10 right-10">
        メニュー
      </div>
      <div className="p-5 text-5xl text-white bg-purple-300 bg-opacity-50 rounded-xl">
        <Link href="/">我が家のサイト</Link>
      </div>
    </header>
  );
};

export default header;

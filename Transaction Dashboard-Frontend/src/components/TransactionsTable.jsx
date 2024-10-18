import React from "react";
import PerPage from "./PerPage";

const TransactionTable = ({
  transactions,
  onNextPage,
  onPrevPage,
  page,
  selectedPerPage,
  onChange,
}) => {
  return (
    <div className="mx-[120px]">
      <div className="overflow-x-auto flex flex-col container max-w-max bg-[#f8df8c] rounded-[40px] my-10">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-center  border-black">
                <thead className="border-b-4 border-black">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 border-r-4 border-black"
                    >
                      ID
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 border-r-4 border-black"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 border-r-4 border-black"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 border-r-4 border-black"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 border-r-4 border-black"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 border-r-4 border-black"
                    >
                      Sold
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4"
                    >
                      Image
                    </th>
                  </tr>
                </thead>
                <>
                  {transactions.map((transaction, index) => (
                    <tr className="border-b-4 border-black " key={index}>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 border-r-4 border-black whitespace-nowrap">
                        {transaction._id}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 border-r-4 border-black whitespace-normal">
                        {transaction.title}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 border-r-4 border-black whitespace-normal text-justify">
                        {transaction.description}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 border-r-4 border-black whitespace-nowrap">
                        {transaction.price}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 border-r-4 border-black whitespace-nowrap">
                        {transaction.category}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 border-r-4 border-black whitespace-nowrap">
                        {transaction.dateOfSale}
                      </td>
                      <td className="text-sm text-gray-900 font-medium px-6 py-4 ">
                        <img src={transaction.image} className=" " alt="image not found" />
                      </td>
                    </tr>
                  ))}
                </>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination buttons */}
      <div className="flex flex-row justify-between font-bold mx-5 my-10">
        <div>Page No: {page}</div>
        <div className="space-x-3">
          <button onClick={onPrevPage}>Previous</button>
          <span>-</span>
          <button onClick={onNextPage}>Next</button>
        </div>
        <div>
          <PerPage selectedPerPage={selectedPerPage} onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default TransactionTable;

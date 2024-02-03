const FeedbackReviews = () => {
  const data = [
    {
      name: "John Doe",
      gmail: "john@example.com",
      comment: "Great feedback!",
      status: "published",
      created_at: "2024-02-02",
    },
    {
      name: "Jane Smith",
      gmail: "jane@example.com",
      comment: "Excellent service!",
      status: "published",
      created_at: "2024-02-03",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <div className="mb-4">
          <h1 className="text-3xl font-bolder leading-tight text-gray-900">
            Feedback Reviews
          </h1>
        </div>
        <div className="-mb-2 py-4 flex flex-wrap flex-grow justify-between">
          <div className="flex items-center py-2">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-search"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="align-middle inline-block w-full shadow overflow-x-auto sm:rounded-lg border-b border-gray-200">
            <table className="min-w-full">
              {/* Table HEAD */}
              <thead>
                <tr>
                  <th className="px-6 py-3 text-left font-medium">Name</th>
                  <th className="px-6 py-3 text-left font-medium">Gmail</th>
                  <th className="px-6 py-3 text-left font-medium">Comment</th>
                  <th className="px-6 py-3 text-left font-medium">Status</th>
                  <th className="px-6 py-3 text-left font-medium">Created</th>
                  <th className="px-6 py-3 text-left font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {data.map((item, index) => (
                  <tr key={index}>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-900">
                        {item.name}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-900">
                        {item.gmail}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <div className="text-sm leading-5 text-gray-900">
                        {item.comment}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                      <span
                        className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-${
                          item.status === "published"
                            ? "green"
                            : item.status === "inactive"
                            ? "red"
                            : "yellow"
                        }-100 text-${
                          item.status === "published"
                            ? "green"
                            : item.status === "inactive"
                            ? "red"
                            : "yellow"
                        }-800`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                      {item.created_at}
                    </td>
                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                      <a
                        href="#"
                        className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                      >
                        Show
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedbackReviews;

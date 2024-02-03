const CourseManagement = () => {
  return (
    <div className="flex-1 p-4">
      <h2 className="text-2xl font-semibold mb-4">Course Management</h2>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="videoFile"
            className="text-sm font-medium text-gray-700 block"
          >
            Video File
          </label>
          <input
            type="file"
            id="videoFile"
            name="videoFile"
            accept="video/*"
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          />
        </div>
        <div>
          <label
            htmlFor="selectedCourse"
            className="text-sm font-medium text-gray-700 block"
          >
            Select Course
          </label>
          <select
            id="selectedCourse"
            name="selectedCourse"
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          >
            <option value="" disabled>
              Select a course
            </option>
            <option value="course1">Course 1</option>
            <option value="course2">Course 2</option>
            {/* Add more course options as needed */}
          </select>
        </div>
        <div>
          <label
            htmlFor="description"
            className="text-sm font-medium text-gray-700 block"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows="4"
            className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
        >
          Upload Video
        </button>
      </form>
    </div>
  );
};

export default CourseManagement;
